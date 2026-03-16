<template>
  <section id="testimonials" class="py-10 sm:py-14 scroll-mt-24">
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

    <div class="mx-auto max-w-5xl px-4 sm:px-6">
      <div class="grid gap-4 md:gap-5">
        <!-- Top row: first 3 testimonials in a 3-column grid on desktop -->
        <div class="grid gap-3 sm:gap-4 md:gap-5 sm:grid-cols-2 md:grid-cols-3">
          <AnimatedContent
            v-for="(t, i) in firstRow"
            :key="t.id"
            :distance="50"
            direction="vertical"
            :duration="0.6"
            ease="power3.out"
            :initial-opacity="0"
            :animate-opacity="true"
            :threshold="0.1"
            :delay="0.05 + i * 0.06"
            class="h-full"
          >
            <TestimonialCard
              :name="t.name"
              :photo="t.photo"
              :excerpt="t.excerpt"
              :quote="t.quote"
              :role="t.role"
              :company="t.company"
              :relationship="t.relationship"
              :linkedin="t.linkedin"
            />
          </AnimatedContent>
        </div>

        <!-- Second row: remaining testimonials in a 2-column grid on desktop -->
        <div v-if="secondRow.length" class="grid gap-3 sm:gap-4 md:gap-5 sm:grid-cols-2 md:grid-cols-2">
          <AnimatedContent
            v-for="(t, i) in secondRow"
            :key="t.id"
            :distance="50"
            direction="vertical"
            :duration="0.6"
            ease="power3.out"
            :initial-opacity="0"
            :animate-opacity="true"
            :threshold="0.1"
            :delay="0.05 + (firstRow.length + i) * 0.06"
            class="h-full"
          >
            <TestimonialCard
              :name="t.name"
              :photo="t.photo"
              :excerpt="t.excerpt"
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

<script setup lang="ts">
import { getTestimonialsList } from '~/composables/useTestimonials'

type Testimonial = {
  id: string
  name: string
  photo?: string
  excerpt?: string
  quote: string
  role: string
  company?: string
  relationship: string
  linkedin?: string
  highlight?: 'ceo' | 'cto'
}

const list = getTestimonialsList() as Testimonial[]

// Keep highlighted items in data if needed later, but don't render them for now.
const highlighted = computed(() =>
  list.filter((t) => t.highlight === 'ceo' || t.highlight === 'cto')
)

// Only render non-highlighted testimonials, split into rows:
const rest = computed(() =>
  list.filter((t) => t.highlight !== 'ceo' && t.highlight !== 'cto')
)

const firstRow = computed(() => rest.value.slice(0, 3))
const secondRow = computed(() => rest.value.slice(3))
</script>
