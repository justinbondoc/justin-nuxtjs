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
        <!-- Victor: full-width, pops off grid with transform + glow -->
        <AnimatedContent
          v-if="victor"
          :distance="50"
          direction="vertical"
          :duration="0.6"
          ease="power3.out"
          :initial-opacity="0"
          :animate-opacity="true"
          :threshold="0.1"
          :delay="0.05"
          class="origin-center"
        >
          <div
            class="scale-[1.06] -translate-y-2 transition-transform duration-300 will-change-transform rounded-xl overflow-hidden"
            style="box-shadow: 0 0 200px -8px rgba(163, 230, 53, 0.35), 0 0 24px -4px rgba(163, 230, 53, 0.2);"
          >
            <TestimonialCard
              :name="victor.name"
              :photo="victor.photo"
              :excerpt="victor.excerpt"
              :quote="victor.quote"
              :role="victor.role"
              :company="victor.company"
              :relationship="victor.relationship"
              :linkedin="victor.linkedin"
              highlight="ceo"
            />
          </div>
        </AnimatedContent>

        <!-- Others: 3 per row -->
        <div class="grid gap-3 sm:gap-4 md:gap-5 sm:grid-cols-2 md:grid-cols-3">
          <AnimatedContent
            v-for="(t, i) in others"
            :key="t.id"
            :distance="50"
            direction="vertical"
            :duration="0.6"
            ease="power3.out"
            :initial-opacity="0"
            :animate-opacity="true"
            :threshold="0.1"
            :delay="0.05 + (i + 1) * 0.06"
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
              :highlight="(t.highlight as 'ceo' | 'cto' | 'manager' | undefined)"
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
  highlight?: string
}

const list = getTestimonialsList() as Testimonial[]

const victor = computed(() => list.find((t) => t.id === 'ceo'))

// Others in 2×3 grid (exclude Victor + Martin)
const others = computed(() =>
  list.filter((t) => t.id !== 'ceo' && t.id !== 'cto')
)
</script>
