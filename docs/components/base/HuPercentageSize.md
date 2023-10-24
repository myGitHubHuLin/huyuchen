# 按照数据占百分比大小显示内容

---
<div style="display: flex" v-for="(item,index) in sizeData" :key="index">
  <div>这是第{{index+1}}个item：</div>
  <n-input v-model:value="item.label" :style="{ width: '80px' }" placeholder="请输入名称"/>
  <n-input-number v-model:value="item.value" :style="{ width: '120px' }" button-placement="both"  :min="1" placeholder="请输入值的大小"/>
</div>

<HuPercentageSize :data="sizeData" width="700px" height="300px" style="font-size: 30px"/>

 <script setup>
import { ref } from "vue"
const sizeData = ref([
  { label: "名称", value: 37 },
  { label: "名称1", value: 9 },
  { label: "名称2", value: 6 },
  { label: "名称3", value: 5 },
  { label: "名称4", value: 10 },
  { label: "名称5", value: 3 }
])
</script>

::: warning
可以自行动态设置data的数量，【设置font-size的大小，内容文字百分比】 
:::

::: details 显示代码

```html
<HuPercentageSize :data="sizeData" width="800px" height="150px" style="font-size: 30px"/>

<script setup>
 import { ref } from "vue"
const sizeData = ref([
  { label: "名称", value: 37 },
  { label: "名称1", value: 9 },
  { label: "名称2", value: 6 },
  { label: "名称3", value: 4 },
  { label: "名称4", value: 10 },
  { label: "名称5", value: 3 }
])
</script>
```

:::

> ## Attributes

| 参数        |     说明     |   类型 |  默认值 |
| ----------- | :----------: | -----: | ------: |
| data      |    数据    | Column |      [] |
| width   |  总的宽度  |  String |      300px |
| height   | 总的高度 | String |       180px |
| colors |   数据块的背景颜色   |  [] |  |
| rows   |     数据展示的行数     | Number |    3 |
| style   |     设置font-size的大小，内容文字百分比     | {} |    {} |

> ### Column Attributes

| 参数   |       说明       |                         类型 | 默认值 |
| ------ | :--------------: | ---------------------------: | -----: |
| label  |      名称       |                       string |      - |
| value   | 数据值的大小 |                       Number |      - |
