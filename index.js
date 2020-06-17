/*
 * @Author: Siwen
 * @Date: 2020-06-15 09:52:37
 * @LastEditors: Siwen
 * @LastEditTime: 2020-06-17 10:43:54
 * @Description: 模块化导出
 */
let environmentInfo = {
  inited: false,
  /** IE内核 */
  trident: false,
  /** opera内核 */
  presto: false,
  /** 苹果、谷歌内核 */
  webKit: false,
  /** 火狐内核 */
  gecko: false,
  /** 是否为移动终端 */
  mobile: false,
  /** ios终端 */
  ios: false,
  /** android终端 */
  android: false,
  /** 是否为iPhone或者QQHD浏览器 */
  iPhone: false,
  /** 是否iPad */
  iPad: false,
  /** 是否web应该程序，没有头部与底部 */
  webApp: false,
  /** 是否微信 （2015-01-22新增） */
  wechat: false,
  /** 是否QQ */
  qq: false
}
function updateEnvironmentInfo() {
  const u = navigator.userAgent
  environmentInfo.trident = u.indexOf("Trident") > -1
  environmentInfo.presto = u.indexOf("Presto") > -1
  environmentInfo.webKit = u.indexOf("AppleWebKit") > -1
  environmentInfo.gecko = u.indexOf("Gecko") > -1 && u.indexOf("KHTML") === -1
  environmentInfo.mobile = !!u.match(/AppleWebKit.*Mobile.*/)
  environmentInfo.ios = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  environmentInfo.android = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1
  environmentInfo.iPhone = u.indexOf("iPhone") > -1
  environmentInfo.iPad = u.indexOf("iPad") > -1
  environmentInfo.webApp = u.indexOf("Safari") === -1
  environmentInfo.wechat = u.indexOf("MicroMessenger") > -1
  environmentInfo.qq = u.match(/\sQQ/i) === "qq"
}

/**
 * 防抖节流函数
 * @param {Function} func 需要节制的函数
 * @param {Number} delay  间隔时间
 * @param {Number} duration 超出时间
 * @param {Boolean} controlType 1防抖 0节流 默认1
 * @return Function
 */
export const control = (method, delay, duration, controlType = 1) => {
  let timer = null
  let flag = false
  let start = new Date().getTime()
  return function () {
    let context = this
    let args = arguments
    if (controlType) {
      if (!flag) {
        method.apply(context, args)
        flag = true
        start = new Date().getTime()
      }
      if (timer) clearTimeout(timer)
      timer = setTimeout(function() {
        flag = false
        let end = new Date().getTime()
        if (end - start >= duration) {
          method.apply(context, args)
          start = end
        }
      }, delay)
    } else {
      let end = new Date().getTime()
      if (timer) clearTimeout(timer)
      if (end - start >= duration) {
        method.apply(context, args)
        start = end
      } else {
        timer = setTimeout(function () {
          method.apply(context, args)
          start = new Date().getTime()
        }, delay)
      }
    }
  }
}
/**
 * 加法运算避免浮点数
 * @method accAdd
 * @param {string | number} arg1 数字1
 * @param {string | number} arg2 数字2
 * @returns {number}
 */
export const accAdd = (arg1, arg2) => {
  let r1 = null
  let r2 = null
  let m = null
  try { r1 = arg1.toString().split('.')[1].length } catch (error) { r1 = 0 }
  try { r2 = arg2.toString().split('.')[1].length } catch (error) { r2 = 0 }
  m = Math.pow(10, Math.max(r1, r2))
  return (arg1 * m + arg2 * m) / m
}
/**
 * 减法运算避免浮点数
 * @method accSub
 * @param {string | number} arg1 数字1
 * @param {string | number} arg2 数字2
 * @returns {number}
 */
export const accSub = (arg1, arg2) => {
  let r1 = null
  let r2 = null
  let m = null
  let n = null
  try { r1 = arg1.toString().split('.')[1].length } catch (error) { r1 = 0 }
  try { r2 = arg2.toString().split('.')[1].length } catch (error) { r2 = 0 }
  m = Math.pow(10, Math.max(r1, r2))
  n = (r1 >= r2) ? r1 : r2
  return ((arg1 * m - arg2 * m) / m).toFixed(n)
}
/**
 * 乘法运算避免浮点数
 * @method accMul
 * @param {string | number} arg1 数字1
 * @param {string | number} arg2 数字2
 * @returns {number}
 */
