<template>
    <teleport to="body">
        <!--top navbar-->
        <div class="fixed top-0 left-0 h-14 bg-white px-4 sm:px-4 dark:bg-gray-900 w-full z-10 transition"
             :class="[
             {'shadow-md': scrolled},
             {'-translate-y-full': !showNavbar && !tabs.hasTabs},
             {'-translate-y-1/2': !showNavbar && tabs.hasTabs},
             {'h-28': tabs.hasTabs},
         ]"
        >
            <div class="grid content-center h-full" :class="{'h-1/2': tabs.hasTabs}">
                <div class="flex justify-between mx-auto w-full">
                    <a href="/" class="flex items-center">
                        <img src="~/assets/img/datacenter-logo-primary.svg" class="h-8 mr-2 sm:h-9" alt="Datacenter Logo" />
                        <span class="self-center text-primary font-bold whitespace-nowrap dark:text-white">Datacenter</span>
                    </a>
                    <div class="flex items-center md:order-2 text-primary text-xl gap-5">
                        <nuxt-link to="/notif"><Icon name="Notification1" class="text-2xl"></Icon></nuxt-link>
                        <nuxt-link to="/search"><Icon name="SearchNormal1" class="text-2xl"></Icon></nuxt-link>
                        <a href="/login" class="flex text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                            <span class="sr-only">Open user menu</span>
                            <img class="w-8 h-8 rounded-full" src="~/assets/img/avatar.svg" alt="user photo">
                        </a>
                    </div>
                </div>
            </div>

            <div class="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden" v-if="tabs.hasTabs">
                <div class="flex text-center h-full">
                    <template v-for="(tab, index) in tabs.value">
                        <div @click="[toggleActive(index), emit('getIndex', index)]" class="flex-1 cursor-pointer"
                             :ref="getTabContent"  :class="{'active': (tabUtils.isActive===index)}">
                            <div class="grid content-center h-full">
                                {{ tab.name }}
                            </div>
                        </div>
                        <div class="duration-150 h-1 absolute bottom-0 bg-primary transition-all rounded-t-full"
                             :style="{width, marginLeft, left}"></div>
                    </template>
                </div>

            </div>
        </div>
    </teleport>


    <div class="h-14" :class="{'h-28': tabs.hasTabs}"/> <!--sesuai tinggi navbar-->
</template>

<script setup lang="ts">
const scrolled = ref(false) // shadow
const showNavbar = ref(true) // show/hide
const lastScrollPosition = ref(0)
const tabs = defineProps(['hasTabs', 'value'])

// Shadow
function handleScroll () {
    scrolled.value = window.scrollY > 0;
}

 // Show/Hide
function onScroll () {
    // Get the current scroll position
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
    // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
    if (currentScrollPosition < 0) {
        return
    }
    // Stop executing this function if the difference between
    // current scroll position and last scroll position is less than some offset
    if (Math.abs(currentScrollPosition - lastScrollPosition.value) < 60) {
        return
    }
    // Here we determine whether we need to show or hide the navbar
    showNavbar.value = currentScrollPosition < lastScrollPosition.value
    // Set the current scroll position as the last scroll position
    lastScrollPosition.value = currentScrollPosition
}

// shadow
window.addEventListener('scroll', handleScroll);
onUnmounted(()=>{
    window.removeEventListener('scroll', handleScroll);
})

// show/hide
onMounted(()=>{
    window.addEventListener('scroll', onScroll)
})
onBeforeUnmount(()=>{
    window.removeEventListener('scroll', onScroll)
})

/* ====================
======== Tabs =========
==================== */

const tabUtils = reactive({
    isActive: 0, // get active index
    content: [], // store tabs HTML Element
    getWidth: 0 // get tab width
})

const emit = defineEmits(['getIndex'])

// tab property
const width = ref()
const marginLeft = ref()
const left = ref()

// get ref property inside loop
// return array of component
// will be used for active indicator
// https://stackoverflow.com/questions/52086128/vue-js-ref-inside-the-v-for-loop
const getTabContent = (el: HTMLElement) => {
    if (el) {
        tabUtils.content.push(el)
    }
}

let prevIndex = 0
async function toggleActive(index: number){
    tabUtils.isActive = index

    if(tabs.hasTabs){
        tabUtils.getWidth = tabUtils.content[index].clientWidth

        marginLeft.value = `${(20/100)*tabUtils.getWidth}px`

        if (index !== prevIndex){
            width.value = `${tabUtils.getWidth}px`
            left.value = `${index*tabUtils.getWidth}px`
        }

        if(index !== 0 && index !== prevIndex){
            left.value = `${(index*tabUtils.getWidth)-((40/100)*tabUtils.getWidth)}px`
        }

        if (index === 1 && prevIndex === 2){
            left.value = `${index*tabUtils.getWidth}px`
        }

        if(index !== prevIndex){
            prevIndex = index
        }

        const delayInMilliseconds = 100;
        setTimeout(function() {
            width.value = `${(60/100)*tabUtils.getWidth}px`
            left.value = `${index*(tabUtils.getWidth)}px`

        }, delayInMilliseconds);

        tabUtils.content = []
    }
}
onMounted(()=>{
    toggleActive(tabUtils.isActive)
})


</script>

<style scoped>
.active{
    font-weight: bold;
    color: #0047e1;
}
</style>