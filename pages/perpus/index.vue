<template>
    <div>
        <navbar-top hasTabs="true" :value="tabs" @get-index="tabActive"/>

        <materi v-if="activeSegment === 0"/>
        <ebook v-if="activeSegment === 1"/>
        <aplikasi v-if="activeSegment === 2"/>

    </div>

</template>

<script setup lang="ts">

import BottomSheet from "~/components/BottomSheet.vue";
import Materi from "~/pages/perpus/materi.vue";
import Ebook from "~/pages/perpus/ebook.vue";
import Aplikasi from "~/pages/perpus/aplikasi.vue";

const tabs = [
    {name: "Materi"},
    {name: "Ebook"},
    {name: "Aplikasi"},
]

const sortBy = ref(null)
const open = ()=>{
    sortBy.value.open()
}

const activeSegment = ref(0)
const tabActive = (ev: number)=>{
    activeSegment.value = ev
}

</script>

<style scoped>

</style>