export const accMul = (arg1, arg2) => {
  let m = 0
  const s1 = arg1.toString()
  const s2 = arg2.toString()
  try { m += s1.split('.')[1].length } catch (e) { console.log() }
  try { m += s2.split('.')[1].length } catch (e) { console.log() }
  return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
}
/**
 * 除法运算避免浮点数
 * @method accDiv
 * @param {string | number} arg1 数字1
 * @param {string | number} arg2 数字2
 * @returns {number}
 */
export const accDiv = (arg1, arg2) => {
  let t1 = 0
  let t2 = 0
  let r1 = null
  let r2 = null
  try { t1 = arg1.toString().split('.')[1].length } catch (e) { console.log() }
  try { t2 = arg2.toString().split('.')[1].length } catch (e) { console.log() }
  r1 = Number(arg1.toString().replace('.', ''))
  r2 = Number(arg2.toString().replace('.', ''))
  return (r1 / r2) * Math.pow(10, t2 - t1)
}
/**获取cookie
 * @method getCookie
 * @param {string} name cookie名
 * @returns {string}
 */
export const getCookie = (name) => {
  const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`)
  const arr = document.cookie.match(reg)
  if (arr) return decodeURI(arr[2])
  return null
}
/**设置cookie
 * @method setCookie
 * @param {string} name cookie名
 * @param {string | number} value cookie值
 * @param {number} expiredays 过期时间/天 (默认1)
 */
export const setCookie = (name, value, expiredays = 1) => {
  const exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie = `${name}=${escape(value)}${expiredays == null ? '' : `;expires=${exdate.toGMTString()}`};path=/`
}
/**设置指定domain的cookie
 * @method setCookieWithDomain
 * @param {string} name cookie名
 * @param {string | number} value cookie值
 * @param {string} domain 指定的domain
 * @param {number} expiredays 过期时间/天 (默认1)
 */
export const setCookieWithDomain = (name, value, domain, expiredays = 1) => {
  const exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie = `${name}=${escape(value)}${expiredays == null ? '' : `;expires=${exdate.toGMTString()}`};domain=${domain};path=/`
}
/**删除指定cookie
 * @method clearCookie
 * @param {string} name cookie名
 */
export const clearCookie = (name) => {
  const exp = new Date()
  exp.setTime(exp.getTime() - 1)
  const cval = getCookie(name)
  if (cval != null) document.cookie = `${name}=${cval};expires=${exp.toGMTString()}`
}
/**删除所有cookie */
export const deleteCookie = () => {
  const keys = document.cookie.match(/[^ =;]+(?==)/g)
  if (keys) {
    for (let i = keys.length; i >= 0; i -= 1) {
      document.cookie = `${keys[i]}=0;expires=${new Date(0).toUTCString()}`
    }
  }
}
/**获取url参数
 * @method getQueryString
 * @param {string} name 需要获取的参数名
 * @returns {string}
 */
export const getQueryString = (name) => {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ''])[1].replace(/\+/g, '%20')) || null
}
/**
 * 获取url中"?"符后的字符串并转化为对象
 * @method getParamsObj
 * @returns {object}
 */
export const getParamsObj = () =>{
  let url = location.search
  let paramsObj = new Object()
  if (url.indexOf('?') != -1) {
    let str = url.substr(1)
    strs = str.split('&')
    for (let i = 0; i < strs.length; i++) {
      paramsObj[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
    }
  }
  return paramsObj
}
/**
 * 拼接对象为请求字符串
 * @method encodeParams
 * @param {Object} obj 待拼接的对象
 * @param {boolean} isCode 类似中文是否需要编码,默认需要
 * @returns {string} 拼接成的请求字符串
 */
export const encodeParams = (obj, isCode = ture) => {
  let params = []
  Object.keys(obj).forEach(function(key) {
    let value = obj[key]
    // 如果值为undefined我们将其置空
    if (typeof value === 'undefined') {
      value = ''
    }
    if (typeof value === 'object') {
      value = JSON.stringify(value)
    }
    // 对于需要编码的文本（比如说中文）我们要进行编码
    if (isCode) {
      params.push([key, encodeURIComponent(value)].join('='))
    } else {
      params.push([key, value].join('='))
    }
  })
  return params.join('&')
}
/**
 * 获取字符串指定符号前后的内容
 * @method getCaption
 * @param {string} str 字符串
 * @param {string} symbol 指定符号
 * @param {boolean} state 指定符号前:0 还是后:1 (默认1)
 * @returns {string}
 */
export const getStringSymbl = (str, symbol, state = 1) => {
  if (str && !str.includes(symbol)) {
    str = 'USDT'
  } else if (str) {
    const index = str.lastIndexOf(symbol)
    if (!state) {
      str = str.substring(0, index)
    } else {
      str = str.substring(index + 1, str.length)
    }
  }
  return str
}
/**
 * 传入剩余秒数的倒计时
 * @method countDown
 * @param {string | number} times 剩余秒数
 * @param {function} callback 回调函数
 * @returns {object} 回调函数返回值对象
 */
export const countDown = (times,callback) => {
  let timer = null
  timer = setInterval(() => {
    if(times > 0){
      let day = Math.floor(times / (60 * 60 * 24))
      let hour = Math.floor(times / (60 * 60)) - (day * 24)
      let minute = Math.floor(times / 60) - (day * 24 * 60) - (hour * 60)
      let second = Math.floor(times) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60)
      day = `${day < 10 ? '0' : ''}${day}`
      hour = `${hour < 10 ? '0' : ''}${hour}`
      minute = `${minute < 10 ? '0' : ''}${minute}`
      second = `${second < 10 ? '0' : ''}${second}`
      let obj = {
        day,
        hour,
        minute,
        second
      }
      callback(obj)
      times--
    }else{
      clearInterval(timer)
      callback(false)
    }
  }, 1000)
  if (times <= 0) {
    clearInterval(timer);
    callback(false)
  }
}
/**
 * 驼峰字符串格式化 (默认下划线)
 * @method decamelize
 * @param {string} string 目标字符串
 * @param {object} options 转化类型
 * @example
 * console.log(decamelize("minPriceOne"));  //min_price_one
 * console.log(decamelize("minPriceOne", { separator: '-' })); // min-price-one
 * @returns {string}
 */
export const decamelize = (str, options = {}) => {
  let separator = options.separator || '_'
  let split = options.split || /(?=[A-Z])/
  return str.split(split).join(separator).toLowerCase()
}
/**
 * 验证手机号
 * @method isPhone
 * @param {string | number} number 手机号码
 * @returns {Boolean}
 */
export const isPhone = (number) => {
  let reg = /^1[23456789]\d{9}$/
  return reg.test(number)
}
/**
 * 验证邮箱
 * @method isEmail
 * @param {string} email 邮箱地址
 * @returns {Boolean}
 */
export const isEmail = (email) => {
  let reg = /(^1[23456789]\d{9}$)|(^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/
  return reg.test(email)
}
/**
 * 验证是否url地址
 * @method isUrl
 * @param {string} url url地址
 * @returns {Boolean}
 */
export const isUrl = (url) => {
  return /^http[s]?:\/\/.*/.test(url)
}
/**
 * 验证是否函数
 * @method isFunction
 * @param {Function} func 函数
 * @returns {Boolean}
 */
export const isFunction = (func) => {
  return Object.prototype.toString.call(func).slice(8, -1) === 'Function'
}
/**
 * 8到20位密码验证（字母，数字，特殊符号任意两种组合）
 * @method isPassword
 * @param {string} password 密码
 * @returns {Boolean}
 */
export const isPassword = (password) => {
  let reg = /^(?![a-zA-z]+$)(?!\d+$)(?![!"#$%&'()*+,-./:;<=>?^_`\{|}~@]+$)[a-zA-Z\d!"#$%&'()*+,-./:;<=>?^_`\{|}~@]{8,20}$/
  return reg.test(password)
}
/**
 * 验证身份证号码
 * @method isIdCard
 * @param {string | number} str 身份证号
 * @returns {Boolean}
 */
