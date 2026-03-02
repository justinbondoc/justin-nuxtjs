import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

export default defineEventHandler(() => {
  const dir = join(process.cwd(), 'content', 'case-studies')
  if (!existsSync(dir)) {
    return []
  }

  const files = readdirSync(dir).filter((f) => f.endsWith('.json'))
  const list = []

  for (const file of files) {
    try {
      const raw = readFileSync(join(dir, file), 'utf-8')
      const data = JSON.parse(raw)
      if (data.slug && data.meta) {
        list.push({ slug: data.slug, meta: data.meta })
      }
    } catch {
      // skip invalid or unreadable files
    }
  }

  return list
})
