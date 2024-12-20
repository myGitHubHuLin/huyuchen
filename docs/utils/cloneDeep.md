### 一、使用 JSON.parse、JSON.stringify()

#### 1.支持的类型

- Boolean
- String
- Number
- Array
- Object

#### 2.不支持的类型

- Date、Map、Set、RegExp、Function、undefined、symbol、Infinity、NaN、循环引用...

### 二、cstructuredClone

#### 1. 支持的类型

- 基本类型
- 普通对象
- Date 对象
- RegExp 对象
- Map
- Set
- ArrayBuffer
- TypedArrays
- Blob
- File
- ImageData
- MessagePort
- null、undefined
- NaN、Infinity、-Infinity
- 循环引用

#### 2. 不支持的类型

- Function
- symbol
- WeakMap
- WeakSet
- DOM 节点

```js
if (typeof structuredClone === "function") {
  console.log("当前浏览器支持structuredClone")
  // 使用 structuredClone 进行操作
} else {
  console.log("当前浏览器不支持structuredClone")
}
```

### 三、使用递归循环

```js
// 1. 判断是不是原始值
// 2. 判断是数组还是对象
// 3. 建立响应的数组或对象
function deepClone(target, origin) {
  var target = target || {},
    toStr = Object.prototype.toString,
    arrStr = "[object Array]"
  for (var prop in origin) {
    if (origin.hasOwnProperty(prop)) {
      if (origin[prop] != null && typeof origin[prop] == "object") {
        if (toStr.call(origin[prop]) == arrStr) {
          target[prop] = []
        } else {
          target[prop] = {}
        }
        deepClone(target[prop], origin[prop])
      } else {
        target[prop] = origin[prop]
      }
    }
  }
  return target
}
```

### 四、 使用 new MessageChannel()

```js
function cloneDeep(obj) {
  return new Promise((resolve, reject) => {
    const { port1, port2 } = new MessageChannel()
    port1.postMessage(obj)
    port2.onmessage = msg => resolve(msg.data)
  })
}
```
