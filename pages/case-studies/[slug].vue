<template>
  <main class="pb-20">
    <AnimatedContent v-if="study?.meta" :delay="0" :threshold="0.2">
      <CaseStudyCsHero :meta="study.meta" />
    </AnimatedContent>

    <CaseStudyCsNav
      v-if="study?.meta && sectionList.length"
      :title="study.meta.title"
      :sections="sectionList"
    />

    <div v-if="study?.overview" id="overview" class="scroll-mt-24">
      <AnimatedContent :delay="0.05">
        <CaseStudyCsOverview :overview="study.overview" />
      </AnimatedContent>
    </div>

    <div v-if="study?.problem" id="problem" class="scroll-mt-24">
      <AnimatedContent :delay="0.05">
        <CaseStudyCsProblem :problem="study.problem" />
      </AnimatedContent>
    </div>

    <template v-if="study?.process">
      <div id="process" class="scroll-mt-24">
        <AnimatedContent :delay="0.05">
          <CaseStudyCsPhaseHeader
            v-if="study.process.phaseLabel || study.process.phaseTitle"
            :label="study.process.phaseLabel"
            :title="study.process.phaseTitle"
            :bg-image="study.process.bgImage"
          />
          <CaseStudyCsProcess :process="study.process" />
        </AnimatedContent>
      </div>
    </template>

    <template v-if="study?.solution">
      <div id="solution" class="scroll-mt-24">
        <AnimatedContent :delay="0.05">
          <CaseStudyCsPhaseHeader
            v-if="study.solution.phaseLabel || study.solution.phaseTitle"
            :label="study.solution.phaseLabel"
            :title="study.solution.phaseTitle"
            :bg-image="study.solution.bgImage"
          />
          <CaseStudyCsSolution :solution="study.solution" />
        </AnimatedContent>
      </div>
    </template>

    <template v-if="study?.results">
      <div id="results" class="scroll-mt-24">
        <AnimatedContent :delay="0.05">
          <CaseStudyCsPhaseHeader
            v-if="study.results.phaseLabel || study.results.phaseTitle"
            :label="study.results.phaseLabel"
            :title="study.results.phaseTitle"
            :bg-image="study.results.bgImage"
          />
          <CaseStudyCsResults :results="study.results" />
        </AnimatedContent>
      </div>
    </template>
  </main>
</template>

<script setup>
const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug
const { study } = await useCaseStudy(slug)

const sectionList = computed(() => {
  const list = []
  if (study.value?.overview) list.push({ id: 'overview', label: 'Overview' })
  if (study.value?.problem) list.push({ id: 'problem', label: 'Problem' })
  if (study.value?.process) list.push({ id: 'process', label: 'Process' })
  if (study.value?.solution) list.push({ id: 'solution', label: 'Solution' })
  if (study.value?.results) list.push({ id: 'results', label: 'Impact' })
  return list
})

useHead(() => ({
  title: study.value?.meta?.title ?? 'Case study',
  meta: [
    {
      name: 'description',
      content: study.value?.meta?.oneLiner ?? '',
    },
  ],
}))
</script>
