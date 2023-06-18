<template>
    <div class="p-4">
        <div class="flex gap-2 text-gray-600 mb-4 ">
            <button @click="toggleActive('incoming')" class="bg-gray-200/75 border bg-gray-100 py-1 px-5 rounded-full"
                    :class="{'active': (active === 'incoming')}">
                Akan Datang
            </button>
            <button @click="toggleActive('past')" class="bg-gray-200/75 border bg-gray-100 py-1 px-5 rounded-full"
                    :class="{'active': (active === 'past')}">
                Sebelumnya
            </button>
        </div>

        <div class="py-2" v-if="active === 'incoming'">
            <div class="card">
                <span class="font-bold text-primary text-sm">#Hasil-Skripsi</span> <br/>

                <span class="font-medium truncate font-outfit text-2xl">Besok</span>
                <div class="flex gap-4 mb-4">
                <span class="font-semibold rounded-md">
                    <Icon name="carbon:time"/>
                    10:00
                </span>
                    <span class="font-semibold rounded-md">
                    <Icon name="carbon:building"/>
                    C108 (Gedung Baru)
                </span>
                </div>

                <span class="font-medium truncate font-outfit text-xl ">Nama Mahasiswa</span>
                <p class="mb-4">Evaluasi Keandalan Sistem Distribusi Penyulang M4 Pada Gardu Induk Muara Badak Menggunakan Metode Reliability Network Equivalent Approach (RNEA)</p>

                <div >
                    <span >Dosen Pembimbing: </span>
                    <div class="flex flex-col mt-2 mb-4 gap-2">
                        <span>[1] <Icon name="carbon:user-profile"/> Dosen 1</span>
                        <span>[2] <Icon name="carbon:user-profile"/> Dosen 2</span>
                    </div>

                    <span>Dosen Penguji: </span>
                    <div class="flex flex-col mt-2 gap-2">
                        <span>[1] <Icon name="carbon:user-profile"/> Dosen 1</span>
                        <span>[2] <Icon name="carbon:user-profile"/> Dosen 2</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="py-2" v-if="active === 'past'" v-for="i in 5">
            <div class="card">
                <span class="font-bold text-primary text-sm">#Hasil-Skripsi</span> <br/>

                <span class="font-medium truncate font-outfit text-xl ">Nama Mahasiswa</span>
                <p class="mb-4">Evaluasi Keandalan Sistem Distribusi Penyulang M4 Pada Gardu Induk Muara Badak Menggunakan Metode Reliability Network Equivalent Approach (RNEA)</p>

                <div class="flex justify-between">
                    <span class="text-gray-600 text-sm">15 Hari yang lalu</span>
                    <button class="font-bold text-primary text-sm">Selengkapnya</button>
                </div>

            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
const active = ref('incoming')
const toggleActive = (selected: string)=>{
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