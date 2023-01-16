<template>
    <div>
        <h2>Home</h2>

        <!--Notification card-->
        <template v-if="messagesNotif.length !== 0">
            <home-pesan-baru v-for="notif in messagesNotif" :matkul="notif.matkul"/>
        </template>

        <!--Countdown Section-->
        <section class="relative -left-4 w-[calc(100%+2rem)] pt-2">
            <home-countdown-section/>
        </section> <!--Countdown-->

    </div>
</template>

<script setup lang="ts">
const messagesNotif = ref([
    { matkul: 'Pengolahan CItra Digital' },
])
</script>


