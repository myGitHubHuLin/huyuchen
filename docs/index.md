# Hello @huyuchen/visual

这是一个简单的 ui 组件库官网  

基于 Vue 3 + echarts + element-plus实现一些动画效果;由此跳转至<n-button quaternary type="primary" @click="jump"> Home</n-button>首页

<!-- [![An old rock in the desert](./pubilc/npm.png 'Shiprock, New Mexico by Beau Rogers')] -->

<script setup>
import { useRouter } from 'vitepress'
const router = useRouter()
const jump = () => {
router.go('/guild/introduce')
}
// const imgUrl = new URL('/npm.png', import.meta.url).href
</script>
