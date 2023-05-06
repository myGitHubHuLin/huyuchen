import DefaultTheme from 'vitepress/theme'
import naiveUi from 'naive-ui'
//
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(naiveUi)
  },
}
