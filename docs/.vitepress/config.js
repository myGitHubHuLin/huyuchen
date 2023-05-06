export default {
  themeConfig: {
    siteTitle: '@huyuchen/visual',
    description: 'Vite & Vue @huyuchen/visual',
    ignoreDeadLinks: true, // VitePress 在构建时不会因为死链接而导致构建失败。
    logo: '/login.jpg',
    // base: 'huyuchen.github.io/',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You',
    },
    nav: [
      { text: '指南', link: '/guild/introduce' },
      // { text: '组件', link: '/components/base/HuLayoutTable' },
    ],
    socialLinks: [{ text: '自定义组件库', icon: 'github', link: 'https://gitee.com/hu__lin/pnpm-package' }],
    sidebar: {
      '/': [
        {
          text: '引入',
          items: [
            {
              text: '介绍',
              link: '/guild/introduce',
            },
            // {
            //   text: '快速开始',
            //   link: '/guild/quickstart',
            // },
          ],
        },
        // {
        //   text: '通用基础组件',
        //   items: [
        //     {
        //       text: '自定义行列table',
        //       link: '/components/base/HuLayoutTable',
        //     },
        //     {
        //       text: '数据百分比内容',
        //       link: '/components/base/HuPercentageSize',
        //     },
        //   ],
        // },
        // {
        //   text: '功能组件',
        //   items: [
        //     {
        //       text: '波形图',
        //       link: '/components/fun/HuElectrocardiogram',
        //     },
        //     {
        //       text: '数字缓动画',
        //       link: '/components/fun/HuNumberRoll',
        //     },
        //     {
        //       text: '大屏容器',
        //       link: '/components/fun/HuLargeScreen',
        //     },
        //     {
        //       text: '动态词云',
        //       link: '/components/fun/HuWordCloud',
        //     },
        //   ],
        // },
        // {
        //   text: 'echarts可视化',
        //   items: [
        //     {
        //       text: '速度仪表',
        //       link: '/components/echarts/HuSpeed',
        //     },
        //     {
        //       text: '数据大小气泡',
        //       link: '/components/echarts/HuBubble',
        //     },
        //     {
        //       text: '基础图形',
        //       link: '/components/echarts/HuBaseChart',
        //     },
        //     {
        //       text: '柱状图',
        //       link: '/components/echarts/HuShapeChart',
        //     },
        //     {
        //       text: '面积图',
        //       link: '/components/echarts/HuAreaChart',
        //     },
        //     {
        //       text: '折线图',
        //       link: '/components/echarts/HuLineChart',
        //     },
        //     {
        //       text: '饼图',
        //       link: '/components/echarts/HuPieChart',
        //     },
        //   ],
        // },
      ],
    },
  },
}
