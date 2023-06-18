<template>
    <div id="kuliah">
        <div class="flex gap-2 whitespace-nowrap px-4 pt-4 overflow-y-auto scrollbar-hide">
            <button @click="open" class="pill">
                Semester 4 <Icon name="material-symbols:arrow-drop-down-rounded" class="text-xl -mt-1"/>
            </button>

            <button @click="toggleView" class="pill">
                <span v-if="!viewMode"> <Icon name="material-symbols:arrow-drop-down-rounded" class="text-lg -mt-1"/> Card</span>
                <span  v-if="viewMode"> <Icon  name="material-symbols:arrow-drop-down-rounded" class="text-lg -mt-1"/> List</span>
            </button>

            <button class="pill">
                Atur Mata Kuliah
            </button>
        </div>

        <div class="mt-2">
            <Swiper autoHeight :modules="[SwiperPagination]" :pagination="pagination">
                <SwiperSlide v-for="a in 4">
                    <div class="px-4 py-2 bg-[#f6f7fb]" v-for="i in 2">
                        <div class="card flex justify-between">
                            <div>
                                <span class="font-medium truncate font-outfit text-xl">Sistem Instrumentasi</span>
                                <div class="flex gap-2 mt-2">
                                    <span class="border bg-primary/20 px-3 font-semibold text-sm rounded-md">C308</span>
                                    <span class="border bg-stone-200/70 px-3 font-semibold text-sm rounded-md">09:20 - 11:00</span>
                                </div>
                                <div class="flex flex-col mt-2 gap-2">
                                    <span><Icon name="carbon:user-profile"/> Dosen 1</span>
                                    <span><Icon name="carbon:user-profile"/> Dosen 2</span>
                                </div>
                            </div>
                            <div class="grid mt-2 text-gray-700 text-2xl pr-2 ">
                                <Icon name="fluent:more-vertical-16-regular"></Icon>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="px-4 py-2 bg-[#f6f7fb]" v-for="i in 4">
                        <div class="card flex justify-between">
                            <div>
                                <span class="font-medium truncate font-outfit text-xl">Sistem Instrumentasi</span>
                                <div class="flex gap-2 mt-2">
                                    <span class="border bg-primary/20 px-3 font-semibold text-sm rounded-md">C308</span>
                                    <span class="border bg-stone-200/70 px-3 font-semibold text-sm rounded-md">09:20 - 11:00</span>
                                </div>
                                <div class="flex flex-col mt-2 gap-2">
                                    <span><Icon name="carbon:user-profile"/> Dosen 1</span>
                                    <span><Icon name="carbon:user-profile"/> Dosen 2</span>
                                </div>
                            </div>
                            <div class="grid mt-2 text-gray-700 text-2xl pr-2 ">
                                <Icon name="fluent:more-vertical-16-regular"></Icon>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>


        <bottom-sheet ref="semesterPick" title="Pilih Semester">
            <ul>
                <li class="p-4">Semester 2</li>
                <li class="p-4">Semester 4</li>
                <li class="p-4">Semester 6</li>
                <li class="p-4">Semester 6</li>
            </ul>
        </bottom-sheet>
    </div>
</template>

<script setup lang="ts">
const semesterPick = ref(null)
const open = ()=>{ semesterPick.value.open() }

const viewMode = ref(true)
const toggleView = ()=>{
    viewMode.value = !viewMode.value
}

const days = [
    'Sen',
    'Sel',
    'Rab',
    'Kam',
    'Jum',
]

const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
        return '<span class="' + className + '">' + days[index] + "</span>";
    },
}
</script>

<style>
div#kuliah{
    .swiper-pagination{
        text-align: left;
    }
    .swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,
    .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{
        margin-left: 0 !important;
        margin-right: .5rem;
    }
    .swiper-pagination-bullets{
        top: 0;
        bottom: auto;
        padding: 10px 1rem;
        overflow-y: auto;
        scrollbar-width: none;  /* Firefox */
    }

    .swiper-pagination-bullets::-webkit-scrollbar{
        display: none;
    }

    .swiper-wrapper{
        margin-top: 3rem;
    }

    .swiper-pagination-bullet {
        display: inline;
        padding: 5px 15px;
        border-radius: 999px;
        text-align: center;
        line-height: 20px;
        font-size: 1rem;
        color: #919192;
        opacity: 1;
        background: #e3e7f1;
    }
    .swiper-pagination-bullet-active {
        background-color: #c8dbf8;
        font-weight: bold;
        color: #1169e9;
    }
}

</style>