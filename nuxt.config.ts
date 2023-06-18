// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        'nuxt-icon',
        'nuxt-swiper',
        '@vueuse/nuxt',
    ],
    app:{
        pageTransition: { name: 'page', mode: 'out-in' },
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
                {rel: "shortcut icon", type: "image/svg+xml", href: "/logo-fav.svg"},
                {rel: "preconnect", href: "https://fonts.googleapis.com"},
                {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous"},
                {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Outfit:wght@300;400;500;600;700&display=swap"},
            ]
        }
    },
    colorMode: {
        classSuffix: '',
    },
    hooks: {
        // https://github.com/nuxt/framework/discussions/5070
        'pages:extend': (pages)=>{
            pages.push({
                name: "login",
                path: '/login',
                file: '@/pages/_auth/login.vue'
            })
        }
    }
})
