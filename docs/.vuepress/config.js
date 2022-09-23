module.exports = {
  title: "唐超笔记",
  description: "2022",
  base: "/tc-blog/",
  theme: "reco",
  // theme: "@vuep/ress/blog",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    // subSidebar: "auto",
    logo: "/assets/img/logo.png",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "唐超的博客",
        ariaLabel: "Language Menu",
        items: [
          { text: "掘金", link: "https://juejin.cn/user/835284565243528" },
          { text: "力扣", link: "https://leetcode.cn/leetbook/" },
        ],
      },

      {
        text: "GitHub",
        // icon: "reco-message",
        link: "https://github.com/tangchao0106",
      },
    ],

    sidebar: [
      {
        title: "学习笔记",
        path: "/",
        collapsable: false, // 不折叠
        children: [{ title: "写在最前面", path: "/" }],
      },
      {
        title: "VUE系列",
        path: "/vuebook/1",
        collapsable: false, // 不折叠
        children: [
          {
            title: "在 Vue 中为什么不推荐用 index 做 key",
            path: "/vuebook/1",
          },
          { title: "虚拟 DOM", path: "/vuebook/虚拟 DOM" },
          { title: "nextTick 实现原理", path: "/vuebook/nextTick 实现原理" },
          {
            title: "vue2源码生命周期合并策略梳理",
            path: "/vuebook/vue2源码生命周期合并策略梳理",
          },

          { title: "视频笔记", path: "/vuebook/2" },
        ],
      },
      {
        title: "JS系列",
        path: "/jsbook/2",
        collapsable: true,
        children: [
          { title: "call apply bind 笔记", path: "/jsbook/2" },
          {
            title: "关于输入框非空的判断",
            path: "/jsbook/关于输入框非空的判断",
          },
          // {
          //   title: "Promise易错点",
          //   path: "/jsbook/Promise易错点",
          // },
        ],
      },
      {
        title: "工具类",
        path: "/book/1",
        collapsable: true,
        children: [
          {
            title: "babel为什么需要bable-pollyfill",
            path: "/book/1",
          },
          // { title: "第二篇", path: "/handbook/2" },
        ],
      },
      {
        title: "业务",
        path: "/work/二次设备",
        collapsable: true,
        children: [
          {
            title: "二次设备",
            path: "/work/二次设备",
          },
        ],
      },
    ],
  },
};
