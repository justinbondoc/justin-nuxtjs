<template>
  <section id="top" class="relative flex min-h-[70vh] items-center border-b border-paper pt-12 sm:pt-16 overflow-hidden">
    <div class="absolute inset-0">
      <Dither
        :wave-speed="0.06"
        :wave-frequency="3"
        :wave-amplitude="0.3"
        :base-color="[0.98, 0.98, 1]"
        :wave-color="[0.90, 0.90, 0.99]"
        :color-num="4"
        :pixel-size="1"
        :disable-animation="false"
        :enable-mouse-interaction="true"
        :mouse-radius="1"
      />
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
      <p class="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-paper-muted">
        Justin Bondoc · Product Manager · Ontario, California
      </p>
      <h1 class="mb-3 font-paper-serif text-2xl font-semibold tracking-tight text-paper sm:text-7xl">
        Product manager who <GradientText>discovers</GradientText>, <GradientText>designs</GradientText>, and <GradientText>delivers</GradientText>.
      </h1>
      <p class="mx-auto mb-2 max-w-prose text-paper-muted">
        10+ years in B2B SaaS. I run discovery, design solutions, and work with engineers to launch products.
      </p>
      <form class="mx-auto mb-6 w-full max-w-2xl" @submit.prevent="onSubmit">
        <div
          class="relative flex-1 min-w-0 rounded-[var(--radius-paper)] border border-[var(--color-paper-primary)] bg-[var(--color-paper-white)] transition-shadow duration-300"
          :style="isFocused ? { boxShadow: '0 0 0 1px var(--color-paper-primary), 0 0 8px var(--color-paper-primary)' } : { boxShadow: '0 0 0 1px var(--color-paper-primary), 0 0 20px var(--color-paper-primary)' }"
        >
          <div class="relative rounded-[var(--radius-paper)]">
            <textarea
              v-model="query"
              rows="4"
              placeholder="Hi! 👋 Ask me anything about my experience, case-studies, hobbies, or how I think..."
              class="chat-font min-h-[120px] w-full resize-y rounded-[var(--radius-paper)] border-0 bg-transparent px-4 py-3 pr-12 pb-10 text-base text-paper placeholder:text-paper-muted focus:outline-none sm:min-h-[100px] sm:text-sm"
              autocomplete="off"
              @focus="isFocused = true"
              @blur="isFocused = false"
              @keydown="onKeydown"
            />
            <button
              type="submit"
              aria-label="Ask"
              class="absolute bottom-3 right-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--radius-paper)] border border-paper bg-[var(--color-paper-primary)] text-[var(--color-paper-text-on-primary)] shadow-[var(--shadow-paper-button)] transition-colors hover:bg-[var(--color-paper-primary-hover)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M12 19V5" />
                <path d="M5 12l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </form>

      <div class="flex flex-wrap justify-center gap-3">
        <a
          href="#about"
          class="btn-paper-primary inline-flex items-center justify-center px-4 py-2 text-sm font-medium"
        >
          About me
        </a>
        <NuxtLink
          to="/resume"
          class="btn-paper-primary inline-flex items-center justify-center px-4 py-2 text-sm font-medium"
        >
          View resume
        </NuxtLink>
        <a
          href="#portfolio"
          class="btn-paper-primary inline-flex items-center justify-center px-4 py-2 text-sm font-medium"
        >
          View portfolio
        </a>
        <a
          href="#research"
          class="btn-paper-primary inline-flex items-center justify-center px-4 py-2 text-sm font-medium"
        >
          Research process
        </a>
      </div>
    </AnimatedContent>
  </section>
</template>

<script setup lang="ts">
const query = ref('');
const isFocused = ref(false);

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
