// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'My online store',
      meta: [
        {name : 'description', content: 'hobby project'}
      ]
    }
  },
  ssr: false, // Disable SSR if you want a fully static site
  nitro: {
    preset: 'static' // Nitro preset for static site generation
  },
  css: ['@/assets/scss/main.scss'],
})
