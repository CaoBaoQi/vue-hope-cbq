import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

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
