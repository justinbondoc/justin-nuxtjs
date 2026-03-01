<template>
  <header class="sticky top-0 z-50 bg-black/50 backdrop-blur-xl">
    <div
      class="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-3 text-sm text-slate-200 sm:px-6"
    >
      <a href="#top" class="text-xs font-semibold tracking-[0.16em] text-slate-100 uppercase">
        Justin Bondoc
      </a>

      <!-- Desktop nav: visible from md up -->
      <nav class="hidden flex-wrap items-center gap-2 sm:gap-3 md:flex">
        <a
          href="#top"
          class="rounded-full px-2.5 py-1 text-slate-300 transition-colors hover:bg-slate-800/80 hover:text-white"
        >
          Home
        </a>
        <a
          href="#about"
          class="rounded-full px-2.5 py-1 text-slate-300 transition-colors hover:bg-slate-800/80 hover:text-white"
        >
          About
        </a>
        <a
          href="#projects"
          class="rounded-full px-2.5 py-1 text-slate-300 transition-colors hover:bg-slate-800/80 hover:text-white"
        >
          Projects
        </a>
        <a
          href="#contact"
          class="rounded-full px-2.5 py-1 text-slate-300 transition-colors hover:bg-slate-800/80 hover:text-white"
        >
          Contact
        </a>
      </nav>

      <!-- Mobile: hamburger button -->
      <button
        type="button"
        class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-slate-800/80 hover:text-white md:hidden"
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
          <!-- Hamburger bars -->
          <template v-if="!menuOpen">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 18h16" />
          </template>
          <!-- X icon when open -->
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
        class="fixed inset-0 top-[52px] z-40 bg-black/60 backdrop-blur-sm md:hidden"
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
        class="absolute left-0 right-0 top-full z-50 flex flex-col gap-1 border-t border-slate-800/80 bg-black/95 px-4 py-3 backdrop-blur-xl md:hidden"
        aria-label="Mobile navigation"
      >
        <a
          href="#top"
          class="rounded-lg px-3 py-2.5 text-slate-300 transition-colors hover:bg-slate-800/80 hover:text-white"
          @click="menuOpen = false"
        >
          Home
        </a>
        <a
          href="#about"
          class="rounded-lg px-3 py-2.5 text-slate-300 transition-colors hover:bg-slate-800/80 hover:text-white"
          @click="menuOpen = false"
        >
          About
        </a>
        <a
          href="#projects"
          class="rounded-lg px-3 py-2.5 text-slate-300 transition-colors hover:bg-slate-800/80 hover:text-white"
          @click="menuOpen = false"
        >
          Projects
        </a>
        <a
          href="#contact"
          class="rounded-lg px-3 py-2.5 text-slate-300 transition-colors hover:bg-slate-800/80 hover:text-white"
          @click="menuOpen = false"
        >
          Contact
        </a>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const menuOpen = ref(false)
</script>

