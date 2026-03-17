<template>
  <div class="min-h-screen text-slate-50">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Analytics v-if="loadAnalytics" />
  </div>
</template>

<script setup lang="ts">
import { Analytics } from '@vercel/analytics/vue'

const disableAnalytics = useCookie<string | null>('disable_analytics')
const loadAnalytics = ref(false)

onMounted(() => {
  // Avoid hydration mismatch: only decide client-side.
  loadAnalytics.value = disableAnalytics.value !== '1'
})
</script>
