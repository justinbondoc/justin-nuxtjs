<template>
  <div
    class="flex items-center justify-center transition-opacity hover:opacity-90"
    :class="variant === 'icon' ? 'h-10 w-10' : 'h-8 min-w-[80px]'"
    role="listitem"
  >
    <div
      v-if="variant === 'wordmark'"
      class="h-full w-full rounded bg-slate-700/60"
      aria-hidden
    />
    <div
      v-else
      class="h-10 w-10 shrink-0 rounded-lg bg-slate-700/60"
      aria-hidden
    />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'wordmark' | 'icon'
  }>(),
  { variant: 'wordmark' }
)
</script>