export const isIdCard = (str) => {
  let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  return reg.test(str)
}
/**
 * 将时间戳转换成指定的日期格式
 * @method formatDate
 * @param {string | number} x 时间戳
 * @param {string}  y 指定格式 默认: 'yyyy-MM-dd hh:mm:ss'
 */
export const formatDate = (x, y = 'yyyy-MM-dd hh:mm:ss') => {
  if (!(x instanceof Date)) {
    let date = new Date()
    date.setTime(x * 1000)
    x = date
  }
  let z = {
    y: x.getFullYear(),
    M: x.getMonth() + 1,
    d: x.getDate(),
    h: x.getHours(),
    m: x.getMinutes(),
    s: x.getSeconds()
  };
  return y.replace(/(y+|M+|d+|h+|m+|s+)/g, function(v) {
    return ((v.length > 1 ? '0' : '') + eval('z.' + v.slice(-1))).slice(
      -(v.length > 2 ? v.length : 2)
    )
  })
}
/**
 * 将日期格式转换成时间戳
 * @method timeStamp
 * @param {string}  myDate 时间字符串
 * @returns {number}
 */
export const timeStamp = (myDate) => {
  let date = new Date(myDate)
  return date.getTime()/1000
}
/**
 * 格林尼治时间字符串转日期格式
 * @method formatDateGL
 * @param {string} myTimes 格林尼治时间
 * @returns {string}
 */
