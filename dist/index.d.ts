/*
 * @Author: Siwen
 * @Date: 2020-06-15 14:28:47
 * @LastEditors: Siwen
 * @LastEditTime: 2020-06-17 11:01:42
 * @Description: ts声明文件
 */

/**
 * 防抖节流函数
 * @param {Function} func 需要节制的函数
 * @param {Number} delay  间隔时间
 * @param {Number} duration 超出时间
 * @param {Boolean} controlType 1防抖 0节流 默认1
 * @return Function
 */
export declare function control(method: Function, delay: number, duration: number, controlType?: boolean): Function
/**
 * 加法运算避免浮点数
 * @method accAdd
 * @param {string | number} arg1 数字1
 * @param {string | number} arg2 数字2
 * @returns {number}
 */
export declare function accAdd(arg1: string | number, arg2: string | number): number
/**
 * 减法运算避免浮点数
 * @method accSub
 * @param {string | number} arg1 数字1
 * @param {string | number} arg2 数字2
 * @returns {number}
 */
export declare function accSub(arg1: string | number, arg2: string | number): number
/**
 * 乘法运算避免浮点数
 * @method accMul
 * @param {string | number} arg1 数字1
 * @param {string | number} arg2 数字2
 * @returns {number}
 */
export declare function accMul(arg1: string | number, arg2: string | number): number
/**
 * 除法运算避免浮点数
 * @method accDiv
 * @param {string | number} arg1 数字1
 * @param {string | number} arg2 数字2
 * @returns {number}
 */
export declare function accDiv(arg1: string | number, arg2: string | number): number
/**获取cookie
 * @method getCookie
 * @param {string} name cookie名
 * @returns {string}
 */
export declare function getCookie(name: string): string
/**设置cookie
 * @method setCookie
 * @param {string} name cookie名
 * @param {string | number} value cookie值
 * @param {number} expiredays 过期时间/天 (默认1)
 */
export declare function setCookie(name: string, value:string | number, expiredays?: number): void
/**设置指定domain的cookie
 * @method setCookieWithDomain
 * @param {string} name cookie名
 * @param {string | number} value cookie值
 * @param {string} domain 指定的domain
 * @param {number} expiredays 过期时间/天 (默认1)
 */
export declare function setCookieWithDomain(name: string, value:string | number, domain: string, expiredays?: number): void
/**删除指定cookie
 * @method clearCookie
 * @param {string} name cookie名
 */
export declare function clearCookie(name: string): void
/**删除所有cookie */
export declare function deleteCookie(): void
/**获取url参数
 * @method getQueryString
 * @param {string} name 需要获取的参数名
 * @returns {string}
 */
export declare function getQueryString(name: string): string
/**
 * 获取url中"?"符后的字符串并转化为对象
 * @method getParamsObj
 * @returns {object}
 */
export declare function getParamsObj(): Object
/**
 * 拼接对象为请求字符串
 * @method encodeParams
 * @param {Object} obj 待拼接的对象
 * @param {boolean} isCode 类似中文是否需要编码,默认需要
 * @returns {string} 拼接成的请求字符串
 */
export declare function encodeParams(obj: Object, isCode?: boolean): string
/**
 * 获取字符串指定符号前后的内容
 * @method getCaption
 * @param {string} str 字符串
 * @param {string} symbol 指定符号
 * @param {boolean} state 指定符号前:0 还是后:1 (默认1)
 * @returns {string}
 */
export declare function getStringSymbl(str: string, symbol: string, state?: boolean): string
/**
 * 传入剩余秒数的倒计时
 * @method countDown
 * @param {string | number} times 剩余秒数
 * @param {function} callback 回调函数
 * @returns {object} 回调函数返回值对象
 */
export declare function countDown(times: string | number, callback: Function): Object
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
export declare function decamelize(str: string, options: object): string
/**
 * 验证手机号
 * @method isPhone
 * @param {string | number} number 手机号码
 * @returns {Boolean}
 */
export declare function isPhone(number: string | number): boolean
/**
 * 验证邮箱
 * @method isEmail
 * @param {string} email 邮箱地址
 * @returns {Boolean}
 */
export declare function isEmail(email: string): boolean
/**
 * 验证是否url地址
 * @method isUrl
 * @param {string} url url地址
 * @returns {Boolean}
 */
export declare function isUrl(url: string): boolean
/**
 * 验证是否函数
 * @method isFunction
 * @param {Function} func 函数
 * @returns {Boolean}
 */
export declare function isFunction(func: Function): boolean
/**
 * 8到20位密码验证（字母，数字，特殊符号任意两种组合）
 * @method isPassword
 * @param {string} password 密码
 * @returns {Boolean}
 */
