<template>
  <section v-if="solution" class="cs-solution py-10 sm:py-14">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <p v-if="solution.overview" class="text-slate-300">
        {{ solution.overview }}
      </p>
      <div v-if="solution.baselineImages?.length" class="mt-8 space-y-6">
        <CaseStudyCsMediaBlock
          v-for="(img, i) in solution.baselineImages"
          :key="i"
          type="image"
          :src="img.src"
          :caption="img.caption"
        />
      </div>
      <div v-if="solution.features?.length" class="mt-10 space-y-10">
        <article
          v-for="(feat, i) in solution.features"
          :key="i"
          class="border-t border-neutral-700/70 pt-8 first:border-t-0 first:pt-0"
        >
          <h3 v-if="feat.title" class="text-lg font-semibold text-white">
            {{ feat.title }}
          </h3>
          <p v-if="feat.problem" class="mt-2 text-sm text-slate-400">
            {{ feat.problem }}
          </p>
          <p v-if="feat.solution" class="mt-2 text-slate-300">
            {{ feat.solution }}
          </p>
          <div v-if="feat.media?.src" class="mt-4">
            <CaseStudyCsMediaBlock
              :type="feat.media.type || 'image'"
              :src="feat.media.src"
            />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  solution: { type: Object, default: null },
})
</script>
