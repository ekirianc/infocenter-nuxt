<template>
<div>
    <title-bar title="Cari"/>
    <form>
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
            <input type="search" id="default-search"
                   class="block w-full p-4 pl-4 text-sm text-gray-900 border border-gray-300 bg-gray-50
                          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                          dark:focus:border-blue-500" placeholder="Cari di HMTE Datacenter" required>
        </div>
    </form>
</div>
</template>

<script setup>
definePageMeta({
    layout: 'empty'
})
</script>

<style scoped>

</style>