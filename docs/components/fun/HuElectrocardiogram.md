# 波形图

---

<HuElectrocardiogram
    :mointerData="ecg"
    :option="option"
    ref="myRef"
    style="background-color: #000"
  />

 <script setup>
import { ref, reactive, toRefs, onMounted, nextTick } from "vue"
const data = reactive({
  ecg: [],
  option: [],
  myRef: ref(null),
})
onMounted(async () => {
  data.ecg = [
    134, 133, 133, 133, 133, 134, 133, 133, 133, 133, 133, 133, 133, 132, 131,
    130, 129, 128, 127, 127, 126, 126, 126, 126, 127, 127, 128, 129, 130, 132,
    133, 133, 133, 133, 134, 134, 133, 133, 133, 133, 133, 133, 133, 133, 133,
    133, 133, 133, 133, 133, 134, 134, 135, 136, 136, 132, 125, 114, 102, 90,
    83, 82, 94, 107, 122, 133, 141, 144, 143, 141, 139, 138, 136, 134, 133, 133,
    133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133,
    133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 132, 132, 130,
    129, 127, 126, 124, 123, 121, 119, 117, 116, 115, 114, 113, 112, 112, 111,
    111, 110, 110,
  ]
  data.option = [
    {
      color: "#50E473",
      coordinateY: 250,
      isLine: true,
      maxValue: 350,
      minValue: 15,
      length: 1900,
    }, // ECG画脉搏
  ]
  await nextTick()
  data.myRef.init()
})
const { ecg, option, myRef } = toRefs(data)
</script>

::: details 显示代码

```html
<HuElectrocardiogram :mointerData="ecg" :option="option" ref="myRef" style="background-color: #000" />
<script setup>
  import { ref, reactive, toRefs, onMounted, nextTick } from 'vue'
  const data = reactive({
    ecg: [],
    option: [],
    myRef: ref(null),
  })
  onMounted(async () => {
    data.ecg = [
      134, 133, 133, 133, 133, 134, 133, 133, 133, 133, 133, 133, 133, 132, 131, 130, 129, 128, 127, 127, 126, 126, 126,
      126, 127, 127, 128, 129, 130, 132, 133, 133, 133, 133, 134, 134, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133,
      133, 133, 133, 133, 134, 134, 135, 136, 136, 132, 125, 114, 102, 90, 83, 82, 94, 107, 122, 133, 141, 144, 143,
      141, 139, 138, 136, 134, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133,
      133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 132, 132, 130, 129, 127, 126, 124, 123, 121, 119, 117, 116,
      115, 114, 113, 112, 112, 111, 111, 110, 110,
    ]
    data.option = [
      {
        color: '#50E473',
        coordinateY: 250,
        isLine: true,
        maxValue: 350,
        minValue: 15,
        length: 1900,
      }, // ECG画脉搏
    ]
    await nextTick()
    data.myRef.init()
  })
  const { ecg, option, myRef } = toRefs(data)
</script>
```

:::

> ## Attributes

| 参数        |    说明    |  类型 | 默认值 |
| ----------- | :--------: | ----: | -----: |
| mointerData |  数据集合  | Array |     [] |
| option      | 波形的样式 | Array |     [] |

> ### Option Attributes

| 参数     |          说明          |   类型 | 默认值 |
| -------- | :--------------------: | -----: | -----: |
| color    |        波形颜色        |  color |      - |
| maxValue |         最大值         | Number |      - |
| minValue |         最小值         | Number |      - |
| length   | 一个完整画面最多数据量 | Number |      - |
