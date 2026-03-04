<template>
  <figure v-if="type && src" class="cs-media-block">
    <div
      v-if="aspectRatio"
      class="aspect-wrapper"
      :style="aspectStyle"
    >
      <img
        v-if="type === 'image'"
        :src="src"
        :alt="caption ?? ''"
        loading="lazy"
        class="h-full w-full object-cover"
      >
      <video
        v-else-if="type === 'video' && !isEmbedUrl"
        :src="src"
        controls
        class="h-full w-full object-contain"
      />
      <iframe
        v-else-if="type === 'video' && isEmbedUrl"
        :src="embedSrc"
        title="Video"
        class="h-full w-full object-contain"
        frameborder="0"
        allowfullscreen
      />
    </div>
    <template v-else>
      <img
        v-if="type === 'image'"
        :src="src"
        :alt="caption ?? ''"
        loading="lazy"
        class="w-full object-cover"
      >
      <video
        v-else-if="type === 'video' && !isEmbedUrl"
        :src="src"
        controls
        class="w-full object-contain"
      />
      <iframe
        v-else-if="type === 'video' && isEmbedUrl"
        :src="embedSrc"
        title="Video"
        class="w-full aspect-video object-contain"
        frameborder="0"
        allowfullscreen
      />
    </template>
    <figcaption v-if="caption" class="mt-2 text-sm text-slate-400">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script setup>
const props = defineProps({
  type: { type: String, default: 'image' },
  src: { type: String, default: '' },
  aspectRatio: { type: String, default: '' },
  caption: { type: String, default: '' },
})

const isEmbedUrl = computed(() => {
  if (!props.src) return false
  return /youtube|youtu\.be|vimeo|player\.vimeo/.test(props.src)
})

const embedSrc = computed(() => {
  if (!props.src) return ''
  const s = props.src
  if (/youtube\.com\/watch\?v=/.test(s)) {
    const m = s.match(/v=([^&]+)/)
    return m ? `https://www.youtube.com/embed/${m[1]}` : s
  }
  if (/youtu\.be\//.test(s)) {
    const id = s.split('youtu.be/')[1]?.split('?')[0]
    return id ? `https://www.youtube.com/embed/${id}` : s
  }
  if (/vimeo\.com/.test(s)) {
    const m = s.match(/vimeo\.com\/(?:video\/)?(\d+)/)
    return m ? `https://player.vimeo.com/video/${m[1]}` : s
  }
  return s
})

const aspectStyle = computed(() => {
  if (!props.aspectRatio) return {}
  const [w, h] = props.aspectRatio.split('/').map(Number)
  if (w && h) return { aspectRatio: `${w} / ${h}` }
  return {}
})
</script>

<style scoped>
.aspect-wrapper {
  overflow: hidden;
  width: 100%;
}
</style>
