<template>
  <div class="min-h-screen text-slate-50">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Analytics />
  </div>
</template>

<script setup lang="ts">
import { Analytics } from '@vercel/analytics/vue'
</script>
