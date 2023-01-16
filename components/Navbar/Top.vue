<template>
    <!--top navbar-->
    <div class="bg-white px-4  sm:px-4 py-3 dark:bg-gray-900 w-full fixed z-10 transition">
        <div class="flex flex-wrap items-center justify-between mx-auto">
            <a href="/" class="flex items-center">
                <img src="~/assets/img/datacenter-logo-primary.svg" class="h-8 mr-2 sm:h-9" alt="Datacenter Logo" />
                <span class="self-center text-primary font-bold whitespace-nowrap dark:text-white">Datacenter</span>
            </a>
            <div class="flex items-center md:order-2 text-primary text-xl gap-5">
                <a href="#"><Icon name="Notification1" class="text-2xl"></Icon></a>
                <a href="#"><Icon name="SearchNormal1" class="text-2xl"></Icon></a>
                <a href="/login" class="flex text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                    <span class="sr-only">Open user menu</span>
                    <img class="w-8 h-8 rounded-full" src="~/assets/img/avatar.svg" alt="user photo">
                </a>
            </div>
        </div>
    </div>

    <div class="h-10 mb-4"/> <!--sesuai tinggi navbar-->
</template>

<script>
export default {
    name: "TopNavbar"
}
</script>

<style scoped>

</style>