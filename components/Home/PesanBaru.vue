<script setup>
const props = defineProps({
    matkul: String
})
const messageContent = ref(null)
const openMessage = ()=>{
    messageContent.value.open()
}
const closeMessage = ()=>{
    messageContent.value.close()
}
</script>

<template>
    <!--notifikasi-->
    <div @click="openMessage" class="flex shadow-card-2 bg-white px-5 py-4 rounded-2xl mt-3">
        <span class="text-primary text-xl mr-3"><Icon name="MessageNotif"/></span>
        <p>
            Pesan Baru untuk matkul <b>{{ matkul }}</b>
        </p>
    </div>

    <modal ref="messageContent" title="Pesan Baru">
        <p class="font-bold text-lg">{{ matkul }}</p>
        <span class="text-gray-500 text-sm">Semester Ganjil 2023</span>

        <div class="mt-4">
            <div class="flex gap-2 text-sm ">
                <img src="~/assets/img/avatar.svg" alt="profile" class="w-6 rounded-full">
                <span class="font-semibold">Nama PJ Matakuliah</span>
                <span class="bg-gray-300 px-4 rounded-lg font-bold">PJ</span>
            </div>
            <div class="bg-[#1169e9] rounded-xl p-4 mt-2 text-white">
                Lorem ipsum dolor sit amet. Adipisci eius molestias mollitia officia omnis quibusdam repudiandae rerum temporibus ullam voluptas. Ipsum, tenetur.
            </div>
            <div class="text-sm text-gray-600 text-right mr-3 mt-1">dikirim pukul 09:23</div>
        </div>
    </modal>
</template>
