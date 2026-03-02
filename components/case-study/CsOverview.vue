<template>
  <section v-if="overview" class="cs-overview py-10 sm:py-14">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <p v-if="overview.companyContext" class="text-slate-300">
        {{ overview.companyContext }}
      </p>
      <p v-if="overview.mandate" class="mt-4 text-slate-300">
        {{ overview.mandate }}
      </p>
      <ul v-if="overview.constraints?.length" class="mt-6 list-inside list-disc space-y-1 text-sm text-slate-400">
        <li v-for="(c, i) in overview.constraints" :key="i">
          {{ c }}
        </li>
      </ul>
      <div v-if="overview.myContributions?.length" class="mt-8 space-y-4">
        <h3 class="text-sm font-semibold uppercase tracking-wider text-slate-400">
          My contributions
        </h3>
        <div
          v-for="(cont, i) in overview.myContributions"
          :key="i"
          class="border-l-2 border-neutral-700 pl-4"
        >
          <h4 v-if="cont.title" class="font-medium text-white">
            {{ cont.title }}
          </h4>
          <p v-if="cont.body" class="mt-1 text-sm text-slate-300">
            {{ cont.body }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  overview: { type: Object, default: null },
})
</script>
