import { streamText, convertToModelMessages } from 'ai';
import type { UIMessage } from 'ai';
import { createAnthropic } from '@ai-sdk/anthropic';
import { getRequestIP } from 'h3';
import { logChatSubmission } from '../utils/db';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '../..');

const CHAT_RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const CHAT_RATE_LIMIT_MAX_REQUESTS = 20; // per window per IP

const chatRateLimitStore = new Map<
  string,
  { count: number; windowEnd: number }
>();

function checkChatRateLimit(ip: string): void {
  const now = Date.now();
  const entry = chatRateLimitStore.get(ip);

  if (!entry) {
    chatRateLimitStore.set(ip, {
      count: 1,
      windowEnd: now + CHAT_RATE_LIMIT_WINDOW_MS,
    });
    return;
  }

  if (now >= entry.windowEnd) {
    entry.count = 1;
    entry.windowEnd = now + CHAT_RATE_LIMIT_WINDOW_MS;
    return;
  }

  entry.count += 1;
  if (entry.count > CHAT_RATE_LIMIT_MAX_REQUESTS) {
    const retryAfterSec = Math.ceil((entry.windowEnd - now) / 1000);
    throw createError({
      statusCode: 429,
      statusMessage: 'Too Many Requests',
      message: `Rate limit exceeded. Try again in ${retryAfterSec} seconds.`,
    });
  }
}

function loadChatContext(): string {
  const filePath = path.join(projectRoot, 'content', 'chat-context.md');
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch {
    return '';
  }
}

type CaseStudyMeta = {
  title?: string;
  oneLiner?: string;
  role?: string;
  [key: string]: unknown;
};
type CaseStudyDoc = { slug?: string; meta?: CaseStudyMeta };

function loadCaseStudiesContext(): string {
  const dir = path.join(projectRoot, 'content', 'case-studies');
  try {
    const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json') && !f.includes('.hidden'));
    if (files.length === 0) return '';
    const lines: string[] = ['## Portfolio / Case studies', ''];
    for (const file of files) {
      const filePath = path.join(dir, file);
      const raw = fs.readFileSync(filePath, 'utf-8');
      let doc: CaseStudyDoc;
      try {
        doc = JSON.parse(raw) as CaseStudyDoc;
      } catch {
        continue;
      }
      if (!doc.slug || !doc.meta) continue;
      const title = doc.meta.title ?? doc.slug;
      const oneLiner = doc.meta.oneLiner ?? '';
      lines.push(`- **${title}**${oneLiner ? `: ${oneLiner}` : ''}`);
      lines.push(`  Link: /case-studies/${doc.slug}`);
      lines.push('');
    }
    return lines.join('\n').trim();
  } catch {
    return '';
  }
}

export default defineEventHandler(async (event) => {
  const ip = getRequestIP(event) ?? 'anonymous';
  checkChatRateLimit(ip);

  const config = useRuntimeConfig();
  const apiKey = config.anthropicApiKey;
  if (!apiKey) throw createError({ statusCode: 500, message: 'Missing Anthropic API key' });

  const body = await readBody<{ messages: UIMessage[] }>(event);
  const messages = body?.messages ?? [];

  const databaseUrl = config.databaseUrl as string | undefined;
  const lastUserMessage = messages
    .filter((m) => m.role === 'user')
    .flatMap((m) => (m.parts ?? []).filter((p): p is { type: 'text'; text: string } => p.type === 'text'))
    .map((p) => p.text)
    .pop();
  if (databaseUrl && lastUserMessage?.trim()) {
    try {
      await logChatSubmission(databaseUrl, { user_message: lastUserMessage.trim(), ip });
    } catch (e) {
      console.error('Failed to log chat submission:', e);
    }
  }

  const context = loadChatContext();
  const caseStudiesContext = loadCaseStudiesContext();
  const fullContext = [context, caseStudiesContext].filter(Boolean).join('\n\n');
  const system =
    "You are Justin's assistant. Your task is to help him answer questions about him and get him a job. Keep your answers short and concise.  Answer questions about him based only on the information below but don't just copy/paste. Don't make up information. Suggest they visit his case studies. If asked something not covered here, say you don't know and suggest reaching out directly.\n\n" +
    (fullContext || '(No context file found. Add content to content/chat-context.md)');

  const anthropicProvider = createAnthropic({ apiKey });
  const result = streamText({
    model: anthropicProvider('claude-sonnet-4-5'),
    system,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
});
