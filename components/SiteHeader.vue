<template>
  <header class="site-chrome-header sticky top-0 z-50 bg-black/50 backdrop-blur-xl">
    <div
      class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 text-sm text-slate-200 sm:px-6"
    >
      <NuxtLink to="/" class="text-xs font-semibold tracking-[0.16em] text-slate-100 uppercase" @click="onHomeClick">
        Justin Bondoc
      </NuxtLink>

      <!-- Desktop nav: visible from md up -->
      <nav class="hidden flex-wrap items-center gap-2 sm:gap-3 md:flex">
        <NuxtLink
          to="/"
          class="rounded-sm px-2.5 py-1 text-slate-300 transition-colors hover:transition-none hover:rounded-none hover:bg-black hover:text-white hover:border-[#39ff14] border border-transparent"
          @click="onHomeClick"
        >
          <span class="inline-flex items-center gap-1">
            <span>Home</span>
            <kbd
              class="rounded-sm border border-slate-700/80 bg-slate-900/50 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-slate-300"
            >
              H
            </kbd>
          </span>
        </NuxtLink>
        <NuxtLink
          to="/#about"
          class="rounded-sm px-2.5 py-1 text-slate-300 transition-colors hover:transition-none hover:rounded-none hover:bg-black hover:text-white hover:border-[#39ff14] border border-transparent"
        >
          <span class="inline-flex items-center gap-1">
            <span>About</span>
            <kbd
              class="rounded-sm border border-slate-700/80 bg-slate-900/50 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-slate-300"
            >
              A
            </kbd>
          </span>
        </NuxtLink>
        <NuxtLink
          to="/#portfolio"
          class="rounded-sm px-2.5 py-1 text-slate-300 transition-colors hover:transition-none hover:rounded-none hover:bg-black hover:text-white hover:border-[#39ff14] border border-transparent"
        >
          <span class="inline-flex items-center gap-1">
            <span>Portfolio</span>
            <kbd
              class="rounded-sm border border-slate-700/80 bg-slate-900/50 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-slate-300"
            >
              P
            </kbd>
          </span>
        </NuxtLink>
        <NuxtLink
          to="/#testimonials"
          class="rounded-sm px-2.5 py-1 text-slate-300 transition-colors hover:transition-none hover:rounded-none hover:bg-black hover:text-white hover:border-[#39ff14] border border-transparent"
        >
          <span class="inline-flex items-center gap-1">
            <span>Testimonials</span>
            <kbd
              class="rounded-sm border border-slate-700/80 bg-slate-900/50 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-slate-300"
            >
              T
            </kbd>
          </span>
        </NuxtLink>
      <NuxtLink
          to="/resume"
          class="rounded-sm px-2.5 py-1 text-slate-300 transition-colors hover:transition-none hover:rounded-none hover:bg-black hover:text-white hover:border-[#39ff14] border border-transparent"
        >
          <span class="inline-flex items-center gap-1">
            <span>Resume</span>
            <kbd
              class="rounded-sm border border-slate-700/80 bg-slate-900/50 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-slate-300"
            >
              R
            </kbd>
          </span>
        </NuxtLink>
        <NuxtLink
          to="/#contact"
          class="rounded-sm px-2.5 py-1 text-slate-300 transition-colors hover:transition-none hover:rounded-none hover:bg-black hover:text-white hover:border-[#39ff14] border border-transparent"
        >
          <span class="inline-flex items-center gap-1">
            <span>Contact</span>
            <kbd
              class="rounded-sm border border-slate-700/80 bg-slate-900/50 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-slate-300"
            >
              C
            </kbd>
          </span>
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-3">
        <button
          type="button"
          class="hidden items-center gap-1 rounded-full border border-transparent px-2 py-1 text-[11px] text-slate-400 transition-colors hover:border-[#39ff14] hover:text-slate-100 sm:inline-flex"
          @click="onChatShortcutClick"
        >
          <span class="uppercase tracking-[0.16em]">Chat</span>
          <span class="inline-flex items-center gap-1">
            <kbd
              class="rounded-sm border border-slate-700/80 bg-slate-900/50 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-slate-200"
            >
              /
            </kbd>
          </span>
        </button>

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
        <NuxtLink
          to="/"
          class="rounded-sm px-3 py-2.5 text-slate-300 transition-colors hover:rounded-none hover:bg-black hover:text-white hover:border-[#39ff14] border border-transparent"
          @click="onHomeClick"
        >
          <span class="flex items-center justify-between gap-3">
            <span>Home</span>
            <kbd
              class="rounded-sm border border-slate-700/80 bg-slate-900/50 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-slate-300"
            >
              H
            </kbd>
          </span>
        </NuxtLink>
        <NuxtLink
          to="/#about"
          class="rounded-sm px-3 py-2.5 text-slate-300 transition-colors hover:rounded-none hover:bg-black hover:text-white hover:border-[#39ff14] border border-transparent"
          @click="menuOpen = false"
        >
          <span class="flex items-center justify-between gap-3">
            <span>About</span>
            <kbd
              class="rounded-sm border border-slate-700/80 bg-slate-900/50 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-slate-300"
            >
              A
            </kbd>
          </span>
        </NuxtLink>
        <NuxtLink
          to="/#portfolio"
          class="rounded-sm px-3 py-2.5 text-slate-300 transition-colors hover:rounded-none hover:bg-black hover:text-white hover:border-[#39ff14] border border-transparent"
          @click="menuOpen = false"
        >
          <span class="flex items-center justify-between gap-3">
            <span>Portfolio</span>
            <kbd
              class="rounded-sm border border-slate-700/80 bg-slate-900/50 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-slate-300"
            >
              P
            </kbd>
          </span>
        </NuxtLink>
        <NuxtLink
          to="/#testimonials"
          class="rounded-sm px-3 py-2.5 text-slate-300 transition-colors hover:rounded-none hover:bg-black hover:text-white hover:border-[#39ff14] border border-transparent"
          @click="menuOpen = false"
        >
          <span class="flex items-center justify-between gap-3">
            <span>Testimonials</span>
            <kbd
              class="rounded-sm border border-slate-700/80 bg-slate-900/50 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-slate-300"
            >
              T
            </kbd>
          </span>
        </NuxtLink>
        <NuxtLink
          to="/resume"
          class="rounded-sm px-3 py-2.5 text-slate-300 transition-colors hover:rounded-none hover:bg-black hover:text-white hover:border-[#39ff14] border border-transparent"
          @click="menuOpen = false"
        >
          <span class="flex items-center justify-between gap-3">
            <span>Resume</span>
            <kbd
              class="rounded-sm border border-slate-700/80 bg-slate-900/50 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-slate-300"
            >
              R
            </kbd>
          </span>
        </NuxtLink>
        <NuxtLink
          to="/#contact"
          class="rounded-sm px-3 py-2.5 text-slate-300 transition-colors hover:rounded-none hover:bg-black hover:text-white hover:border-[#39ff14] border border-transparent"
          @click="menuOpen = false"
        >
          <span class="flex items-center justify-between gap-3">
            <span>Contact</span>
            <kbd
              class="rounded-sm border border-slate-700/80 bg-slate-900/50 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-slate-300"
            >
              C
            </kbd>
          </span>
        </NuxtLink>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const menuOpen = ref(false)

const route = useRoute()
const router = useRouter()

function onHomeClick(event: MouseEvent) {
  menuOpen.value = false

  if (route.path !== '/') return

  event.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function onChatShortcutClick() {
  // Reuse existing "/" keyboard shortcut behavior by dispatching a synthetic event.
  const slashEvent = new KeyboardEvent('keydown', {
    key: '/',
    bubbles: true,
    cancelable: true
  })

  window.dispatchEvent(slashEvent)
}
</script>

