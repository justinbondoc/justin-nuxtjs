<template>
  <section class="bg-black py-8 sm:py-10 overflow-hidden" aria-label="Features">
    <div class="marquee-track py-4 border-y border-slate-700/70">
      <div class="marquee-inner flex items-center gap-12 sm:gap-16 w-max">
        <div
          class="flex items-center gap-12 sm:gap-16 shrink-0 min-w-max px-4 sm:px-8"
          aria-hidden="false"
        >
          <slot>
            <HorizontalScrollStripItem
              v-for="(item, i) in defaultItems"
              :key="'a-' + i"
              :icon="item.icon"
              :label="item.label"
            />
          </slot>
        </div>
        <div
          class="flex items-center gap-12 sm:gap-16 shrink-0 min-w-max px-4 sm:px-8"
          aria-hidden="true"
        >
          <slot>
            <HorizontalScrollStripItem
              v-for="(item, i) in defaultItems"
              :key="'b-' + i"
              :icon="item.icon"
              :label="item.label"
            />
          </slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const defaultItems = [
  { icon: 'target', label: 'Sales & Marketing' },
  { icon: 'brain', label: 'Data-Driven Design' },
  { icon: 'target', label: 'Product Strategy' },
  { icon: 'user', label: 'User Experience' },
  { icon: 'crosshair', label: 'Product Management' },
  { icon: 'code', label: 'Product Development' },
  { icon: 'users', label: 'Stakeholder Communication' },
  { icon: 'list', label: 'Project Management' },
  { icon: 'video', label: 'Content Creation' },
]
</script>

<style scoped>
.marquee-track {
  overflow: hidden;
  user-select: none;
}

.marquee-inner {
  animation: marquee 40s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .marquee-inner {
    animation: none;
  }
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
