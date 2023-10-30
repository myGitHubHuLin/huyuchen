# select下拉大数据量虚拟加载框

---
<HuVirtualSelect :option="sizeData" v-model:value="value" key-field="value"></HuVirtualSelect>
<script setup>
import { ref } from "vue"
const value = ref(null)
const sizeData = new Array(1000000).fill(1).map((v, i) => ({
  label: `名称${i}`,
  value: v + i,
}))
</script>

::: details 显示代码

```html
<HuVirtualSelect :option="sizeData" v-model:value="value" key-field="value"></HuVirtualSelect>
<script setup>
  import { ref } from "vue"
const value = ref(null)
const sizeData = new Array(1000000).fill(1).map((v, i) => ({
  label: `名称${i}`,
  value: v + i,
}))
</script>
```

:::

> ## Attributes
| 参数  |   说明   |   类型 | 默认值 |
| ----- | :------: | -----: | -----: |
| option |   数据源   | Array |    [] |
| keyField |   数据的key   | String |    'id' |
| placeholder |   提示语   | String |    '请输入' |
| itemHeight |   每项子集的高度   | Number |    34 |
| height |   下拉框的高度   | Number |    180 |
| popperAppendToBody |   是否加到body上   | Boolean |    true |
| empty |   自定义缺省插槽   | slot |    草率的无数据 |

> ### Event
| 参数     |          说明          |   类型 | 默认值 |
| -------- | :--------------------: | -----: | -----: |
| focus    |        获取焦点        |  Function |      - |
| blur |         失去焦点         | Function |      - |
| change |         选择值         | Function |      (index,item) |