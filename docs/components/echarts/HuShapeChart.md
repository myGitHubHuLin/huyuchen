# 柱状图

---

<hu-shape-chart :series="series2" :x-axis="xAxis" style="height:200px;background:#1B2036;
opacity:1;"></hu-shape-chart>

<script setup>
import {ref} from "vue"
const xAxis =ref(["景区A", "景区B", "景区C", "景区D", "景区E"])
const series2 =ref([
        {
          data: [220, 232, 201, 234, 190],
          barWidth: 10,
        },
      ]) 
</script>

::: details 显示代码

```html
<hu-shape-chart
  :series="series2"
  :x-axis="xAxis"
  style="height:200px;background:#1B2036;
  opacity: 0.8;"
></hu-shape-chart>

<script setup>
  import { ref } from 'vue'
  const xAxis = ref(['景区A', '景区B', '景区C', '景区D', '景区E'])
  const series2 = ref([
    {
      data: [220, 232, 201, 234, 190],
      barWidth: 10,
    },
  ])
</script>
```

:::

> ## Attributes

| 参数         |           说明           |            类型 |                                              默认值 |
| ------------ | :----------------------: | --------------: | --------------------------------------------------: |
| data         |         数据集合         | [Object, Array] |                                                  {} |
| tooltip      | 鼠标移动到图例的提升信息 |          Object |                           { formatter: "{b}: {c}" } |
| series       |         数据集合         |           Array |                                                  [] |
| legendOption |         图例配置         |          Object | `{right: 'auto', top: 'auto',orient: 'horizontal'}` |
| xAxis        |        横坐标数据        |           Array |                                                  [] |
| colors       |        自定义颜色        |           Array |                                                  [] |
| xAxisOther   |      x 轴的其它配置      |          Object |                                                  {} |
