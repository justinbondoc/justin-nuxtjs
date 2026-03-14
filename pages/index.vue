<template>
  <main class="space-y-16 sm:space-y-20">
    <ChatHero />

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
      :delay="0.1"
    >
      <!-- <HorizontalScrollStrip /> -->
    </AnimatedContent>

    <AnimatedContent
      :distance="60"
      direction="vertical"
      :reverse="false"
      :duration="0.6"
      ease="power3.out"
      :initial-opacity="0"
      :animate-opacity="true"
      :scale="1"
      :threshold="0.1"
      :delay="0"
    >
    </AnimatedContent>

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
    >
      <AboutSection />
    </AnimatedContent>

    <AnimatedContent
      :distance="60"
      direction="vertical"
      :reverse="false"
      :duration="0.6"
      ease="power3.out"
      :initial-opacity="0"
      :animate-opacity="true"
      :scale="1"
      :threshold="0.1"
      :delay="0"
    >
      <SectionSplitter />
    </AnimatedContent>

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
    >
      <ToolsSection />
    </AnimatedContent>

    <AnimatedContent
      :distance="60"
      direction="vertical"
      :reverse="false"
      :duration="0.6"
      ease="power3.out"
      :initial-opacity="0"
      :animate-opacity="true"
      :scale="1"
      :threshold="0.1"
      :delay="0"
    >
      <SectionSplitter />
    </AnimatedContent>

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
    >
      <ResearchProcessSection />
    </AnimatedContent>

    <AnimatedContent
      :distance="60"
      direction="vertical"
      :reverse="false"
      :duration="0.6"
      ease="power3.out"
      :initial-opacity="0"
      :animate-opacity="true"
      :scale="1"
      :threshold="0.1"
      :delay="0"
    >
      <SectionSplitter />
    </AnimatedContent>

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
    >
      <TestimonialsSection />
    </AnimatedContent>

    <AnimatedContent
      :distance="60"
      direction="vertical"
      :reverse="false"
      :duration="0.6"
      ease="power3.out"
      :initial-opacity="0"
      :animate-opacity="true"
      :scale="1"
      :threshold="0.1"
      :delay="0"
    >
      <SectionSplitter />
    </AnimatedContent>


    <section id="portfolio" class="py-10 sm:py-14 scroll-mt-24">
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
        class="mx-auto max-w-5xl px-4 sm:px-6"
      >
        <h2 class="font-paper-serif mb-4 text-7xl font-semibold tracking-tight text-paper">Selected <GradientText>work</GradientText></h2>
        <p class="mb-4 text-paper-muted">
          Product and design work from discovery to launch.
        </p>

        <div class="mt-6 grid gap-4 sm:grid-cols-2">
          <SpotlightCard
            v-for="s in studies"
            :key="s.slug"
            class="rounded-[var(--radius-paper)] border border-paper bg-[var(--color-paper-white)]"
          >
            <NuxtLink
              :to="`/case-studies/${s.slug}`"
              class="block focus:outline-none"
            >
              <img
                v-if="s.meta?.coverImage"
                :src="s.meta.coverImage"
                :alt="s.meta?.title ?? ''"
                class="mb-3 aspect-video w-full rounded-[var(--radius-paper)] object-cover"
              >
              <h3 class="font-paper-serif text-lg font-semibold text-paper">
                {{ s.meta?.title }}
              </h3>
              <p class="mt-1 text-sm text-paper-muted">
                {{ s.meta?.oneLiner }}
              </p>
              <p v-if="s.meta?.role || s.meta?.tools?.length" class="mt-3 text-xs text-paper-muted">
                <span v-if="s.meta?.role">{{ s.meta?.role }}</span>
                <template v-if="s.meta?.role && s.meta?.tools?.length"> · </template>
                <span v-if="s.meta?.tools?.length">{{ s.meta.tools.join(', ') }}</span>
              </p>
            </NuxtLink>
          </SpotlightCard>
          <SpotlightCard
            class="rounded-[var(--radius-paper)] border border-dashed border-paper bg-[var(--color-paper-white)]"
            :spotlight-color="'rgba(0, 95, 204, 0.04)'"
          >
            <div class="flex flex-col my-auto h-full items-center justify-center text-center">
              <p class="text-sm font-medium text-paper-muted">More soon...</p>
            </div>
          </SpotlightCard>
        </div>
      </AnimatedContent>
    </section>

    <AnimatedContent
      :distance="60"
      direction="vertical"
      :reverse="false"
      :duration="0.6"
      ease="power3.out"
      :initial-opacity="0"
      :animate-opacity="true"
      :scale="1"
      :threshold="0.1"
      :delay="0"
    >
      <SectionSplitter />
    </AnimatedContent>

    <section id="contact" class="relative min-h-[800px] border-t border-paper py-10 sm:py-14 scroll-mt-24 overflow-hidden">
      <div class="absolute inset-0">
        <Dither
          :wave-speed="0.06"
          :wave-frequency="3"
          :wave-amplitude="0.3"
          :base-color="[1, 1, 1]"
          :wave-color="[0.96, 0.97, 1]"
          :color-num="2.8"
          :pixel-size="2"
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
        class="relative z-10 mx-auto max-w-5xl px-4 mb-48 sm:px-6"
      >
        <h2 class="font-paper-serif mb-4 text-7xl font-semibold tracking-tight text-paper"><GradientText>Contact</GradientText></h2>
        <p class="text-paper-muted">
          Connect for product, design, or sales engineering opportunities.
        </p>
        <p class="mt-2 text-sm text-paper-muted">
          LinkedIn:
          <a
            href="https://linkedin.com/in/justin-bondoc"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[var(--color-paper-primary)] underline underline-offset-2 decoration-[var(--color-paper-primary)]/30 hover:decoration-[var(--color-paper-primary)]"
          >
            linkedin.com/in/justin-bondoc
          </a>
        </p>

        <div class="mt-8 mx-auto rounded-xl overflow-hidden min-w-[320px] w-full max-w-2xl">
          <div
            class="calendly-inline-widget"
            data-url="https://calendly.com/jstnbondoc?hide_gdpr_banner=1&background_color=ffffff&text_color=1a1a1a&primary_color=005fcc"
            style="min-width:320px;height:700px;"
          />
        </div>
      </AnimatedContent>
    </section>

  </main>
</template>

<script setup lang="ts">
import { getCaseStudiesList } from '~/composables/useCaseStudy'

useHead({
  script: [
    {
      src: 'https://assets.calendly.com/assets/external/widget.js',
      async: true
    }
  ]
})

type CaseStudyMeta = {
  title?: string
  oneLiner?: string
  role?: string
  tools?: string[]
  coverImage?: string
  [key: string]: unknown
}
type CaseStudyListItem = { slug: string; meta: CaseStudyMeta }
const { data } = await useAsyncData<CaseStudyListItem[]>('case-studies-list', () => Promise.resolve(getCaseStudiesList()))
const studies = computed(() => data.value ?? [])
</script>