export declare function isPassword(password: string): boolean
/**
 * 验证身份证号码
 * @method isIdCard
 * @param {string | number} str 身份证号
 * @returns {Boolean}
 */
export declare function isIdCard(str: string | number): boolean
/**
 * 将时间戳转换成指定的日期格式
 * @method formatDate
 * @param {string | number} x 时间戳
 * @param {string}  y 指定格式 默认: 'yyyy-MM-dd hh:mm:ss'
 */
export declare function formatDate(x: string | number, y: string): String
/**
 * 将日期格式转换成时间戳
 * @method timeStamp
 * @param {string}  myDate 时间字符串
 * @returns {number}
 */
export declare function timeStamp(myDate: string): number
/**
 * 格林尼治时间字符串转日期格式
 * @method formatDateGL
 * @param {string} myTimes 格林尼治时间
 * @returns {string}
 */
export declare function formatDateGL(myTimes: string): string
/**
 * 获取N天前的日期
 * @method getNday
 * @param {number}  n 几天前
 * @returns {string} eg: 'yyyy-MM-dd'
 */
export declare function getNday(n: number): string
/**
 * 获取浏览器环境
 * @method getEnvironmentInfo
 * @returns {boolean}
 * @example
 * getEnvironmentInfo().ios
 */
export declare function getEnvironmentInfo(): boolean
/**
 * 保留n位小数,不会进行四舍五入
 * @method toDecimal
 * @param {string | number } cnum 原数字
 * @param {number} decimal 保留位数
 */
export declare function toDecimal(cnum: string | number, decimal: number): string
/**
 * 获取小数点位数
 * @method getDecimal
 * @param {string | number } num 原数字
 * @returns {number}
 */
export declare function getDecimal(num: string | number): number
/**
 * 科学计数法
 * @method science
 * @param {string | number } num 原数字
 * @returns {number}
 */
export declare function science(num: string | number): number
/**
 * 数组对象排序 大到小 (结合sort方法使用)
 * @method maxSort
 * @param {string} prop 排序参数
 * @example
 * arr.sort(maxSort("age")) //根据key = "age" 做排序
 */
export declare function maxSort(prop: string): any
/**
 * 数组对象排序 小到大 (结合sort方法使用)
 * @method minSort
 * @param {string} prop 排序参数
 * @example
 * arr.sort(minSort("age")) //根据key = "age" 做排序
 */
export declare function minSort(prop: string): any
/**
 * 下载api接口报表函数
 * @method downloadCSV
 * @param {string} url 下载地址
 * @param {object} params 参数
 */
export declare function downloadCSV(url: string, params?: Object): void
/**
 * 千分位格式化
 * @method comdify
 * @param {number | string} num 格式化数字
 * @returns {string}
 */
export declare function comdify(num: string | number): string
/**
 * 将base64图片转file文件
 * @method dataURLtoFile
 * @param {string} dataurl base64字符串
 * @param {string} filename 文件名
 * @returns {File}
 */
export declare function dataURLtoFile(dataurl: string, filename: string): File
/**
 * 将base64的图片转为Blob格式
 * @param {string} dataurl base64地址
 * @returns {Blob}
 */
export declare function dataURLtoBlob(dataurl: string): Blob
/**
 * 随机生成uuid
 * @returns {string}
 */
export declare function generateUUID(): string
/**
 * 复制功能（iOS下某些版本不兼容）
 * @method Copy
 * @param {string | number} copyInfo 需要复制的内容
 */
export declare function Copy(copyInfo: string | number): any
/**
 * 动态引入js文件
 * @method injectScript
 * @param {string} src js地址
 */
export declare function injectScript(src: string): void
/**
 * 动态引入css文件
 * @method injectStyle
 * @param {string} url css地址
 */
export declare function injectStyleCSS(src: string): void
/**
 * 获取滚动的坐标
 * @method getScrollPosition
 * @param {any} el 需要获取的元素
 */
export declare function getScrollPosition(el?: any): Object
/**
 * 滚动到顶部
 * @method scrollToTop
 * @returns {void}
 */
export declare function scrollToTop(): void
/**
 * 去除字符串中的空格
 * @method trim
 * @param {string} str 待处理字符串
 * @param {number} type 1-所有空格 2-前后空格 3-前空格 4-后空格 默认1
 * @returns {string}
 */
export declare function trim(str: string, type?: number): string
/**
 * 字符转换
 * @method changeCase
 * @param {string} str 待处理字符串
 * @param {number} type 1:首字母大写 2：首字母小写 3：大小写转换 4：全部大写 5：全部小写 默认4
 * @returns {string}
 */
export declare function changeCase(str: string, type?: number): string