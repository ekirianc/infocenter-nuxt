import { VueBottomSheet } from "@webzlodimir/vue-bottom-sheet";
import  "@webzlodimir/vue-bottom-sheet/dist/style.css";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("VueBottomSheet", VueBottomSheet)
})