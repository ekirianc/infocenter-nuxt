
<template>
    <!-- Bottom Nav -->
    <div class="w-full h-20 absolute ">
        <section id="bottom-navigation" class="border-t fixed inset-x-0 bottom-0 z-10 bg-white border-t">
            <div id="tabs" class="flex justify-between" >
                <template v-for="nav in navs">
                    <nuxt-link :to="nav.route" class="tabs-menu">
                        <!--icon-->
                        <span class="ic text-2xl flex justify-center py-0.5 fill-white">
                            <Icon :name="nav.icon" />
                            <Icon :name="nav.iconActive" />
                        </span>
                        <!--label-->
                        <span class="hover:text-primary block text-xs ">{{ nav.name }}</span>
                    </nuxt-link>
                </template>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
const navs = [
    { name: "Home",     route: "/",         icon: "Home",       iconActive: "HomeFill" },
    { name: "Jadwal",   route: "/jadwal",   icon: "Calendar",   iconActive: "CalendarFill" },
    { name: "Perpus",   route: "/perpus",   icon: "Book1",      iconActive: "Book1Fill" },
    { name: "Himpunan", route: "/himpunan", icon: "People",     iconActive: "PeopleFill" },
    { name: "Lainnya",  route: "/lainnya",  icon: "Menu",       iconActive: "MenuFill" },
]
</script>
