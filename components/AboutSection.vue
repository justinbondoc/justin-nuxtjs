<template>
  <section id="about" class="py-10 sm:py-14 scroll-mt-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 lg:items-start">
        <!-- Left column: header, title, image -->
        <div class="lg:col-span-5">
          <p class="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-paper-muted">
            Product Manager. Designer. Leader.
          </p>
          <h2 class="font-paper-serif mb-8 text-4xl font-semibold tracking-tight text-paper sm:text-5xl lg:text-6xl">
            Builder-style PM who <GradientText>ships</GradientText>
          </h2>
          <div class="relative h-[min(85vh,520px)] w-full overflow-hidden rounded-[var(--radius-paper)] border border-paper bg-[var(--color-paper-muted)]/10">
            <img
              v-show="!imageError"
              src="/images/justin_avatar.png"
              alt="Justin Bondoc"
              class="h-full w-full object-cover"
              @error="imageError = true"
            >
            <div
              v-show="imageError"
              class="absolute inset-0 flex items-center justify-center bg-[var(--color-paper-muted)]/20 p-4 text-center text-sm text-paper-muted"
            >
              Add your photo at <code class="font-paper-mono rounded-[var(--radius-paper-sm)] bg-[var(--color-paper-border)]/50 px-1.5 py-0.5">public/about-photo.jpg</code>
            </div>
          </div>
        </div>

        <!-- Right column: bio text -->
        <div class="lg:col-span-7">
          <div class="space-y-5 text-paper">
            <p class="leading-relaxed">
              I'm Justin, a full-stack product manager based in Ontario, California (not Canada). I started as a Sales Engineer, fell in love with improving UX, and moved into product. I've worn multiple hats: design, product, marketing, and sales.
            </p>
            <p class="leading-relaxed">
              <NuxtLink
                to="#research"
                class="font-bold underline decoration-dotted underline-offset-2 transition-colors inline-block hover:decoration-[var(--color-paper-primary)]"
              >
                <GradientText>AI has fundamentally changed how I work.</GradientText>
              </NuxtLink> I plan and prioritize work, design interfaces, record product videos, and write code to ship. That range lets me move fast and speak the language of every team in the room.
            </p>
            <p class="leading-relaxed">
              I'm restless to learn, whether it's using AI to prototype, picking up a new framework, or finding a new way to solve an old problem. Outside of work I enjoy running 🏃, reading 📘, and rock climbing.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const imageError = ref(false)
</script>
