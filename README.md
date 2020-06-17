# 封装的js工具函数，支持ts类型提示
>更多函数开发中

### 使用步骤
```
//安装
npm install @sven0706/js-utils -S

//引入
import * as utils from '@sven0706/js-utils'
or
import { comdify } from '@sven0706/js-utils'

//使用
utils.comdify(123456) // 123,456
or
comdify(123456) // 123,456
```

### 功能
- [x] 防抖节流函数: control
- [x] 加法运算避免浮点数: accAdd
- [x] 减法运算避免浮点数: accSub
- [x] 乘法运算避免浮点数: accMul
- [x] 除法运算避免浮点数: accDiv
- [x] 获取cookie: getCookie
- [x] 设置cookie: setCookie
- [x] 设置指定domain的cookie: setCookieWithDomain
- [x] 删除指定cookie: clearCookie
- [x] 删除所有cookie: deleteCookie
- [x] 获取url参数: getQueryString
- [x] 获取url中"?"符后的字符串并转化为对象: getParamsObj
- [x] 拼接对象为请求字符串: encodeParams
- [x] 获取字符串指定符号前后的内容: getStringSymbl
- [x] 传入剩余秒数的倒计时: countDown
- [x] 驼峰字符串格式化: decamelize
- [x] 验证是否手机号: isPhone
- [x] 验证是否邮箱: isEmail
- [x] 验证是否url地址: isUrl
- [x] 验证是否函数: isFunction
- [x] 8到20位密码验证（字母，数字，特殊符号任意两种组合）: isPassword
- [x] 验证是否身份证号码: isIdCard
- [x] 将时间戳转换成指定的日期格式: formatDate
- [x] 将日期格式转换成时间戳: timeStamp
- [x] 格林尼治时间字符串转日期格式: formatDateGL
- [x] 获取N天前的日期: getNday
- [x] 获取浏览器环境: getEnvironmentInfo
- [x] 保留n位小数,不会进行四舍五入: toDecimal
- [x] 获取小数点位数: getDecimal
- [x] 科学计数法: science
- [x] 数组对象排序 大到小 (结合sort方法使用): maxSort
- [x] 数组对象排序 小到大 (结合sort方法使用): minSort
- [x] 千分位格式化: comdify
- [x] 将base64图片转file文件: dataURLtoFile
- [x] 将base64的图片转为Blob格式: dataURLtoBlob
- [x] 随机生成uuid: generateUUID
- [x] 复制功能（iOS下某些版本不兼容）: Copy
- [x] 动态引入js文件: injectScript
- [x] 动态引入css文件: injectStyleCSS
- [x] 获取滚动的坐标: getScrollPosition
- [x] 滚动到顶部: scrollToTop
- [x] 去除字符串中的空格: trim
- [x] 字符转换: changeCase

