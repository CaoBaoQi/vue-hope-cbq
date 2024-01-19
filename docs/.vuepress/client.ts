import {defineClientConfig} from "@vuepress/client";
import {ColorIcon} from "./components/ColorIcon.js";
//@ts-ignore
import CarouselComponent from "./components/MyCarousel.vue";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ColorIcon", ColorIcon);
    app.component("MyCarousel", CarouselComponent);
  },
});
