/**
 * JS 加、减、乘、除运算避免浮点数
 * @param {string | number} arg1 数字1
 * @param {string | number} arg2 数字2
 */
export const accAdd = (arg1,arg2) => {
  let r1,r2,m;  
  try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
  try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
  m=Math.pow(10,Math.max(r1,r2))
  return (arg1*m+arg2*m)/m
}
export const accSub = (arg1,arg2) => {
  let r1,r2,m,n;
  try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
  try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
  m=Math.pow(10,Math.max(r1,r2));
  n=(r1>=r2)?r1:r2;
  return ((arg1*m-arg2*m)/m).toFixed(n);
}
export const accMul = (arg1,arg2) => {
  let m=0,s1=arg1.toString(),s2=arg2.toString();
  try{m+=s1.split(".")[1].length}catch(e){}
  try{m+=s2.split(".")[1].length}catch(e){}
  return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)
}
export const accDiv = (arg1,arg2) => {
  let t1=0,t2=0,r1,r2;
  try{t1=arg1.toString().split(".")[1].length}catch(e){}
  try{t2=arg2.toString().split(".")[1].length}catch(e){}
  r1=Number(arg1.toString().replace(".",""))
  r2=Number(arg2.toString().replace(".",""))
  return (r1/r2)*Math.pow(10,t2-t1);
}
/**
 * 传入剩余秒数的倒计时 
 * @param {string} times 剩余秒数
 * @param {function} callback 回调函数
 */
export const countDown = (times,callback) => {
  let timer = null;
  timer = setInterval(() => {
    if(times > 0){
      let day = Math.floor(times / (60 * 60 * 24));
      let hour = Math.floor(times / (60 * 60)) - (day * 24);
      let minute = Math.floor(times / 60) - (day * 24 * 60) - (hour * 60);
      let second = Math.floor(times) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
      day = `${day < 10 ? '0' : ''}${day}`;
      hour = `${hour < 10 ? '0' : ''}${hour}`;
      minute = `${minute < 10 ? '0' : ''}${minute}`;
      second = `${second < 10 ? '0' : ''}${second}`;
      callback(`${minute}:${second}`)
      times--;
    }else{
      clearInterval(timer);
      callback(false)
    }
  }, 1000);
  if (times <= 0) {
    clearInterval(timer);
    callback(false)
  }
}
/**
 * 驼峰字符串格式化 (默认下划线)
 * @param {srting} string 目标字符串
 * @param {object} options 转化类型
 */
export const decamelize = (string, options = {}) => {
  let separator = options.separator || '_';
  let split = options.split || /(?=[A-Z])/;
  return string.split(split).join(separator).toLowerCase();
}
// console.log(decamelize("minPriceOne"));  //min_price_one
// console.log(decamelize("minPriceOne", { separator: '-' })); // min-price-one

/**
 * 验证手机号
 * @param {srting | number} number 手机号码
 */
export const isPhone = (number) => {
  let reg = /^1[3456789]\d{9}$/;
  return reg.test(number);
}

/**
 * 验证邮箱
 * @param {srting | number} str 邮箱地址
 */
