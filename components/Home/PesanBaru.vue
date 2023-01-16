<script setup>
const props = defineProps({
    matkul: String
})
</script>

<template>
    <!--notifikasi-->
    <a href="#" class="flex shadow-md bg-white px-5 py-4 rounded-2xl mt-3">
        <span class="text-primary text-xl mr-3"><Icon name="MessageNotif"/></span>
        <p>
            Pesan Baru untuk matkul <b>{{ matkul }}</b>
        </p>
    </a>
</template>
