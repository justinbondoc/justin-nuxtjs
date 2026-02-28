<template>
  <section class="bg-black py-16 sm:py-20">
    <div class="mx-auto max-w-5xl px-4 sm:px-6 text-center">
      <p
        class="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-400"
      >
        {{ subheading }}
      </p>
      <h2 class="mb-6 text-7xl font-bold tracking-tight text-white">
        Mastery in <GradientText>Industry-Leading Tools</GradientText>
      </h2>
      <p class="mx-auto mb-12 max-w-5xl leading-relaxed text-slate-300">
        {{ description }}
      </p>

      <!-- Logo rows -->
      <div class="flex flex-col items-center gap-10">
        <div
          class="flex flex-wrap items-center justify-center gap-8 sm:gap-12"
          role="list"
        >
          <slot name="logos-row-1">
            <a
              v-for="logo in logosRow1"
              :key="logo.src"
              :href="logo.href"
              :aria-label="logo.name"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center transition-opacity hover:opacity-90 focus:opacity-90 focus:outline-none"
              :class="logo.variant === 'icon' ? 'h-10 w-10 shrink-0' : ''"
              role="listitem"
            >
              <img
                :src="logo.src"
                :alt="logo.name"
                :class="logo.variant === 'icon' ? 'h-8 w-8 object-contain object-center' : 'h-8 max-w-[120px] object-contain object-center'"
              >
            </a>
          </slot>
        </div>
        <div
          class="flex flex-wrap items-center justify-center gap-8 sm:gap-12"
          role="list"
        >
          <slot name="logos-row-2">
            <a
              v-for="logo in logosRow2"
              :key="logo.src"
              :href="logo.href"
              :aria-label="logo.name"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center transition-opacity hover:opacity-90 focus:opacity-90 focus:outline-none"
              :class="logo.variant === 'icon' ? 'h-10 w-10 shrink-0' : ''"
              role="listitem"
            >
              <img
                :src="logo.src"
                :alt="logo.name"
                :class="logo.variant === 'icon' ? 'h-8 w-8 object-contain object-center' : 'h-8 max-w-[120px] object-contain object-center'"
              >
            </a>
          </slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const logosRow1 = [
  { src: '/images/logos/Tailwind.svg', name: 'Tailwind CSS', href: 'https://tailwindcss.com', variant: 'wordmark' as const },
  { src: '/images/logos/Linear.svg', name: 'Linear', href: 'https://linear.app', variant: 'wordmark' as const },
  { src: '/images/logos/Jira.svg', name: 'Jira', href: 'https://atlassian.com/software/jira', variant: 'wordmark' as const },
  { src: '/images/logos/Confluence.svg', name: 'Confluence', href: 'https://atlassian.com/software/confluence', variant: 'wordmark' as const },
  { src: '/images/logos/Productboard.svg', name: 'Productboard', href: 'https://productboard.com', variant: 'wordmark' as const },
  { src: '/images/logos/PostHog.svg', name: 'PostHog', href: 'https://posthog.com', variant: 'wordmark' as const },
  { src: '/images/logos/webflow.svg', name: 'Webflow', href: 'https://webflow.com', variant: 'wordmark' as const },
  { src: '/images/logos/Cursor.svg', name: 'Cursor', href: 'https://cursor.com', variant: 'wordmark' as const },
  { src: '/images/logos/ClaudeCode.svg', name: 'ClaudeCode', href: 'https://claude.com', variant: 'wordmark' as const },
  { src: '/images/logos/nuxt.svg', name: 'Nuxt', href: 'https://nuxt.com', variant: 'wordmark' as const },
  { src: '/images/logos/Screen%20Studio.svg', name: 'Screen Studio', href: 'https://screen.studio', variant: 'wordmark' as const },
]

const logosRow2 = [
  { src: '/images/logos/Figma.svg', name: 'Figma', href: 'https://figma.com', variant: 'icon' as const },
  { src: '/images/logos/Paper.svg', name: 'Paper', href: 'https://paper.design', variant: 'icon' as const },
  { src: '/images/logos/Sketch.svg', name: 'Sketch', href: 'https://sketch.com', variant: 'icon' as const },
  { src: '/images/logos/vue.svg', name: 'Vue', href: 'https://vuejs.org', variant: 'icon' as const },
  { src: '/images/logos/claude.svg', name: 'Claude', href: 'https://anthropic.com', variant: 'icon' as const },
]

withDefaults(
  defineProps<{
    subheading?: string
    title?: string
    description?: string
  }>(),
  {
    subheading: 'EMPOWERING DIGITAL EXCELLENCE THROUGH TOP-TIER TOOLS',
    title: 'Mastery in Industry-Leading Tools',
    description:
      'Using the right tools in the AI-powered world is crucial. My proficiency across top-tier platforms ensures efficient, high-quality, and data-driven solutions. From design to analytics, to code, to marketing channels these tools are leveraged to boost your digital solutions.',
  }
)
</script>
