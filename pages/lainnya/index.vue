<template>
    <div class="p-4">
        <navbar-top/>
        <div class="card flex justify-between overflow-hidden p-4">
            <img src="~/assets/img/avatar.svg" class="h-12 mr-4 sm:h-9" alt="avatar" />
            <div class="pr-3 flex-grow">
                <span class="font-bold line-clamp-2 leading-tight">
                    Nama Mahasiswa
                </span>
                <span class="text-gray-500 text-sm">1909076001</span>
            </div>
            <div class="grid content-center">
                <Icon name="ic:baseline-keyboard-arrow-right"/>
            </div>
        </div>

        <div class="mt-4 text-lg font-semibold divide-y text-gray-800">
            <div class=" p-4">
                <Icon name="carbon:user-profile" class="mr-4"/>
                <span>Dosen</span>
            </div>
            <div class=" p-4">
                <Icon name="carbon:user-profile" class="mr-4"/>
                <span>Mahasiswa</span>
            </div>

            <div class="p-4">
                <Icon name="ph:house-simple-bold" class="mr-4 text-xl -mt-1"/>
                <span>KKN</span>
            </div>
            <div class=" p-4">
                <Icon name="ic:baseline-work-outline" class="mr-4 text-xl -mt-1"/>
                <span>PKL</span>
            </div>
            <div class=" p-4">
                <Icon name="material-symbols:book-outline-rounded" class="mr-4 text-xl -mt-1"/>
                <span>Skripsi</span>
            </div>


            <div class=" p-4">
                <Icon name="fluent:info-28-regular" class="mr-4"/>
                <span>Tentang</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "index"
}
</script>

<style scoped>

</style>