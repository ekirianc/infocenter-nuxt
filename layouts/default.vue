<template>

    <navbar-top/>
    <div class="p-4">
        <slot/>
    </div>
    <navbar-bottom/>


</template>

<script setup lang="ts">

    import {useColorMode} from "#imports";

    const colorMode = useColorMode()
    colorMode.preference = 'light'

</script>

<style >

    div.navbar a.router-link-active{
        @apply bg-sky-700 rounded-full py-2 px-4 text-white
    }
    div.navbar a:not(.router-link-active){
        @apply py-2 px-4
    }

</style>