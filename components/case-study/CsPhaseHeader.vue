<template>
  <header v-if="label || title" class="cs-phase-header py-8 sm:py-12">
    <div
      v-if="bgImage"
      class="absolute inset-0 -z-10 bg-cover bg-center opacity-30"
      :style="{ backgroundImage: `url(${bgImage})` }"
    />
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6">
      <span v-if="label" class="block text-xs font-semibold uppercase tracking-wider text-slate-400">
        {{ label }}
      </span>
      <h2 v-if="title" class="mt-1 text-4xl font-semibold tracking-tight">
        <GradientText>{{ title }}</GradientText>
      </h2>
    </div>
  </header>
</template>

<script setup>
defineProps({
  label: { type: String, default: '' },
  title: { type: String, default: '' },
  bgImage: { type: String, default: '' },
})
</script>

<style scoped>
.cs-phase-header {
  position: relative;
}
</style>
