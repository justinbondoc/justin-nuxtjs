<template>
  <div
    class="flex shrink-0 items-center gap-3 sm:gap-4"
    role="listitem"
  >
    <div
      class="flex h-10 w-10 shrink-0 items-center justify-center text-white"
      aria-hidden
    >
      <component
        :is="lucideIcon"
        :size="28"
        class="h-6 w-6 sm:h-7 sm:w-7"
      />
    </div>
    <span
      class="whitespace-nowrap text-sm font-medium uppercase tracking-wider text-white sm:text-base"
    >
      {{ label }}
    </span>
  </div>
</template>

<script setup lang="ts">
import {
  Crosshair,
  Hand,
  ShoppingCart,
  Star,
} from 'lucide-vue-next'

const iconComponents: Record<string, typeof Crosshair> = {
  crosshair: Crosshair,
  hand: Hand,
  cart: ShoppingCart,
  star: Star,
}

const props = withDefaults(
  defineProps<{
    icon?: string
    label: string
  }>(),
  { icon: 'crosshair' }
)

const lucideIcon = computed(() => {
  const key = (props.icon || 'crosshair').toLowerCase()
  return iconComponents[key] ?? Crosshair
})
</script>
