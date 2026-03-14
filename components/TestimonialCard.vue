<template>
  <SpotlightCard
    :class="[
      'flex h-full min-h-[280px] sm:min-h-[320px] md:min-h-[360px] flex-col rounded-[var(--radius-paper)] border p-5 sm:p-6 md:p-8 lg:p-10 text-left transition-colors cursor-pointer',
      highlight ? 'border-[var(--color-paper-primary)]/40 bg-[var(--color-paper-white)]' : 'border-paper bg-[var(--color-paper-white)]',
    ]"
    :spotlight-color="highlight ? 'rgba(59, 130, 246, 0.14)' : 'rgba(59, 130, 246, 0.08)'"
    @click="modalOpen = true"
  >
    <article class="relative flex min-h-0 flex-1 flex-col">
      <blockquote class="mb-4 sm:mb-6 flex-1 text-paper text-base leading-relaxed line-clamp-8 sm:text-lg md:text-xl">
        "{{ quote }}"
      </blockquote>

      <div class="flex flex-wrap items-start gap-3 sm:gap-4">
        <div class="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-full bg-[var(--color-paper-border)]/50">
          <img
            v-if="photo"
            :src="photo"
            :alt="name"
            class="h-full w-full object-cover"
            @error="photoError = true"
          >
          <div
            v-if="photoError || !photo"
            class="flex h-full w-full items-center justify-center text-lg font-medium text-paper-muted"
          >
            {{ name.charAt(0) }}
          </div>
        </div>
        <div class="min-w-0 flex-1">
          <div class="flex flex-wrap items-center gap-2">
            <span class="font-paper-serif font-semibold text-paper text-base sm:text-lg">{{ name }}</span>
            <span
              v-if="highlightLabel"
              class="inline-flex items-center rounded-full border border-[var(--color-paper-primary)]/50 bg-[var(--color-paper-primary)]/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--color-paper-primary)]"
            >
              {{ highlightLabel }}
            </span>
          </div>
          <p class="mt-0.5 text-sm text-paper-muted sm:text-base">
            {{ role }}{{ company ? ` at ${company}` : '' }}
          </p>
          <p class="mt-1 text-xs text-paper-muted sm:text-sm">
            {{ relationship }}
          </p>
          <a
            v-if="linkedin"
            :href="linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-paper-muted transition-colors hover:text-[var(--color-paper-primary)]"
            @click.stop
          >
            Go to their LinkedIn
            <span aria-hidden="true">→</span>
          </a>
        </div>
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
          class="absolute inset-0 bg-black/30 backdrop-blur-sm"
          aria-hidden="true"
          @click="modalOpen = false"
        />
        <div
          class="relative flex max-h-[90vh] w-full max-w-lg flex-col rounded-[var(--radius-paper)] border border-paper bg-[var(--color-paper-white)] shadow-[var(--shadow-paper-drop)]"
          @click.stop
        >
          <div class="flex shrink-0 items-center justify-between gap-4 border-b border-paper p-4 sm:p-5">
            <div class="flex min-w-0 items-start gap-3">
              <div class="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[var(--color-paper-border)]/50">
                <img
                  v-if="photo"
                  :src="photo"
                  :alt="name"
                  class="h-full w-full object-cover"
                >
                <div
                  v-else
                  class="flex h-full w-full items-center justify-center text-lg font-medium text-paper-muted"
                >
                  {{ name.charAt(0) }}
                </div>
              </div>
              <div class="min-w-0">
                <h2 id="modal-title" class="font-paper-serif font-semibold text-paper">
                  {{ name }}
                  <span
                    v-if="highlightLabel"
                    class="ml-2 inline-flex items-center rounded-full border border-[var(--color-paper-primary)]/50 bg-[var(--color-paper-primary)]/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--color-paper-primary)]"
                  >
                    {{ highlightLabel }}
                  </span>
                </h2>
                <p class="mt-0.5 text-sm text-paper-muted">
                  {{ role }}{{ company ? ` at ${company}` : '' }}
                </p>
                <p class="mt-1 text-xs text-paper-muted">
                  {{ relationship }}
                </p>
              </div>
            </div>
            <button
              type="button"
              class="shrink-0 rounded-[var(--radius-paper)] p-2 text-paper-muted transition-colors hover:bg-black/5 hover:text-paper"
              aria-label="Close"
              @click="modalOpen = false"
            >
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="min-h-0 flex-1 overflow-y-auto p-4 sm:p-5">
            <blockquote class="text-paper leading-relaxed">
              "{{ quote }}"
            </blockquote>
            <a
              v-if="linkedin"
              :href="linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-paper-muted transition-colors hover:text-[var(--color-paper-primary)]"
            >
              Go to their LinkedIn
              <span aria-hidden="true">→</span>
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
    quote: string
    role: string
    company?: string
    relationship: string
    linkedin?: string
    highlight?: HighlightType
  }>(),
  { photo: '', linkedin: '', company: '', highlight: false }
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
