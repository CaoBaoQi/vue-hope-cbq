import {getDirname, path} from "@vuepress/utils";
import {defineUserConfig} from "vuepress";
import theme from "./theme.js";
import {container} from "@mdit/plugin-container";
// @ts-ignore
const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
    base: "/vue-hope-cbq/",

    title: "JZXY-CBQ",
    description: "JZXY-CBQ",
    shouldPrefetch: false,

    markdown: {
        code: {
            lineNumbers: 10,
        },
    },

    locales: {
        "/": {
            lang: "zh-CN",
        },
    },

    theme,

    pagePatterns: ["**/*.md", "!*.snippet.md", "!.vuepress", "!node_modules"],

    alias: {
        "@theme-hope/layouts/Layout": path.resolve(
            __dirname,
            "./layouts/Layout.vue",
        ),
        // "@theme-hope/components/HomePage": path.resolve(
        //     __dirname,
        //     "./components/HomePage.vue"
        // ),
        // "@theme-hope/components/NormalPage": path.resolve(
        //     __dirname,
        //     "./components/NormalPage.vue"
        // ),
        // "@theme-hope/modules/sidebar/components/Sidebar": path.resolve(
        //     __dirname,
        //     "./components/Sidebar.vue"
        // ),
    },
    extendsMarkdown: (md) => {
        md.use(container, {
            name: "hint",
            openRender: (tokens, index, _options) => {
                const info = tokens[index].info.trim().slice(4).trim();
                let style = "background:#262626";
                if (info.indexOf("style") > -1) {
                    style = info.split("style=")[1].split('"')[1];
                }
                const title = info.replace('style="'+style+'"',"") || 'Hint';
                return `<div class="custom-container hint" style="${style}">\n<p class="custom-container-title">${title}</p>\n`;


            },
        });
    },
});
