# select 下拉=虚拟加载框 + 分页(基于 ElSelect 封装)

---

<HuSelectPage  
filterable
:pages="pages"
:options="options"
v-model="selectValue"
:loading="loading"
@pullUp="loadData"
placeholder="请输入"></HuSelectPage>

<script setup>
import { onMounted, ref } from "vue"
const options = ref([])
const loading = ref(false)
const selectValue = ref([])
const pages = ref({
  current: 1,
  pageSize: 10,
  total: 11,
})
onMounted(() => {
  loadData(true)
})
const loadData = async (isFirst=false) => {
  loading.value = true
  const res = await new Promise(reslove => {
    const len = options.value.length
    const arr = []
    const t = (pages.value.pageSize * (pages.value.current + 1) <= pages.value.total || isFirst) ? pages.value.pageSize : pages.value.total - pages.value.pageSize * (pages.value.current - 1) 
    setTimeout(() => {
      for (let i = 0; i < t; i++) {
        arr.push({
          label: `label${len + i}`,
          value: len + i,
        })
      }
      loading.value = false
      reslove(arr)
    }, 1000)
  })
  pages.value.current++
  options.value = options.value.concat(res)
}
</script>

::: details 显示代码

```html
<HuSelectPage
  filterable
  :pages="pages"
  :options="options"
  v-model="selectValue"
  :loading="loading"
  @pullUp="loadData"
  placeholder="请输入"
></HuSelectPage>

<script setup>
  import { onMounted, ref } from "vue"
  const options = ref([])
  const loading = ref(false)
  const selectValue = ref([])
  const pages = ref({
    current: 1,
    pageSize: 10,
    total: 11,
  })
  onMounted(() => {
    loadData(true)
  })
  const loadData = async (isFirst = false) => {
    loading.value = true
    const res = await new Promise(reslove => {
      const len = options.value.length
      const arr = []
      const t =
        pages.value.pageSize * (pages.value.current + 1) <= pages.value.total || isFirst
          ? pages.value.pageSize
          : pages.value.total - pages.value.pageSize * (pages.value.current - 1)
      setTimeout(() => {
        for (let i = 0; i < t; i++) {
          arr.push({
            label: `label${len + i}`,
            value: len + i,
          })
        }
        loading.value = false
        reslove(arr)
      }, 1000)
    })
    pages.value.current++
    options.value = options.value.concat(res)
  }
</script>
```

:::

> ### Attributes
>
> | 参数         |                   说明                    |     类型 |                                                         默认值 |
> | ------------ | :---------------------------------------: | -------: | -------------------------------------------------------------: |
> | loading      |                 加载状态                  |  Boolean |                                                          false |
> | pullUp       |               加载更多方法                | Function |                                                              - |
> | pages        |                 分页数据                  |   Object |                       '{ current: 1, pageSize: 10, total: 0 }' |
> | pagesOptions |                分页配置项                 |   Object | '{ current: "current", pageSize: "pageSize", total: "total" }' |
> | (...其它的)  | 其它属性方法参照 element-plus 官网 select |        - |                                                              - |

> ### pagesOptionsAttributes 的配置
>
> | 参数     |       说明       |   类型 |     默认值 |
> | -------- | :--------------: | -----: | ---------: |
> | current  |  当前页字段名称  | String |  'current' |
> | pageSize | 一页条数字段名称 | String | 'pageSize' |
> | total    |   总数字段名称   | String |    'total' |
