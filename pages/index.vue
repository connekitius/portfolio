<template>
    <div id="container" class="flex flex-1 bg-gray-600 overflow-hidden justify-center h-screen items-center">
        <div class="relative">
            <NuxtChild class="border-gray-300 border-solid border-2" />
            <div class="absolute text-yellow-50">
                <NuxtLink to="/" class="pr-2">home</NuxtLink>
                <NuxtLink to="/who_am_i" class="pr-2">who am i?</NuxtLink>
                <NuxtLink to="/projects" class="pr-2">projects</NuxtLink>
                <NuxtLink to="/contact_me" class="pr-2">contact me</NuxtLink>
                <button @click="redirect">⭐</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    methods: {
        redirect: function(event: MouseEvent) {
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        }
    },
    head() {
        return {
            meta: [
                { hid: 't-title', property: 'twitter:title', content: 'Connek\'s Portfolio' },
                { hid: 't-url', property: 'twitter:url', content: `${window.location.href}` },
                { hid: 't-type', name: 'twitter:card', content: 'summary' },
                { hid: 't-image', name: 'twitter:image', content: 'https://connekitius.eu.org/favicon.png' },
                { hid: 't-desc', name: 'twitter:description', content: 'Hello! This is my portfolio, built in Nuxt3 and founded with TypeScript.' }
            ]
        }
    }
}
</script>