import Icons from 'unplugin-icons/vite'
import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    target: 'static',
    modules: [
        '@nuxtjs/tailwindcss',
        ['unplugin-icons/nuxt']
    ],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                }
            }
        }
    },
    vite: {
        plugins: [
            Icons({
                autoInstall: true
            })
        ]
    },
    generate: {
        routes: ['/who_am_i', '/projects', '/contact_me']
    }
})
