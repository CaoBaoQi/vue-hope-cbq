import {navbar} from "vuepress-theme-hope";

export const zhNavbar = navbar([
    {
        text: "软件 Software",
        link: "/software/CLion",
        icon: "/software.svg",
    },
    {
        text: "计算机组成原理",
        link: "/major/os-principle/os-principle01",
        icon: "/os-principle.svg",
    },
    {
        text: "操作系统",
        link: "/software/os/os-01",
        icon: "/os.svg",
    },
    {
        text: "数据结构",
        link: "/data-structure/data-structure01",
        icon: "/data-structure.svg",
    },
    {
        text: "关于我 ",
        icon: "/CBQ.svg",
        link: "/ABOUTME.md"
    },
    {
        text: "更新日志 ",
        icon: "/update.svg",
        link: "/CHANGELOG.md"
    }
]);
