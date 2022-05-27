<script lang="ts" setup>
import IconDiscord from '~icons/fa6-brands/discord'
import IconTwitter from '~icons/fa6-brands/twitter'
import IconGithub from '~icons/fa6-brands/github'
</script>

<template>
    <div id="spronkle" class="relative h-72 w-80 rounded-md bg-slate-600 text-center hover:shadow-md hover:bg-slate-500">
        <Head>
            <title>Home || Connek's Portfolio</title>
        </Head>
        
        <button id="sprunkle" @click="sprinkle" class="absolute top-0 right-0">
            🎉
        </button>

        <span class="text-sm font-plus-jakarta-sans italic text-gray-200 px-2">
            oh, oh my my, it's
        </span>
        <h1 class="text-5xl font-grape-nuts text-gray-300 px-2">
            connek
        </h1>
        <span class="text-sm font-plus-jakarta-sans italic text-gray-200 px-2">
            that's me!
        </span>
        
        <hr class="w-[75%] m-auto border-solid border-t-[3px] border-t-[#bbb] pr-5" />

        <p class="text-base font-quicksand bold text-gray-50 px-2">
            welcome to the portfolio.<br />
            you change change pages by clicking on the links below this segment!<br />
            for now, here are my socials:
        </p>

        <ul class="font-montserrat list-none text-gray-50 px-2">
            <li><icon-discord class="align-middle inline" /> Connek#3033</li>
            <li><icon-twitter class="align-middle inline" /> connekisgoated</li>
            <li><icon-github class="align-middle inline" /> connekitius</li>
        </ul>
        
    </div>
</template>

<script lang="ts">
import party from 'party-js'
import config from '~~/personal/config.js'

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
                const body = document.body;

                if(this.count < 5) party.confetti(button, {
                    count: party.variation.range(this.vMin, this.vMax)
                })

                if(this.count >= 5) {
                    const element = config.shake === true ? body : div
                    element.id = 'flickering'
                    button.disabled = true; 

                    function setProperty(duration: number) {
                        body.style.setProperty('--animation-time', duration +'s');
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

                    if(config.shake === true) {
                        div.classList.add('shake-constant', 'shake-hard')
                    }
                    setTimeout(() => {
                        if(config.shake === true) {
                            div.classList.remove('shake-constant', 'shake-hard')
                            if(element === body) body.removeAttribute('id')
                            else div.id = 'spronkle';
                        } else div.id = 'spronkle';
                        body.removeAttribute('style')

                        button.disabled = false
                        setTimeout(() => {
                            party.scene.current.clearParticles()
                        }, 2000)
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
@import url('https://fonts.googleapis.com/css2?family=Grape+Nuts&family=Montserrat&family=Plus+Jakarta+Sans&family=Quicksand&display=swap');
</style>

<style scoped>
@import url('~/assets/css/csshake.css');
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