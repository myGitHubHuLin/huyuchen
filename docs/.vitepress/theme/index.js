import DefaultTheme from "vitepress/theme"
import HuUi from "@huyuchen/visual"
import "@huyuchen/visual/dist/es/style.css"
import "element-plus/dist/index.css"
import "vue-virtual-scroller/dist/vue-virtual-scroller.css" // vitepress，组件库引用样式打包报错问题
// import "element-plus/theme-chalk/base.css"
// import "element-plus/theme-chalk/el-col.css"
// import "element-plus/theme-chalk/el-row.css"
import naiveUi from "naive-ui"

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(HuUi)
    app.use(naiveUi)
  },
}
