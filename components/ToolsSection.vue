<template>
  <section class="bg-black py-16 sm:py-20">
    <div class="mx-auto max-w-5xl px-4 sm:px-6 text-center">
      <p
        class="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-400"
      >
        {{ subheading }}
      </p>
      <h2 class="mb-6 text-7xl font-medium tracking-tight text-white">
        Tools I use in a <GradientText>release cycle</GradientText>
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
            <span
              v-for="logo in logosRow1"
              :key="logo.src"
              class="group relative inline-flex items-center justify-center"
              role="listitem"
            >
              <a
                :href="logo.href"
                :aria-label="logo.name"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center transition-opacity hover:opacity-90 focus:opacity-90 focus:outline-none"
                :class="logo.variant === 'icon' ? 'h-10 w-10 shrink-0' : ''"
              >
                <img
                  :src="logo.src"
                  :alt="logo.name"
                  :class="logo.variant === 'icon' ? 'h-8 w-8 object-contain object-center' : 'h-8 max-w-[120px] object-contain object-center'"
                >
              </a>
              <span
                v-if="logo.tooltip"
                class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 text-xs text-slate-200 bg-slate-800 rounded border border-slate-600 opacity-0 pointer-events-none whitespace-nowrap transition-opacity duration-150 group-hover:opacity-100 z-10"
              >
                {{ logo.tooltip }}
              </span>
            </span>
          </slot>
        </div>
        <div
          class="flex flex-wrap items-center justify-center gap-8 sm:gap-12"
          role="list"
        >
          <slot name="logos-row-2">
            <span
              v-for="logo in logosRow2"
              :key="logo.src"
              class="group relative inline-flex items-center justify-center"
              role="listitem"
            >
              <a
                :href="logo.href"
                :aria-label="logo.name"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center transition-opacity hover:opacity-90 focus:opacity-90 focus:outline-none"
                :class="logo.variant === 'icon' ? 'h-10 w-10 shrink-0' : ''"
              >
                <img
                  :src="logo.src"
                  :alt="logo.name"
                  :class="logo.variant === 'icon' ? 'h-8 w-8 object-contain object-center' : 'h-8 max-w-[120px] object-contain object-center'"
                >
              </a>
              <span
                v-if="logo.tooltip"
                class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 text-xs text-slate-200 bg-slate-800 rounded border border-slate-600 opacity-0 pointer-events-none whitespace-nowrap transition-opacity duration-150 group-hover:opacity-100 z-10"
              >
                {{ logo.tooltip }}
              </span>
            </span>
          </slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type LogoItem = { src: string; name: string; href: string; variant: 'icon' | 'wordmark'; tooltip?: string }

const logosRow1: LogoItem[] = [
  { src: '/images/logos/ClaudeCode.svg', name: 'ClaudeCode', href: 'https://claude.com', variant: 'wordmark' as const, tooltip: 'I use it for research, code, and prototyping.' },
  { src: '/images/logos/Tailwind.svg', name: 'Tailwind CSS', href: 'https://tailwindcss.com', variant: 'wordmark' as const, tooltip: 'I style frontend UIs with utility classes.' },
  { src: '/images/logos/Cursor.svg', name: 'Cursor', href: 'https://cursor.com', variant: 'wordmark' as const, tooltip: 'I code here daily and use it to prep for stakeholder meetings.' },
  { src: '/images/logos/Linear.svg', name: 'Linear', href: 'https://linear.app', variant: 'wordmark' as const, tooltip: 'I track issues and ship in cycles here with the help-docs team.' },
  { src: '/images/logos/Jira.svg', name: 'Jira', href: 'https://atlassian.com/software/jira', variant: 'wordmark' as const, tooltip: 'I run sprints and backlogs where all software projects live.' },
  { src: '/images/logos/Confluence.svg', name: 'Confluence', href: 'https://atlassian.com/software/confluence', variant: 'wordmark' as const, tooltip: 'I keep specs, runbooks, and decisions in one place.' },
  { src: '/images/logos/Productboard.svg', name: 'Productboard', href: 'https://productboard.com', variant: 'wordmark' as const, tooltip: 'I use it to manage feature requests and prioritize product-level work.' },
  { src: '/images/logos/PostHog.svg', name: 'PostHog', href: 'https://posthog.com', variant: 'wordmark' as const, tooltip: 'I measure product usage and analyze user behavior.' },
  // { src: '/images/logos/webflow.svg', name: 'Webflow', href: 'https://webflow.com', variant: 'wordmark' as const, tooltip: 'I build marketing sites and prototypes without touching code.' },
  { src: '/images/logos/nuxt.svg', name: 'Nuxt', href: 'https://nuxt.com', variant: 'wordmark' as const, tooltip: 'I use it to build this site and axure.com.' },
  { src: '/images/logos/Screen%20Studio.svg', name: 'Screen Studio', href: 'https://screen.studio', variant: 'wordmark' as const, tooltip: 'I record product demos and how-tos with smooth cursors.' },
  { src: '/images/logos/Jitter.svg', name: 'Jitter', href: 'https://jitter.video', variant: 'wordmark' as const, tooltip: 'I make short motion graphics and Loom-style intros.' },
  { src: '/images/logos/Front.svg', name: 'Front', href: 'https://front.com', variant: 'wordmark' as const, tooltip: 'I manage shared inboxes and keep customer comms in one place.' },
]

const logosRow2: LogoItem[] = [
  { src: '/images/logos/Figma.svg', name: 'Figma', href: 'https://figma.com', variant: 'icon' as const, tooltip: 'Used for all design related work: design systems, UI, icons, and graphics.' },
  { src: '/images/logos/Sketch.svg', name: 'Sketch', href: 'https://sketch.com', variant: 'icon' as const, tooltip: 'I use it for high-fidelity mockups and icon sets on Mac.' },
  { src: '/images/logos/vue.svg', name: 'Vue', href: 'https://vuejs.org', variant: 'icon' as const, tooltip: 'I build UIs and features with Vue and the ecosystem (Nuxt, Pinia).' },
  { src: '/images/logos/claude.svg', name: 'Claude', href: 'https://anthropic.com', variant: 'icon' as const, tooltip: 'I use it for writing, research, and reasoning on complex tasks.' },
]

withDefaults(
  defineProps<{
    subheading?: string
    title?: string
    description?: string
  }>(),
  {
    subheading: 'Discovery, design, and shipping',
    title: 'Tools I use every release cycle',
    description:
      'I use these for product discovery, design, analytics, and building. From Figma and PostHog to Cursor and Nuxt, they keep me close to the work and able to ship quickly.',
  }
)
</script>
