# 数字变化动画

---

<div style="display: flex;">
  <HuNumberRoll v-for="(d,i) in arr" :key="i" :value="d" color="red" style="background:#000;margin-right:5px"/>
</div>

 <script setup>
import { ref, onMounted,onUnmounted,computed } from "vue"
const v = ref('999')
const arr = computed(()=>{
  return v.value.split('') // string.charAt(index)
})
let timer = null
onMounted(()=>{
  timer = setInterval(()=> {
    v.value=parseInt(Math.random()*1000)+''
  },3*1000)
})
onUnmounted(()=>{
  clearInterval(timer)
  timer = null
})
</script>

::: details 显示代码

```html
<div style="display: flex;">
  <HuNumberRoll v-for="(d,i) in arr" :key="i" :value="d" color="red" style="background:#000;margin-right:5px" />
</div>

<script setup>
  import { ref, onMounted, onUnmounted, computed } from 'vue'
  const v = ref('999')
  const arr = computed(() => {
    return v.value.split('') // string.charAt(index)
  })
  let timer = null
  onMounted(() => {
    timer = setInterval(() => {
      v.value = parseInt(Math.random() * 1000) + ''
    }, 3 * 1000)
  })
  onUnmounted(() => {
    clearInterval(timer)
    timer = null
  })
</script>
```

:::

> ## Attributes

| 参数  |   说明   |   类型 | 默认值 |
| ----- | :------: | -----: | -----: |
| value |   数据   | String |    '0' |
| color | 文字颜色 | String | '#000' |
