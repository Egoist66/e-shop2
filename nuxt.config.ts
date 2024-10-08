// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  image: {
    formats: ['avif', 'webp', 'jpeg', 'png'],
  },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        

      ],
    title: 'Sneakers-shop',
    }
  },
  
  css: [
    '~/assets/css/main.css'
  ],
  vue: {
    propsDestructure: true
  },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxt/image']
})