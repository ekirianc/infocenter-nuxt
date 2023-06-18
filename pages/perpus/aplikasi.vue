<template>
<div class="p-4">
    <button @click="filterOpen" class="pill">
        <span> <Icon name="gg:sort-az" class="text-lg -ml-2 -mt-1"/> Semua</span>
    </button>

    <bottom-sheet ref="filterSelect">
        <ul>
            <li class="p-4">Semester 2</li>
            <li class="p-4">Semester 4</li>
        </ul>
    </bottom-sheet>

    <div class="grid grid-cols-3 gap-4 mt-4">
        <template v-for="i in 10">
            <div class="flex flex-col content-center">
                <div class="w-24 h-24 bg-gray-300 rounded-2xl">image</div>
                <span class="text-sm">Visual Basic Android Studio</span>
            </div>
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