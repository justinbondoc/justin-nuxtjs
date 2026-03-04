export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  if (!slug || !/^[a-z0-9-]+$/i.test(slug)) {
    throw createError({ statusCode: 404, statusMessage: 'Case study not found' })
  }

  const storage = useStorage('assets:case-studies')
  const raw = await storage.getItem(`${slug}.json`)
  if (raw === null || raw === undefined) {
    throw createError({ statusCode: 404, statusMessage: 'Case study not found' })
  }

  try {
    const text = typeof raw === 'string' ? raw : new TextDecoder().decode(raw)
    return JSON.parse(text)
  } catch {
    throw createError({ statusCode: 404, statusMessage: 'Case study not found' })
  }
})
