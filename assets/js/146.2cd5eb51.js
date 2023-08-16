(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{457:function(t,s,v){"use strict";v.r(s);var a=v(10),_=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"视频观看数据上报"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#视频观看数据上报"}},[t._v("#")]),t._v(" 视频观看数据上报")]),t._v(" "),s("h2",{attrs:{id:"上报观看进度-双端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上报观看进度-双端"}},[t._v("#")]),t._v(" 上报观看进度（双端）")]),t._v(" "),s("blockquote",[s("p",[t._v("https://api.bilibili.com/x/v2/history/report")])]),t._v(" "),s("p",[s("em",[t._v("请求方式：POST")])]),t._v(" "),s("p",[t._v("认证方式：APP或Cookie（SESSDATA）")]),t._v(" "),s("p",[s("strong",[t._v("正文参数（ application/x-www-form-urlencoded ）：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("必要性")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("access_key")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("APP登录Token")]),t._v(" "),s("td",[t._v("APP方式必要")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("aid")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("稿件avid")]),t._v(" "),s("td",[t._v("必要")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("cid")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("视频cid")]),t._v(" "),s("td",[t._v("必要")]),t._v(" "),s("td",[t._v("用于识别分P")])]),t._v(" "),s("tr",[s("td",[t._v("progress")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("观看进度")]),t._v(" "),s("td",[t._v("非必要")]),t._v(" "),s("td",[t._v("单位为秒"),s("br"),t._v("默认为0")])]),t._v(" "),s("tr",[s("td",[t._v("platform")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("平台标识")]),t._v(" "),s("td",[t._v("非必要")]),t._v(" "),s("td",[t._v("可为android")])]),t._v(" "),s("tr",[s("td",[t._v("csrf")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("CSRF Token（位于cookie）")]),t._v(" "),s("td",[t._v("Cookie方式必要")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("strong",[t._v("json回复：")])]),t._v(" "),s("p",[t._v("根对象：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("code")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("返回值")]),t._v(" "),s("td",[t._v("0：成功 "),s("br"),t._v("-101：账号未登录"),s("br"),t._v("-111：csrf校验失败"),s("br"),t._v("-400：请求错误")])]),t._v(" "),s("tr",[s("td",[t._v("message")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("错误信息")]),t._v(" "),s("td",[t._v("默认为0")])]),t._v(" "),s("tr",[s("td",[t._v("ttl")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("strong",[t._v("示例：")])]),t._v(" "),s("p",[t._v("记录视频"),s("code",[t._v("av13662970")]),t._v("（"),s("code",[t._v("cid=126654047")]),t._v("）的观看记录位于"),s("code",[t._v("1248")]),t._v("秒")]),t._v(" "),s("p",[t._v("Cookie方式：")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api.bilibili.com/x/v2/history/report'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aid=13662970'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cid=126654047'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'progress=1248'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'platform=android'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'csrf=xxx'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-b")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SESSDATA=xxx'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("APP方式：")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api.bilibili.com/x/v2/history/report'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'access_key=xxx'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aid=13662970'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cid=126654047'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'progress=1248'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'platform=android'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("details",[s("summary",[t._v("查看响应示例：")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ttl"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])]),t._v(" "),s("h2",{attrs:{id:"上报视频播放心跳-web端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上报视频播放心跳-web端"}},[t._v("#")]),t._v(" 上报视频播放心跳（web端）")]),t._v(" "),s("blockquote",[s("p",[t._v("https://api.bilibili.com/x/click-interface/web/heartbeat")])]),t._v(" "),s("p",[s("em",[t._v("请求方式：POST")])]),t._v(" "),s("p",[t._v("认证方式：仅可Cookie（SESSDATA）")]),t._v(" "),s("p",[t._v("默认间隔15秒一次")]),t._v(" "),s("p",[t._v("亦可记录播放历史")]),t._v(" "),s("p",[s("strong",[t._v("正文参数（ application/x-www-form-urlencoded ）：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("必要性")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("aid")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("稿件avid")]),t._v(" "),s("td",[t._v("必要（可选）")]),t._v(" "),s("td",[t._v("avid与bvid任选一个")])]),t._v(" "),s("tr",[s("td",[t._v("bvid")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("稿件bvid")]),t._v(" "),s("td",[t._v("必要（可选）")]),t._v(" "),s("td",[t._v("avid与bvid任选一个")])]),t._v(" "),s("tr",[s("td",[t._v("cid")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("视频cid")]),t._v(" "),s("td",[t._v("非必要")]),t._v(" "),s("td",[t._v("用于识别分P")])]),t._v(" "),s("tr",[s("td",[t._v("epid")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("番剧epid")]),t._v(" "),s("td",[t._v("非必要")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("sid")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("番剧ssid")]),t._v(" "),s("td",[t._v("非必要")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("mid")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("当前用户mid")]),t._v(" "),s("td",[t._v("非必要")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("played_time")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("视频播放进度")]),t._v(" "),s("td",[t._v("非必要")]),t._v(" "),s("td",[t._v("单位为秒"),s("br"),t._v("默认为0")])]),t._v(" "),s("tr",[s("td",[t._v("realtime")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("总计播放时间")]),t._v(" "),s("td",[t._v("非必要")]),t._v(" "),s("td",[t._v("单位为秒")])]),t._v(" "),s("tr",[s("td",[t._v("start_ts")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("开始播放时刻")]),t._v(" "),s("td",[t._v("非必要")]),t._v(" "),s("td",[t._v("时间戳")])]),t._v(" "),s("tr",[s("td",[t._v("type")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("视频类型")]),t._v(" "),s("td",[t._v("非必要")]),t._v(" "),s("td",[t._v("3：投稿视频"),s("br"),t._v("4：剧集"),s("br"),t._v("10：课程")])]),t._v(" "),s("tr",[s("td",[t._v("sub_type")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("剧集副类型")]),t._v(" "),s("td",[t._v("非必要")]),t._v(" "),s("td",[t._v("当"),s("code",[t._v("type=4")]),t._v("时本参数有效"),s("br"),t._v("1：番剧"),s("br"),t._v("2：电影"),s("br"),t._v("3：纪录片"),s("br"),t._v("4：国创"),s("br"),t._v("5：电视剧"),s("br"),t._v("7：综艺")])]),t._v(" "),s("tr",[s("td",[t._v("dt")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("2")]),t._v(" "),s("td",[t._v("非必要")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("play_type")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("播放动作")]),t._v(" "),s("td",[t._v("非必要")]),t._v(" "),s("td",[t._v("0：播放中"),s("br"),t._v("1：开始播放"),s("br"),t._v("2：暂停"),s("br"),t._v("3：继续播放")])]),t._v(" "),s("tr",[s("td",[t._v("csrf")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("CSRF Token（位于cookie）")]),t._v(" "),s("td",[t._v("非必要")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("strong",[t._v("json回复：")])]),t._v(" "),s("p",[t._v("根对象：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("code")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("返回值")]),t._v(" "),s("td",[t._v("0：成功"),s("br"),t._v("-400：请求错误")])]),t._v(" "),s("tr",[s("td",[t._v("message")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("错误信息")]),t._v(" "),s("td",[t._v("默认为0")])]),t._v(" "),s("tr",[s("td",[t._v("ttl")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("strong",[t._v("示例：")])]),t._v(" "),s("p",[t._v("上报一次视频"),s("code",[t._v("av2")]),t._v("/"),s("code",[t._v("BV1xx411c7mD")]),t._v("的心跳数据")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api.bilibili.com/x/click-interface/web/heartbeat'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aid=2'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bvid=BV1xx411c7mD'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cid=62131'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'played_time=60'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'realtime=60'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'start_ts=1592720840'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'type=3'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dt=2'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'play_type=0'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'csrf=xxx'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-b")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SESSDATA=xxx'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("details",[s("summary",[t._v("查看响应示例：")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ttl"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])])])}),[],!1,null,null,null);s.default=_.exports}}]);