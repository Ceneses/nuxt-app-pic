// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
    imports: {
        autoImport: true
    },
    pages: true,
    devtools: {
        enabled: true,

        timeline: {
            enabled: true
        }
    },
    modules: ["@nuxtjs/tailwindcss", "@unlok-co/nuxt-stripe", "nuxt-icon", "@nuxtjs/supabase"],
    stripe: {
        // Server
        server: {
            key: process.env.STRIPE_SERVER_KEY,
            options: {
                // your api options override for stripe server side
                // https://github.com/stripe/stripe-node?tab=readme-ov-file#configuration
            },
            // CLIENT
        },
        client: {
            key: process.env.STRIPE_CLIENT_KEY,
            // your api options override for stripe client side https://stripe.com/docs/js/initializing#init_stripe_js-options
            options: {},
        }
    },
    supabase: {
        redirectOptions: {
            login: '/login',
            success: "/success",
            callback: '/callback',
            exclude: ['/price']
        }
    }
})