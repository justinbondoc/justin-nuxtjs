<template>
  <section id="research" class="py-10 sm:py-14 scroll-mt-24">
    <div class="mx-auto max-w-5xl px-4 sm:px-6">
      <!-- Header -->
      <p class="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-center text-slate-400">
        Research and AI
      </p>
      <h2 class="mb-4 text-4xl font-semibold tracking-tight text-center text-white sm:text-5xl lg:text-6xl">
        How I research before I build<br>
        <GradientText>and how AI makes it faster</GradientText>
      </h2>
      <p class="margin-auto text-center text-slate-300">
        I keep a steady stream of product signals coming in and run a clear research loop.
      </p>

      <!-- Always-on signal sources -->
      <div class="mt-8">
        <p class="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
          Ongoing sources I watch
        </p>
        <div class="grid gap-4 sm:grid-cols-2">
          <article
            v-for="source in signalSources"
            :key="source.name"
            class="rounded-lg border border-slate-800 bg-black/60 p-4"
          >
            <header class="mb-3 flex items-center justify-between gap-3">
              <h3 class="text-base font-medium text-slate-100">
                {{ source.name }}
              </h3>
              <span
                class="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/70 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate-300"
              >
                {{ source.type }}
              </span>
            </header>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="item in source.items"
                :key="item"
                class="rounded-full bg-slate-900/80 px-2 py-0.5 text-xs text-slate-300"
              >
                {{ item }}
              </span>
            </div>
          </article>
        </div>
      </div>

      <!-- Slack bridge -->
      <div class="mt-8 flex items-center gap-3">
        <div class="hidden h-px flex-1 bg-linear-to-r from-transparent via-slate-700 to-slate-700 sm:block" />
        <div
          class="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-black/80 px-3 py-1.5 text-[0.7rem] text-slate-200"
        >
          <span class="h-2 w-2 rounded-full bg-lime-400" />
          <span class="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-slate-300">Slack</span>
          <span class="text-[0.75rem] text-slate-400">
            Slack sends these events into one place so I can see important signals quickly
          </span>
        </div>
        <div class="hidden h-px flex-1 bg-linear-to-l from-transparent via-slate-700 to-slate-700 sm:block" />
      </div>

      <!-- Down arrow -->
      <div class="mt-4 flex items-center justify-center">
        <div class="flex h-8 flex-col items-center justify-between">
          <div class="h-4 w-px bg-slate-800" />
          <span class="text-xs text-slate-500">↓</span>
        </div>
      </div>

      <!-- Column headers -->
      <div
        class="mt-4 grid gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-500 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)]"
      >
        <div class="pl-7 sm:pl-8">
          Research step
        </div>
        <div class="flex items-center gap-2 pl-1">
          <span class="h-1.5 w-1.5 rounded-full bg-lime-300" />
          <span>How AI helps</span>
        </div>
      </div>

      <!-- Phase rows -->
      <div class="mt-3 space-y-3">
        <div
          v-for="(phase, index) in phases"
          :key="phase.number"
        >
          <AnimatedContent
            :delay="index * 0.08"
            :distance="40"
            class="block"
          >
            <div
              class="group grid gap-px overflow-hidden rounded-lg border border-slate-800 bg-black/40 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)]"
            >
            <!-- Left: research phase -->
            <div
              class="flex items-start gap-3 bg-black/70 px-4 py-3 transition-colors group-hover:bg-black/90 sm:py-4"
            >
              <span class="mt-0.5 text-xs font-mono text-slate-500">
                {{ phase.number }}
              </span>
              <div class="space-y-1">
                <p class="text-sm font-medium text-slate-100">
                  {{ phase.label }}
                </p>
                <p class="text-sm text-slate-300">
                  {{ phase.description }}
                </p>
              </div>
              <span
                class="ml-auto inline-flex items-center rounded-full px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em]"
                :class="tagClass(phase.tag)"
              >
                {{ phase.tag }}
              </span>
            </div>

            <!-- Right: AI augmentation -->
            <div
              class="flex flex-col gap-1 bg-slate-900/50 px-4 py-3 transition-colors group-hover:bg-slate-900/80 sm:py-4"
            >
              <div class="flex flex-wrap items-center justify-between gap-3">
                <p class="text-sm font-medium text-slate-100">
                  {{ phase.ai.label }}
                </p>
                <div class="inline-flex flex-wrap items-center gap-2">
                  <span
                    class="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-950/70 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em]"
                  >
                    <span
                      class="h-1.5 w-1.5 rounded-full"
                      :class="toolDotClass(phase.ai.tool)"
                    />
                    <span class="text-slate-200">
                      {{ phase.ai.tool }}
                    </span>
                  </span>
                  <span
                    v-for="pill in phase.ai.extraPills"
                    :key="pill"
                    class="inline-flex items-center gap-1 rounded-full border border-slate-600 bg-slate-800/70 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate-200"
                  >
                    {{ pill }}
                  </span>
                </div>
              </div>
              <p class="text-sm text-slate-300">
                {{ phase.ai.detail }}
              </p>
            </div>
          </div>

          <!-- Connector line between rows -->
          <div
            v-if="index < phases.length - 1"
            class="ml-8 h-4 border-l border-slate-800 sm:ml-9"
          />
          </AnimatedContent>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
