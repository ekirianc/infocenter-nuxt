<template>
<div class="p-4">
    <button @click="filterOpen" class="pill">
        <span> <Icon name="gg:sort-az" class="text-lg -ml-2 -mt-1"/> 2022-2023</span>
    </button>
    <bottom-sheet ref="filterSelect">
        <ul>
            <li class="p-4">Semester 2</li>
            <li class="p-4">Semester 4</li>
        </ul>
    </bottom-sheet>

    <div class="grid grid-cols-2 gap-4 mt-4">
        <template v-for="i in 10">
            <div class="w-full h-52 bg-gray-200"></div>
        </template>
    </div>
</div>
</template>

<script setup lang="ts">

const filterSelect = ref(null)
const filterOpen = ()=>{
    filterSelect.value.open()
}
</script>

<style scoped>

</style>