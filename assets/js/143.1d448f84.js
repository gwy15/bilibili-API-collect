(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{454:function(t,s,a){"use strict";a.r(s);var v=a(10),_=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"视频在线人数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#视频在线人数"}},[t._v("#")]),t._v(" 视频在线人数")]),t._v(" "),s("h2",{attrs:{id:"获取视频在线人数-web端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取视频在线人数-web端"}},[t._v("#")]),t._v(" 获取视频在线人数_web端")]),t._v(" "),s("blockquote",[s("p",[t._v("https://api.bilibili.com/x/player/online/total")])]),t._v(" "),s("p",[s("em",[t._v("请求方式：GET")])]),t._v(" "),s("p",[s("strong",[t._v("url参数：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("必要性")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("aid")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("稿件avid")]),t._v(" "),s("td",[t._v("必要(可选)")]),t._v(" "),s("td",[t._v("avid与bvid任选一个")])]),t._v(" "),s("tr",[s("td",[t._v("bvid")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("稿件bvid")]),t._v(" "),s("td",[t._v("必要(可选)")]),t._v(" "),s("td",[t._v("avid与bvid任选一个")])]),t._v(" "),s("tr",[s("td",[t._v("cid")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("视频cid")]),t._v(" "),s("td",[t._v("必要")]),t._v(" "),s("td",[t._v("用于选择目标分P")])])])]),t._v(" "),s("p",[s("strong",[t._v("json回复：")])]),t._v(" "),s("p",[t._v("根对象：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("code")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("返回值")]),t._v(" "),s("td",[t._v("0：成功"),s("br"),t._v("-400：请求错误"),s("br"),t._v("-404：无视频")])]),t._v(" "),s("tr",[s("td",[t._v("message")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("错误信息")]),t._v(" "),s("td",[t._v("默认为0")])]),t._v(" "),s("tr",[s("td",[t._v("ttl")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("data")]),t._v(" "),s("td",[t._v("obj")]),t._v(" "),s("td",[t._v("信息本体")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("code",[t._v("data")]),t._v("对象：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("total")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("所有终端总计人数")]),t._v(" "),s("td",[t._v("例如"),s("code",[t._v("10万+")])])]),t._v(" "),s("tr",[s("td",[t._v("count")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("web端实时在线人数")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("show_switch")]),t._v(" "),s("td",[t._v("obj")]),t._v(" "),s("td",[t._v("数据显示控制")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("code",[t._v("data")]),t._v("中的"),s("code",[t._v("show_switch")]),t._v("对象：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("total")]),t._v(" "),s("td",[t._v("bool")]),t._v(" "),s("td",[t._v("展示所有终端总计人数")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("count")]),t._v(" "),s("td",[t._v("bool")]),t._v(" "),s("td",[t._v("展示web端实时在线人数")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("strong",[t._v("示例：")])]),t._v(" "),s("p",[t._v("查询视频"),s("code",[t._v("av759949922")]),t._v("/"),s("code",[t._v("BV1y64y1q757")]),t._v("中1P("),s("code",[t._v("392402545")]),t._v(")的在线人数")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-G")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api.bilibili.com/x/player/online/total'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aid=759949922'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cid=392402545'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("details",[s("summary",[t._v("查看响应示例：")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ttl"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"total"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9.4万+"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"count"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"50953"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"show_switch"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"total"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"count"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])])]),t._v(" "),s("h2",{attrs:{id:"获取视频在线人数-app端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取视频在线人数-app端"}},[t._v("#")]),t._v(" 获取视频在线人数_APP端")]),t._v(" "),s("blockquote",[s("p",[t._v("https://app.bilibili.com/x/v2/view/video/online")])]),t._v(" "),s("p",[s("em",[t._v("请求方式：GET")])]),t._v(" "),s("p",[s("strong",[t._v("url参数：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("必要性")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("aid")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("稿件avid")]),t._v(" "),s("td",[t._v("必要")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("appkey")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("APP密钥")]),t._v(" "),s("td",[t._v("APP方式必要")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("cid")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("视频cid")]),t._v(" "),s("td",[t._v("必要")]),t._v(" "),s("td",[t._v("用于选择目标分P")])]),t._v(" "),s("tr",[s("td",[t._v("ts")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("当前时间戳")]),t._v(" "),s("td",[t._v("APP方式必要")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("sign")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("APP签名")]),t._v(" "),s("td",[t._v("APP方式必要")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("strong",[t._v("json回复：")])]),t._v(" "),s("p",[t._v("根对象：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("code")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("返回值")]),t._v(" "),s("td",[t._v("0：成功"),s("br"),t._v("-400：请求错误"),s("br"),t._v("-404：无视频")])]),t._v(" "),s("tr",[s("td",[t._v("message")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("错误信息")]),t._v(" "),s("td",[t._v("默认为0")])]),t._v(" "),s("tr",[s("td",[t._v("ttl")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("data")]),t._v(" "),s("td",[t._v("obj")]),t._v(" "),s("td",[t._v("信息本体")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("code",[t._v("data")]),t._v("对象：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("online")]),t._v(" "),s("td",[t._v("obj")]),t._v(" "),s("td",[t._v("所有终端总计人数")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("code",[t._v("data")]),t._v("中的"),s("code",[t._v("show_switch")]),t._v("对象：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("online")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("所有终端总计人数")]),t._v(" "),s("td",[t._v("例如"),s("code",[t._v("10万+人在看")])])])])]),t._v(" "),s("p",[s("strong",[t._v("示例：")])]),t._v(" "),s("p",[t._v("查询视频"),s("code",[t._v("av759949922")]),t._v("/"),s("code",[t._v("BV1y64y1q757")]),t._v("中1P("),s("code",[t._v("392402545")]),t._v(")的在线人数")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-G")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://app.bilibili.com/x/v2/view/video/online'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aid=759949922'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'appkey=1d8b6e7d45233436'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cid=392402545'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ts=0'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sign=172dfd9941a01275eb93ce6246cd8556'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("details",[s("summary",[t._v("查看响应示例：")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ttl"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"online"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"total_text"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8.8万+人在看"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])])])])}),[],!1,null,null,null);s.default=_.exports}}]);