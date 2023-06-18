<script setup>
import notifcard from '~/data/notifikasi-card.json'
import {forEach} from "lodash";

// filter yang waktunya = false
function notifcardOrganisasi() {
    const dataKe = forEach(notifcard.organisasi)
    const b = []
    for (let i = 0; i<dataKe.length; i ++){
        if(dataKe[i].timeLeft !== false){
            // tampung data ke b
            b.push(dataKe[i])
        }
    }
    // console.log(b)
    return b
}

// bikin huruf pertama jadi kapital
function capitalized(name) {
    const capitalizedFirst = name[0].toUpperCase();
    const rest = name.slice(1);

    return capitalizedFirst + rest;
}
</script>

<template>
<div id="countdown">
    <template v-if="notifcard.seminar.length !== 0">
        <!--Seminar-->
        <div class="flex flex-row w-full px-4 py-2 gap-3 ">
            <!--Header-->
            <a href="#" class="w-36 grid content-center justify-items-center shadow-card rounded-2xl h-[8.5rem] bg-[#e0f3e1] ">
                <div class="-mt-3">
                    <span class="text-[#72baa9] font-bold text-xl">Seminar</span>
                    <img src="~/assets/img/seminar-illust.svg" alt="ilustrasi seminar">
                </div>
            </a>
            <!--Content-->
            <div class="h-[8.5rem] overflow-x-auto overflow-y-hidden w-full">
                <Swiper :modules="[SwiperAutoplay, SwiperPagination]" :autoplay="true" :pagination="{clickable: true}" >
                    <SwiperSlide  v-for="msg in notifcard.seminar">
                        <a href="/" class="flex flex-col justify-between p-5 ml-1  min-h-[8.5rem] rounded-2xl bg-white border">
                            <div class="grid">
                                <span class="text-gray-600 text-sm">Seminar {{msg.type }}</span>
                                <span class="truncate font-bold text-sm">{{ msg.name }}</span>
                            </div>
                            <div class="grid">
                                <span class="text-3xl font-bold text-[#72baa9]">{{ msg.timeLeft }}</span>
                            </div>
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div> <!--Seminar-->
    </template>

    <template v-if="notifcard.organisasi.length !== 0">
        <!--Organinsasi-->
        <div class="flex flex-row w-full px-4 py-2 gap-3">
            <!--Header-->
            <a href="#" class="w-36 grid justify-items-center overflow-hidden shadow-card rounded-2xl h-[8.5rem] relative bg-[#fdedc3]">
                <div class="mt-4 flex flex-col text-center">
                    <span class="text-[#b2a07b] font-bold text-sm">Kegiatan</span>
                    <span class="text-[#f59660] font-bold -mt-2">Organisasi</span>
                </div>
                <img class="absolute bottom-0" src="~/assets/img/logo-hmte.svg" alt="ilustrasi seminar">
            </a>
            <!--content-->
            <div class="h-[8.5rem] overflow-x-auto overflow-y-hidden  w-full">
                <Swiper :modules="[SwiperAutoplay, SwiperPagination]" :autoplay="true" :pagination="{clickable: true}" >
                    <SwiperSlide v-for="msg in notifcardOrganisasi()">
                        <a href="#" class="flex flex-col justify-between p-5 ml-1 min-h-[8.5rem] rounded-2xl bg-white border">
                            <div class="grid">
                                <div class="text-gray-600 text-sm font-semibold truncate">
                                    <template v-for="type in msg.type">
                                        <span class="text-[#f59660] mr-1 ">{{capitalized(type)}}</span>
                                    </template>
                                </div>
                                <span class="truncate font-bold text-sm">{{ msg.perihal }}</span>
                            </div>
                            <div class="grid">
                                <span class="text-3xl font-bold text-[#f59660]">{{ msg.timeLeft }}</span>
                            </div>
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div> <!--Organinsasi-->
    </template>
</div>

</template>

<style lang="scss">
div#countdown{
    .swiper-pagination{
        margin-bottom: -5px;
    }
    .swiper-pagination-bullet{
        /*background-color: red;*/
        border-radius: 90px;
        height: 4px;
        width: 10px;
    }
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: #72baa9;
    }
}


</style>
