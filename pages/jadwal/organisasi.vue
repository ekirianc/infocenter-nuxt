<template>
    <div class="p-4">
        <div class="flex gap-2 text-gray-600 mb-4">
            <button @click="toggleActive('incoming')" class="bg-gray-200/75 bg-white border bg-gray-100 py-1 px-5 rounded-full"
                    :class="{'active': (active === 'incoming')}">
                Akan Datang
            </button>
            <button @click="toggleActive('past')" class="bg-gray-200/75 bg-white border bg-gray-100 py-1 px-5 rounded-full"
                    :class="{'active': (active === 'past')}">
                Sebelumnya
            </button>
        </div>

        <div class="py-2" v-if="active === 'incoming'">
            <div class="card">
                <span class="font-bold text-primary">#mubes</span> <br/>
                <span class="font-medium font-outfit text-lg ">RAPAT FIKSASI MUBES VIII</span> <br/>
                <div class="flex gap-4 mt-2 mb-4">
                    <span class="font-semibold rounded-md">
                        <Icon name="carbon:time"/>
                        10:00
                    </span>
                    <span class="font-semibold rounded-md">
                        <Icon name="carbon:building"/>
                        C108 (Gedung Baru)
                    </span>
                </div>
                <span>dimulai dalam: </span>
                <span class="font-medium truncate font-outfit text-lg">08:02:43</span>


            </div>
        </div>

        <div class="py-2" v-if="active === 'past'" v-for="i in 20">
            <div class="card">
                <span class="font-bold text-primary">#seminar</span> <br/>

                <span class="font-medium  font-outfit text-lg ">KULIAH UMUM TROPICAL ELECTRICAL COMPETION</span>

                <div class="flex justify-between mt-4 text-sm">
                    <span class="text-gray-600 ">15 Hari yang lalu</span>
                    <button class="font-bold text-primary">Selengkapnya</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
const active = ref('incoming')
const toggleActive = (selected)=>{
    active.value = `${selected}`
}
</script>

<style scoped>
.active{
    background-color: #c8dbf8;
    color: #1169e9;
    font-weight: bold;
}
</style>