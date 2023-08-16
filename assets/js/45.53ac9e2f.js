(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{348:function(t,s,a){"use strict";a.r(s);var v=a(10),_=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"仲裁操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#仲裁操作"}},[t._v("#")]),t._v(" 仲裁操作")]),t._v(" "),s("h2",{attrs:{id:"申请加入风纪委员会"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#申请加入风纪委员会"}},[t._v("#")]),t._v(" 申请加入风纪委员会")]),t._v(" "),s("blockquote",[s("p",[t._v("https://api.bilibili.com/x/credit/v2/jury/apply")])]),t._v(" "),s("p",[s("em",[t._v("请求方式：POST")])]),t._v(" "),s("p",[t._v("认证方式：Cookie")]),t._v(" "),s("p",[t._v("只有用户会员90天内无违规、实名认证且非封禁状态才可以申请加入风纪委员会")]),t._v(" "),s("p",[t._v("申请成功后可获得30天资格")]),t._v(" "),s("p",[s("strong",[t._v("正文参数（ application/x-www-form-urlencoded）：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("必要性")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("csrf")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("cookie中"),s("code",[t._v("bili_jct")]),t._v("的值")]),t._v(" "),s("td",[t._v("必要")])])])]),t._v(" "),s("p",[s("strong",[t._v("json回复：")])]),t._v(" "),s("p",[t._v("根对象：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("code")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("返回值")]),t._v(" "),s("td",[t._v("0：成功"),s("br"),t._v("-101：账号未登录"),s("br"),t._v("-111：csrf 校验失败"),s("br"),t._v("25001：申请等级限制(会员等级<3)"),s("br"),t._v("25002：没有实名认证"),s("br"),t._v("25003：90天内有封禁记录"),s("br"),t._v("25013：不能重复申请风纪委资格"),s("br"),t._v("25016：当日风纪委员名额已发完")])]),t._v(" "),s("tr",[s("td",[t._v("message")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("信息")]),t._v(" "),s("td",[t._v("默认为0")])]),t._v(" "),s("tr",[s("td",[t._v("ttl")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td")])])]),t._v(" "),s("details",[s("summary",[t._v("查看响应示例：")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ttl"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])]),t._v(" "),s("h4",{attrs:{id:"旧api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#旧api"}},[t._v("#")]),t._v(" 旧API")]),t._v(" "),s("details",[s("summary",[t._v("查看旧版API：")]),t._v(" "),s("blockquote",[s("p",[t._v("https://api.bilibili.com/x/credit/jury/apply")])]),t._v(" "),s("p",[s("em",[t._v("请求方式：POST")])]),t._v(" "),s("p",[t._v("认证方式：Cookie（SESSDATA）或APP")]),t._v(" "),s("p",[t._v("只有用户会员等级≥Lv4、90天内无违规、实名认证且非封禁状态才可以申请加入风纪委员会")]),t._v(" "),s("p",[t._v("每日10:00开放新名额")]),t._v(" "),s("p",[t._v("申请成功后可获得30天资格")]),t._v(" "),s("p",[s("strong",[t._v("正文参数（ application/x-www-form-urlencoded ）：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("必要性")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("access_key")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("APP登录Token")]),t._v(" "),s("td",[t._v("APP方式必要")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("csrf")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("CSRF Token（位于cookie）")]),t._v(" "),s("td",[t._v("Cookie方式必要")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("strong",[t._v("json回复：")])]),t._v(" "),s("p",[t._v("根对象：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("code")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("返回值")]),t._v(" "),s("td",[t._v("0：成功"),s("br"),t._v("-101：账号未登录"),s("br"),t._v("-111：csrf 校验失败"),s("br"),t._v("25001：申请等级限制(会员等级<3)"),s("br"),t._v("25002：没有实名认证"),s("br"),t._v("25003：90天内有封禁记录"),s("br"),t._v("25013：不能重复申请风纪委资格"),s("br"),t._v("25016：当日风纪委员名额已发完")])]),t._v(" "),s("tr",[s("td",[t._v("message")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("信息")]),t._v(" "),s("td",[t._v("默认为0")])]),t._v(" "),s("tr",[s("td",[t._v("ttl")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("strong",[t._v("示例：")])]),t._v(" "),s("p",[t._v("Cookie方式：")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api.bilibili.com/x/credit/jury/apply'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'csrf=xxx'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-b")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SESSDATA=xxx'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("APP方式：")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api.bilibili.com/x/credit/jury/apply'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'access_key=xxx'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("details",[s("summary",[t._v("查看响应示例：")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ttl"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])])]),t._v(" "),s("h2",{attrs:{id:"拉取新案件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拉取新案件"}},[t._v("#")]),t._v(" 拉取新案件")]),t._v(" "),s("blockquote",[s("p",[t._v("https://api.bilibili.com/x/credit/v2/jury/case/next")])]),t._v(" "),s("p",[s("em",[t._v("请求方式：GET")])]),t._v(" "),s("p",[t._v("认证方式：Cookie")]),t._v(" "),s("p",[s("strong",[t._v("标头参数（Headers）：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("必要性")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Cookie")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("Cookie")]),t._v(" "),s("td",[t._v("必要")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("strong",[t._v("json回复：")])]),t._v(" "),s("p",[t._v("根对象：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("code")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("返回值")]),t._v(" "),s("td",[t._v("0：成功"),s("br"),t._v("25006：风纪委员资格已过期"),s("br"),t._v("25008：没有案件"),s("br"),t._v("25014：已审满")])]),t._v(" "),s("tr",[s("td",[t._v("message")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("信息")]),t._v(" "),s("td",[t._v("默认为0，当code不为0时，显示错误信息")])]),t._v(" "),s("tr",[s("td",[t._v("ttl")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("作用尚不明确")])]),t._v(" "),s("tr",[s("td",[t._v("data")]),t._v(" "),s("td",[t._v("object")]),t._v(" "),s("td",[t._v("数据本体")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("code",[t._v("data")]),t._v("对象：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("case_id")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("仲裁案件id")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("strong",[t._v("示例：")])]),t._v(" "),s("p",[t._v("Cookie方式：")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-G")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api.bilibili.com/x/credit/v2/jury/case/next'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--header")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cookie: XXXXX'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("details",[s("summary",[t._v("查看响应示例：")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ttl"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"case_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AC2m4HlrIrHv"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])])]),t._v(" "),s("h4",{attrs:{id:"旧api-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#旧api-2"}},[t._v("#")]),t._v(" 旧API")]),t._v(" "),s("details",[s("summary",[t._v("查看旧版API：")]),t._v(" "),s("blockquote",[s("p",[t._v("https://api.bilibili.com/x/credit/jury/caseObtain")])]),t._v(" "),s("p",[s("em",[t._v("请求方式：POST")])]),t._v(" "),s("p",[t._v("认证方式：Cookie（SESSDATA）或APP")]),t._v(" "),s("p",[s("strong",[t._v("正文参数（ application/x-www-form-urlencoded ）：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("必要性")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("access_key")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("APP登录Token")]),t._v(" "),s("td",[t._v("APP方式必要")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("csrf")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("CSRF Token（位于cookie）")]),t._v(" "),s("td",[t._v("Cookie方式必要")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("strong",[t._v("json回复：")])]),t._v(" "),s("p",[t._v("根对象：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("code")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("返回值")]),t._v(" "),s("td",[t._v("0：成功"),s("br"),t._v("25005：不是风纪委员"),s("br"),t._v("25008：没有案件"),s("br"),t._v("25014：已审满")])]),t._v(" "),s("tr",[s("td",[t._v("message")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("信息")]),t._v(" "),s("td",[t._v("默认为0")])]),t._v(" "),s("tr",[s("td",[t._v("ttl")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("作用尚不明确")])]),t._v(" "),s("tr",[s("td",[t._v("data")]),t._v(" "),s("td",[t._v("object")]),t._v(" "),s("td",[t._v("数据本体")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("code",[t._v("data")]),t._v("对象：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("id")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("仲裁案件id")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("strong",[t._v("示例：")])]),t._v(" "),s("p",[t._v("Cookie方式：")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api.bilibili.com/x/credit/jury/caseObtain'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'csrf=xxx'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-b")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SESSDATA=xxx'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("APP方式：")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api.bilibili.com/x/credit/jury/caseObtain'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'access_key=xxx'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("details",[s("summary",[t._v("查看响应示例：")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ttl"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1239790")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])])])]),t._v(" "),s("h2",{attrs:{id:"进行仲裁投票"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进行仲裁投票"}},[t._v("#")]),t._v(" 进行仲裁投票")]),t._v(" "),s("blockquote",[s("p",[t._v("https://api.bilibili.com/x/credit/v2/jury/vote")])]),t._v(" "),s("p",[s("em",[t._v("请求方式：POST")])]),t._v(" "),s("p",[t._v("认证方式：Cookie")]),t._v(" "),s("p",[s("strong",[t._v("正文参数（ application/x-www-form-urlencoded ）：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("必要性")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("case_id")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("案件id")]),t._v(" "),s("td",[t._v("必要")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("vote")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("投票类型")]),t._v(" "),s("td",[t._v("必要")]),t._v(" "),s("td",[t._v("见「"),s("RouterLink",{attrs:{to:"/docs/blackroom/jury/judgement_info.html"}},[t._v("众裁信息")]),t._v("」中表")],1)]),t._v(" "),s("tr",[s("td",[t._v("insiders")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("是否观看此类视频")]),t._v(" "),s("td",[t._v("非必要")]),t._v(" "),s("td",[t._v("默认值为0"),s("br"),t._v("见「"),s("RouterLink",{attrs:{to:"/docs/blackroom/jury/judgement_info.html"}},[t._v("众裁信息")]),t._v("」中表")],1)]),t._v(" "),s("tr",[s("td",[t._v("content")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("理由")]),t._v(" "),s("td",[t._v("非必要")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("anonymous")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("是否匿名")]),t._v(" "),s("td",[t._v("非必要")]),t._v(" "),s("td",[t._v("默认值为0"),s("br"),t._v("0：不匿名"),s("br"),t._v("1：匿名")])]),t._v(" "),s("tr",[s("td",[t._v("csrf")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("cookie中"),s("code",[t._v("bili_jct")]),t._v("的值")]),t._v(" "),s("td",[t._v("必要")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("strong",[t._v("json回复：")])]),t._v(" "),s("p",[t._v("根对象：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("code")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("返回值")]),t._v(" "),s("td",[t._v("0：成功"),s("br"),t._v("-101：未登录"),s("br"),t._v("-111：csrf 错误"),s("br"),t._v("-400：请求错误（投票类型错误）"),s("br"),t._v("25005：不是风纪委员"),s("br"),t._v("25011：投票类型错误"),s("br"),t._v("25018：不能进行此操作"),s("br"),s("br"),s("em",[t._v("注：新版本对于一个不存在的"),s("code",[t._v("case_id")]),t._v("，不会报错。")])])]),t._v(" "),s("tr",[s("td",[t._v("message")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("信息")]),t._v(" "),s("td",[t._v("默认为0")])]),t._v(" "),s("tr",[s("td",[t._v("ttl")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("作用尚不明确")])])])]),t._v(" "),s("details",[s("summary",[t._v("查看响应示例：")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ttl"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])]),t._v(" "),s("h4",{attrs:{id:"旧api-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#旧api-3"}},[t._v("#")]),t._v(" 旧API")]),t._v(" "),s("details",[s("summary",[t._v("查看旧版API：")]),t._v("\n> https://api.bilibili.com/x/credit/jury/vote\n"),s("p",[s("em",[t._v("请求方式：POST")])]),t._v(" "),s("p",[t._v("认证方式：Cookie（SESSDATA）或APP")]),t._v(" "),s("p",[s("strong",[t._v("正文参数（ application/x-www-form-urlencoded ）：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("必要性")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("cid")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("案件id")]),t._v(" "),s("td",[t._v("必要")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("vote")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("投票类型")]),t._v(" "),s("td",[t._v("必要")]),t._v(" "),s("td",[t._v("见「"),s("RouterLink",{attrs:{to:"/docs/blackroom/jury/judgement_info.html"}},[t._v("众裁信息")]),t._v("」中表")],1)]),t._v(" "),s("tr",[s("td",[t._v("content")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("理由")]),t._v(" "),s("td",[t._v("非必要")]),t._v(" "),s("td",[t._v("见「"),s("RouterLink",{attrs:{to:"/docs/blackroom/jury/judgement_info.html"}},[t._v("众裁信息")]),t._v("」中表")],1)]),t._v(" "),s("tr",[s("td",[t._v("likes")]),t._v(" "),s("td",[t._v("nums")]),t._v(" "),s("td",[t._v("支持的观点")]),t._v(" "),s("td",[t._v("非必要")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("hates")]),t._v(" "),s("td",[t._v("nums")]),t._v(" "),s("td",[t._v("反对的观点")]),t._v(" "),s("td",[t._v("非必要")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("attr")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("是否匿名")]),t._v(" "),s("td",[t._v("非必要")]),t._v(" "),s("td",[t._v("0：匿名"),s("br"),t._v("1：不匿名")])]),t._v(" "),s("tr",[s("td",[t._v("apply_type")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("是否更改原因")]),t._v(" "),s("td",[t._v("非必要")]),t._v(" "),s("td",[t._v("0：保持原来原因"),s("br"),t._v("1：投票给新原因")])]),t._v(" "),s("tr",[s("td",[t._v("origin_reason")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("原始原因")]),t._v(" "),s("td",[t._v("非必要")]),t._v(" "),s("td",[t._v("见「封禁公示」中表")])]),t._v(" "),s("tr",[s("td",[t._v("apply_reason")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("新原因")]),t._v(" "),s("td",[t._v("非必要")]),t._v(" "),s("td",[t._v("见「封禁公示」中表")])]),t._v(" "),s("tr",[s("td",[t._v("csrf")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("CSRF Token（位于cookie）")]),t._v(" "),s("td",[t._v("Cookie方式必要")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("strong",[t._v("json回复：")])]),t._v(" "),s("p",[t._v("根对象：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("code")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("返回值")]),t._v(" "),s("td",[t._v("0：成功"),s("br"),t._v("-101：未登录"),s("br"),t._v("-111：csrf 错误"),s("br"),t._v("-400：请求错误（投票类型错误）"),s("br"),t._v("25005：不是风纪委员"),s("br"),t._v("25009： 案件不存在"),s("br"),t._v("25011：投票类型错误"),s("br"),t._v("25012：重复投票")])]),t._v(" "),s("tr",[s("td",[t._v("message")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("信息")]),t._v(" "),s("td",[t._v("默认为0")])]),t._v(" "),s("tr",[s("td",[t._v("ttl")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("作用尚不明确")])])])]),t._v(" "),s("p",[s("strong",[t._v("示例：")])]),t._v(" "),s("p",[t._v("为案件"),s("code",[t._v("2333")]),t._v("投票，建议封禁，无理由，不匿名，无支持/反对观点，不修改投票原因")]),t._v(" "),s("p",[t._v("Cookie方式：")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api.bilibili.com/x/credit/jury/vote'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cid=2333'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vote=1'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content='")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'likes='")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hates='")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'attr=1'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'apply_type=0'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'origin_reason='")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'apply_reason='")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'csrf=xxx'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-b")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SESSDATA=xxx'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("p",[t._v("APP方式：")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api.bilibili.com/x/credit/jury/vote'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'access_key=xxx'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cid=2333'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vote=1'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content='")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'likes='")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hates='")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'attr=1'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'apply_type=0'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'origin_reason='")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'apply_reason='")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("details",[s("summary",[t._v("查看响应示例：")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ttl"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])])])])}),[],!1,null,null,null);s.default=_.exports}}]);