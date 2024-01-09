import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    {
        text: "软件 Software 🐓",
        icon: "/software.svg",
        prefix: "/software",
        children: [
            {
                text: "CLion 安装与配置",
                icon: "/clion.svg",
                link: "/CLion",
                children: [],
            },
            {
                text: "IDEA 安装与配置",
                icon: "/idea.svg",
                link: "/IDEA",
                children: [],
            }, {text: "", icon: "ellipsis", link: ""}
        ]
    },
    {
        text: "计算机组成原理",
        icon: "/os-principle.svg",
        prefix: "/major/os-principle",
        children: [
            {
                text: "os-principle-01",
                icon: "/os-principle.svg",
                link: "/os-principle01",
                children: [],
            },
            {
                text: "os-principle-02",
                icon: "/os-principle.svg",
                link: "/os-principle02",
                children: [],
            }, {text: "", icon: "ellipsis", link: ""}
        ]
    },
    {
        text: "操作系统",
        icon: "/os.svg",
        prefix: "/major/os",
        children: [
            {
                text: "os-01",
                icon: "/os.svg",
                link: "/os01",
                children: [],
            },
            {
                text: "os-02",
                icon: "/os.svg",
                link: "/os02",
                children: [],
            }, {text: "", icon: "ellipsis", link: ""}
        ]
    },
    {
        text: "数据结构",
        icon: "/data-structure.svg",
        prefix: "/data-structure",
        children: [
            {
                text: "data-structure-01",
                icon: "/data-structure.svg",
                link: "/data-structure01",
                children: [],
            },
            {
                text: "data-structure-02",
                icon: "/data-structure.svg",
                link: "/data-structure02",
                children: [],
            }, {text: "", icon: "ellipsis", link: ""}
        ]
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
