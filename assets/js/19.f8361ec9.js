(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{410:function(n,t,a){"use strict";a.r(t);var r=a(2),e=Object(r.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("ul",[t("li",[n._v("1在参数合并阶段会把所有同类钩子先合并成数组，然后存放在 vm.$options\n"),t("ul",[t("li",[n._v("由于 insertedVnodeQueue 的添加顺序是先⼦后⽗，所以对于同步渲染的⼦组件⽽⾔，mounted 钩 ⼦函数的执⾏顺序也是先⼦后⽗")])])]),n._v(" "),t("li",[n._v("2初始化设置一些标志位，表明是否已经完成某种钩子;")]),n._v(" "),t("li",[n._v("3调用生命周期钩子函数执行的 callHook 方法")]),n._v(" "),t("li",[n._v("4当组件检测到存在生命周期钩子的事件侦听器时，这个时候就会执行vm.$emit('hook:' + hook) 回调函数")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function mergeHook (\n  parentVal: ?Array<Function>,\n  childVal: ?Function | ?Array<Function>\n): ?Array<Function> {\n  const res = childVal\n    ? parentVal\n      ? parentVal.concat(childVal)\n      : Array.isArray(childVal)\n        ? childVal\n        : [childVal]\n    : parentVal\n  return res\n    ? dedupeHooks(res)\n    : res\n}\n\n")])])]),t("h2",{attrs:{id:"生命周期合并策略梳理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生命周期合并策略梳理"}},[n._v("#")]),n._v(" 生命周期合并策略梳理")]),n._v(" "),t("p",[t("img",{attrs:{src:"/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%90%88%E5%B9%B6%E7%AD%96%E7%95%A5%E6%A2%B3%E7%90%86.png",alt:"生命周期合并策略梳理"}})]),n._v(" "),t("p",[t("img",{attrs:{src:"/ic_launcher.png",alt:"生命周期合并策略梳理"}})]),n._v(" "),t("h4",{attrs:{id:"ps-vuepress-public文件夹里面可以放中文图片-其他路径放中文文件名报错"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ps-vuepress-public文件夹里面可以放中文图片-其他路径放中文文件名报错"}},[n._v("#")]),n._v(" ps：vuepress "),t("code",[n._v("public文件夹里面可以放中文图片，其他路径放中文文件名报错")])])])}),[],!1,null,null,null);t.default=e.exports}}]);