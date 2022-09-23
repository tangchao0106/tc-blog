---
title: vue2源码生命周期合并策略梳理
author: 唐超
date: '2022-09-12'
---
```
function mergeHook (
  parentVal: ?Array<Function>,
  childVal: ?Function | ?Array<Function>
): ?Array<Function> {
  const res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
  return res
    ? dedupeHooks(res)
    : res
}

```
## 生命周期合并策略梳理
![生命周期合并策略梳理](/生命周期合并策略梳理.png)

####  ps：vuepress `public文件夹里面可以放中文图片，其他路径放中文文件名报错`


<!-- ![生命周期合并策略梳理](./1.png) -->
