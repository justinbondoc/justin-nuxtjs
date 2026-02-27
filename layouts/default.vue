<template>
  <div class="flex min-h-screen flex-col">
    <SiteHeader />
    <main class="flex-1">
      <div class="mx-auto w-full">
        <slot />
      </div>
    </main>
    <SiteFooter />
  </div>
</template>