type PhaseTag = 'Internal' | 'Sourcing' | 'External' | 'Design'
type ToolName = 'Claude' | 'Cursor' | 'Claude + Cursor'

type Phase = {
  number: string
  label: string
  description: string
  tag: PhaseTag
  ai: {
    tool: ToolName
    label: string
    detail: string
    extraPills?: string[]
  }
}

type SignalSource = {
  name: string
  type: string
  items: string[]
}

const signalSources: SignalSource[] = [
  {
    name: 'Front App',
    type: 'Reactive',
    items: ['Support tickets', 'CSM interactions'],
  },
  {
    name: 'PostHog',
    type: 'Behavioral',
    items: ['Feature usage events', 'User identification'],
  },
]

const phases: Phase[] = [
  {
    number: '01',
    label: 'Review existing feedback',
    description:
      'Pull together existing feedback, tickets and notes, then write down the main questions to answer.',
    tag: 'Internal',
    ai: {
      tool: 'Claude',
      label: 'Summarize patterns',
      detail:
        'Use Claude to summarize support tickets and CSM notes, group similar themes and draft a short problem statement in minutes instead of hours.',
    },
  },
  {
    number: '02',
    label: 'Talk with internal teammates',
    description: 'Meet with CSMs and other teammates to check assumptions and fill in gaps.',
    tag: 'Internal',
    ai: {
      tool: 'Claude',
      label: 'Prepare for conversations',
      detail:
        'Use Claude to help draft discussion guides, list likely questions and role-play answers so conversations stay focused.',
    },
  },
  {
    number: '03',
    label: 'Find customers to talk to',
    description:
      'Work with CSMs and PostHog usage data to pick customers who match the problem area.',
    tag: 'Sourcing',
    ai: {
      tool: 'Claude',
      label: 'Write outreach messages',
      detail:
        'Use Claude to write short, clear outreach emails based on each customer’s actual product usage instead of a generic template.',
    },
  },
  {
    number: '04',
    label: 'Customer interviews',
    description:
      'Run interviews to understand how customers see the problem and whether my framing makes sense.',
    tag: 'External',
    ai: {
      tool: 'Claude',
      label: 'Summarize interviews',
      detail:
        'Paste interview notes or transcripts into Claude to get a simple summary with key quotes, surprises and how the findings change the original idea.',
    },
  },
  {
    number: '05',
    label: 'First design ideas',
    description:
      'Always come up with three different ways to approach the problem first, then turn the best direction into early concepts and rough flows.',
    tag: 'Design',
    ai: {
      tool: 'Cursor',
      label: 'Set up prototypes',
      detail:
        'Use Figma for quick wireframes, then use Cursor and the MCP server to spin up simple prototypes from those designs or short written descriptions so I can try ideas in code quickly.',
      extraPills: ['Figma MCP'],
    },
  },
  {
    number: '06',
    label: 'Internal review',
    description:
      'Share designs with CSMs and subject matter experts to check if they fit what we are hearing.',
    tag: 'Internal',
    ai: {
      tool: 'Claude',
      label: 'Stress-test the work',
      detail:
        'Ask Claude to list likely concerns and tough questions from a skeptical stakeholder so I can catch issues before a wider review.',
    },
  },
  {
    number: '07',
    label: 'Customer review',
    description: 'Show designs to customers and confirm the solution fits the problem we heard.',
    tag: 'External',
    ai: {
      tool: 'Claude + Cursor',
      label: 'Fast changes between sessions',
      detail:
        'Use Claude to summarize feedback from each session and Cursor to make small product changes between calls so later customers see an improved version.',
    },
  },
]

function tagClass(tag: PhaseTag) {
  if (tag === 'Internal') {
    return 'border-amber-500/40 bg-amber-500/10 text-amber-200'
  }
  if (tag === 'Sourcing') {
    return 'border-sky-500/40 bg-sky-500/10 text-sky-200'
  }
  if (tag === 'External') {
    return 'border-green-500/40 bg-green-500/10 text-green-200'
  }
  if (tag === 'Design') {
    return 'border-fuchsia-500/40 bg-fuchsia-500/10 text-fuchsia-200'
  }
  return 'border-slate-600 bg-slate-800 text-slate-200'
}

function toolDotClass(tool: ToolName) {
  if (tool === 'Claude') {
    return 'bg-amber-300'
  }
  if (tool === 'Cursor') {
    return 'bg-sky-300'
  }
  // Claude + Cursor
  return 'bg-violet-300'
}
</script>

