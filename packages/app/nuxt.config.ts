// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-cmn-Hans',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  }
})
