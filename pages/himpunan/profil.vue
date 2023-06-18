<template>
<div id="profil">
    <Swiper autoHeight :modules="[SwiperPagination]" :pagination="pagination" >
        <SwiperSlide>
            <div class="py-4 px-6">
                <h2>Visi</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci dolore doloribus facere, illum iusto laboriosam laborum nam placeat, quasi saepe ut velit vitae? Deleniti excepturi nobis quaerat sapiente vero!</p>

                <h2>Misi</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad alias amet doloremque eveniet exercitationem, in inventore minima modi necessitatibus nostrum nulla quasi quibusdam quos reiciendis, repellendus sit ullam voluptate.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide >
            <div class="py-4 px-6 ">
                <div class="grid justify-items-center">
                    <h2 class="text-center">Filosofi Logo HTME</h2>
                    <img src="~/assets/img/logo-himpunan.png" alt="logo HMTE" width="150" class="m-4"/>
                </div>

                <h3>Poin 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse explicabo fugit illo impedit labore, mollitia nemo odio </p>

                <h3>Poin 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse explicabo fugit illo impedit labore, mollitia nemo odio </p>

                <h3>Poin 3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse explicabo fugit illo impedit labore, mollitia nemo odio </p>

                <h3>Poin 4</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse explicabo fugit illo impedit labore, mollitia nemo odio </p>

                <h3>Poin 5</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse explicabo fugit illo impedit labore, mollitia nemo odio </p>

            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div class="px-5 ">
                <h3>2015</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse explicabo fugit illo impedit labore, mollitia nemo odio </p>

                <h3>2016</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse explicabo fugit illo impedit labore, mollitia nemo odio </p>

                <h3>2017</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse explicabo fugit illo impedit labore, mollitia nemo odio </p>

                <h3>2018</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse explicabo fugit illo impedit labore, mollitia nemo odio </p>

                <h3>2019</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse explicabo fugit illo impedit labore, mollitia nemo odio </p>

                <h3>2020</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse explicabo fugit illo impedit labore, mollitia nemo odio </p>

                <h3>2021</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse explicabo fugit illo impedit labore, mollitia nemo odio </p>

                <h3>2022</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse explicabo fugit illo impedit labore, mollitia nemo odio </p>


            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div class="px-5 py-4 flex flex-col gap-4 ">
                <div class="card">
                    <div class="flex gap-4 mb-2">
                        <Icon name="ph:buildings" class="text-3xl"/>
                        <h2>Badan Usaha Dana</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate debitis eaque error, ex exercitationem fugit id minus modi, odit pariatur quasi quia sit tempora? Harum molestias mollitia odit rerum unde.</p>
                </div>

                <div class="card">
                    <div class="flex gap-4 mb-2">
                        <Icon name="ph:buildings" class="text-3xl"/>
                        <h2>Badan Usaha Dana</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate debitis eaque error, ex exercitationem fugit id minus modi, odit pariatur quasi quia sit tempora? Harum molestias mollitia odit rerum unde.</p>
                </div>

                <div class="card">
                    <div class="flex gap-4 mb-2">
                        <Icon name="ph:buildings" class="text-3xl"/>
                        <h2>Badan Usaha Dana</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate debitis eaque error, ex exercitationem fugit id minus modi, odit pariatur quasi quia sit tempora? Harum molestias mollitia odit rerum unde.</p>
                </div>

                <div class="card">
                    <div class="flex gap-4 mb-2">
                        <Icon name="ph:buildings" class="text-3xl"/>
                        <h2>Badan Usaha Dana</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate debitis eaque error, ex exercitationem fugit id minus modi, odit pariatur quasi quia sit tempora? Harum molestias mollitia odit rerum unde.</p>
                </div>

                <div class="card">
                    <div class="flex gap-4 mb-2">
                        <Icon name="ph:buildings" class="text-3xl"/>
                        <h2>Badan Usaha Dana</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate debitis eaque error, ex exercitationem fugit id minus modi, odit pariatur quasi quia sit tempora? Harum molestias mollitia odit rerum unde.</p>
                </div>

                <div class="card">
                    <div class="flex gap-4 mb-2">
                        <Icon name="ph:buildings" class="text-3xl"/>
                        <h2>Badan Usaha Dana</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate debitis eaque error, ex exercitationem fugit id minus modi, odit pariatur quasi quia sit tempora? Harum molestias mollitia odit rerum unde.</p>
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
</div>

</template>

<script setup lang="ts">
const menu = [
    'Visi Misi',
    'Logo',
    'Sejarah',
    'Departemen',
]

const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
        return '<span class="' + className + '">' + menu[index] + "</span>";
    },
}
</script>

<style>
div#profil{
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
        padding: 1rem;
        overflow-y: auto;
        scrollbar-width: none;  /* Firefox */
        white-space: nowrap;
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