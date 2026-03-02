<template>
  <section v-if="results" class="cs-results py-10 sm:py-14">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <ul v-if="results.quantitative?.length" class="list-inside list-disc space-y-1 text-slate-300">
        <li v-for="(q, i) in results.quantitative" :key="'q-' + i">
          {{ q }}
        </li>
      </ul>
      <ul v-if="results.qualitative?.length" class="mt-6 list-inside list-disc space-y-1 text-slate-300">
        <li v-for="(q, i) in results.qualitative" :key="'ql-' + i">
          {{ q }}
        </li>
      </ul>
      <p v-if="results.nextSteps" class="mt-8 text-sm text-slate-400">
        <span class="font-medium text-slate-300">Next steps:</span> {{ results.nextSteps }}
      </p>
      <p v-if="results.retrospective" class="mt-4 text-sm text-slate-400">
        <span class="font-medium text-slate-300">Retrospective:</span> {{ results.retrospective }}
      </p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  results: { type: Object, default: null },
})
</script>
