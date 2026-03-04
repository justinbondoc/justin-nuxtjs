<template>
  <main class="space-y-16 sm:space-y-20">
    <section id="top" class="relative flex min-h-[70vh] items-center pt-12 sm:pt-16">
      <div
        class="overflow-hidden"
      >
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
        class="z-10 mx-auto max-w-5xl px-4 sm:px-6"
      >
        <p class="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
          Justin Bondoc · Product Manager · Ontario, California
        </p>
        <h1 class="mb-3 text-7xl font-semibold tracking-tight">
          One PM. <GradientText>Discovery. Design. Delivery. Done.</GradientText>
        </h1>
        <p class="mb-6 max-w-prose text-slate-300">
          10+ years in B2B SaaS - I lead discovery, design, delivery, and go-to-market. Let's get it done.
        </p>
        <div class="flex flex-wrap gap-3">
          <a
            href="#about"
            class="inline-flex items-center justify-center rounded-full border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-slate-50 shadow-sm transition-colors hover:bg-green-500"
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
            href="#projects"
            class="inline-flex items-center justify-center rounded-full border border-neutral-700 bg-transparent px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-black/80 hover:text-white"
          >
            View projects
          </a>
          <a
            href="#research"
            class="inline-flex items-center justify-center rounded-full border border-neutral-700 bg-transparent px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-black/80 hover:text-white"
          >
            Research process
          </a>
          <!-- <a
            href="#contact"
            class="inline-flex items-center justify-center rounded-full border border-slate-700 bg-transparent px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-800/80 hover:text-white"
          >
            Get in touch
          </a> -->
        </div>
      </AnimatedContent>
    </section>

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
      <HorizontalScrollStrip />
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

    <section id="projects" class="py-10 sm:py-14 scroll-mt-24">
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
        <h2 class="mb-4 text-7xl font-semibold tracking-tight">Selected <GradientText>Work</GradientText></h2>
        <p class="mb-4 text-slate-300">
          A sample of product and design work — strategy, prototyping, and delivery across B2B SaaS.
        </p>

        <div class="mt-6 grid gap-4 sm:grid-cols-2">
          <SpotlightCard
            v-for="s in studies"
            :key="s.slug"
            class="bg-neutral-900/50"
          >
            <NuxtLink
              :to="`/case-studies/${s.slug}`"
              class="block focus:outline-none"
            >
              <img
                v-if="s.meta?.coverImage"
                :src="s.meta.coverImage"
                :alt="s.meta?.title ?? ''"
                class="mb-3 aspect-video w-full rounded-lg object-cover"
              >
              <h3 class="text-lg font-semibold text-white">
                {{ s.meta?.title }}
              </h3>
              <p class="mt-1 text-sm text-slate-300">
                {{ s.meta?.oneLiner }}
              </p>
              <p v-if="s.meta?.role || s.meta?.tools?.length" class="mt-3 text-xs text-slate-400">
                <span v-if="s.meta?.role">{{ s.meta?.role }}</span>
                <template v-if="s.meta?.role && s.meta?.tools?.length"> · </template>
                <span v-if="s.meta?.tools?.length">{{ s.meta.tools.join(', ') }}</span>
              </p>
            </NuxtLink>
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

    <section id="contact" class="relative min-h-[600px] py-10 sm:py-14 scroll-mt-24 overflow-hidden">
      <div class="absolute inset-0">
        <Dither
        :wave-speed="0.05"
      :wave-frequency="3"
      :wave-amplitude="0.3"
      :wave-color="[0.15, 0.15, 0.15]"
      :color-num="4"
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
        <h2 class="mb-4 text-7xl font-semibold tracking-tight"><GradientText>Contact</GradientText></h2>
        <p class="text-slate-300">
          Connect for product, design, or sales engineering opportunities.
        </p>
        <p class="mt-2 text-sm text-slate-400">
          LinkedIn:
          <a
            href="https://linkedin.com/in/justin-bondoc"
            target="_blank"
            rel="noopener noreferrer"
            class="text-lime-400 underline decoration-lime-500/50 underline-offset-2 hover:text-lime-300 hover:decoration-lime-400"
          >
            linkedin.com/in/justin-bondoc
          </a>
        </p>

        <form class="mt-6 grid gap-4" @submit.prevent="openMailto">
          <label class="grid gap-1 text-sm text-slate-200">
            Name
            <input
              v-model="contactName"
              type="text"
              name="name"
              placeholder="Your name"
              class="mt-1 rounded-lg border border-slate-700 bg-black/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-lime-500/50 focus:ring-offset-2 focus:ring-offset-slate-950"
            />
          </label>

          <label class="grid gap-1 text-sm text-slate-200">
            Email
            <input
              v-model="contactEmail"
              type="email"
              name="email"
              placeholder="you@example.com"
              class="mt-1 rounded-lg border border-slate-700 bg-black/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-lime-500/50 focus:ring-offset-2 focus:ring-offset-slate-950"
            />
          </label>

          <label class="grid gap-1 text-sm text-slate-200">
            Message
            <textarea
              v-model="contactMessage"
              name="message"
              rows="4"
              placeholder="Write a short message"
              class="mt-1 rounded-lg border border-slate-700 bg-black/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-lime-500/50 focus:ring-offset-2 focus:ring-offset-slate-950"
            ></textarea>
          </label>

          <button
            type="submit"
            class="inline-flex w-fit items-center justify-center rounded-full border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-slate-50 shadow-sm transition-colors hover:bg-lime-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Send
          </button>
        </form>
      </AnimatedContent>
    </section>

  </main>
</template>

<script setup lang="ts">
type CaseStudyMeta = {
  title?: string
  oneLiner?: string
  role?: string
  tools?: string[]
  coverImage?: string
  [key: string]: unknown
}
type CaseStudyListItem = { slug: string; meta: CaseStudyMeta }
const { data } = await useAsyncData<CaseStudyListItem[]>('case-studies-list', () => $fetch<CaseStudyListItem[]>('/api/case-studies'))
const studies = computed(() => data.value ?? [])

const contactName = ref('')
const contactEmail = ref('')
const contactMessage = ref('')

function openMailto() {
  const to = 'jstnbondoc@gmail.com'
  const parts = [`mailto:${to}`]
  const params = new URLSearchParams()
  if (contactName.value) params.set('subject', `Message from ${contactName.value}`)
  if (contactMessage.value) params.set('body', contactMessage.value)
  const query = params.toString()
  const url = query ? `${parts[0]}?${query}` : parts[0]
  window.location.href = url
}
</script>

