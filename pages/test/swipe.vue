<script setup lang="ts">
import type { SwipeDirection } from '@vueuse/core'
import { useSwipe, computed, ref } from '#imports'

const target = ref<HTMLElement | null>(null)
const container = ref<HTMLElement | null>(null)
const containerWidth = computed(() => container.value?.offsetWidth)
const left = ref('0')
const opacity = ref(1)

const sheetOpen = ref(true)

const open = () => {
  sheetOpen.value = !sheetOpen.value
}

const reset = () => {
    left.value = '0'
    opacity.value = 1
}

const { direction, isSwiping, lengthX, lengthY } = useSwipe(target, {
        passive: false,
        onSwipe(e: TouchEvent) {
            if (containerWidth.value) {
                if (lengthX.value < 0) {
                    const length = Math.abs(lengthX.value)
                    left.value = `${length}px`
                    opacity.value = 1.1 - length / containerWidth.value
                }
                else {
                    left.value = '0'
                    opacity.value = 1
                }
            }
        },
        onSwipeEnd(e: TouchEvent, direction: SwipeDirection) {
            if (lengthX.value < 0 && containerWidth.value && (Math.abs(lengthX.value) / containerWidth.value) >= 0.5) {
                left.value = '100%'
                opacity.value = 0
            }
            else {
                left.value = '0'
                opacity.value = 1
            }
        },
    })
</script>

<template>
    <div>
        <div class="flex justify-center pb-8">
            <button @click="open" class="px-8 py-2 bg-sky-600 text-white rounded-xl">Open Sheet</button>
        </div>

        <div ref="container" class="container select-none">
            <button @click="reset" class="bg-lime-500 px-4 py-1 rounded-full">
                Reset
            </button>
            <div ref="target" class="overlay" :class="{ animated: !isSwiping }" :style="{ left, opacity }">
                <p>Swipe right</p>
            </div>
        </div>
        <p class="status">
            Direction: {{ direction }} <br>
            lengthX: {{ lengthX }} | lengthY: {{ lengthY }}
        </p>


        <div class="flex justify-center pt-8">
            <button @click="open" class="px-8 py-2 bg-sky-600 text-white rounded-xl">Open Sheet</button>
        </div>

        <div >
            <p class="status ">
                Direction: {{ direction }} <br>
                lengthX: {{ lengthX }} | lengthY: {{ lengthY }}
            </p>
            <div @click="open" class="w-full h-full fixed bg-gray-900/40 top-0 left-0 z-20 transition-all" :class="{'hidden': sheetOpen}"></div>
            <div class="bg-white pt-4 fixed left-0 w-full bottom-0 z-30 transition-all rounded-t-2xl"
                 :class="{'translate-y-full':sheetOpen}">
                <ul>
                    <li class="p-4">Semester 2</li>
                    <li class="p-4">Semester 4</li>
                    <li class="p-4">Semester 6</li>
                </ul>
            </div>
        </div>


    </div>
</template>

<style scoped>
.container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px dashed #ccc;
    height: 100px;
    overflow: hidden;
}

.overlay {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: #3fb983;
}

.overlay.animated {
    transition: all 0.2s ease-in-out;
}

.overlay > p {
    color: #fff;
    font-weight: bold;
    text-align: center;
    overflow:hidden;
    white-space: nowrap;
}

.status {
    text-align: center;
}
</style>