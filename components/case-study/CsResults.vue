<template>
  <section v-if="results" class="cs-results py-10 sm:py-14">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <!-- 3 big numbers with descriptors -->
      <div
        v-if="results.stats?.length"
        class="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8"
      >
        <div
          v-for="(stat, i) in results.stats.slice(0, 3)"
          :key="'stat-' + i"
          class="text-center"
        >
          <div class="flex min-h-16 items-center justify-center sm:min-h-20">
            <SplitText
              :text="String(stat.value)"
              tag="span"
              class="block text-5xl font-semibold tabular-nums tracking-tight text-white sm:text-6xl md:text-7xl"
              split-type="chars"
              :delay="60"
              :duration="0.9"
            />
          </div>
          <p class="mt-3 text-sm font-medium leading-snug text-slate-400 sm:text-base">
            {{ stat.label }}
          </p>
        </div>
      </div>

      <ul v-if="results.quantitative?.length" class="mt-10 list-inside list-disc space-y-1 text-slate-300">
        <li v-for="(q, i) in results.quantitative" :key="'q-' + i">
          {{ q }}
        </li>
      </ul>
      <ul v-if="results.qualitative?.length" class="mt-6 list-inside list-disc space-y-1 text-slate-300">
        <li v-for="(q, i) in results.qualitative" :key="'ql-' + i">
          {{ q }}
        </li>
      </ul>
      <p v-if="results.retrospective" class="mt-4 text-slate-400">
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
