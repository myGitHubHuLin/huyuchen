# Hello @huyuchen/visual

这是一个简单的 ui 组件库官网  
<n-button quaternary type="primary" @click="jump"> >>Home</n-button>
imgUrl 出门一笑莫心哀，浩荡襟怀到处开。  
时事难从无过立，达官非自有生来。  
风涛回首空三岛，尘壤从头数九垓。  
休信儿童轻薄语，嗤他赵老送灯台。

力微任重久神疲，再竭衰庸定不支。  
苟利国家生死以，岂因祸福避趋之。  
谪居正是君恩厚，养拙刚于戍卒宜。  
戏与山妻谈故事，试吟断送老头皮。

<n-image
    width="100"
    :src="imgUrl"
/>

<script setup>
import { useRouter } from 'vitepress'
const router = useRouter()
const jump = () => {
router.go('/guild/introduce')
}
const imgUrl = new URL('./public/npm.png', import.meta.url).href
</script>
