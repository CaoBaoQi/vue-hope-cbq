import {getDirname, path} from "@vuepress/utils";
import {hopeTheme} from "vuepress-theme-hope";
import {zhNavbar} from "./navbar.js";
import {zhSidebar} from "./sidebar.js";
// @ts-ignore
const __dirname = getDirname(import.meta.url);

// @ts-ignore
// @ts-ignore
// @ts-ignore
export default hopeTheme(
    {
        author: {
            name: "Mr.CBQ",
            url: "https://gitee.com/cola777jz",
            email: "2023cbq@gmail.com"
        },
        iconAssets: "fontawesome-with-brands",
        logo: "https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/go.svg",

        hostname: "https://gitee.com/cola777jz",

        repo: "https://gitee.com/cola777jz",
        docsDir: "docs",
        docsBranch: "master",

        copyright: "Power by <a href=\"https://gitee.com/cola777jz/\" target=\"_blank\">CBQ</a> | MIT Licensed, Copyright © 2024-present",
        displayFooter: true,

        pageInfo: false,
        fullscreen: true,
        darkmode: "enable",
        metaLocales: {
            editLink: "在 GitHub 上编辑此页",
        },

        locales: {
            "/": {
                footer:
                    "<img  height=\"50px\" width=\"220px\"  src=\"https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/66666666666.png\" alt=\"Typing SVG\" />",

                navbar: zhNavbar,
                sidebar: zhSidebar,
            },
        },

        plugins: {
            comment: {
                provider: "Giscus",
                repo: "CaoBaoQi/vue-hope-cbq",
                repoId: "R_kgDOLCkJFg",
                category: "Announcements",
                categoryId: "DIC_kwDOLCkJFs4CcTFs",
            },

            components: {
                components: ["Badge", "BiliBili", "SiteInfo", "VPCard"],
                rootComponents: {
                    notice: [
                        {
                            path: "/",
                            title: "Info: 😀",
                            content:
                                '<ul><li>士不可以不弘毅,任重而道远</li><li>晋中学院-CBQ</li></ul><div class="addthis_inline_follow_toolbox_qssu"></div>',
/*                            actions: [
                                {
                                    text: "start →",
                                    link: "./major/",
                                    type: "primary",
                                },
                            ],*/
                            showOnce: false,
                        },
                    ],
                },
            },

            mdEnhance: {
                align: true,
                chart: true,
                //@ts-ignore
                card: true,
                codetabs: true,
                container: true,
                imgLazyload: true,
                imgSize: true,
                include: {
                    resolvePath: (file) =>
                        file.startsWith("@src")
                            ? file.replace("@src", path.resolve(__dirname, ".."))
                            : file,
                },
                mark: true,
                tabs: true,
                tasklist: true,
            },
        },
    },
    {custom: true},
);
