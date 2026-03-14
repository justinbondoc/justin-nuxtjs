<template>
  <header class="site-chrome-header sticky top-0 z-50 border-b border-paper bg-[var(--color-paper-white)]" style="box-shadow: 0 0 1px var(--color-paper-border);">
    <div
      class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 text-sm text-paper sm:px-6"
    >
      <NuxtLink to="/" class="text-xs font-semibold tracking-[0.16em] text-paper uppercase">
        Justin Bondoc
      </NuxtLink>

      <!-- Desktop nav: visible from md up -->
      <nav class="hidden flex-wrap items-center gap-2 sm:gap-3 md:flex">
        <NuxtLink
          to="/#top"
          class="rounded-[var(--radius-paper)] px-2.5 py-1 text-paper transition-colors hover:bg-black/5"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/#about"
          class="rounded-[var(--radius-paper)] px-2.5 py-1 text-paper transition-colors hover:bg-black/5"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/#research"
          class="rounded-[var(--radius-paper)] px-2.5 py-1 text-paper transition-colors hover:bg-black/5"
        >
          Research process
        </NuxtLink>
        <NuxtLink
          to="/#portfolio"
          class="rounded-[var(--radius-paper)] px-2.5 py-1 text-paper transition-colors hover:bg-black/5"
        >
          Portfolio
        </NuxtLink>
        <NuxtLink
          to="/resume"
          class="rounded-[var(--radius-paper)] px-2.5 py-1 text-paper transition-colors hover:bg-black/5"
        >
          Resume
        </NuxtLink>
        <NuxtLink
          to="/#contact"
          class="rounded-[var(--radius-paper)] px-2.5 py-1 text-paper transition-colors hover:bg-black/5"
        >
          Contact
        </NuxtLink>
      </nav>

      <!-- Mobile: hamburger button -->
      <button
        type="button"
        class="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-paper)] text-paper transition-colors hover:bg-black/5 md:hidden"
        aria-label="Toggle menu"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        <span class="sr-only">{{ menuOpen ? 'Close menu' : 'Open menu' }}</span>
        <svg
          class="h-6 w-6 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <template v-if="!menuOpen">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 18h16" />
          </template>
          <template v-else>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </template>
        </svg>
      </button>
    </div>

    <!-- Mobile menu overlay -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="menuOpen"
        class="fixed inset-0 top-[52px] z-40 bg-black/20 backdrop-blur-sm md:hidden"
        aria-hidden="true"
        @click="menuOpen = false"
      />
    </Transition>

    <!-- Mobile menu panel -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav
        v-if="menuOpen"
        class="absolute left-0 right-0 top-full z-50 flex flex-col gap-1 border-t border-paper bg-[var(--color-paper-white)] px-4 py-3 md:hidden"
        aria-label="Mobile navigation"
      >
        <NuxtLink
          to="/#top"
          class="rounded-[var(--radius-paper)] px-3 py-2.5 text-paper transition-colors hover:bg-black/5"
          @click="menuOpen = false"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/#about"
          class="rounded-[var(--radius-paper)] px-3 py-2.5 text-paper transition-colors hover:bg-black/5"
          @click="menuOpen = false"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/#portfolio"
          class="rounded-[var(--radius-paper)] px-3 py-2.5 text-paper transition-colors hover:bg-black/5"
          @click="menuOpen = false"
        >
          Portfolio
        </NuxtLink>
        <NuxtLink
          to="/#research"
          class="rounded-[var(--radius-paper)] px-3 py-2.5 text-paper transition-colors hover:bg-black/5"
          @click="menuOpen = false"
        >
          Research process
        </NuxtLink>
        <NuxtLink
          to="/resume"
          class="rounded-[var(--radius-paper)] px-3 py-2.5 text-paper transition-colors hover:bg-black/5"
          @click="menuOpen = false"
        >
          Resume
        </NuxtLink>
        <NuxtLink
          to="/#contact"
          class="rounded-[var(--radius-paper)] px-3 py-2.5 text-paper transition-colors hover:bg-black/5"
          @click="menuOpen = false"
        >
          Contact
        </NuxtLink>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const menuOpen = ref(false)
</script>

