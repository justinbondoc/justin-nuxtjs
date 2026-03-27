<template>
  <footer class="border-t border-slate-700/60 py-10 text-sm text-slate-400">
    <div class="mx-auto w-full max-w-5xl px-4 sm:px-6">
      <div class="grid gap-8 sm:grid-cols-2">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Links
          </p>
          <div class="mt-3 flex flex-wrap gap-3">
            <a
              href="https://github.com/justinbondoc"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center rounded-full border border-neutral-700 bg-black/50 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-black/80 hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/justin-bondoc"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center rounded-full border border-neutral-700 bg-black/50 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-black/80 hover:text-white"
            >
              LinkedIn
            </a>
            <NuxtLink
              to="/resume"
              class="inline-flex items-center justify-center rounded-full border border-neutral-700 bg-black/50 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-black/80 hover:text-white"
            >
              Resume
            </NuxtLink>
            <a
              href="/#portfolio"
              class="inline-flex items-center justify-center rounded-full border border-neutral-700 bg-black/50 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-black/80 hover:text-white"
            >
              Portfolio
            </a>
          </div>
        </div>

        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Contact
          </p>
          <ul class="mt-3 space-y-2">
            <li>
              <a
                href="https://calendly.com/jstnbondoc/30min"
                target="_blank"
                rel="noopener noreferrer"
                class="underline decoration-slate-500/60 underline-offset-2 hover:text-lime-300 hover:decoration-lime-400"
              >
                Schedule a 30-minute call
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-10 flex flex-col items-center justify-between gap-2 border-t border-slate-700/40 pt-6 text-xs text-slate-500 sm:flex-row">
        <p>© {{ year }} Justin Bondoc</p>
        <p>Ontario, California</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

