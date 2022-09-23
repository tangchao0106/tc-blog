(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{405:function(e,t,a){"use strict";a.r(t);var n=a(2),l=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("vue3源码中关于判断2个对象是否相等hasChanged方法，该函数位于vue/@shared。源代码片段如下所示：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("export const hasChanged = (value: any, oldValue: any): boolean => {\n    return !Object.is(value, oldValue)\n}\n")])])]),t("p",[e._v("Object.is方法来自ES6，能够确定两个值是否相同。如果满足以下条件之一，则两个值相同：")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is",target:"_blank",rel:"noopener noreferrer"}},[e._v("来自MDN解释"),t("OutboundLink")],1)]),e._v(" "),t("ul",[t("li",[e._v("两个都是undefined")]),e._v(" "),t("li",[e._v("两个都是null")]),e._v(" "),t("li",[e._v("两个长度相同、字符顺序相同的string")]),e._v(" "),t("li",[e._v("两个都是true或者都是false")]),e._v(" "),t("li",[e._v("两个object对象都引用堆中分配的相同内存地址")]),e._v(" "),t("li",[e._v("两个值是number：")]),e._v(" "),t("li",[e._v("都是-0或者都是+0")]),e._v(" "),t("li",[e._v("都是NaN")]),e._v(" "),t("li",[e._v("都是非零和非NaN都具有相同的值")])]),e._v(" "),t("p",[e._v("实现一个自己的Object")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Object.defineProperty(Object, 'is', {\n    value(x, y) {\n        return x === y\n            ? 1 / x === 1 / y // +0 != -0\n            : x !== x && y !== y // NaN == NaN\n    }\n})\n")])])])])}),[],!1,null,null,null);t.default=l.exports}}]);