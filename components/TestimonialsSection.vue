<template>
  <section id="testimonials" class="overflow-x-hidden py-10 sm:py-14 scroll-mt-24">
    <div class="mx-auto max-w-5xl px-4 sm:px-6">
      <AnimatedContent
        :distance="60"
        direction="vertical"
        :duration="0.6"
        ease="power3.out"
        :initial-opacity="0"
        :animate-opacity="true"
        :threshold="0.1"
        :delay="0"
      >
        <p class="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
          What others say
        </p>
        <h2 class="mb-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          <GradientText>References</GradientText> and testimonials
        </h2>
        <p class="mb-10 max-w-2xl text-slate-300">
          Words from people I've worked with
        </p>
      </AnimatedContent>
    </div>

    <div class="mx-auto max-w-5xl px-4 sm:px-6 relative">
      <!-- Gradient masks to constrain horizontal scroll visually -->
      <div class="testimonials-fade-left" aria-hidden="true" />
      <div class="testimonials-fade-right" aria-hidden="true" />
      <div class="w-screen max-w-none -ml-4 sm:-ml-6 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory md:snap-proximity">
        <div class="flex gap-6 pl-4 pr-4 pb-2 pt-1 sm:pl-6 sm:pr-6 md:gap-8">
        <AnimatedContent
          v-for="(t, i) in rest"
          :key="t.id"
          :distance="50"
          direction="vertical"
          :duration="0.6"
          ease="power3.out"
          :initial-opacity="0"
          :animate-opacity="true"
          :threshold="0.1"
          :delay="0.05 + (highlighted.length + i) * 0.06"
          class="h-full shrink-0 w-[85vw] min-w-[300px] sm:w-[380px] sm:min-w-[380px] md:w-[420px] md:min-w-[420px] snap-start"
        >
          <TestimonialCard
            :name="t.name"
            :photo="t.photo"
            :quote="t.quote"
            :role="t.role"
            :company="t.company"
            :relationship="t.relationship"
            :linkedin="t.linkedin"
          />
        </AnimatedContent>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials-fade-left,
.testimonials-fade-right {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 4rem;
  max-width: 15%;
  pointer-events: none;
  z-index: 1;
}
.testimonials-fade-left {
  left: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.98), transparent);
}
.testimonials-fade-right {
  right: 0;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.98), transparent);
}
</style>

<script setup lang="ts">
import { getTestimonialsList } from '~/composables/useTestimonials'

type Testimonial = {
  id: string
  name: string
  photo?: string
  quote: string
  role: string
  company?: string
  relationship: string
  linkedin?: string
  highlight?: 'ceo' | 'cto'
}

const list = getTestimonialsList() as Testimonial[]

const highlighted = computed(() =>
  list.filter((t) => t.highlight === 'ceo' || t.highlight === 'cto')
)
const rest = computed(() =>
  list.filter((t) => t.highlight !== 'ceo' && t.highlight !== 'cto')
)
</script>
