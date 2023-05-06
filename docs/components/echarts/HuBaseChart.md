# 基础图形

---

<hu-base-chart :option="option" 
  style="height:200px;width:400px;background-color:rgba(27, 32, 54, 0.8)"></hu-base-chart>

<script setup>
import {ref} from "vue"
const colorsStep=(color)=> {
    return {
      type: "linear",
      x: 0,
      x2: 0,
      y: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: color
        },
        {
          offset: 0.5,
          color: color
        },
        {
          offset: 0.5,
          color: color + "80"
        },
        {
          offset: 1,
          color: color + "80"
        }
      ]
    };
  }
const colors = [ "#34EAEC","#ffe922","#3daeff","#FF8200","#f9314e","#D032FF","#6325DF","#5752FA","#1ECC9B","#3DAEFF","#7CFFFA","#00F5A3"]
const data = ref([
  {label:'name1',value:12},
  {label:'name2',value:14},
  {label:'name3',value:22},
])
const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "1%",
          top: "3%",
          containLabel: true
        },
        xAxis: {
          boundaryGap: [0, 0.01],
          show: false
        },
        yAxis: {
          type: "category",
          axisLabel: {
            textStyle: {
              color: "#B0C9E2"
            }
          },
          inverse: true,
          data: data.value.map(d=>d.label),
        },
        series: [
          {
            type: "bar",
            barWidth: "10",
            data: data.value.map((d,i)=>{
                      return {
                        name: d.label,
                        value: d.value,
                        itemStyle: {
                          color: colorsStep(colors[i]),
                          barBorderRadius: [0, 20, 20, 0] // 圆角（左上、右上、右下、左下）
                        },
                      };
            }),
            label: {
              show: true,
              color: "#fff",
              position: "right"
            }
          }
        ]
      };
</script>

::: details 显示代码

```html
<hu-base-chart :option="option" style="height:200px;width:400px;background-color:rgba(27, 32, 54, 0.8)"></hu-base-chart>

<script setup>
  import { ref } from 'vue'
  const colorsStep = color => {
    return {
      type: 'linear',
      x: 0,
      x2: 0,
      y: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: color,
        },
        {
          offset: 0.5,
          color: color,
        },
        {
          offset: 0.5,
          color: color + '80',
        },
        {
          offset: 1,
          color: color + '80',
        },
      ],
    }
  }
  const colors = [
    '#34EAEC',
    '#ffe922',
    '#3daeff',
    '#FF8200',
    '#f9314e',
    '#D032FF',
    '#6325DF',
    '#5752FA',
    '#1ECC9B',
    '#3DAEFF',
    '#7CFFFA',
    '#00F5A3',
  ]
  const data = ref([
    { label: 'name1', value: 12 },
    { label: 'name2', value: 14 },
    { label: 'name3', value: 22 },
  ])
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '1%',
      top: '3%',
      containLabel: true,
    },
    xAxis: {
      boundaryGap: [0, 0.01],
      show: false,
    },
    yAxis: {
      type: 'category',
      axisLabel: {
        textStyle: {
          color: '#B0C9E2',
        },
      },
      inverse: true,
      data: data.value.map(d => d.label),
    },
    series: [
      {
        type: 'bar',
        barWidth: '10',
        data: data.value.map((d, i) => {
          return {
            name: d.label,
            value: d.value,
            itemStyle: {
              color: colorsStep(colors[i]),
              barBorderRadius: [0, 20, 20, 0], // 圆角（左上、右上、右下、左下）
            },
          }
        }),
        label: {
          show: true,
          color: '#fff',
          position: 'right',
        },
      },
    ],
  }
</script>
```

:::

> ## Attributes

| 参数    |       说明        |   类型 |                           默认值 |
| ------- | :---------------: | -----: | -------------------------------: |
| option  |  echarts 配置项   | Object |                               {} |
| opts    |    渲染的样式     | Object | `{width: "auto",height: "auto",` |
| plugins | 注册 echarts 插件 |  Array |                               [] |
