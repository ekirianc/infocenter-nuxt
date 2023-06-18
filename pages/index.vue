
<template>
    <div class="p-4">
        <navbar-top/>
        <h2 class="font-Mulish">Home</h2>
        <!--Notification card-->
        <template v-if="messagesNotif.length !== 0">
            <home-pesan-baru v-for="notif in messagesNotif" :matkul="notif.matkul"/>
        </template>

        <!--Countdown Section-->
        <section class="relative -left-4 w-[calc(100%+2rem)] pt-2">
            <home-countdown-section/>
        </section> <!--Countdown-->

        <!--Jadwal Kuliah Section-->
        <section class="mt-4 flex flex-col gap-3 mb-8">
            <header class="flex justify-between">
                <h3 class="m-0">Kuliah Hari Ini</h3>
                <button @click="open" class="bg-white border py-1 px-5 rounded-full text-sm">
                    Semester 4 <Icon name="material-symbols:arrow-drop-down-rounded" class="text-xl -mt-1"/>
                </button>
                <bottom-sheet ref="semesterSelect" title="Pilih Semester">
                    <ul>
                        <li class="active">Semester 2</li>
                        <li>Semester 4</li>
                        <li>Semester 6</li>
                        <li>Semester 6</li>
                    </ul>
                </bottom-sheet>
            </header>
            <!--Jadwal Card-->
            <a href="#" class="card flex justify-between">
                <div>
                    <span class="font-medium truncate font-outfit text-xl">Sistem Instrumentasi</span>
                    <div class="flex gap-2 mt-2">
                        <span class="border bg-primary/20 px-3 font-semibold text-sm rounded-md">C308</span>
                        <span class="border bg-stone-200/70 px-3 font-semibold text-sm rounded-md">09:20 - 11:00</span>
                    </div>
                </div>
                <div class="grid content-center pr-2 text-primary">
                    <Icon name="MessageNotif" class="text-2xl"/>
                </div>
            </a>
            <!--Jadwal Card-->
            <a href="#" class="card flex justify-between">
                <div>
                    <span class="font-medium truncate font-outfit text-xl">Sistem Instrumentasi</span>
                    <div class="flex gap-2 mt-2">
                        <span class="border bg-primary/20 px-3 font-semibold text-sm rounded-md">C308</span>
                        <span class="border bg-stone-200/70 px-3 font-semibold text-sm rounded-md">09:20 - 11:00</span>
                    </div>
                </div>
                <div class="grid content-center text-gray-700 text-2xl pr-2 ">
                    <Icon name="fluent:more-vertical-16-regular"></Icon>
                </div>
            </a>
        </section> <!--Jadwal Kuliah-->



    </div>
</template>

<script setup>

const semesterSelect = ref(null)
const open = ()=>{ semesterSelect.value.open() }

const messagesNotif = ref([
    { matkul: 'Pengolahan Citra Digital', read: false },
    { matkul: 'Pemrograman Mobile', read: false },
    { matkul: 'Pemrograman Mobile', read: false },
])
</script>