export const isEmail = (str) => {
  let reg = /(^1[3456789]\d{9}$)|(^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/;
  return reg.test(str);
}

/**
 * 验证手机号或者邮箱
 * @param {srting | number} str 邮箱地址或手机号码
 */
export const isPhoneEmail = (str) => {
  let reg = /(^1[3456789]\d{9}$)|(^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/;
  return reg.test(str);
}

/**
 * 8到20位密码验证（字母，数字，特殊符号任意两种组合）
 * @param {srting} num 密码
 */
export const isPassword = (num) => {
  let reg = /^(?![a-zA-z]+$)(?!\d+$)(?![!"#$%&'()*+,-./:;<=>?^_`\{|}~@]+$)[a-zA-Z\d!"#$%&'()*+,-./:;<=>?^_`\{|}~@]{8,20}$/;
  // let reg = /^(?![a-zA-z]+$)(?!\d+$)(?![_#@.]+$)[a-zA-Z\d_#@.]{8,20}$/;
  return reg.test(num);
}


/**
 * 验证身份证号码
 * @param {srting | number} str 身份证号
 */
export const isNumberId = (str) => {
  // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
  let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(str);
}

/**
 * 将时间戳转换成指定的日期格式
 * @param {srting | number} x 时间戳
 * @param {srting}  y 指定格式 eg: 'yyyy-MM-dd hh:mm:ss'
 */
export const formatDate = (x,y) => {
  if (!(x instanceof Date)) {
    let date = new Date();
    date.setTime(x * 1000);
    x = date;
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
    return ((v.length > 1 ? "0" : "") + eval("z." + v.slice(-1))).slice(
      -(v.length > 2 ? v.length : 2)
    );
  });
}

/**
 * 将日期格式转换成时间戳
 * @param {srting}  myDate 时间字符串
 */
export const timeStamp = (myDate) => {
  let date = new Date(myDate);
  return date.getTime()/1000;
}

/**
 * 格林尼治时间字符串转时间字符串
 * @param {string} myTimes 格林尼治时间
 */
export const formatDateGL = (myTimes) => {
  let d = new Date(myTimes);
  let format =  d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(); 
  return this.timeStamp(format)
};

/**
 * 获取N天前的日期
 * @param {srting}  n 几天前
 */
export const getNday = (n) => {
  let date = new Date();
  let newDate = new Date(date.getTime() - n * 24 * 60 * 60 * 1000);
  let time = newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate();
  return time;
}

/**
 * 是否是微信环境
 */
export const inWeixin = () => {
  let ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("micromessenger") != -1;
};
/**
 * 是否是安卓环境
 */
export const isAndroid = () => {
  let ua = navigator.userAgent;
  return ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;
};
/**
 * 是否是iOS环境
 */
export const isiOS = () => {
  let ua = navigator.userAgent;
  return !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
};

/**
 * 获取指定cookie
 * @param {srting}  key cookie名
 */
export const getCookie = (key) => {
  let arr,
      reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
    if ((arr = document.cookie.match(reg))) return decodeURI(arr[2]);
    else return null;
}
/**
 * 设置cookie
 * @param {srting}  key cookie名
 * @param {srting}  value cookie值
 * @param {srting}  expiredays cookie有效时间
 */
export const setCookie = (key,value,expiredays) => {
  let exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = `${key}=${escape(value)};expires=${exdate.toGMTString()};domain=${document.domain};path=/`
}
/**
 * 删除指定cookie
 * @param {srting}  key cookie名
 */
export const clearCookie = (key) => {
  let exp = new Date();
  exp.setTime(exp.getTime() - 1);
  let cval = getCookie(key);
  if (cval != null){
    document.cookie = `${key}=${cval};expires=${exdate.toGMTString()};domain=${document.domain};path=/`
  }
}
/**
 * 删除所有cookie
 */
export const clearCookie = () => {
  let keys = document.cookie.match(/[^ =;]+(?=\=)/g);
  if (keys) {
    for (var i = keys.length; i--; )
      document.cookie = `${keys[i]}=0;expires=${new Date(0).toUTCString()};domain=${document.domain};path=/`
  }
}
/**
 * 获取url参数
 * @param {srting}  key 参数名
 */
export const GetQueryString = (key) => {
  let reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
  let r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

/**
 * 拼接对象为请求字符串
 * @param {Object} obj 待拼接的对象
 * @returns {string} 拼接成的请求字符串
 */
export const encodeParams = (obj) => {
  let params = [];
  Object.keys(obj).forEach(function(key) {
    let value = obj[key];
    // 如果值为undefined我们将其置空
    if (typeof value === "undefined") {
      value = "";
    }
    if (typeof value === "object") {
      value = JSON.stringify(value);
    }
    // 对于需要编码的文本（比如说中文）我们要进行编码
    params.push([key, encodeURIComponent(value)].join("="));
  });
  return params.join("&");
}
/**
 * 获取url中"?"符后的字符串并转化为对象
 */
export const GetRequest = () => {
  let url = location.search;
  let theRequest = new Object();
  if (url.indexOf("?") != -1) {
    let str = url.substr(1);
    strs = str.split("&");
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
  }
  return theRequest;
}

/**
 * 保留n位小数,不会进行四舍五入
 * @param {string | number } cnum 原数字
 * @param {string | number } cindex 保留位数
 */
export const toDecimal = (cnum,cindex) => {
  let value = String(cnum);
  if (value.indexOf(".") > 0) {
    let left = value.substr(0, value.indexOf("."));
    let right = value.substr(value.indexOf(".") + 1, value.length);
    if (right.length > cindex) {
      right = right.substr(0, cindex);
    }
    value = left + "." + right;
    return value;
  }else {
    return cnum;
  }
}

/**
 * 获取小数点位数
 * @param {string | number } num 原数字
 */
export const decimalLength = (num) => {
  return String(num).length - (String(num).indexOf('.') + 1);
}

/**
 * 科学计数法
 * @param {string | number } num 原数字
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
 * 数组对象排序 大到小 eg:arr.sort(maxSort("age")) //根据key = "age" 做排序
 * @param {string } prop 排序条件
 */
export const maxSort = (prop) => {
  return function (obj1, obj2) {
    let val1 = obj1[prop];
    let val2 = obj2[prop];
    if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
      val1 = Number(val1);
      val2 = Number(val2);
    }
    if (val1 > val2) {
      return -1;
    } else if (val1 < val2) {
      return 1;
    } else {
      return 0;
    }
  } 
}
/**
 * 数组对象排序 小到大 eg:arr.sort(minSort("age"))//根据key = "age" 做排序
 * @param {string } prop 排序条件
 */
export const maxSort = (prop) => {
  return function (obj1, obj2) {
    let val1 = obj1[prop];
    let val2 = obj2[prop];
    if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
      val1 = Number(val1);
      val2 = Number(val2);
    }
    if (val1 < val2) {
      return -1;
    } else if (val1 > val2) {
      return 1;
    } else {
      return 0;
    }
  } 
}

/**
 * 数字千分位格式化
 * @param {string | number} num 数字
 */
export const comdify = (num) => {
  return num.toString().replace(/\d+/, function (n) { // 先提取整数部分
    return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) { // 对整数部分添加分隔符
        return $1 + ",";
    });
  });
}

/**
 * 将base64的图片转为Blob格式
 * @param {string} dataurl base64地址
 */
export const dataURLtoBlob = (dataurl) => {
  let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
  bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}
/**
 * 将base64图片转file文件
 * @param {string} dataurl base64地址
 * @param {string} filename 
 */
export const dataURLtoFile = (dataurl, filename) => {
  let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
  bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while(n--){
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, {type:mime});
}

/**
 * 复制功能（iOS下某些版本不兼容）
 * @param {string} copyInfo 需要复制的内容
 */
export const Copy = (copyInfo) => {
  return new Promise((resolve, reject) => {
    let copyUrl = document.createElement("input");//创建一个input框获取需要复制的文本内容
    copyUrl.value = copyInfo;
    let appDiv = document.getElementById('app');
    appDiv.appendChild(copyUrl); 
    copyUrl.select();
    document.execCommand("Copy");
    copyUrl.remove()
    resolve(true);
  })
}
/**
 * 随机生成uuid
 */
export const generateUUID = () => {
  let d = new Date().getTime();
  if (window.performance && typeof window.performance.now === "function") {
      d += performance.now();
  }
  let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      let r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
};


