<template>
  <main class="space-y-16 sm:space-y-20">
    <section id="top" class="flex items-center py-12 sm:py-16">
      <div class="mx-auto max-w-2xl px-4 sm:px-6">
        <p class="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
          Hi, my name is
        </p>
        <h1 class="mb-3 text-3xl font-semibold tracking-tight sm:text-4xl">Your Name</h1>
        <p class="mb-6 max-w-prose text-slate-300">
          A short tagline about what you do.
        </p>
        <div class="flex flex-wrap gap-3">
          <a
            href="#about"
            class="inline-flex items-center justify-center rounded-full border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-slate-50 shadow-sm transition-colors hover:bg-indigo-400"
          >
            About me
          </a>
          <a
            href="#projects"
            class="inline-flex items-center justify-center rounded-full border border-slate-700 bg-transparent px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-800/80 hover:text-white"
          >
            View projects
          </a>
          <a
            href="#contact"
            class="inline-flex items-center justify-center rounded-full border border-slate-700 bg-transparent px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-800/80 hover:text-white"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>

    <section id="about" class="py-10 sm:py-14 scroll-mt-24">
      <div class="mx-auto max-w-2xl px-4 sm:px-6">
        <h2 class="mb-4 text-2xl font-semibold tracking-tight">About</h2>
        <p class="text-slate-300">
          This is a placeholder about section. Replace this text with a short bio that describes who
          you are and what you do.
        </p>

        <h3 class="mt-8 mb-3 text-lg font-semibold">Skills &amp; Technologies</h3>
        <ul class="mt-1 list-disc space-y-1 pl-5 text-slate-200">
          <li>JavaScript / TypeScript</li>
          <li>Vue &amp; Nuxt</li>
          <li>Frontend architecture</li>
          <li>Testing &amp; tooling</li>
        </ul>
      </div>
    </section>

    <section id="projects" class="py-10 sm:py-14 scroll-mt-24">
      <div class="mx-auto max-w-2xl px-4 sm:px-6">
        <h2 class="mb-4 text-2xl font-semibold tracking-tight">Projects</h2>
        <p class="mb-4 text-slate-300">
          Here are a few placeholder projects. Swap these out with your own work.
        </p>

        <div class="mt-6 grid gap-4 sm:grid-cols-2">
          <article
            class="rounded-xl border border-slate-700/70 bg-gradient-to-br from-indigo-500/20 via-slate-900 to-slate-900 p-4"
          >
            <h3 class="text-lg font-semibold">Project One</h3>
            <p class="mt-1 text-sm text-slate-200">
              A short description of what this project is about and what you worked on.
            </p>
            <p class="mt-3 text-xs font-medium text-slate-400">Nuxt · Vue · TypeScript</p>
          </article>

          <article
            class="rounded-xl border border-slate-700/70 bg-gradient-to-br from-indigo-500/20 via-slate-900 to-slate-900 p-4"
          >
            <h3 class="text-lg font-semibold">Project Two</h3>
            <p class="mt-1 text-sm text-slate-200">
              Another brief description. Highlight your impact and the technologies you used.
            </p>
            <p class="mt-3 text-xs font-medium text-slate-400">Node.js · APIs</p>
          </article>

          <article
            class="rounded-xl border border-slate-700/70 bg-gradient-to-br from-indigo-500/20 via-slate-900 to-slate-900 p-4 sm:col-span-2"
          >
            <h3 class="text-lg font-semibold">Project Three</h3>
            <p class="mt-1 text-sm text-slate-200">
              One more example project to round things out.
            </p>
            <p class="mt-3 text-xs font-medium text-slate-400">Design · UX</p>
          </article>
        </div>
      </div>
    </section>

    <section id="contact" class="py-10 sm:py-14 scroll-mt-24">
      <div class="mx-auto max-w-2xl px-4 sm:px-6">
        <h2 class="mb-4 text-2xl font-semibold tracking-tight">Contact</h2>
        <p class="text-slate-300">
          This is a simple, non-functional contact form. Wire it up to your preferred backend or
          service when you're ready.
        </p>

        <form class="mt-6 grid gap-4" @submit.prevent>
          <label class="grid gap-1 text-sm text-slate-200">
            Name
            <input
              type="text"
              name="name"
              placeholder="Your name"
              class="mt-1 rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-950"
            />
          </label>

          <label class="grid gap-1 text-sm text-slate-200">
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              class="mt-1 rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-950"
            />
          </label>

          <label class="grid gap-1 text-sm text-slate-200">
            Message
            <textarea
              name="message"
              rows="4"
              placeholder="Write a short message"
              class="mt-1 rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-950"
            ></textarea>
          </label>

          <button
            type="submit"
            class="inline-flex w-fit items-center justify-center rounded-full border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-slate-50 shadow-sm transition-colors hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-60"
            disabled
          >
            Send (placeholder)
          </button>
        </form>
      </div>
    </section>
  </main>
</template>

