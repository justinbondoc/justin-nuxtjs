<template>
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0 translate-y-2 scale-95"
    enter-to-class="opacity-100 translate-y-0 scale-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100 translate-y-0 scale-100"
    leave-to-class="opacity-0 translate-y-1 scale-95"
  >
    <div
      v-if="show"
      class="fixed inset-0 z-60 flex items-center justify-center bg-black/70 backdrop-blur-md px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Ask Justin"
      @click.self="close"
    >
      <div
        class="relative w-full max-w-2xl rounded-2xl border border-slate-800 bg-black/90 shadow-xl shadow-black/60"
      >
        <button
          type="button"
          class="absolute right-3 top-3 rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-800/80 hover:text-white"
          aria-label="Close"
          @click="close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
          </svg>
        </button>

        <form class="p-4 pt-6 sm:p-5 sm:pt-7" @submit.prevent="onSubmit">
          <p class="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 text-center">
            Ask Justin anything
          </p>
          <div
            class="relative rounded-2xl bg-black/70 transition-shadow duration-300 border border-[#39ff14]"
            :style="isFocused ? {} : { boxShadow: '0 0 16px rgba(57, 255, 20, 0.5), 0 0 32px rgba(57, 255, 20, 0.25)' }"
          >
            <textarea
              ref="textareaRef"
              v-model="localQuery"
              rows="4"
              placeholder="Hi! 👋 Ask me anything about my experience, case-studies, hobbies, or how I think..."
              class="chat-font min-h-[120px] w-full resize-y rounded-2xl border-0 bg-transparent px-4 py-3 pr-12 pb-10 text-base sm:text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none sm:min-h-[100px]"
              autocomplete="off"
              @focus="isFocused = true"
              @blur="isFocused = false"
              @keydown="onKeydown"
            />
            <button
              type="submit"
              aria-label="Ask"
              class="absolute bottom-3 right-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-transparent bg-green-600 text-white shadow-sm transition-colors hover:bg-green-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M12 19V5" />
                <path d="M5 12l7-7 7 7" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const props = defineProps<{
  show: boolean
}>()

const emit = defineEmits<{
  (e: 'update:show', value: boolean): void
}>()

const textareaRef = ref<HTMLTextAreaElement | null>(null)
const localQuery = ref('')
const isFocused = ref(false)

watch(
  () => props.show,
  (visible) => {
    if (!visible) return
    nextTick(() => {
      textareaRef.value?.focus()
    })
  },
  { immediate: true }
)

function close() {
  emit('update:show', false)
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    e.preventDefault()
    close()
    return
  }
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    onSubmit()
  }
}

function onSubmit() {
  const trimmed = localQuery.value.trim()
  const router = useRouter()
  router.push({
    path: '/chat',
    query: trimmed ? { q: trimmed } : {}
  })
  localQuery.value = ''
  close()
}
</script>

