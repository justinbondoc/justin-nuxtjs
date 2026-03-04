<template>
  <ClientOnly>
    <figure class="img-comparison-slider-wrapper">
      <ImgComparisonSliderLib class="img-comparison-slider w-full">
        <img
          slot="first"
          class="w-full h-full object-cover"
          :src="beforeSrc"
          :alt="beforeAlt"
        >
        <img
          slot="second"
          class="w-full h-full object-cover"
          :src="afterSrc"
          :alt="afterAlt"
        >
        <div slot="handle" class="comparison-handle" aria-hidden="true">
          <span class="comparison-handle-grip">
            <GripVertical :size="16" />
          </span>
        </div>
      </ImgComparisonSliderLib>
      <figcaption v-if="caption" class="mt-2 text-sm text-slate-400">
        {{ caption }}
      </figcaption>
    </figure>
    <template #fallback>
      <figure class="img-comparison-slider-fallback flex gap-4 overflow-x-auto">
        <img
          :src="beforeSrc"
          :alt="beforeAlt"
          class="shrink-0 w-full max-w-md object-cover rounded"
        >
        <img
          :src="afterSrc"
          :alt="afterAlt"
          class="shrink-0 w-full max-w-md object-cover rounded"
        >
      </figure>
    </template>
  </ClientOnly>
</template>

<script setup>
import { ImgComparisonSlider as ImgComparisonSliderLib } from '@img-comparison-slider/vue'
import { GripVertical } from 'lucide-vue-next'

defineProps({
  beforeSrc: { type: String, required: true },
  afterSrc: { type: String, required: true },
  beforeAlt: { type: String, default: 'Before' },
  afterAlt: { type: String, default: 'After' },
  caption: { type: String, default: '' },
})
</script>

<style scoped>
.img-comparison-slider-wrapper {
  width: 100%;
}

/* Divider and handle: set CSS variables on the web component host */
.img-comparison-slider-wrapper :deep(img-comparison-slider.img-comparison-slider) {
  --divider-width: 2px;
  --divider-color: rgba(255, 255, 255, 0.9);
  --divider-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  --handle-position-start: 50%;
}

/* Green focus ring when dragging (override browser default blue) */
.img-comparison-slider-wrapper :deep(img-comparison-slider.img-comparison-slider:focus),
.img-comparison-slider-wrapper :deep(img-comparison-slider.img-comparison-slider:focus-visible) {
  outline: 2px solid rgb(34, 197, 94);
  outline-offset: 2px;
}

/* Custom handle (replaces default when slot="handle" is used) */
.comparison-handle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  line-height: 0;
}

.comparison-handle-grip {
  position: relative;
  z-index: 1;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 50%;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  color: #334155;
}

.comparison-handle-grip svg {
  width: 16px;
  height: 16px;
}
</style>
