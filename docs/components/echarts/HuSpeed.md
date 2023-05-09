# 基于 echarts 的速度仪表盘

---

<hu-speed :v="v" style="background: #000"/>

<script setup>
import {ref} from "vue"
const v = ref(140)
</script>

::: details 显示代码

```html
<hu-speed :v="v" style="background: #000" />
<script setup>
  import { ref } from 'vue'
  const v = ref(140)
</script>
```

:::

> ## Attributes

| 参数 |    说明    |   类型 | 默认值 |
| ---- | :--------: | -----: | -----: |
| v    |   当前值   | number |      0 |
| max  | 刻度最大值 | number |    160 |
