<template>
    <div>
        <!--Header Bacground-->
        <figure class="absolute -z-10 w-full">
            <svg width="100%" height="309" viewBox="0 0 362 309" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="login-header" clipPathUnits="userSpaceOnUse">
                        <path d="M0 0H362V259C245 326.5 102 322.5 0 259V0Z" fill="#D9D9D9"/>
                    </clipPath>
                </defs>
                <image href="~/assets/img/login-header-bg.png" width="100%" clip-path="url(#login-header)"/>
            </svg>
        </figure>

        <!--Header Text-->
        <div class="h-[309px] flex relative">
            <div class="self-center mx-auto text-white/90 -mt-8 ">
                <p class="text-center">Selamat Datang di</p>
                <div class="flex justify-center my-2">
                    <div class="grid content-center ">
                        <i class="logo h-16"></i>
                    </div>
                    <div class="ml-3 font-outfit text-white">
                        <span class="text-2xl font-semibold ">HMTE</span><br>
                        <span class="text-3xl font-medium">Datacenter</span>
                    </div>
                </div>
                <p class="text-center ">Semua informasi dalam satu tempat</p>
                <p class="text-sm text-center text-blue-200/90 mix-blend-screen absolute bottom-[1rem] left-0 w-full">oleh HMTE UNMUL</p>
            </div>
        </div>

        <div class="py-5 px-6">
            <p class="text-sm text-gray-500 mb-6 dark:text-gray-400">silahkan masuk dengan akun yang diberikan Biro Medifo atau aktifkan akun dengan KTM</p>
            <form action="/" class="mt-3">
                <div class="relative mb-4">
                    <input type="text" id="nim"
                           class=" login-input block px-5 py-5 w-full text-gray-900 rounded-xl border border-gray-200 appearance-none
                       dark:text-white dark:border-gray-600 dark:focus:border-blue-500
                       focus:outline-1 focus:ring-0 focus:outline-gray-300 peer" placeholder=" " />
                    <label for="nim" class="login-label ">
                        NIM
                    </label>
                </div>

                <div class="relative">
                    <input type="text" id="password"
                           class=" login-input block px-5 py-5 w-full text-gray-900 rounded-xl border border-gray-200 appearance-none
                       dark:text-white dark:border-gray-600 dark:focus:border-blue-500
                       focus:outline-1 focus:ring-0 focus:outline-gray-300 peer" placeholder=" " />
                    <label for="password" class="login-label">
                        Password
                    </label>
                </div>

                <button type="submit"
                        class="text-white bg-primary hover:shadow-xl hover:shadow-blue-500/50
                    dark:focus:ring-blue-800 font-medium rounded-xl
                    shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80
                    active:shadow-none transition
                    text-lg px-5 py-3 text-center mr-2 mb-2 mt-5 w-full">
                    Login
                </button>

            </form>
        </div>

        <div class="flex justify-center">
            <a href="#" class="text-blue-400">Aktifkan Akun</a>
            <span class="mx-2 text-gray-400">|</span>
            <a href="#" class="text-blue-400">Lupa password</a>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'empty'
})
</script>

<style scoped>
.logo{
    content: url('~/assets/img/Datacenter-Logo.svg');
}
</style>