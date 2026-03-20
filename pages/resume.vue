<template>
  <main class="py-12 sm:py-16">
    <div class="mx-auto max-w-3xl px-4 sm:px-6 print:max-w-none print:px-0">
      <!-- Header / contact -->
      <AnimatedContent :delay="0" class="print:opacity-100">
      <header class="mb-8 border-b border-slate-800 pb-6 print:border-b-0">
        <h1 class="text-4xl font-semibold tracking-tight sm:text-5xl">
          <GradientText class="text-4xl sm:text-5xl">Justin Bondoc</GradientText>
        </h1>
        <p class="mt-1 text-sm font-medium text-slate-400 print:text-black">
          Product Manager
        </p>
        <p class="mt-3 text-sm text-slate-300 print:text-black flex flex-wrap gap-x-2 gap-y-1">
          <a
            href="https://calendly.com/jstnbondoc/30min"
            target="_blank"
            rel="noopener noreferrer"
            class="underline decoration-slate-500/60 underline-offset-2 hover:text-lime-300 hover:decoration-lime-400 print:text-black print:no-underline"
          >
            Contact me
          </a>
          <span class="text-slate-600">|</span>
          <a
            href="https://www.linkedin.com/in/justin-bondoc"
            target="_blank"
            rel="noopener noreferrer"
            class="underline decoration-slate-500/60 underline-offset-2 hover:text-lime-300 hover:decoration-lime-400 print:text-black print:no-underline"
          >
            linkedin.com/in/justin-bondoc
          </a>
          <span class="text-slate-600">|</span>
          <a
            href="https://justinbondoc.com"
            target="_blank"
            rel="noopener noreferrer"
            class="underline decoration-slate-500/60 underline-offset-2 hover:text-lime-300 hover:decoration-lime-400 print:text-black print:no-underline"
          >
            justinbondoc.com
          </a>
          <span class="text-slate-600">|</span>
          <span>Ontario, CA</span>
        </p>

        <p class="mt-4 text-sm text-slate-200 leading-relaxed print:text-black">
          Product Manager with 10+ years in B2B SaaS, including 4 years leading product at Axure. Delivered under
          constraints, making tough prioritization calls and aligning teams through ambiguity. Blends Product, UX,
          Front-End, and Sales Engineering to build customer-grounded solutions.
        </p>

        <div class="mt-6 flex flex-wrap gap-3 print:hidden">
          <BackArrowLink
            to="/"
            class="mb-6 text-sm font-medium text-slate-400 transition-colors hover:text-slate-200"
          >
            Back home
          </BackArrowLink>
        </div>
      </header>
      </AnimatedContent>

      <!-- Experience -->
      <AnimatedContent :delay="0.1" class="print:opacity-100">
      <section class="mb-8 break-inside-avoid">
        <h2 class="mb-3 text-xl font-semibold tracking-tight print:text-black">
          Work Experience
        </h2>

        <article class="mb-5">
          <header class="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
            <h3 class="text-sm font-semibold print:text-black">
              <GradientText class="text-sm">Product Manager II | Axure Software Solutions</GradientText>
            </h3>
            <p class="text-xs text-slate-400 print:text-black">
              San Diego, CA | Jul 2023 – Mar 2026
            </p>
          </header>
          <ul class="mt-2 list-disc list-outside pl-6 space-y-1.5 text-sm text-slate-200 print:text-black">
            <li>
              Defined and executed a multi-year product strategy to evolve <strong>Axure Cloud</strong> from a prototype
              sharing tool into a Notion-style collaborative workspace, anchoring the roadmap around full-text search,
              whiteboards, and org-based collaboration.
            </li>
            <li>
              Led the transition from single-user to organization-based subscriptions, unlocking a new buyer persona
              beyond the individual prototyper and expanding Axure Cloud's addressable market.
            </li>
            <li>
              Collaborated with engineering to upgrade Axure Cloud from vanilla JavaScript and jQuery to
              <strong>Vue 3.0</strong>, improving load times by up to <strong>10x</strong>.
            </li>
            <li>
              Drove UI modernization by standardizing the front end with <strong>TailwindCSS</strong> and
              <strong>Reka UI</strong>, accelerating development cycles.
            </li>
            <li>
              Introduced <strong>Claude Code</strong> into the PM workflow, building AI agents that reduced changelog
              production from days to minutes and completed documentation work that had been deprioritized indefinitely.
            </li>
            <li>
              Championed and personally implemented <strong>PostHog</strong> for product analytics, unlocking user-level
              data that enabled proactive outreach, doubled customer interview volume, and directly informed roadmap
              prioritization.
            </li>
            <li>
              Reduced engineering bottlenecks by personally handling front-end UI polish in the codebase, allowing
              developers to stay focused on higher-complexity work.
            </li>
          </ul>
        </article>

        <article class="mb-5">
          <header class="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
            <h3 class="text-sm font-semibold print:text-black">
              <GradientText class="text-sm">Product Manager I | Axure Software Solutions</GradientText>
            </h3>
            <p class="text-xs text-slate-400 print:text-black">
              San Diego, CA | Jul 2021 – Jul 2023
            </p>
          </header>
          <ul class="mt-2 list-disc list-outside pl-6 space-y-1.5 text-sm text-slate-200 print:text-black">
            <li>
              Delivered one of Axure RP's most requested features by leading a 6-month "Easier Layout" epic, shipping
              a family of intelligent canvas features including smart distance snapping, auto-alignment, and tidy-up
              that eliminated a tedious multi-step manual workflow.
            </li>
            <li>
              Removed a critical enterprise sales blocker by redesigning the trial experience from a manual key-based
              system to self-serve 30-day account trials, eliminating ops overhead and enabling per-seat purchasing
              that accelerated deal cycles.
            </li>
            <li>
              Rescued a high-impact but stalled on-demand generation feature from being cut, re-prioritizing it,
              resolving UX edge cases, and driving it to launch, resulting in up to <strong>10x</strong> improvement
              in prototype viewing speeds.
            </li>
            <li>
              Reduced friction on Axure RP's most-used interaction by shipping a smart default that automatically
              sets the action state based on user search input, eliminating a redundant manual step.
            </li>
          </ul>
        </article>

        <article class="mb-5">
          <header class="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
            <h3 class="text-sm font-semibold print:text-black">
              <GradientText class="text-sm">Sales Engineer | Axure Software Solutions</GradientText>
            </h3>
            <p class="text-xs text-slate-400 print:text-black">
              San Diego, CA | Aug 2018 – Jul 2021
            </p>
          </header>
          <ul class="mt-2 list-disc list-outside pl-6 space-y-1.5 text-sm text-slate-200 print:text-black">
            <li>
              Built Axure's on-premises onboarding process from scratch using structured project management, laying the
              groundwork for the Customer Success department and contributing to millions in closed revenue through a
              repeatable implementation playbook adopted across support and sales.
            </li>
            <li>
              Reduced enterprise security questionnaire completion time from ~1 week to minutes by standardizing
              responses into a self-serve resource adopted by the broader sales team.
            </li>
            <li>
              Served as primary liaison for <strong>SOC 2 compliance</strong> efforts, coordinating with legal and
              engineering to unblock stalled enterprise deals and convert previously non-starter opportunities into
              closed revenue.
            </li>
            <li>
              Improved enterprise adoption by synthesizing structured feedback from high-priority accounts into
              actionable product insight, directly influencing roadmap decisions that reduced installation complexity
              and resolved key UX friction points.
            </li>
          </ul>
        </article>

        <article>
          <header class="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
            <h3 class="text-sm font-semibold print:text-black">
              <GradientText class="text-sm">Sales Engineer | MadCap Software</GradientText>
            </h3>
            <p class="text-xs text-slate-400 print:text-black">
              San Diego, CA | Jan 2016 – Aug 2018
            </p>
          </header>
          <ul class="mt-2 list-disc list-outside pl-6 space-y-1.5 text-sm text-slate-200 print:text-black">
            <li>
              Consistently hit <strong>100%+ of quota</strong> by making complex technical software accessible
              and compelling to non-technical buyers.
            </li>
            <li>
              Led discovery and demo calls that surfaced user insights directly incorporated into product strategy.
            </li>
            <li>
              Spoke at industry conferences and led workshops for enterprise clients and internal teams.
            </li>
          </ul>
        </article>
      </section>
      </AnimatedContent>

      <!-- Education -->
      <AnimatedContent :delay="0.15" class="print:opacity-100">
      <section class="mb-8 break-inside-avoid">
        <h2 class="mb-3 text-xl font-semibold tracking-tight print:text-black">
          Education
        </h2>
        <ul class="list-disc list-outside pl-6 space-y-1.5 text-sm text-slate-200 print:text-black">
          <li>
            B.A. Visual Arts: Media Computing, Class of 2014 | UC San Diego
          </li>
        </ul>
      </section>
      </AnimatedContent>

      <!-- Certificates -->
      <AnimatedContent :delay="0.2" class="print:opacity-100">
      <section class="mb-8 break-inside-avoid">
        <h2 class="mb-3 text-xl font-semibold tracking-tight print:text-black">
          Certificates
        </h2>
        <ul class="list-disc list-outside pl-6 space-y-1.5 text-sm text-slate-200 print:text-black">
          <li>
            Certified Associate in Project Management (CAPM) | Project Management Institute
          </li>
        </ul>
      </section>
      </AnimatedContent>

      <!-- References -->
      <AnimatedContent :delay="0.25" class="print:opacity-100">
      <section class="break-inside-avoid">
        <h2 class="mb-3 text-xl font-semibold tracking-tight print:text-black">
          References
        </h2>
        <p class="text-sm text-slate-200 print:text-black">
          Available upon request, including references from Axure's CEO and CTO.
        </p>
      </section>
      </AnimatedContent>
    </div>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Justin Bondoc – Resume',
  description:
    'Resume for Justin Bondoc, Product Manager with 10+ years in B2B SaaS, UX, and Sales Engineering.',
})
</script>
