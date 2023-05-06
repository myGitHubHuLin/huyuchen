# 安装

## 环境支持

@huyuchen/visual 支持 **vue3**

## 版本

**@huyuchen/visual**目前还处于快速开发当中

## 用法

### yarn add

```
yarn add @huyuchen/visual
```

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

> main.js

```
// main.js
import { createApp } from 'vue'
import HuUi from '@huyuchen/visual'
import '@huyuchen/visual/dist/es/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(HuUi)
app.mount('#app')

```

### 手动导入

> App.vue

```
<template>
<HuBubble :data="data" style="background-color: black; height: 30vh" />
</template>
<script setup>
  import { HuBubble } from '@huyuchen/visual'
  import { ref } from 'vue'
  const data = ref([
    { label: '跑路', value: 1 },
    { label: '跑路1', value: 3 },
    { label: '跑路2', value: 55 },
    { label: '跑路3', value: 22 },
    { label: '跑路4', value: 44 },
    { label: '跑路5', value: 66 },
    { label: '跑路6', value: 11 },
  ])
</script>
```
