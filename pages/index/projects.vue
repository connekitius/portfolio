<template>
    <div id="spronkle" class="relative h-[25.9rem] w-[21.2rem] rounded-md bg-slate-600 text-center hover:shadow-md hover:bg-slate-500">
        <Head>
            <title>Projects || Connek's Portfolio</title>
        </Head>
        
        <button id="sprunkle" @click="sprinkle" class="absolute top-0 right-0">
            🎉
        </button>

        <h1 class="text-5xl font-grape-nuts px-2 text-gray-300">
            projects
        </h1>

        <hr class="w-[75%] m-auto border-solid border-t-[3px] border-t-[#bbb] pr-5" />

        <p class="text-base font-quicksand bold px-2 text-gray-50">
            Some of the projects I've worked on include:
        </p>

        <div class="inline-block mx-4">
            <div class="flex flex-wrap">
                <div class="mr-0.5 mb-1 block flex-1 text-center text-sm w-36 h-36 bg-white rounded-lg border border-gray-200 shadow-md">
                    <h3 class="font-grape-nuts text-3xl">Portfolio</h3>
                    <p class="font-montserrat">You're on it right now!</p>
                    <a href="https://gitlab.com/connekitius/portfolio" target="_blank">v1</a><br />
                    <a href="https://github.com/connekitius/portfolio" target="_blank">v2 (this)</a>
                </div>
                <div class="ml-0.5 mb-1 block flex-1 text-center text-sm w-36 h-36 bg-white rounded-lg border border-gray-200 shadow-md">
                    <h3 class="font-grape-nuts text-3xl">MonoxiBot</h3>
                    <p class="font-montserrat">An open source Discord bot made for the Monoxi Labs Discord Server.</p>
                    <a href="https://gitlab.com/connekitius/monoxibot" target="_blank">click me!</a>
                </div>

                <div class="block flex-auto text-center text-sm w-36 h-36 bg-white rounded-lg border border-gray-200 shadow-md">
                    <h3 class="font-grape-nuts text-3xl">Centro</h3>
                    <p class="font-montserrat">An open-source ESM TypeScript bot written in the Discord.js framework. It's job? I don't know yet.</p>
                    <a href="https://gitlab.com/connekitius/centro" target="_blank">click me!</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import party from 'party-js'
import 'csshake/scss/csshake.scss'

export default {
    data() {
        return {
            count: 0,
            vMin: 20,
            vMax: 40
        }
    },
    methods: {
        sprinkle: function(event: MouseEvent) {
            const chance = Math.random()
            if(Math.round(chance) === 1) {
                this.count++
                this.vMin = this.vMin + (this.vMin) / 2
                this.vMax = this.vMax + (this.vMax) / 2

                const button = <HTMLButtonElement>document.getElementById('sprunkle')!
                const div = <HTMLDivElement>document.getElementById('spronkle')!

                if(this.count < 5) party.confetti(button, {
                    count: party.variation.range(this.vMin, this.vMax)
                })

                if(this.count >= 5) {
                    div.id = 'flickering'
                    button.disabled = true; 

                    function setProperty(duration: number) {
                        div.style.setProperty('--animation-time', duration +'s');
                    }

                    function changeAnimationTime() {
                        var animationDuration = Math.random();
                        setProperty(animationDuration);
                    }

                    const interval = setInterval(() => {
                        changeAnimationTime()
                        const rect = new party.Rect(party.random.randomRange(window.innerWidth), party.random.randomRange(window.innerHeight))
                        party.confetti(rect, {
                            count: party.variation.range(this.vMin * 2, this.vMax * 4),
                            rotation: party.variation.evaluateVariation(party.random.randomInsideRect(rect)),
                            spread: party.variation.skew(-50, 1000)
                        })
                    }, 1000)

                    setTimeout(() => {
                        button.disabled = false
                        setTimeout(() => {
                            party.scene.current.clearParticles()
                        }, 2000)
                        div.id = 'spronkle';
                        clearInterval(interval)
                    }, 10000)
                    this.vMin = 20
                    this.vMax = 40
                    this.count = 0
                }
            }
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Grape+Nuts&family=Plus+Jakarta+Sans&family=Quicksand&display=swap');
.font-plus-jakarta-sans {
    font-family: 'Plus Jakarta Sans', sans-serif;
}
.font-grape-nuts {
    font-family: 'Grape Nuts', cursive;
}
</style>

<style scoped>
:root {
  --animation-time: 2s; 
}

@keyframes flicker {
  0% {
    opacity: 0;
  } 100% {
    opacity: 1;
  }
}

#flickering {
  animation: flicker .5s ease alternate infinite;
  animation: flicker var(--animation-time) ease alternate infinite;
}
</style>