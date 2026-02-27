<template>
  <div class="flex min-h-screen flex-col">
    <SiteHeader />
    <main class="flex-1">
      <div class="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <slot />
      </div>
    </main>
    <SiteFooter />
  </div>
</template>

