<template>
  <nav
    class="cs-nav sticky top-0 z-40 border-b border-neutral-700/70 bg-black/80 py-3 backdrop-blur-sm"
  >
    <div class="mx-auto flex max-w-7xl items-center gap-4 px-4 sm:px-6">
      <span v-if="title" class="truncate text-sm font-medium text-slate-200">
        {{ title }}
      </span>
      <div class="flex flex-wrap gap-1">
        <a
          v-for="s in sections"
          :key="s.id"
          :href="`#${s.id}`"
          class="rounded px-2 py-1 text-sm transition-colors"
          :class="activeId === s.id ? 'bg-lime-700 text-white' : 'text-slate-400 hover:bg-lime-800 hover:text-slate-200'"
          :aria-current="activeId === s.id ? 'location' : undefined"
        >
          {{ s.label }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: '' },
  sections: { type: Array, default: () => [] },
})

const activeId = ref('')
let scrollListener = null

function updateActive() {
  if (typeof window === 'undefined') return
  const viewportCenter = window.innerHeight * 0.4
  let nextActive = ''
  for (const s of props.sections) {
    const el = document.getElementById(s.id)
    if (!el) continue
    const rect = el.getBoundingClientRect()
    if (rect.top <= viewportCenter && rect.bottom > 0) {
      nextActive = s.id
    }
  }
  if (nextActive) activeId.value = nextActive
  else if (props.sections.length) activeId.value = props.sections[0].id
}

onMounted(() => {
  scrollListener = () => updateActive()
  window.addEventListener('scroll', scrollListener, { passive: true })
  updateActive()
})

onUnmounted(() => {
  if (typeof window !== 'undefined' && scrollListener) {
    window.removeEventListener('scroll', scrollListener)
  }
})
</script>
