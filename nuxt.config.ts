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
            key: "sk_test_51OfcfPHdnG2TSZs4qbyuqgJIrc8UG7NpEfnFFo1rp1uUOAmXQyesp6dngZzTF6ACZBLY8p493n4b6LE1NOm1Qxbm00psG4NyDo",
            options: {
                // your api options override for stripe server side
                // https://github.com/stripe/stripe-node?tab=readme-ov-file#configuration
            },
            // CLIENT
        },
        client: {
            key: "pk_test_51OfcfPHdnG2TSZs48UnCtfYIcbVRybfmXH8dY8RqcuP8lUkax5RMG2ZPTgkfGD6dOlfT9i7iis8106JkjLVXGBNI00ET49nU85",
            // your api options override for stripe client side https://stripe.com/docs/js/initializing#init_stripe_js-options
            options: {},
        }
    },
    supabase: {
        redirectOptions: {
            login: '/login',
            success: "/success",
            callback: '/callback',
            exclude: ['/*', '/price', '/product']
        }
    }
})