<template>
  <div class="min-h-screen text-zed bg-[var(--color-zed-white)]">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Analytics />
  </div>
</template>

<script setup lang="ts">
import { Analytics } from '@vercel/analytics/vue'
</script>
