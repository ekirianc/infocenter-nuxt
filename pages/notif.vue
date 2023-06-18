<template>
    <div class="bg-[#f6f7fb]">
        <title-bar title="Notifikasi"/>
        <div>
            <h3 class="px-4 mb-3">Terbaru</h3>
            <div @click="openMessage" class="flex p-4 bg-white">
                <Icon name="MessageNotif" class="text-primary text-xl mr-4 ml-2 mt-1"/>
                <div>
                    <div class="t">Pesan Baru untuk <b>Sistem Instrumentasi</b> </div>
                    <span class="text-gray-500 text-sm">07:10</span>
                </div>
            </div>

            <h3 class="px-4 mb-3">Sudah dibaca</h3>
            <div class="flex p-4 text-gray-600 border border-gray-300">
                <Icon name="MessageNotif" class="text-primary text-xl mr-4 ml-2 mt-1"/>
                <div>
                    <div class="t">Pesan Baru untuk <b>Sistem Instrumentasi</b> </div>
                    <span class="text-sm">07:10</span>
                </div>
            </div>
        </div>

        <modal ref="messageContent">
            <div class="text-lg font-semibold relative bg-[#f3fbff] shadow-md">
                <button @click="closeMessage" class="p-4"><Icon name="material-symbols:arrow-back"/> </button>
                <span class="font-bold text-xl">Pesan Baru</span>
            </div>

            <div class="relative bg-white overflow-hidden m-4">
                <p class="font-bold text-lg">Mata Kuliah</p>
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
            </div>

        </modal>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'empty'
})

const messageContent = ref(null)
const openMessage = ()=>{
    messageContent.value.open()
}
const closeMessage = ()=>{
    messageContent.value.close()
}
</script>

<style scoped>

</style>