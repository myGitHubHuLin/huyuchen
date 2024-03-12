# 自定义行列 table

---

<HuLayoutTable
    :column="column"
    :tableData="tableData"
    :labelSpan="4"
    borderColor="red"
    rowHeight="36px"
  />

 <script setup>
import { reactive, toRefs, h } from "vue"
// import 'element-plus/dist/index.css'
const tableData = {
  name: "huyuchen",
  sex: 1,
  age: 29,
  status: 1,
}
const statusEnums = {
  0: "一般",
  1: "良好",
  2: "差",
}
const data = reactive({
  column: [
    { label: "姓名", prop: "name", span: 24 },
    {
      label: "性别",
      prop: "sex",
      render({ row }) {
        return h('div', {
          style: {
            color: "yellow",
            backgroundColor: "red",
            display: "flex",
            alignItems: "center",
          },
          innerHTML: ["男", "女"][tableData[row.prop]],
        })
      },
      span: 12,
    },
    {
      label: "年龄",
      prop: "age",
      render({ row }) {
        return h("div", { innerHTML: tableData[row.prop] + "岁" })
      },
      span: 12,
    },
    {
      label: "身体状态",
      prop: "status",
      render({ row }) {
        return h("div", { innerHTML: statusEnums[tableData[row.prop]] })
      },
    },
  ],
})

const { column } = toRefs(data)
</script>

::: details 显示代码

```html
<HuLayoutTable :column="column" :tableData="tableData" :labelSpan="4" borderColor="red" rowHeight="36px" />

<script setup>
  import { reactive, toRefs, h } from 'vue'
  import 'element-plus/dist/index.css'
  const tableData = {
    name: 'huyuchen',
    sex: 1,
    age: 29,
    status: 1,
  }
  const statusEnums = {
    0: '一般',
    1: '良好',
    2: '差',
  }
  const data = reactive({
    column: [
      { label: '姓名', prop: 'name', span: 24 },
      {
        label: '性别',
        prop: 'sex',
        render({ row }) {
          return h(NAvatar, {
            style: {
              color: 'yellow',
              backgroundColor: 'red',
              display: 'flex',
              alignItems: 'center',
            },
            innerHTML: ['男', '女'][tableData[row.prop]],
          })
        },
        span: 12,
      },
      {
        label: '年龄',
        prop: 'age',
        render({ row }) {
          return h('div', { innerHTML: tableData[row.prop] + '岁' })
        },
        span: 12,
      },
      {
        label: '身体状态',
        prop: 'status',
        render({ row }) {
          return h('div', { innerHTML: statusEnums[tableData[row.prop]] })
        },
      },
    ],
  })

  const { column } = toRefs(data)
</script>
```

:::

> ## Attributes

| 参数        |     说明     |   类型 |  默认值 |
| ----------- | :----------: | -----: | ------: |
| column      |    列规则    | Object |      {} |
| tableData   |  显示的数据  |  Array |      [] |
| labelSpan   | label 的宽度 | Number |       2 |
| borderColor |   边框颜色   |  color | #527ca7 |
| rowHeight   |     行高     | string |    30px |

> ### Column Attributes

| 参数   |       说明       |                         类型 | 默认值 |
| ------ | :--------------: | ---------------------------: | -----: |
| label  |      label       |                       string |      - |
| prop   | 对应列规则字段名 |                       string |      - |
| render |  自定义渲染函数  | h(type,props,children):VNode |      - |
