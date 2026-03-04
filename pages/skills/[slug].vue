<template>
  <main class="pb-20">
    <div class="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <NuxtLink
        to="/case-studies/ai-product-workflow"
        class="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-10"
      >
        <ArrowLeft :size="14" />
        Back to case study
      </NuxtLink>

      <div v-if="pending" class="text-slate-400">Loading…</div>
      <div v-else-if="error" class="text-red-400">Failed to load skill.</div>
      <template v-else>
        <header class="mb-10 border-b border-neutral-700/70 pb-8">
          <p class="text-xs font-mono text-green-400 uppercase tracking-widest mb-2">Claude Code Skill</p>
          <h1 class="text-3xl font-semibold text-white">/{{ slug }}</h1>
          <p v-if="frontmatter.description" class="mt-3 text-slate-400 text-lg leading-relaxed">{{ frontmatter.description }}</p>
        </header>
        <div
          class="skill-content prose prose-invert prose-slate max-w-none"
          v-html="rendered"
        />
      </template>
    </div>
  </main>
</template>

<script setup>
import { marked } from 'marked'
import { ArrowLeft } from 'lucide-vue-next'

const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug

const { data: raw, pending, error } = await useFetch(`/skills/${slug}.md`, { responseType: 'text' })

const frontmatter = computed(() => {
  if (!raw.value) return {}
  const match = raw.value.match(/^---\n([\s\S]*?)\n---/)
  if (!match) return {}
  const block = match[1]
  const descMatch = block.match(/^description:\s*(?:(>)\s*\n)?([\s\S]*?)(?=\n[A-Za-z_-]+:|\n*$)/m)
  if (!descMatch) return {}
  let desc = descMatch[2].trim()
  if (descMatch[1] === '>') {
    desc = desc.split(/\n/).map(line => line.replace(/^\s+/, '')).join(' ')
  }
  return { description: desc || null }
})

const rendered = computed(() => {
  if (!raw.value) return ''
  const content = raw.value.replace(/^---[\s\S]*?---\n/, '')
  return marked(content)
})

useHead({
  title: `/${slug} skill`,
})
</script>

<style scoped>
.skill-content :deep(h1),
.skill-content :deep(h2),
.skill-content :deep(h3) {
  color: white;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}
.skill-content :deep(h1) { font-size: 1.5rem; }
.skill-content :deep(h2) { font-size: 1.25rem; }
.skill-content :deep(h3) { font-size: 1.125rem; }

.skill-content :deep(p) {
  color: rgb(203 213 225);
  line-height: 1.75;
  margin-bottom: 1rem;
}

.skill-content :deep(ul),
.skill-content :deep(ol) {
  color: rgb(203 213 225);
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}
.skill-content :deep(li) { margin-bottom: 0.35rem; }

.skill-content :deep(code) {
  font-family: ui-monospace, monospace;
  font-size: 0.8125rem;
  background: rgb(30 41 59 / 0.8);
  color: rgb(134 239 172);
  padding: 0.15em 0.4em;
  border-radius: 4px;
}

.skill-content :deep(pre) {
  background: rgb(15 23 42);
  border: 1px solid rgb(51 65 85 / 0.6);
  border-radius: 8px;
  padding: 1.25rem;
  overflow-x: auto;
  margin: 1.25rem 0;
}
.skill-content :deep(pre code) {
  background: transparent;
  padding: 0;
  color: rgb(226 232 240);
  font-size: 0.8125rem;
}

.skill-content :deep(blockquote) {
  border-left: 3px solid rgb(34 197 94);
  padding-left: 1rem;
  color: rgb(148 163 184);
  margin: 1rem 0;
}

.skill-content :deep(hr) {
  border-color: rgb(51 65 85 / 0.5);
  margin: 2rem 0;
}

.skill-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 1.25rem 0;
  font-size: 0.875rem;
}
.skill-content :deep(th) {
  text-align: left;
  padding: 0.5rem 0.75rem;
  color: rgb(148 163 184);
  border-bottom: 1px solid rgb(51 65 85);
  font-weight: 500;
}
.skill-content :deep(td) {
  padding: 0.5rem 0.75rem;
  color: rgb(203 213 225);
  border-bottom: 1px solid rgb(30 41 59);
}

.skill-content :deep(strong) { color: white; font-weight: 600; }
.skill-content :deep(a) { color: rgb(74 222 128); }
.skill-content :deep(a:hover) { color: white; }
</style>
