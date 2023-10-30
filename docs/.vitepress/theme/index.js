import DefaultTheme from "vitepress/theme"
// import { inBrowser } from "vitepress"
// import { onMounted } from "vue"
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
  async enhanceApp({ app }) {
    app.use(naiveUi)
    app.use(HuUi)
  },
  // setup() {
  //   onMounted(() => {
  //     // inBrowser && app.use(HuUi)
  //     import("@huyuchen/visual").then(HuUi => {
  //       app.use(HuUi)
  //     })
  //     app.use(naiveUi)
  //   })
  // },
}
