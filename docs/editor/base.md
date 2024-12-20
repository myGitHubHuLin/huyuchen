# 自定义行列 table

---

  <div class="container">
    <div class="editor-container">
      <div>html内容</div>
      <HuMonacoBase v-model="runIframeOptions.html" :config="config" language="html" />
    </div>
    <div class="editor-container">
      <div>javascript内容</div>
      <HuMonacoBase v-model="runIframeOptions.js" :config="config" language="javascript" />
    </div>
    <div class="editor-container">
      <div>css内容</div>
      <HuMonacoBase v-model="runIframeOptions.css" :config="config" language="css" />
    </div>
  </div>
  <HuMonacoBasePreview ref="runIframeRef" :options="runIframeOptions" :pre-settings="preSettings"></HuMonacoBasePreview>

 <script setup>
// import {HuMonacoBasePreview,HuMonacoBase} from "@huyuchen/editor" // 请根据实际路径进行调整
// import "@huyuchen/editor/dist/es/style.css" // 引入样式
import { onMounted, ref } from "vue"
// import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker"
// import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker"
// import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker"
// import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker"
// import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker"

// self.MonacoEnvironment = {
//   getWorker(_, label) {
//     if (label === "json") {
//       return new jsonWorker()
//     }
//     if (label === "css" || label === "scss" || label === "less") {
//       return new cssWorker()
//     }
//     if (label === "html" || label === "handlebars" || label === "razor") {
//       return new htmlWorker()
//     }
//     if (label === "typescript" || label === "javascript") {
//       return new tsWorker()
//     }
//     return new editorWorker()
//   },
// }
const config = {
  automaticLayout: true, // 自适应布局
  theme: "vs-dark", // 官方自带三种主题vs, hc-black, or vs-dark
  foldingStrategy: "indentation",
  renderLineHighlight: "all", // 行亮
  selectOnLineNumbers: true, // 显示行号
  wordWrap: "on",
  formatOnPaste: true,
  minimap: {
    enabled: false,
  },
  readOnly: false, // 只读
  fontSize: 16, // 字体大小
  scrollBeyondLastLine: true, // 取消代码后面一大段空白
  overviewRulerBorder: false, // 不要滚动条的边框
}
const runIframeOptions = ref({
  html: `<div class='add-box'  onclick="add()">
    <span class='add-box-span'>添加</span>
</div>`,
  css: `.add-box {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border: 1px dashed #ddd;padding: 0;line-height: 32px;cursor: pointer;
  }
  .add-box-span{color: #66b1ff;}`,
  js: `function add () {
    alert('add')
}`,
})
const language = ref("html")

const preSettings = {
  htmlSettings: {
    headSettings: "",
    htmlClass: "",
    bodyClass: "",
    htmlType: "html",
  },
  styleSettings: {
    defaultCss: 0,
    links: [""],
    styleType: "css",
  },
  scriptSettings: {
    scripts: [""],
  },
  projectInfo: {
    name: "",
    description: "",
  },
  saveSettings: {
    autoSave: true,
    autoRun: true,
    autoFormat: true,
  },
  editorSetting: {
    layout: 1,
    indentSize: 2,
    indentType: "tab",
  },
}
const runIframeRef = ref(null)

</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  min-height: 100vh;
}

.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 40px;
  width: 100%;
  height: 100%;
  .editor-container {
    height: 400px;
    display: flex;
    flex-direction: column;
  }
}
</style>

::: details 显示代码

```html
 <div class="container">
    <div class="editor-container">
      <div>html内容</div>
      <HuMonacoBase v-model="runIframeOptions.html" :config="config" language="html" />
    </div>
    <div class="editor-container">
      <div>javascript内容</div>
      <HuMonacoBase v-model="runIframeOptions.js" :config="config" language="javascript" />
    </div>
    <div class="editor-container">
      <div>css内容</div>
      <HuMonacoBase v-model="runIframeOptions.css" :config="config" language="css" />
    </div>
  </div>
  <HuMonacoBasePreview ref="runIframeRef" :options="runIframeOptions" :pre-settings="preSettings"></HuMonacoBasePreview>

 <script setup>
// import {HuMonacoBasePreview,HuMonacoBase} from "@huyuchen/editor" // 请根据实际路径进行调整
// import "@huyuchen/editor/dist/es/style.css" // 引入样式
import { onMounted, ref } from "vue"
// import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker"
// import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker"
// import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker"
// import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker"
// import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker"

// self.MonacoEnvironment = {
//   getWorker(_, label) {
//     if (label === "json") {
//       return new jsonWorker()
//     }
//     if (label === "css" || label === "scss" || label === "less") {
//       return new cssWorker()
//     }
//     if (label === "html" || label === "handlebars" || label === "razor") {
//       return new htmlWorker()
//     }
//     if (label === "typescript" || label === "javascript") {
//       return new tsWorker()
//     }
//     return new editorWorker()
//   },
// }
const config = {
  automaticLayout: true, // 自适应布局
  theme: "vs-dark", // 官方自带三种主题vs, hc-black, or vs-dark
  foldingStrategy: "indentation",
  renderLineHighlight: "all", // 行亮
  selectOnLineNumbers: true, // 显示行号
  wordWrap: "on",
  formatOnPaste: true,
  minimap: {
    enabled: false,
  },
  readOnly: false, // 只读
  fontSize: 16, // 字体大小
  scrollBeyondLastLine: true, // 取消代码后面一大段空白
  overviewRulerBorder: false, // 不要滚动条的边框
}
const runIframeOptions = ref({
  html: `<div class='add-box'  onclick="add()">
    <span class='add-box-span'>添加</span>
</div>`,
  css: `.add-box {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border: 1px dashed #ddd;padding: 0;line-height: 32px;cursor: pointer;
  }
  .add-box-span{color: #66b1ff;}`,
  js: `function add () {
    alert('add')
}`,
})
const language = ref("html")

const preSettings = {
  htmlSettings: {
    headSettings: "",
    htmlClass: "",
    bodyClass: "",
    htmlType: "html",
  },
  styleSettings: {
    defaultCss: 0,
    links: [""],
    styleType: "css",
  },
  scriptSettings: {
    scripts: [""],
  },
  projectInfo: {
    name: "",
    description: "",
  },
  saveSettings: {
    autoSave: true,
    autoRun: true,
    autoFormat: true,
  },
  editorSetting: {
    layout: 1,
    indentSize: 2,
    indentType: "tab",
  },
}
const runIframeRef = ref(null)

</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  min-height: 100vh;
}

.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 40px;
  width: 100%;
  height: 100%;
  .editor-container {
    height: 400px;
    display: flex;
    flex-direction: column;
  }
}
```

:::

> ## Attributes

| 参数     |     说明     |   类型 |  默认值 |
| -------- | :----------: | -----: | ------: |
| options  |    列规则    | Object |      {} |
| config   |  显示的数据  |  Array |      [] |
| v-model  | label 的宽度 | Number |       2 |
| language |   边框颜色   |  color | #527ca7 |

> ### Column Attributes

| 参数   |       说明       |                         类型 | 默认值 |
| ------ | :--------------: | ---------------------------: | -----: |
| label  |      label       |                       string |      - |
| prop   | 对应列规则字段名 |                       string |      - |
| render |  自定义渲染函数  | h(type,props,children):VNode |      - |
