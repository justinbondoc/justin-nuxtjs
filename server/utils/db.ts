import { neon } from '@neondatabase/serverless';

export type ChatSubmission = {
  user_message: string;
  ip?: string;
};

/**
 * Ensures chat_submissions table exists and inserts a row.
 * No-op if databaseUrl is empty. Call from API handlers only (runtime config available).
 */
export async function logChatSubmission(
  databaseUrl: string,
  submission: ChatSubmission
): Promise<void> {
  if (!databaseUrl?.trim()) return;
  const sql = neon(databaseUrl);
  await sql`
    CREATE TABLE IF NOT EXISTS chat_submissions (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      user_message text NOT NULL,
      ip text,
      created_at timestamptz DEFAULT now()
    )
  `;
  await sql`
    INSERT INTO chat_submissions (user_message, ip)
    VALUES (${submission.user_message}, ${submission.ip ?? null})
  `;
}