export const formatDateGL = (myTimes) => {
  let d = new Date(myTimes)
  let format =  d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
  return format
}
/**
 * 获取N天前的日期
 * @method getNday
 * @param {number}  n 几天前
 * @returns {string} eg: 'yyyy-MM-dd'
 */
export const getNday = (n) => {
  let date = new Date()
  let newDate = new Date(date.getTime() - n * 24 * 60 * 60 * 1000)
  let time = newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate()
  return time
}
/**
 * 获取浏览器环境
 * @method getEnvironmentInfo
 * @returns {boolean}
 * @example
 * getEnvironmentInfo().ios
 */
export const getEnvironmentInfo =() => {
  if (environmentInfo.inited) return environmentInfo
  environmentInfo.inited = true
  updateEnvironmentInfo()
  return environmentInfo
}
/**
 * 保留n位小数,不会进行四舍五入
 * @method toDecimal
 * @param {string | number } cnum 原数字
 * @param {number} decimal 保留位数
 */
export const toDecimal = (cnum, decimal) => {
  let value = String(cnum)
  if (value.indexOf('.') > 0) {
    let left = value.substr(0, value.indexOf('.'))
    let right = value.substr(value.indexOf('.') + 1, value.length)
    if (right.length > decimal) {
      right = right.substr(0, decimal)
    }
    value = left + '.' + right
    return value
  }else {
    return cnum
  }
}
/**
 * 获取小数点位数
 * @method getDecimal
 * @param {string | number } num 原数字
 * @returns {number}
 */
export const getDecimal = (num) => {
  return String(num).length - (String(num).indexOf('.') + 1)
}
/**
 * 科学计数法
 * @method science
 * @param {string | number } num 原数字
 * @returns {number}
 */
export const science = (num) => {
  if ((num + '').indexOf('E-') > -1 || (num + '').indexOf('e-') > -1) {
    var a = (num + '').indexOf('E-') > -1 ? (num + '').split('E-') : (num + '').split('e-'),
      b = a[0],
      c = parseInt(a[1]),
      d = [],
      i;
    for (i = 0; i < c - 1; i++) {
      d[i] = 0;
    }
    num = '0.' + d.join('') + (b * 100);
  }
  return num
}
/**
 * 数组对象排序 大到小 (结合sort方法使用)
 * @method maxSort
 * @param {string} prop 排序参数
 * @example
 * arr.sort(maxSort("age")) //根据key = "age" 做排序
 */
export const maxSort = (prop) => {
  return function (obj1, obj2) {
    let val1 = obj1[prop]
    let val2 = obj2[prop]
    if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
      val1 = Number(val1)
      val2 = Number(val2)
    }
    if (val1 > val2) {
      return -1
    } else if (val1 < val2) {
      return 1
    } else {
      return 0
    }
  }
}
/**
 * 数组对象排序 小到大
 * @method minSort
 * @param {string} prop 排序参数
 * @example
 * arr.sort(minSort("age")) //根据key = "age" 做排序
 */
export const minSort = (prop) => {
  return function (obj1, obj2) {
    let val1 = obj1[prop]
    let val2 = obj2[prop]
    if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
      val1 = Number(val1)
      val2 = Number(val2)
    }
    if (val1 < val2) {
      return -1
    } else if (val1 > val2) {
      return 1
    } else {
      return 0
    }
  }
}
/**
 * 下载api接口报表函数
 * @method downloadCSV
 * @param {string} url 下载地址
 * @param {object} params 参数
 */
