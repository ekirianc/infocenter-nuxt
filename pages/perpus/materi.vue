<template>
<div class="p-4">
    <div class="flex justify-between mb-4">
        <h2 class="flex-1 text-gray-700 line-clamp-2">Pengolahan Citra Digital</h2>
        <div>
            <button class="bg-white px-4 py-2 rounded-2xl flex-2 border">Ubah <Icon name="ic:outline-edit-note"/></button>
        </div>
    </div>

    <div v-for="i in 16">
        <div class="card flex justify-between mb-3">
            <span class="-ml-2 truncate">Pertemuan 1 - Pembahasan Minggu Pertama.ppt</span>
            <div class="text-gray-700 text-xl leading-none">
                <Icon name="fluent:more-vertical-16-regular"></Icon>
            </div>
        </div>
    </div>

    <bottom-sheet ref="sortBy">
        <ul>
            <li class="p-4">Tanggal Upload</li>
            <li class="p-4">Nama File</li>
            <li class="p-4">Dosen</li>
        </ul>
    </bottom-sheet>
</div>
</template>

<script>
export default {
    name: "materi"
}
</script>

<style scoped>

</style>