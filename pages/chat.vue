<template>
  <div class="chat chat-font min-h-screen bg-black">
    <div class="mx-auto max-w-3xl px-4 py-6 sm:px-6">
      <BackArrowLink to="/" class="mb-6 text-sm font-medium text-slate-400 transition-colors hover:text-slate-200">
        Back home
      </BackArrowLink>

      <div class="space-y-6 pb-4">
        <div
          v-for="(m, index) in chat.messages"
          :key="m.id ?? index"
          class="message flex flex-col gap-1"
          :class="m.role === 'user' ? 'items-end' : 'items-start'"
        >
          <div v-for="(part, i) in m.parts" :key="i" class="w-full max-w-[85%] sm:max-w-[80%]">
            <div
              v-if="part.type === 'text' && m.role === 'user'"
              class="user-bubble rounded-2xl bg-neutral-800/80 px-4 py-3 text-slate-200"
            >
              <span class="user-text whitespace-pre-wrap">{{ part.text }}</span>
            </div>
            <div
              v-else-if="part.type === 'text' && m.role === 'assistant'"
              class="chat-response"
            >
              <span v-html="renderMarkdown(part.text)" />
              <span
                v-if="index === chat.messages.length - 1 && (chat.status === 'streaming' || chat.status === 'submitted')"
                class="streaming-glyphs"
                aria-label="Thinking"
              >{{ cyclingGlyphs }}</span>
            </div>
          </div>
        </div>
        <!-- Loading glyph when waiting for first assistant response (no assistant message yet) -->
        <div
          v-if="isWaitingForResponse"
          class="message flex flex-col gap-1 items-start"
        >
          <div class="w-full max-w-[85%] sm:max-w-[80%]">
            <div class="chat-response">
              <span
                class="streaming-glyphs"
                aria-label="Thinking"
              >{{ cyclingGlyphs }}</span>
            </div>
          </div>
        </div>
        <!-- API limit hit – show friendly message -->
        <div
          v-if="apiLimitError"
          class="message flex flex-col gap-1 items-start"
        >
          <div class="w-full max-w-[85%] sm:max-w-[80%]">
            <div class="chat-response">
              {{ API_LIMIT_MESSAGE }}
            </div>
          </div>
        </div>
      </div>

      <form @submit.prevent="onSubmit" class="sticky bottom-0 bg-black pb-4 pt-2">
        <div class="relative">
          <input
            ref="chatInputRef"
            v-model="input"
            type="text"
            placeholder="Ask about Justin..."
            class="input w-full rounded-2xl border border-lime-700 bg-black/70 py-3 pl-4 pr-12 text-sm text-slate-50 placeholder:text-slate-500 focus:border-lime-500/50 focus:outline-none focus:ring-2 focus:ring-lime-500/50 focus:ring-offset-2 focus:ring-offset-black"
            autocomplete="off"
            @keydown="onKeydown"
          />
          <button
            type="submit"
            aria-label="Send"
            :disabled="chat.status === 'streaming' || chat.status === 'submitted'"
            class="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-green-600 text-white transition-colors hover:bg-green-500 disabled:opacity-50 disabled:pointer-events-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M12 19V5" />
              <path d="M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>
      </form>
      <p class="text-center text-sm text-slate-500">
        This might get things wrong.
        <a
          href="https://calendly.com/jstnbondoc/30min"
          target="_blank"
          rel="noopener noreferrer"
          class="text-slate-400 underline underline-offset-2 hover:text-slate-200"
        >Ask me directly</a>
        if you'd like to know more!
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Chat } from '@ai-sdk/vue';
import { ref, computed, watch, onUnmounted } from 'vue';
import { marked } from 'marked';
import { useChatShortcut } from '~/composables/useChatShortcut'

const STREAMING_GLYPHS = ['⣾', '⣽', '⣻', '⢿', '⡿'];
const GLYPH_INTERVAL_MS = 80;

const API_LIMIT_MESSAGE = "Oops, hit my Anthropic API key limit! I guess this is a good problem to have 🙂";

const route = useRoute();
const input = ref('');
const chatInputRef = ref<HTMLInputElement | null>(null)
const apiLimitError = ref(false);

const chat = new Chat({
  api: '/api/chat',
  onError: (err) => {
    const message = err instanceof Error ? err.message : String(err);
    if (/reached your specified API usage limits/i.test(message)) {
      apiLimitError.value = true;
      return;
    }
    console.error(err);
  },
});

const streamingPhase = ref(0);
let streamingInterval: ReturnType<typeof setInterval> | null = null;

const cyclingGlyphs = computed(
  () => STREAMING_GLYPHS.map((_, i) => STREAMING_GLYPHS[(streamingPhase.value + i) % 5]).join('')
);

const isWaitingForResponse = computed(
  () =>
    (chat.status === 'streaming' || chat.status === 'submitted') &&
    chat.messages.length > 0 &&
    chat.messages[chat.messages.length - 1].role === 'user'
);

watch(
  () => chat.status,
  (status) => {
    if (streamingInterval) {
      clearInterval(streamingInterval);
      streamingInterval = null;
    }
    if (status === 'streaming' || status === 'submitted') {
      streamingPhase.value = 0;
      streamingInterval = setInterval(() => {
        streamingPhase.value = (streamingPhase.value + 1) % 5;
      }, GLYPH_INTERVAL_MS);
    }
  }
);

const { registerFocusChat, unregisterFocusChat } = useChatShortcut()

onMounted(() => {
  registerFocusChat(() => {
    chatInputRef.value?.focus()
  })
})

onUnmounted(() => {
  if (streamingInterval) clearInterval(streamingInterval);
  unregisterFocusChat()
});

onMounted(() => {
  const q = route.query.q;
  if (typeof q === 'string' && q.trim()) {
    chat.sendMessage({ text: q.trim() });
    input.value = '';
  }
});

function renderMarkdown(text: string) {
  if (!text) return '';
  return marked(text);
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    onSubmit();
  }
}

function onSubmit() {
  if (!input.value.trim()) return;
  apiLimitError.value = false;
  chat.sendMessage({ text: input.value });
  input.value = '';
}
</script>

<style scoped>
/* Markdown in assistant bubbles – green tint, links stand out */
.chat-response {
  color: rgb(56, 235, 112); /* green-200 */
}
.chat-response :deep(ul) { list-style: disc; margin: 0.5rem 0 0.5rem 1.25rem; }
.chat-response :deep(ol) { list-style: decimal; margin: 0.5rem 0 0.5rem 1.25rem; }
.chat-response :deep(li) { margin: 0.25rem 0; }
.chat-response :deep(pre) { background: rgb(30 41 59); padding: 0.75rem 1rem; border-radius: 0.375rem; overflow-x: auto; margin: 0.5rem 0; color: rgb(187 247 208); }
.chat-response :deep(code) { background: rgb(30 41 59); padding: 0.125rem 0.375rem; border-radius: 0.25rem; font-size: 0.875em; color: rgb(187 247 208); }
.chat-response :deep(p) { margin: 0.5rem 0; }
.chat-response :deep(p:first-child) { margin-top: 0; }
.chat-response :deep(a) { color: rgb(255 255 255); text-decoration: underline; text-underline-offset: 2px; font-weight: 500; }
.chat-response :deep(a:hover) { color: rgb(134 239 172); }
.chat-response :deep(strong) { font-weight: 600; }

.streaming-glyphs {
  display: inline-block;
  margin-left: 0.15em;
  color: rgb(34 197 94);
  font-size: 0.9em;
  vertical-align: 0.05em;
}
</style>