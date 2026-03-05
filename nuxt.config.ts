// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-03-03',
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/favicon.png' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&display=swap',
        },
      ],
    },
  },

  experimental: {
    appManifest: false,
  },

  runtimeConfig: {
    anthropicApiKey: '',
    databaseUrl: '', // Neon connection string (optional). Set NUXT_DATABASE_URL in .env to log chat submissions.
  },

  vite: {
    plugins: [tailwindcss()],
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },

});