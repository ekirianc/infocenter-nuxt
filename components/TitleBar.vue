<template>
    <div class="p-4 text-lg font-semibold relative bg-[#f3fbff] shadow-md">
        <nuxt-link @click="$router.go(-1)" ><Icon name="material-symbols:arrow-back" class="-mt-1"/> </nuxt-link>
        <span class="ml-4 text-xl font-bold">{{props.title}}</span>
    </div>
</template>

<script setup>
const props = defineProps({title: String})
</script>

<style scoped>

</style>