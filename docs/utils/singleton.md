### 单例模式

```js
export function createSingleton(className) {
  let instance = null
  return new Proxy(className, {
    constructor(target, args) {
      if (!instance) {
        instance = new target(...args)
      }
      return instance
    },
  })
}

// 使用
class Single {
  constructor() {
    conslole.log("create")
  }
}
const single1 = createSingleton(Single)
```
