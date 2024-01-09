import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    "/": [
        "",
        {
            text: "计算机科学与技术 😀",
            collapsible: true,
            icon: "/major.svg",
            prefix: "major/",
            link: "major/",
            children: "structure",
        },
        {
            text: "数据结构 🧑‍💻",
            collapsible: true,
            icon: "/data-structure.svg",
            prefix: "data-structure/",
            link: "data-structure/",
            children: "structure",
        },        {
            text: "软件 Software 🐓",
            collapsible: false,
            icon: "/software.svg",
            prefix: "software/",
            link: "software/",
            children: "structure",
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
    ],
});
