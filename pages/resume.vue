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
          <span>Ontario, California 🇺🇸</span>
        </p>

        <p class="mt-4 text-sm text-slate-200 leading-relaxed print:text-black">
          Product Manager with 10+ years in B2B SaaS, including 4 years leading product at Axure. Known for
          delivering under constraints, making tough prioritization calls, and aligning teams through ambiguity.
          Blends Product, UX, Front-End, and Sales Engineering to build customer-grounded solutions.
        </p>

        <div class="mt-6 flex flex-wrap gap-3 print:hidden">
          <NuxtLink
            to="/"
            class="inline-flex items-center justify-center rounded-full border border-neutral-700 bg-transparent px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-black/80 hover:text-white"
          >
            Back to home
          </NuxtLink>
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
              Defined the strategy for <strong>Axure Cloud 3.0</strong> and led the project from start to finish,
              transforming a single-user product into a team-based solution with a new subscription model, laying
              the foundation for Axure Whiteboards and Docs.
            </li>
            <li>
              Led <strong>Axure Cloud Organizations</strong> from concept to launch, enabling businesses to
              purchase and manage seats for the first time, then drove adoption initiatives that grew team-based
              accounts by <strong>2.5x within 1 year</strong>.
            </li>
            <li>
              Collaborated with engineering to upgrade Axure Cloud from vanilla JavaScript and jQuery to
              <strong>Vue 3.0</strong> across two-week sprints, improving load times by up to <strong>10x</strong>
              and reducing future development time by an estimated <strong>30%</strong>.
            </li>
            <li>
              Redesigned the UI and user experience of Axure Cloud, creating a design system in <strong>Figma</strong>
              and prototyping in <strong>Axure RP</strong> and <strong>Cursor</strong> directly in the codebase,
              establishing a shared foundation that accelerated development of Axure Whiteboards.
            </li>
            <li>
              Built <strong>Claude Code skills</strong> for prototype generation, help documentation, and changelog
              drafting, and shipped an <strong>MCP server integration</strong> exposing Axure Whiteboard data to
              external AI tools, cutting prototype exploration from hours to minutes without adding headcount.
            </li>
            <li>
              Adopted <strong>PostHog</strong> for product analytics and doubled the number of customer interviews,
              generating quantitative and qualitative insights that directly informed roadmap prioritization.
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
              Drove <strong>Axure RP 11</strong> adoption through user research, identifying key migration blockers
              and prototyping an upgrade workflow solution; defined success metrics and collaborated cross-functionally
              to deliver, resulting in <strong>391 team projects upgraded within 30 days</strong> of launch.
            </li>
            <li>
              Led discovery and prototyped an account-based self-serve trial model for Axure's on-prem product,
              enabling users to independently onboard and eliminating inbound trial key requests entirely.
            </li>
            <li>
              Shipped features across <strong>Axure Cloud</strong> and <strong>Axure RP</strong>, including
              on-demand generation that increased prototype viewing speeds by up to <strong>10x</strong>.
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
              Led enterprise on-premises implementations of <strong>Axure Cloud for Business</strong>, managing
              complex technical deployments for large accounts.
            </li>
            <li>
              Served as the company's primary liaison for <strong>SOC 2 compliance</strong>, owning security
              questionnaire responses and collaborating with legal and engineering on audit preparation.
            </li>
            <li>
              Earned <strong>CAPM certification</strong> and applied project management discipline to create
              scalable processes for onboarding, knowledge transfer, and team enablement.
            </li>
            <li>
              Translated customer needs into platform requirements and worked with product on roadmap decisions
              ahead of transitioning into a formal PM role.
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
