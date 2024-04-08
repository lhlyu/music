// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
    devtools: { enabled: true },
    extends: [process.env.NUXT_UI_PRO_PATH || '@nuxt/ui-pro'],
    app: {
        head: {
            htmlAttrs: {
                lang: 'zh-cmn-Hans'
            },
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1'
        }
    },
    modules: ['@nuxt/ui']
})
