<template>
<div>
    <navbar-top hasTabs="true" :value="tabs" @get-index="tabActive"/>

    <organisasi v-if="activeSegment === 0"/>
    <pengurus v-if="activeSegment === 1"/>
    <profil v-if="activeSegment === 2"/>

</div>
</template>

<script setup lang="ts">
import Organisasi from "~/pages/jadwal/organisasi.vue";
import Pengurus from "~/pages/himpunan/pengurus.vue";
import Profil from "~/pages/himpunan/profil.vue";

const tabs = [
    {name: "Aktivitas"},
    {name: "Pengurus"},
    {name: "Profil"},
]

const activeSegment = ref(0)
const tabActive = (ev: number)=>{
    activeSegment.value = ev
}
</script>

<style scoped>

</style>