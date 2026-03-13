<template>
  <section v-if="meta" class="cs-hero pt-10 pb-6 sm:pt-14 sm:pb-8">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <h1 v-if="meta.title" class="text-4xl font-semibold tracking-tight">
        <GradientText>{{ meta.title }}</GradientText>
      </h1>
      <p v-if="meta.oneLiner" class="mt-2 max-w-7xl text-slate-300">
        {{ meta.oneLiner }}
      </p>
      <div v-if="meta.role || meta.timeline || (meta.tools && meta.tools.length)" class="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-400">
        <span v-if="meta.role">{{ meta.role }}</span>
        <span v-if="meta.timeline">{{ meta.timeline }}</span>
        <span v-if="meta.industry">{{ meta.industry }}</span>
        <span v-if="meta.tools?.length">{{ meta.tools.join(', ') }}</span>
      </div>
      <CaseStudyCsMediaBlock
        v-if="meta.heroMedia?.src"
        :type="meta.heroMedia.type || 'image'"
        :src="meta.heroMedia.src"
        :aspect-ratio="meta.heroMedia.aspectRatio"
        :caption="meta.heroMedia.caption"
        class="mt-8"
      />
    </div>
  </section>
</template>

<script setup>
defineProps({
  meta: { type: Object, default: null },
})
</script>
