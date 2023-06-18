<script setup lang="ts">
import { useSwipe, computed, ref } from '#imports'
const props = defineProps({
    title: String
})

const containerHeight = computed(() => window.innerHeight)

const target = ref<HTMLElement | null>(null)
const getTargetHeight = computed(() => target.value?.offsetHeight)
const targetHeight = ref<number>()

const bottom = ref('-100%')
const opacity = ref(0)
const isOpen = ref(false)

onMounted(()=>{
    targetHeight.value = getTargetHeight.value
})

const open = () => {
    bottom.value = '0'
    opacity.value = 1
    isOpen.value = true
}

const close = () => {
    bottom.value = `${-targetHeight.value!}px`
    opacity.value = 0
    isOpen.value = false
}

const { direction, lengthY } = useSwipe(target, {
        passive: false,
        threshold: 0,
        onSwipe() {
            if (containerHeight.value) {
                if (lengthY.value < 0) {
                    const length = Math.abs(lengthY.value)
                    bottom.value = `${-length}px`
                    opacity.value = 1.1 - length / containerHeight.value
                }
                else {
                    bottom.value = '0'
                    opacity.value = 1
                }
            }
        },
        onSwipeEnd() {
            if (lengthY.value < 0 && containerHeight.value && Math.abs(lengthY.value) >= 50) {
                bottom.value = `${-targetHeight.value!}px`
                opacity.value = 1
                isOpen.value = false
            }
            else {
                bottom.value = '0'
                opacity.value = 1
                isOpen.value = true
            }
        },
    })

defineExpose({open})
</script>

<template>
    <teleport to="body">
    <div>
        <div ref="target" class="bottom-sheet max-h-full pt-4 bg-white fixed bottom-0 left-0 w-full z-30 ease-out transition-all"
             :style="{bottom}">
            <span class="ml-4 text-lg font-semibold" v-if="props.title">{{ props.title }}</span>
            <div class="relative bg-white overflow-hidden rounded-2xl m-4 border border-gray-300 [&>ul>li]:p-4">
                <slot/>
            </div>
        </div>
        <div @click="close" class="w-full h-full fixed bg-gray-900/40 top-0 left-0 z-20 transition-all " :class="{'hidden': !isOpen}"></div>
    </div>
    </teleport>
</template>