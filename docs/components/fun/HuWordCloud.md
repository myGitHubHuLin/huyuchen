# 动态词云

---

<HuWordCloud :hotWord="data" style="width:400px;height:300px;background:#000"/>
<script setup>
const data =  new Array(15).fill(0).map((d,i)=>{
  return '名称'+ i
})
</script>

::: details 显示代码

```html
<HuWordCloud :hotWord="data" style="width:400px;height:300px;background:#000" />
<script setup>
  const data = new Array(15).fill(0).map((d, i) => {
    return '名称' + i
  })
</script>
```

:::

> #### 注：静态词云可结合 echarts，echarts-wordcloud 实现
