<template>
  <main class="space-y-16 sm:space-y-20">
    <section id="top" class="relative flex min-h-[500px] items-center py-12 sm:py-16">
      <div
        class="overflow-hidden"
      >
          <div>
            <Dither
              :wave-speed="0.05"
              :wave-frequency="3"
              :wave-amplitude="0.3"
              :wave-color="[0.15, 0.15, 0.15]"
              :color-num="3"
              :pixel-size="2"
              :disable-animation="false"
              :enable-mouse-interaction="true"
              :mouse-radius="1"
            />
          </div>
      </div>
      <div class="z-10 mx-auto max-w-5xl px-4 sm:px-6">

        <p class="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
          Justin Bondoc · Product Manager · Ontario, California
        </p>
        <h1 class="mb-3 text-7xl font-semibold tracking-tight">
          Justin's journey: From Sales to <GradientText>Full-stack Product Management</GradientText>
        </h1>   
        <p class="mb-6 max-w-prose text-slate-300">
          I'm Justin and I'm a full-stack product manager with over 10 years of experience in B2B SaaS.
        </p>
        <div class="flex flex-wrap gap-3">
          <a
            href="#about"
            class="inline-flex items-center justify-center rounded-full border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-slate-50 shadow-sm transition-colors hover:bg-indigo-400"
          >
            About me
          </a>
          <a
            href="#projects"
            class="inline-flex items-center justify-center rounded-full border border-slate-700 bg-transparent px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-800/80 hover:text-white"
          >
            View projects
          </a>
          <!-- <a
            href="#contact"
            class="inline-flex items-center justify-center rounded-full border border-slate-700 bg-transparent px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-800/80 hover:text-white"
          >
            Get in touch
          </a> -->
        </div>
      </div>
    </section>
    <HorizontalScrollStrip />

    <AboutSection />
    <div class="border-y border-slate-700/70">
      <ToolsSection />
    </div>



    <section id="projects" class="py-10 sm:py-14 scroll-mt-24">
      <div class="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 class="mb-4 text-7xl font-semibold tracking-tight">Selected Work</h2>
        <p class="mb-4 text-slate-300">
          A sample of product and design work — strategy, prototyping, and delivery across B2B SaaS.
        </p>

        <div class="mt-6 grid gap-4 sm:grid-cols-2">
          <article
            class="rounded-xl border border-slate-700/70 bg-gradient-to-br from-indigo-500/20 via-slate-900 to-slate-900 p-4"
          >
            <h3 class="text-lg font-semibold">Product &amp; design work</h3>
            <p class="mt-1 text-sm text-slate-200">
              End-to-end product delivery, UX flows, and high-fidelity prototypes.
            </p>
            <p class="mt-3 text-xs font-medium text-slate-400">Figma · Axure RP · Product Strategy</p>
          </article>

          <article
            class="rounded-xl border border-slate-700/70 bg-gradient-to-br from-indigo-500/20 via-slate-900 to-slate-900 p-4"
          >
            <h3 class="text-lg font-semibold">Research &amp; strategy</h3>
            <p class="mt-1 text-sm text-slate-200">
              User research, discovery, and roadmap decisions from insight to execution.
            </p>
            <p class="mt-3 text-xs font-medium text-slate-400">UX Research · Stakeholder Communication · Jira</p>
          </article>

          <article
            class="rounded-xl border border-slate-700/70 bg-gradient-to-br from-indigo-500/20 via-slate-900 to-slate-900 p-4 sm:col-span-2"
          >
            <h3 class="text-lg font-semibold">Prototyping &amp; interaction</h3>
            <p class="mt-1 text-sm text-slate-200">
              Interactive prototypes and visual design for web and product experiences.
            </p>
            <p class="mt-3 text-xs font-medium text-slate-400">
              Interaction Design · Visual Design · Axure RP
            </p>
          </article>
        </div>

        <p class="mt-6 text-sm text-slate-400">
          Portfolio case studies coming soon. Selected projects and detailed work samples available
          upon request.
        </p>
      </div>
    </section>

    <!--
    <section id="contact" class="py-10 sm:py-14 scroll-mt-24">
      <div class="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 class="mb-4 text-7xl font-semibold tracking-tight">Contact</h2>
        <p class="text-slate-300">
          Connect for product, design, or collaboration opportunities.
        </p>
        <p class="mt-2 text-sm text-slate-400">LinkedIn: Justin R. Bondoc</p>

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
    -->
  </main>
</template>

