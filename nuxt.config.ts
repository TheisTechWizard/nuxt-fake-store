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
  }
})
