<template>
  <SpotlightCard
    :class="[
      'group flex h-full min-h-[240px] sm:min-h-[280px] md:min-h-[320px] flex-col border p-4 sm:p-5 md:p-6 lg:p-7 text-left transition-colors cursor-pointer',
      highlight ? 'border-[#27FF64]/40 bg-slate-900/60' : 'border-slate-800 bg-slate-900/40',
    ]"
    :spotlight-color="'rgba(39, 255, 100, 0.28)'"
    @click="modalOpen = true"
  >
    <article class="relative flex min-h-0 flex-1 flex-col">
      <blockquote class="mb-3 flex-1 text-slate-200 text-sm sm:text-base leading-relaxed line-clamp-5">
        “{{ displayQuote }}”
      </blockquote>

      <div class="flex flex-wrap items-start gap-3 sm:gap-4">
        <div class="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-full bg-slate-700">
          <img
            v-if="photo"
            :src="photo"
            :alt="name"
            class="h-full w-full object-cover"
            @error="photoError = true"
          >
          <div
            v-if="photoError || !photo"
            class="flex h-full w-full items-center justify-center text-lg font-medium text-slate-500"
          >
            {{ name.charAt(0) }}
          </div>
        </div>
        <div class="min-w-0 flex-1">
          <div class="flex flex-wrap items-center gap-2">
            <span class="font-semibold text-white text-base sm:text-lg">{{ name }}</span>
            <span
              v-if="highlightLabel"
              class="inline-flex items-center rounded-full border border-[#27FF64]/50 bg-[#27FF64]/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-[#27FF64]"
            >
              {{ highlightLabel }}
            </span>
          </div>
          <p class="mt-0.5 text-sm sm:text-base text-slate-400">
            {{ role }}{{ company ? ` at ${company}` : '' }}
          </p>
          <p v-if="relationship" class="mt-1 text-xs sm:text-sm text-slate-500">
            {{ relationship }}
          </p>
          <a
            v-if="linkedin"
            :href="linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors"
            @click.stop
          >
            Go to their LinkedIn
            <span class="text-slate-500" aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div class="mt-4 flex items-center justify-between gap-3 border-t border-slate-700/60 pt-3">
        <span class="text-xs font-medium text-slate-400">
          Click to read the full quote
        </span>
        <span class="inline-flex items-center gap-1.5 rounded-full border border-slate-600/70 bg-slate-900/40 px-2.5 py-1 text-xs font-semibold text-white transition-colors group-hover:border-slate-500 group-hover:bg-slate-900/70">
          Read full
          <span class="text-slate-300" aria-hidden="true">→</span>
        </span>
      </div>
    </article>
  </SpotlightCard>

  <Teleport to="body">
    <Transition name="modal">
      <div
        ref="modalRef"
        tabindex="-1"
        v-if="modalOpen"
        class="fixed inset-0 z-100 flex items-center justify-center p-4 outline-none"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        @keydown.escape="modalOpen = false"
      >
        <div
          class="absolute inset-0 bg-black/70 backdrop-blur-sm"
          aria-hidden="true"
          @click="modalOpen = false"
        />
        <div
          class="relative flex max-h-[90vh] w-full max-w-lg flex-col rounded-xl border border-slate-700 bg-slate-900 shadow-xl"
          @click.stop
        >
          <div class="flex shrink-0 items-center justify-between gap-4 border-b border-slate-700/80 p-4 sm:p-5">
            <div class="flex min-w-0 items-start gap-3">
              <div class="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-slate-700">
                <img
                  v-if="photo"
                  :src="photo"
                  :alt="name"
                  class="h-full w-full object-cover"
                >
                <div
                  v-else
                  class="flex h-full w-full items-center justify-center text-lg font-medium text-slate-500"
                >
                  {{ name.charAt(0) }}
                </div>
              </div>
              <div class="min-w-0">
                <h2 id="modal-title" class="font-semibold text-white">
                  {{ name }}
                  <span
                    v-if="highlightLabel"
                    class="ml-2 inline-flex items-center rounded-full border border-[#27FF64]/50 bg-[#27FF64]/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-[#27FF64]"
                  >
                    {{ highlightLabel }}
                  </span>
                </h2>
                <p class="mt-0.5 text-sm text-slate-400">
                  {{ role }}{{ company ? ` at ${company}` : '' }}
                </p>
                <p class="mt-1 text-xs text-slate-500">
                  {{ relationship }}
                </p>
              </div>
            </div>
            <button
              type="button"
              class="shrink-0 rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
              aria-label="Close"
              @click="modalOpen = false"
            >
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="min-h-0 flex-1 overflow-y-auto p-4 sm:p-5">
            <blockquote class="text-slate-200 leading-relaxed">
              "{{ quote }}"
            </blockquote>
            <a
              v-if="linkedin"
              :href="linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              Go to their LinkedIn
              <span class="text-slate-500" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
type HighlightType = 'ceo' | 'cto' | boolean

const props = withDefaults(
  defineProps<{
    name: string
    photo?: string
    excerpt?: string
    quote: string
    role: string
    company?: string
    relationship?: string
    linkedin?: string
    highlight?: HighlightType
  }>(),
  { photo: '', linkedin: '', company: '', relationship: '', highlight: false, excerpt: '' }
)

const photoError = ref(false)
const modalOpen = ref(false)
const modalRef = ref<HTMLElement | null>(null)

watch(modalOpen, (open) => {
  if (open) {
    nextTick(() => modalRef.value?.focus())
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

onUnmounted(() => {
  document.body.style.overflow = ''
})

const highlightLabel = computed(() => {
  if (props.highlight === 'ceo') return 'CEO'
  if (props.highlight === 'cto') return 'CTO'
  return ''
})

const displayQuote = computed(() => {
  const fromExcerpt = (props.excerpt ?? '').trim()
  if (fromExcerpt) return fromExcerpt

  const q = props.quote.trim()
  // fallback: first "sentence-ish" chunk
  const match = q.match(/^(.+?[.!?])(\s|$)/)
  return (match?.[1] ?? q).replace(/^["“”]+|["“”]+$/g, '')
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.2s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.98);
}
</style>
