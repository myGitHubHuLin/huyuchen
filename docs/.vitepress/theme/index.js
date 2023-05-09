import DefaultTheme from 'vitepress/theme'
import HuUi from '@huyuchen/visual'
import '@huyuchen/visual/dist/es/style.css'
import 'element-plus/dist/index.css'
import naiveUi from 'naive-ui'

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(HuUi)
    app.use(naiveUi)
  },
}
