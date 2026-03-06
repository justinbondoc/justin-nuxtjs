<template>
  <section id="top" class="relative flex min-h-[70vh] items-center pt-12 sm:pt-16">
    <div class="overflow-hidden">
      <div class="min-h-[70vh]">
        <Dither
          :wave-speed="0.06"
          :wave-frequency="3"
          :wave-amplitude="0.3"
          :wave-color="[0.15, 0.15, 0.15]"
          :color-num="2.8"
          :pixel-size="2"
          :disable-animation="false"
          :enable-mouse-interaction="true"
          :mouse-radius="1"
        />
      </div>
    </div>
    <AnimatedContent
      :distance="100"
      direction="vertical"
      :reverse="false"
      :duration="0.8"
      ease="power3.out"
      :initial-opacity="0"
      :animate-opacity="true"
      :scale="1"
      :threshold="0.1"
      :delay="0"
      class="z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center"
    >
      <p class="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
        Justin Bondoc · Product Manager · Ontario, California
      </p>
      <h1 class="mb-3 text-2xl font-semibold tracking-tight sm:text-7xl">
        One PM. <GradientText>Discovery. Design. Delivery. Done.</GradientText>
      </h1>
      <p class="mx-auto mb-6 max-w-prose text-slate-300">
        10+ years in B2B SaaS. Lead discovery, design, delivery, and go-to-market. Ask me anything below.
      </p>

      <form class="mx-auto mb-6 w-full max-w-2xl" @submit.prevent="onSubmit">
        <div class="relative flex-1 min-w-0">
          <textarea
            v-model="query"
            rows="4"
            placeholder="Hi! 👋 Ask me anything about my experience, case-studies, hobbies, or how I think..."
            class="chat-font min-h-[120px] w-full resize-y rounded-2xl border border-lime-700 bg-black/70 px-4 py-3 pr-12 pb-10 text-sm text-slate-50 placeholder:text-slate-500 focus:border-lime-500/50 focus:outline-none focus:ring-2 focus:ring-lime-500/50 focus:ring-offset-2 focus:ring-offset-slate-950 sm:min-h-[100px]"
            autocomplete="off"
            @keydown="onKeydown"
          />
          <button
            type="submit"
            aria-label="Ask"
            class="absolute bottom-3 right-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-transparent bg-green-600 text-white shadow-sm transition-colors hover:bg-green-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M12 19V5" />
              <path d="M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>
      </form>

      <div class="flex flex-wrap justify-center gap-3">
        <a
          href="#about"
          class="inline-flex items-center justify-center rounded-full border border-neutral-700 bg-transparent px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-black/80 hover:text-white"
        >
          About me
        </a>
        <NuxtLink
          to="/resume"
          class="inline-flex items-center justify-center rounded-full border border-neutral-700 bg-transparent px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-black/80 hover:text-white"
        >
          View resume
        </NuxtLink>
        <a
          href="#portfolio"
          class="inline-flex items-center justify-center rounded-full border border-neutral-700 bg-transparent px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-black/80 hover:text-white"
        >
          View portfolio
        </a>
        <a
          href="#research"
          class="inline-flex items-center justify-center rounded-full border border-neutral-700 bg-transparent px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-black/80 hover:text-white"
        >
          Research process
        </a>
      </div>
    </AnimatedContent>
  </section>
</template>

<script setup lang="ts">
const query = ref('');

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    onSubmit();
  }
}

function onSubmit() {
  const trimmed = query.value.trim();
  navigateTo({
    path: '/chat',
    query: trimmed ? { q: trimmed } : {},
  });
  query.value = '';
}
</script>
