// .vuepress/config.js
module.exports = {
  base: "/doc-cleanarch/",
  locales: {
    "/": {
      lang: "en-US",
      title: "Clean Architecture"
    },
    "/zh/": {
      lang: "zh-CN",
      title: "架构整洁之道"
    }
  },
  themeConfig: {
    locales: {
      "/": {
        label: "English",
        selectText: "Languages",
        ariaLabel: "Select language",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated",
        nav: [],
        sidebar: {
          "/": [
            "",
            "part1.md",
            "ch1.md",
            "ch2.md",
            "part2.md",
            "ch3.md",
            "ch4.md",
            "ch5.md",
            "ch6.md",
            "part3.md",
            "ch7.md",
            "ch8.md",
            "ch9.md",
            "ch10.md",
            "ch11.md",
            "part4.md",
            "ch12.md",
            "ch13.md",
            "ch14.md",
            "part5.md",
            "ch15.md",
            "ch16.md",
            "ch17.md",
            "ch18.md",
            "ch19.md",
            "ch20.md",
            "ch21.md",
            "ch22.md",
            "ch23.md",
            "ch24.md",
            "ch25.md",
            "ch26.md",
            "ch27.md",
            "ch28.md",
            "ch29.md",
            "part6.md",
            "ch30.md",
            "ch31.md",
            "ch32.md",
            "ch33.md",
            "ch34.md",
            "afterword.md"
          ]
        }
      },
      "/zh/": {
        label: "简体中文",
        selectText: "选择语言",
        ariaLabel: "选择语言",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新",
        nav: [],
        sidebar: {
          "/zh/": [
            "",
            "part1.md",
            "ch1.md",
            "ch2.md",
            "part2.md",
            "ch3.md",
            "ch4.md",
            "ch5.md",
            "ch6.md",
            "part3.md",
            "ch7.md",
            "ch8.md",
            "ch9.md",
            "ch10.md",
            "ch11.md",
            "part4.md",
            "ch12.md",
            "ch13.md",
            "ch14.md",
            "part5.md",
            "ch15.md",
            "ch16.md",
            "ch17.md",
            "ch18.md",
            "ch19.md",
            "ch20.md",
            "ch21.md",
            "ch22.md",
            "ch23.md",
            "ch24.md",
            "ch25.md",
            "ch26.md",
            "ch27.md",
            "ch28.md",
            "ch29.md",
            "part6.md",
            "ch30.md",
            "ch31.md",
            "ch32.md",
            "ch33.md",
            "ch34.md",
            "afterword.md"
          ]
        }
      }
    },
    repo: "gdut-yy/Clean-Architecture-zh",
    repoLabel: "Github",
    docsRepo: "gdut-yy/Clean-Architecture-zh",
    docsBranch: "master/docs",
    editLinks: true,
    sidebarDepth: 2
  }
};
