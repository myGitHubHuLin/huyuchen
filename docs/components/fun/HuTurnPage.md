# 数字翻页动画

---

<HuTurnPage :value="value" color="red" />

<script setup>
import { reactive, onMounted,onBeforeUnmount } from "vue"
const data = reactive({
  value: 0,
  timer: null
})
onMounted(()=>{
  setData()
})
const setData = () => {
  data.timer = setTimeout(() => {
    data.value += Math.floor(Math.random() * 200)
    setData()
  }, 2000)
}
onBeforeUnmount(()=> {
   clearTimeout(data.timer)
   data.timer=null
})
</script>

::: details 显示代码

```html
<HuTurnPage :value="value" color="red" />

<script setup>
  import { reactive, onMounted, onBeforeUnmount } from 'vue'
  const data = reactive({
    value: 0,
    timer: null,
  })
  onMounted(() => {
    setData()
  })
  const setData = () => {
    data.timer = setTimeout(() => {
      data.value += Math.floor(Math.random() * 200)
      setData()
    }, 2000)
  }
  onBeforeUnmount(() => {
    clearTimeout(data.timer)
    data.timer = null
  })
</script>
```

:::

> ## Attributes

| 参数  |   说明   |   类型 | 默认值 |
| ----- | :------: | -----: | -----: |
| value |   数据   | String |    '0' |
| color | 文字颜色 | String | '#000' |
