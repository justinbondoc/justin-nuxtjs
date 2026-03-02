<template>
  <section v-if="problem" class="cs-problem py-10 sm:py-14">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <h2 class="mb-4 text-xl font-semibold tracking-tight">
        Problem
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
          type="image"
          :src="problem.workflowImage.src"
          :caption="problem.workflowImage.caption"
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
