import{_ as a,o as s,c as n,O as l}from"./chunks/framework.ad4d726f.js";const C=JSON.parse('{"title":"安装","description":"","frontmatter":{},"headers":[],"relativePath":"guild/quickstart.md","filePath":"guild/quickstart.md"}'),e={name:"guild/quickstart.md"},p=l(`<h1 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h1><h2 id="环境支持" tabindex="-1">环境支持 <a class="header-anchor" href="#环境支持" aria-label="Permalink to &quot;环境支持&quot;">​</a></h2><p>@huyuchen/visual 支持 <strong>vue3</strong></p><h2 id="版本" tabindex="-1">版本 <a class="header-anchor" href="#版本" aria-label="Permalink to &quot;版本&quot;">​</a></h2><p><strong>@huyuchen/visual</strong>目前还处于快速开发当中</p><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to &quot;用法&quot;">​</a></h2><h3 id="yarn-add" tabindex="-1">yarn add <a class="header-anchor" href="#yarn-add" aria-label="Permalink to &quot;yarn add&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">yarn add @huyuchen/visual</span></span></code></pre></div><h3 id="完整引入" tabindex="-1">完整引入 <a class="header-anchor" href="#完整引入" aria-label="Permalink to &quot;完整引入&quot;">​</a></h3><p>如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。</p><blockquote><p>main.js</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// main.js</span></span>
<span class="line"><span style="color:#A6ACCD;">import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import HuUi from &#39;@huyuchen/visual&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import &#39;@huyuchen/visual/dist/es/style.css&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const app = createApp(App)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(HuUi)</span></span>
<span class="line"><span style="color:#A6ACCD;">app.mount(&#39;#app&#39;)</span></span></code></pre></div><h3 id="手动导入" tabindex="-1">手动导入 <a class="header-anchor" href="#手动导入" aria-label="Permalink to &quot;手动导入&quot;">​</a></h3><blockquote><p>App.vue</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;HuBubble :data=&quot;data&quot; style=&quot;background-color: black; height: 30vh&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import { HuBubble } from &#39;@huyuchen/visual&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  const data = ref([</span></span>
<span class="line"><span style="color:#A6ACCD;">    { label: &#39;跑路&#39;, value: 1 },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { label: &#39;跑路1&#39;, value: 3 },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { label: &#39;跑路2&#39;, value: 55 },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { label: &#39;跑路3&#39;, value: 22 },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { label: &#39;跑路4&#39;, value: 44 },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { label: &#39;跑路5&#39;, value: 66 },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { label: &#39;跑路6&#39;, value: 11 },</span></span>
<span class="line"><span style="color:#A6ACCD;">  ])</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span></code></pre></div>`,15),t=[p];function o(c,r,i,u,d,h){return s(),n("div",null,t)}const y=a(e,[["render",o]]);export{C as __pageData,y as default};
