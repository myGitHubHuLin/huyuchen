import DefaultTheme from "vitepress/theme"
import HuUi from "@huyuchen/visual"
import "@huyuchen/visual/dist/es/style.css"
// import HuEditor from "@huyuchen/editor"
// import "@huyuchen/editor/dist/es/style.css" // 引入样式
import naiveUi from "naive-ui"

export default {
  ...DefaultTheme,
  async enhanceApp({ app }) {
    app.use(naiveUi)
    app.use(HuUi)
    // app.use(HuEditor)
  },
}
