<template>
  <div class="min-h-screen text-paper bg-[var(--color-paper-white)]">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Analytics />
  </div>
</template>

<script setup lang="ts">
import { Analytics } from '@vercel/analytics/vue'
</script>
