<template>
    <div>
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
    </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.1s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    transform: translateY(10px);
}
body{
    background-color: #f6f7fb ;
}
</style>