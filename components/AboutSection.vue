<template>
  <section id="about" class="py-10 sm:py-14 scroll-mt-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 lg:items-start">
        <!-- Left column: header, title, image -->
        <div class="lg:col-span-5">
          <p class="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Product Manager. Designer. Leader.
          </p>
          <h2 class="mb-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Meet Justin: Your Partner in <GradientText>Digital Success</GradientText>
          </h2>
          <div class="relative h-[min(72vh,400px)] w-full overflow-hidden rounded-lg bg-slate-800/50">
            <img
              v-show="!imageError"
              src="/images/Indie.png"
              alt="Justin Bondoc"
              class="h-full w-full object-cover object-top"
              @error="imageError = true"
            >
            <div
              v-show="imageError"
              class="absolute inset-0 flex items-center justify-center bg-slate-800/80 p-4 text-center text-sm text-slate-500"
            >
              Add your photo at <code class="rounded bg-slate-700 px-1.5 py-0.5">public/about-photo.jpg</code>
            </div>
          </div>
        </div>

        <!-- Right column: bio text -->
        <div class="lg:col-span-7">
          <div class="space-y-6 text-slate-200">
            <p class="leading-relaxed">
              I'm Justin and I'm a full-stack product manager based in Ontario, California 🇺🇸 (not Canada 🇨🇦).
            </p>
            <p class="leading-relaxed">
              I started my career as a Sales Engineer where I fell in love with improving user experience. That curiosity pulled me into product management, where I've worn multiple hats across design, product, marketing, and sales.
            </p>
            <p class="leading-relaxed">
              <NuxtLink
                to="#research"
                class="font-bold underline decoration-dotted underline-offset-2 hover:decoration-lime-400 transition-colors inline-block"
              >
                <GradientText>AI has fundamentally changed how I work.</GradientText>
              </NuxtLink> I no longer manage products from a distance. I plan and prioritize work, design interfaces, record and publish product videos, and write code to ship and communicate with users.
            </p>
            <p class="leading-relaxed">
              That technical range means I can move fast and speak the language of every team in the room.
            </p>
            <p class="leading-relaxed">
              I have a restless drive to learn, whether it's how to best leverage AI, a new framework, or a new way of solving an old problem.
            </p>
            <p class="leading-relaxed">
              Outside of work, I live by the three R's - running, reading, and rock climbing. Apparently that's a 30s thing. I'll take it. 💪            
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
