import { defineConfig } from "vitepress"
// export default {
//   base: "/huyuchen", // 使用github.io后面路径
//   description: "@huyuchen/visual",
//   ignoreDeadLinks: true, // VitePress 在构建时不会因为死链接而导致构建失败。
//   themeConfig: {
//     siteTitle: "@huyuchen/visual",
//     description: "Vite & Vue @huyuchen/visual",
//     ignoreDeadLinks: true, // VitePress 在构建时不会因为死链接而导致构建失败。
//     logo: "/login.jpg",
//     footer: {
//       message: "Released under the MIT License.",
//       copyright: "Copyright © 2019-present Evan You",
//     },
//     nav: [
//       { text: "指南", link: "/guild/introduce" },
//       { text: "组件", link: "/components/base/HuLayoutTable" },
//     ],
//     socialLinks: [{ text: "自定义组件库", icon: "github", link: "https://gitee.com/hu__lin/pnpm-package" }],
//     sidebar: {
//       "/": [
//         {
//           text: "引入",
//           items: [
//             {
//               text: "介绍",
//               link: "/guild/introduce",
//             },
//             {
//               text: "快速开始",
//               link: "/guild/quickstart",
//             },
//           ],
//         },
//         {
//           text: "通用基础组件",
//           items: [
//             {
//               text: "自定义行列table",
//               link: "/components/base/HuLayoutTable",
//             },
//             {
//               text: "数据百分比内容",
//               link: "/components/base/HuPercentageSize",
//             },
//             {
//               text: "select下拉大数据量虚拟加载框",
//               link: "/components/fun/HuVirtualSelect",
//             },
//           ],
//         },
//         {
//           text: "功能组件",
//           items: [
//             {
//               text: "波形图",
//               link: "/components/fun/HuElectrocardiogram",
//             },
//             {
//               text: "数字缓动画",
//               link: "/components/fun/HuNumberRoll",
//             },
//             {
//               text: "大屏容器",
//               link: "/components/fun/HuLargeScreen",
//             },
//             {
//               text: "动态词云",
//               link: "/components/fun/HuWordCloud",
//             },
//           ],
//         },
//         {
//           text: "echarts可视化",
//           items: [
//             {
//               text: "速度仪表",
//               link: "/components/echarts/HuSpeed",
//             },
//             {
//               text: "数据大小气泡",
//               link: "/components/echarts/HuBubble",
//             },
//             {
//               text: "基础图形",
//               link: "/components/echarts/HuBaseChart",
//             },
//             {
//               text: "柱状图",
//               link: "/components/echarts/HuShapeChart",
//             },
//             {
//               text: "面积图",
//               link: "/components/echarts/HuAreaChart",
//             },
//             {
//               text: "折线图",
//               link: "/components/echarts/HuLineChart",
//             },
//             {
//               text: "饼图",
//               link: "/components/echarts/HuPieChart",
//             },
//           ],
//         },
//         {
//           text: "动画组件",
//           items: [
//             {
//               text: "边框流动",
//               link: "/components/animation/HuBorderFlow",
//             },
//             {
//               text: "边框流动-svg",
//               link: "/components/animation/HuBorderFlowSvg",
//             },
//           ],
//         },
//       ],
//     },
//   },
//   // vite: {
//   //   build: {
//   //     rollupOptions: {
//   //       external: ["@huyuchen/visual"], // Add external module
//   //       output: {
//   //         globals: {
//   //           "@huyuchen/visual": "HuUi", // Provide global variable name for the external module
//   //         },
//   //       },
//   //     },
//   //   },
//   // },
// }
export default defineConfig({
  base: "/huyuchen", // 使用github.io后面路径
  description: "@huyuchen/visual",
  ignoreDeadLinks: true, // VitePress 在构建时不会因为死链接而导致构建失败。
  themeConfig: {
    siteTitle: "@huyuchen/visual",
    description: "Vite & Vue @huyuchen/visual",
    ignoreDeadLinks: true, // VitePress 在构建时不会因为死链接而导致构建失败。
    logo: "/login.jpg",
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You",
    },
    nav: [
      { text: "指南", link: "/guild/introduce" },
      { text: "组件", link: "/components/base/HuLayoutTable" },
      { text: "编辑器", link: "/editor/base" },
      { text: "第三方组件", link: "/externalLink/components" },
    ],
    socialLinks: [{ text: "自定义组件库", icon: "github", link: "https://gitee.com/hu__lin/pnpm-package" }],
    sidebar: {
      "/": [
        {
          text: "引入",
          items: [
            {
              text: "介绍",
              link: "/guild/introduce",
            },
            {
              text: "快速开始",
              link: "/guild/quickstart",
            },
          ],
        },
        {
          text: "通用基础组件",
          items: [
            {
              text: "自定义行列table",
              link: "/components/base/HuLayoutTable",
            },
            {
              text: "数据百分比内容",
              link: "/components/base/HuPercentageSize",
            },
            {
              text: "select下虚拟加载框",
              link: "/components/fun/HuVirtualSelect",
            },
            {
              text: "select虚拟加载框+分页加载",
              link: "/components/fun/HuVirtualSelectPage",
            },
            {
              text: "select加载框+分页加载",
              link: "/components/fun/HuSelectPage",
            },
          ],
        },
        {
          text: "功能组件",
          items: [
            {
              text: "波形图",
              link: "/components/fun/HuElectrocardiogram",
            },
            {
              text: "数字缓动画",
              link: "/components/fun/HuNumberRoll",
            },
            {
              text: "大屏容器",
              link: "/components/fun/HuLargeScreen",
            },
            {
              text: "动态词云",
              link: "/components/fun/HuWordCloud",
            },
          ],
        },
        {
          text: "echarts可视化",
          items: [
            {
              text: "速度仪表",
              link: "/components/echarts/HuSpeed",
            },
            {
              text: "数据大小气泡",
              link: "/components/echarts/HuBubble",
            },
            {
              text: "基础图形",
              link: "/components/echarts/HuBaseChart",
            },
            {
              text: "柱状图",
              link: "/components/echarts/HuShapeChart",
            },
            {
              text: "面积图",
              link: "/components/echarts/HuAreaChart",
            },
            {
              text: "折线图",
              link: "/components/echarts/HuLineChart",
            },
            {
              text: "饼图",
              link: "/components/echarts/HuPieChart",
            },
          ],
        },
        {
          text: "动画组件",
          items: [
            {
              text: "边框流动",
              link: "/components/animation/HuBorderFlow",
            },
            {
              text: "边框流动-svg",
              link: "/components/animation/HuBorderFlowSvg",
            },
          ],
        },
      ],
      "/externalLink/": [
        {
          text: "外部链接",
          items: [
            {
              text: "外部链接",
              link: "/externalLink/components",
            },
          ],
        },
        {
          text: "动画",
          items: [
            {
              text: "块滚动",
              link: "/externalLink/animation/blockScroll",
            },
          ],
        },
      ],
      "/editor/": [
        {
          text: "编辑器",
          items: [
            {
              text: "基础组件",
              link: "/editor/base",
            },
          ],
        },
      ],
    },
  },
  vite: { ssr: { noExternal: ["@huyuchen/visual", "@huyuchen/editor"] } }, // "element-plus", "vue-virtual-scroller"
})
