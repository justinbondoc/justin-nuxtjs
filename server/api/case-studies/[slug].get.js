import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')
  if (!slug || !/^[a-z0-9-]+$/i.test(slug)) {
    throw createError({ statusCode: 404, statusMessage: 'Case study not found' })
  }

  const filePath = join(process.cwd(), 'content', 'case-studies', `${slug}.json`)
  if (!existsSync(filePath)) {
    throw createError({ statusCode: 404, statusMessage: 'Case study not found' })
  }

  try {
    const raw = readFileSync(filePath, 'utf-8')
    return JSON.parse(raw)
  } catch {
    throw createError({ statusCode: 404, statusMessage: 'Case study not found' })
  }
})
