const caseStudyModules = import.meta.glob('~/content/case-studies/*.json', {
  eager: true,
  import: 'default',
})

const studiesBySlug = Object.fromEntries(
  Object.values(caseStudyModules)
    .filter((d) => d?.slug && d?.meta)
    .map((d) => [d.slug, d]),
)

export function getCaseStudiesList() {
  return Object.values(studiesBySlug).map(({ slug, meta }) => ({ slug, meta }))
}

export async function useCaseStudy(slug) {
  const key = `case-study-${slug}`
  const { data } = await useAsyncData(key, () =>
    Promise.resolve(studiesBySlug[slug] ?? null),
  )

  if (!data.value) {
    throw createError({ statusCode: 404, statusMessage: 'Case study not found' })
  }

  return { study: data }
}
