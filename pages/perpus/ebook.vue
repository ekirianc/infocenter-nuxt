<template>
<div>
    <div class="flex gap-2 whitespace-nowrap px-4 pt-4 overflow-y-auto scrollbar-hide">
        <button @click="open" class="pill">
            Semester 4 <Icon name="material-symbols:arrow-drop-down-rounded" class="text-xl -mt-1"/>
        </button>

        <button @click="filterOpen" class="pill">
            <span> <Icon name="gg:sort-az" class="text-lg -ml-2 -mt-1"/> Semua</span>
        </button>
    </div>

    <div class="p-4">
        <template v-for="i in 16">
            <div class="card flex justify-between mb-3">
                <span class="-ml-2 truncate">Pertemuan 1 - Pembahasan Minggu Pertama.ppt</span>
                <div class="text-gray-700 text-xl leading-none">
                    <Icon name="fluent:more-vertical-16-regular"></Icon>
                </div>
            </div>
        </template>
    </div>

    <bottom-sheet ref="semesterSelect">
        <ul>
            <li class="p-4">Semester 2</li>
            <li class="p-4">Semester 4</li>
            <li class="p-4">Semester 6</li>
            <li class="p-4">Semester 6</li>
        </ul>
    </bottom-sheet>

    <bottom-sheet ref="filterSelect">
        <ul>
            <li class="p-4">Semester 2</li>
            <li class="p-4">Semester 4</li>
        </ul>
    </bottom-sheet>

</div>
</template>

<script setup lang="ts">

const semesterSelect = ref(null)
const open = ()=>{
    semesterSelect.value.open()
}

const filterSelect = ref(null)
const filterOpen = ()=>{
    filterSelect.value.open()
}

</script>

<style scoped>

</style>