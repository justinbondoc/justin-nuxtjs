<template>
  <section class="bg-black py-16 sm:py-20">
    <div class="mx-auto max-w-5xl px-4 sm:px-6 text-center">
      <p
        class="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-400"
      >
        {{ subheading }}
      </p>
      <h2 class="mb-6 text-7xl font-bold tracking-tight text-white">
        {{ title }}
      </h2>
      <p class="mx-auto mb-12 max-w-5xl text-base leading-relaxed text-slate-300">
        {{ description }}
      </p>

      <!-- Logo rows -->
      <div class="flex flex-col items-center gap-10">
        <div
          class="flex flex-wrap items-center justify-center gap-8 sm:gap-12"
          role="list"
        >
          <slot name="logos-row-1">
            <ToolsSectionPlaceholder v-for="i in 4" :key="'row1-' + i" />
          </slot>
        </div>
        <div
          class="flex flex-wrap items-center justify-center gap-6 sm:gap-10"
          role="list"
        >
          <slot name="logos-row-2">
            <ToolsSectionPlaceholder
              v-for="i in 7"
              :key="'row2-' + i"
              variant="icon"
            />
          </slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    subheading?: string
    title?: string
    description?: string
  }>(),
  {
    subheading: 'EMPOWERING DIGITAL EXCELLENCE THROUGH TOP-TIER TOOLS',
    title: 'Mastery in Industry-Leading Tools',
    description:
      'Using the right tools in the digital sphere is crucial. My proficiency across top-tier platforms ensures efficient, high-quality, and data-driven solutions. From design to analytics, these tools are leveraged to boost your online business performance.',
  }
)
</script>
