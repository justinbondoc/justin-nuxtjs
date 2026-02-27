<template>
  <section class="py-10 sm:py-14">
    <div class="mx-auto max-w-2xl px-4 sm:px-6">
      <h1 class="mb-4 text-2xl font-semibold tracking-tight">Contact</h1>
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
</template>

