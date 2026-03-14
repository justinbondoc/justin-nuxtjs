<template>
  <section v-if="process" class="cs-process pt-10 pb-6 sm:pt-14 sm:pb-8">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <p v-if="typeof process.researchApproach === 'string'" class="text-paper">
        {{ process.researchApproach }}
      </p>
      <div v-else-if="Array.isArray(process.researchApproach)" class="mt-2 space-y-6">
        <div v-for="step in process.researchApproach" :key="step.step">
          <div class="flex items-baseline gap-3">
            <span class="shrink-0 text-xs tabular-nums text-paper-muted">{{ step.step }}</span>
            <h4 class="font-medium text-paper">{{ step.heading }}</h4>
          </div>
          <p class="mt-1 pl-7 text-sm text-paper">{{ step.body }}</p>
        </div>
      </div>
      <template v-if="process.challenges && (process.challenges.technoFunctional?.length || process.challenges.experiential?.length)">
        <h3 class="mt-8 font-semibold uppercase tracking-wider text-paper-muted">
          Challenges
        </h3>
        <ul v-if="process.challenges.technoFunctional?.length" class="mt-2 list-inside list-disc space-y-1 text-sm text-paper">
          <li v-for="(c, i) in process.challenges.technoFunctional" :key="'tf-' + i">
            {{ c }}
          </li>
        </ul>
        <ul v-if="process.challenges.experiential?.length" class="mt-2 list-inside list-disc space-y-1 text-sm text-paper">
          <li v-for="(c, i) in process.challenges.experiential" :key="'ex-' + i">
            {{ c }}
          </li>
        </ul>
      </template>
      <div v-if="process.keyDecisions?.length" class="mt-8 space-y-4">
        <h3 class=" font-semibold uppercase tracking-wider text-paper-muted">
          Key decisions
        </h3>
        <div
          v-for="(kd, i) in process.keyDecisions"
          :key="i"
          class="border-l-2 border-paper pl-4"
        >
          <p v-if="kd.decision" class="font-medium text-paper">
            {{ kd.decision }}
          </p>
          <p v-if="kd.rationale" class="mt-1 text-sm text-paper">
            {{ kd.rationale }}
          </p>
        </div>
      </div>
      <p v-if="process.pivots" class="mt-8 text-sm text-paper-muted">
        {{ process.pivots }}
      </p>
      <div v-if="process.images?.length" class="mt-8 space-y-6">
        <CaseStudyCsMediaBlock
          v-for="(img, i) in process.images"
          :key="i"
          :type="img.type || 'image'"
          :src="img.src"
          :caption="img.caption"
          :aspect-ratio="img.aspectRatio"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  process: { type: Object, default: null },
})
</script>
