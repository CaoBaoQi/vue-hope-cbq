import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/vue-hope-cbq/",

  lang: "zh-CN",
  title: "JZXY-CBQ",
  description: "JZXY-CBQ",
  theme,
  markdown: {
      headers: {
          level: [2,3,4]
      }
  }
});
