export default {
  themeConfig: {
    siteTitle: '@huyuchen/visual',
    description: '@huyuchen/visual',
    ignoreDeadLinks: true, // VitePress 在构建时不会因为死链接而导致构建失败。
    logo: '/login.jpg',
    base: './',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You',
    },
    nav: [{ text: '指南', link: '/guild/introduce' }],
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
            {
              text: '快速开始',
              link: '/guild/quickstart',
            },
          ],
        },
      ],
    },
  },
}
