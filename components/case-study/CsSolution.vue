<template>
  <section v-if="solution" class="cs-solution pt-10 pb-6 sm:pt-14 sm:pb-8">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <p v-if="solution.overview" class="text-paper">
        {{ solution.overview }}
      </p>
      <div v-if="solution.baselineImages?.length" class="mt-8 space-y-6">
        <ImgComparisonSlider
          v-if="solution.baselineImages.length === 2"
          :before-src="solution.baselineImages[0].src"
          :after-src="solution.baselineImages[1].src"
          :before-alt="solution.baselineImages[0].caption ?? 'Before'"
          :after-alt="solution.baselineImages[1].caption ?? 'After'"
          :caption="undefined"
        />
        <template v-else>
          <CaseStudyCsMediaBlock
            v-for="(img, i) in solution.baselineImages"
            :key="i"
            :type="img.type || 'image'"
            :src="img.src"
            :caption="img.caption"
            :aspect-ratio="img.aspectRatio"
          />
        </template>
      </div>
      <div v-if="solution.features?.length" class="mt-10 space-y-10">
        <article
          v-for="(feat, i) in solution.features"
          :key="i"
          class="border-t border-paper pt-8 first:border-t-0 first:pt-0"
        >
          <h3 v-if="feat.title" class="text-2xl font-semibold text-paper">
            {{ feat.title }}
          </h3>
          <p v-if="feat.shortDescription" class="mt-1 text-sm text-paper">
            {{ feat.shortDescription }}
          </p>
          <p v-if="feat.problem" class="mt-2 text-sm text-paper-muted">
            {{ feat.problem }}
          </p>
          <p v-if="feat.solution" class="mt-2 text-paper">
            {{ feat.solution }}
          </p>
          <NuxtLink
            v-if="feat.skillPage"
            :to="feat.skillPage"
            class="mt-3 inline-flex items-center gap-1.5 text-sm text-[var(--color-paper-primary)] hover:text-[var(--color-paper-primary-hover)] transition-colors"
          >
            View skill source
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </NuxtLink>
          <div v-if="feat.media && (feat.media.src || (feat.media.type === 'comparison' && feat.media.before?.src && feat.media.after?.src))" class="mt-4">
            <ImgComparisonSlider
              v-if="feat.media.type === 'comparison' && feat.media.before?.src && feat.media.after?.src"
              :before-src="feat.media.before.src"
              :after-src="feat.media.after.src"
              :before-alt="feat.media.before.caption ?? 'Before'"
              :after-alt="feat.media.after.caption ?? 'After'"
              :caption="feat.media.caption"
            />
            <CaseStudyCsMediaBlock
              v-else-if="feat.media.src"
              :type="feat.media.type || 'image'"
              :src="feat.media.src"
              :caption="feat.media.caption"
              :aspect-ratio="feat.media.aspectRatio"
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
