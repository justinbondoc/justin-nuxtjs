export async function useCaseStudy(slug) {
  const key = `case-study-${slug}`
  const { data, error } = await useAsyncData(key, () => $fetch(`/api/case-studies/${slug}`))

  if (error.value) {
    throw createError({ statusCode: 404, statusMessage: 'Case study not found' })
  }
  if (!data.value) {
    throw createError({ statusCode: 404, statusMessage: 'Case study not found' })
  }

  return { study: data }
}
