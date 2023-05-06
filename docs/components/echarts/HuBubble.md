# 基于 echarts 的值大小气泡聚合

---

 <HuBubble :data="data" style="background-color: black; height: 30vh" />
 <script setup>
import { ref } from "vue"
const data = ref([
  { label: "跑路", value: 1 },
  { label: "跑路1", value: 3 },
  { label: "跑路2", value: 55 },
  { label: "跑路3", value: 22 },
  { label: "跑路4", value: 44 },
  { label: "跑路5", value: 66 },
  { label: "跑路6", value: 11 },
])
</script>
::: details 显示代码

```html
<HuBubble :data="data" style="background-color: black; height: 30vh" />
<script setup>
  import { ref } from 'vue'
  const data = ref([
    { label: '跑路', value: 1 },
    { label: '跑路1', value: 3 },
    { label: '跑路2', value: 55 },
    { label: '跑路3', value: 22 },
    { label: '跑路4', value: 44 },
    { label: '跑路5', value: 66 },
    { label: '跑路6', value: 11 },
  ])
</script>
```

:::

> ## Attributes

| 参数 |   说明   |  类型 | 默认值 |
| ---- | :------: | ----: | -----: |
| data | 数据集合 | Array |     [] |

> ### Item Attributes

| 参数  |   说明    |   类型 | 默认值 |
| ----- | :-------: | -----: | -----: |
| label | name 名称 | String |      - |
| value |  值大小   | Number |      - |
