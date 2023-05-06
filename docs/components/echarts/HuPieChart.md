# 饼图或者环状图

---

 <n-radio-group v-model:value="value" name="radiogroup">
      <n-radio v-for="song in songs" :key="song.value" :value="song.value">
        {{ song.label }}
      </n-radio>
  </n-radio-group>
<hu-pie-chart :data="data" 
  :series="{ center: ['35%', '50%'] }"
  :inner-radius="'50%'"
  :outer-radius="'80%'"
  :isPie="!value"
  style="height:200px;width:400px;background-color:rgba(27, 32, 54, 0.8)"></hu-pie-chart>

<script setup>
import {ref} from "vue"
const data=ref([
        { value: 150, name: '名称1' },
        { value: 20, name: '名称2' },
        { value: 25, name: '名称3' },
        { value: 5, name: '名称4' }
      ])
const value= ref(true)
const songs= ref([
        {
          value: true,
          label: "饼图"
        },
        {
          value: false,
          label: '环图'
        }
])
</script>

::: details 显示代码

```html
<n-radio-group v-model:value="value" name="radiogroup">
  <n-radio v-for="song in songs" :key="song.value" :value="song.value"> {{ song.label }} </n-radio>
</n-radio-group>
<hu-pie-chart
  :data="data"
  :series="{ center: ['35%', '50%'] }"
  :inner-radius="'50%'"
  :outer-radius="'80%'"
  :isPie="!value"
  style="height:200px;width:400px;background-color:rgba(27, 32, 54, 0.8)"
></hu-pie-chart>

<script setup>
  import { ref } from 'vue'
  const data = ref([
    { value: 150, name: '名称1' },
    { value: 20, name: '名称2' },
    { value: 25, name: '名称3' },
    { value: 5, name: '名称4' },
  ])
  const value = ref(true)
  const songs = ref([
    {
      value: true,
      label: '饼图',
    },
    {
      value: false,
      label: '环图',
    },
  ])
</script>
```

:::

> ## Attributes

| 参数         |           说明           |             类型 |                                              默认值 |
| ------------ | :----------------------: | ---------------: | --------------------------------------------------: |
| data         |         数据集合         |  [Object, Array] |                                                  {} |
| series       |         数据集合         |            Array |                                                  [] |
| tooltip      | 鼠标移动到图例的提升信息 |           Object |                           { formatter: "{b}: {c}" } |
| legendOption |         图例配置         |           Object | `{right: 'auto', top: 'auto',orient: 'horizontal'}` |
| centerInfo   |     饼图中间展示信息     |           String |                                                  '' |
| center       |       饼图中心位置       |            Array |                                      ["50%", "50%"] |
| colors       |        自定义颜色        |            Array |                                                  [] |
| innerRadius  |         内圈大小         | [String, Number] |                                               "40%" |
| outerRadius  |         外圈大小         | [String, Number] |                                               "70%" |
| isPie        |    是否是饼图或者环图    |          Boolean |                                                true |