export const downloadCSV = (url, params = {}) => {
  const finalUrl = `${url}?${encodeParams(params)}`
  const link = document.createElement('a')
  link.style.display = 'none'
  console.log(finalUrl)
  link.href = finalUrl
  link.setAttribute('download', '下载报表')
  document.body.appendChild(link)
  link.click()
}
/**
 * 千分位格式化
 * @method comdify
 * @param {number | string} num 格式化数字
 * @returns {string}
 */
export const comdify = (num) => {
  return num.toString().replace(/\d+/, (n) => {
    return n.replace(/(\d)(?=(\d{3})+$)/g, (v) => {
      return `${v},`
    })
  })
}
/**
 * 将base64图片转file文件
 * @method dataURLtoFile
 * @param {string} dataurl base64字符串
 * @param {string} filename 文件名
 * @returns {File}
 */
export const dataURLtoFile = (dataurl, filename) => {
  const arr = dataurl.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], filename, {
    type: mime
  })
}
/**
 * 将base64的图片转为Blob格式
 * @param {string} dataurl base64地址
 * @returns {Blob}
 */
export const dataURLtoBlob = (dataurl) => {
  let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
  bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime })
}
/**
 * 随机生成uuid
 * @returns {string}
 */
export const generateUUID = () => {
  let d = new Date().getTime()
  if (window.performance && typeof window.performance.now === 'function') {
    d += performance.now()
  }
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
  })
  return uuid
}
/**
 * 复制功能（iOS下某些版本不兼容）
 * @method Copy
 * @param {string | number} copyInfo 需要复制的内容
 */
export const Copy = (copyInfo) => {
  return new Promise((resolve, reject) => {
    let copyUrl = document.createElement('input')
    copyUrl.value = copyInfo
    let appDiv = document.querySelector('body')
    appDiv.appendChild(copyUrl)
    copyUrl.select()
    document.execCommand('Copy')
    copyUrl.remove()
    resolve(true)
  })
}
/**
 * 动态引入js文件
 * @method injectScript
 * @param {string} src js地址
 */
export const injectScript = (src) => {
  const s = document.createElement('script')
  s.type = 'text/javascript'
  s.async = true
  s.src = src
  const t = document.getElementsByTagName('script')[0]
  t.parentNode.insertBefore(s, t)
}
/**
 * 动态引入css文件
 * @method injectStyle
 * @param {string} url css地址
 */
export const injectStyleCSS = (url) => {
  try {
    document.createStyleSheet(url)
  } catch (e) {
    var cssLink = document.createElement('link')
    cssLink.rel = 'stylesheet'
    cssLink.type = 'text/css'
    cssLink.href = url
    var head = document.getElementsByTagName('head')[0]
    head.appendChild(cssLink)
  }
}
/**
 * 获取滚动的坐标
 * @method getScrollPosition
 * @param {HTMLDivElement | HTMLImageElement | HTMLCanvasElement} el 需要获取的元素
 */
export const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
})
/**
 * 滚动到顶部
 * @method scrollToTop
 */
export const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, c - c / 8)
  }
}
/**
 * 去除字符串中的空格
 * @param {string} str 待处理字符串
 * @param {number} type 1:所有空格 2:前后空格 3:前空格 4:后空格 默认1
 * @returns {string}
 */
export const trim = (str, type = 1) => {
  switch (type) {
    case 1:
      return str.replace(/\s+/g, '')
    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, '')
    case 3:
      return str.replace(/(^\s*)/g, '')
    case 4:
      return str.replace(/(\s*$)/g, '')
    default:
      return str
  }
}
/**
 * 字符转换
 * @param {string} str 待处理字符串
 * @param {number} type 1:首字母大写 2：首字母小写 3：大小写转换 4：全部大写 5：全部小写 默认4
 * @returns {string}
 */
export const changeCase = (str, type = 4) => {
  switch (type) {
    case 1:
      return str.replace(/\b\w+\b/g, function (word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
      })
    case 2:
      return str.replace(/\b\w+\b/g, function (word) {
        return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase()
      })
    case 3:
      return str.split('').map(function (word) {
        if (/[a-z]/.test(word)) {
          return word.toUpperCase()
        } else {
          return word.toLowerCase()
        }
      }).join('')
    case 4:
      return str.toUpperCase()
    case 5:
      return str.toLowerCase()
    default:
      return str
  }
}