<template>
<div>
    <navbar-top hasTabs="true" :value="tabs" @get-index="tabActive"/>

    <kuliah v-if="activeSegment === 0"/>
    <seminar v-if="activeSegment === 1"/>
    <organisasi v-if="activeSegment === 2"/>

</div>
</template>

<script setup lang="ts">

import Kuliah from "~/pages/jadwal/kuliah.vue";
import Seminar from "~/pages/jadwal/seminar.vue";
import Organisasi from "~/pages/jadwal/organisasi.vue";

const tabs = [
    {name: "Kuliah"},
    {name: "Seminar"},
    {name: "Organisasi"},
]

const activeSegment = ref(0)
const tabActive = (ev: number)=>{
    activeSegment.value = ev
}

</script>

<style scoped>

</style>