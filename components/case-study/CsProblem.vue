<template>
  <section v-if="problem" class="cs-problem pt-10 pb-6 sm:pt-14 sm:pb-8">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <h2 class="mb-4 text-4xl font-semibold tracking-tight">
        <GradientText>Problem</GradientText>
      </h2>
      <p v-if="problem.userProblem" class="text-slate-300">
        {{ problem.userProblem }}
      </p>
      <p v-if="problem.businessProblem" class="mt-4 text-slate-300">
        {{ problem.businessProblem }}
      </p>
      <p v-if="problem.whyNow" class="mt-4 text-sm text-slate-400">
        {{ problem.whyNow }}
      </p>
      <div v-if="problem.workflowImage?.src" class="mt-8">
        <CaseStudyCsMediaBlock
          :type="problem.workflowImage.type || 'image'"
          :src="problem.workflowImage.src"
          :caption="problem.workflowImage.caption"
          :aspect-ratio="problem.workflowImage.aspectRatio"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  problem: { type: Object, default: null },
})
</script>
