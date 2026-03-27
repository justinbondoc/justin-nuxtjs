<template>
  <NuxtLink :to="to" v-bind="$attrs" class="inline-flex items-center gap-2">
    <ArrowLeft :size="iconSize" aria-hidden="true" />
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next'
import type { RouteLocationRaw } from 'vue-router'

withDefaults(
  defineProps<{
    to: RouteLocationRaw
    iconSize?: number
  }>(),
  {
    iconSize: 18,
  },
)
</script>

