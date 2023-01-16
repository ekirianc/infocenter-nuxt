// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    plugins: [
        '~/plugins/VueBottomSheet.js'
    ],
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        'nuxt-icon',
        'nuxt-swiper',
    ],
    app:{
        // pageTransition: { name: 'page', mode: 'out-in' },
        head:{
            title: "HMTE Datacenter",
            htmlAttrs: {
                lang: 'id'
            },
            meta: [
                { name: "viewport", content: "viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"},
                { name: "format-detection", content: "telephone=no" },
                { name: "msapplication-tap-highlight", content: "no" },
                { name: "apple-mobile-web-app-capable", content: "yes" },
                { name: "apple-mobile-web-app-title", content: "HMTE Datacenter" },
                { name: "apple-mobile-web-app-status-bar-style", content: "black" },
            ],
            link: [
                {rel: "shortcut icon", type: "image/png", href: "~/assets/img/logo fav.png"}
            ]
        }
    },
    colorMode: {
        classSuffix: '',
    },
    // css:[
    //     "@webzlodimir/vue-bottom-sheet/dist/style.cssswiper/css",
    // ]
})
