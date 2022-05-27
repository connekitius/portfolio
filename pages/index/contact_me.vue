<script lang="ts" setup>
import IconEmail from '~icons/mdi/email'
import IconChat from '~icons/mdi/chat'
</script>

<template>
    <div id="spronkle" class="relative h-[16.9rem] w-[21.2rem] rounded-md bg-slate-600 text-center hover:shadow-md hover:bg-slate-500">
        <Head>
            <title>Contact Me || Connek's Portfolio</title>
        </Head>
        
        <button id="sprunkle" @click="sprinkle" class="absolute top-0 right-0">
            🎉
        </button>

        <h1 class="text-5xl font-grape-nuts px-2 text-gray-300">
            contact me
        </h1>

        <hr class="w-[75%] m-auto border-solid border-t-[3px] border-t-[#bbb] pr-5" />

        <p class="text-base font-quicksand bold px-2 text-gray-50">
            You can contact me thru my social medias posted on the homepage.
            If you are unable to contact me through the aforementioned social medias, please contact me through:
        </p>

        <ul class="font-montserrat list-none text-gray-50 px-2">
            <li><icon-email class="align-middle inline" /> Email: <strong>connekitius@yahoo.com</strong></li>
            <li><icon-chat class="align-middle inline" /> IRC Chat: <strong>@Connek / #connek</strong></li>
            <li><icon-chat class="align-middle inline" /> Discord Chat: <a href="https://discord.gg/eJt2umgAw9"><strong>click me!</strong></a></li>
        </ul>

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

@keyframes rotate{
  to { transform: rotate(360deg); }
}

*svg:hover {
    animation: rotate 1.5s linear infinite
}
</style>