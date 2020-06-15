/*
 * @Author: Siwen
 * @Date: 2020-06-15 14:28:47
 * @LastEditors: Siwen
 * @LastEditTime: 2020-06-15 14:57:50
 * @Description: ts声明文件
 */
declare function control(method: Function, delay: number, duration: number, controlType?: boolean): Function
declare function accAdd(arg1: string | number, arg2: string | number): number
declare function accSub(arg1: string | number, arg2: string | number): number
declare function accMul(arg1: string | number, arg2: string | number): number
declare function accDiv(arg1: string | number, arg2: string | number): number
declare function getCookie(name: string): string
declare function setCookie(name: string, value:string | number, expiredays?: number): void
declare function setCookieWithDomain(name: string, value:string | number, domain: string, expiredays?: number): void
declare function clearCookie(name: string): void
declare function deleteCookie(): void
declare function getQueryString(name: string): string
declare function getParamsObj(): Object
declare function encodeParams(obj: Object, isCode?: boolean): string
declare function getStringSymbl(str: string, symbol: string, state?: boolean): string
declare function countDown(times: string | number, callback: Function): Object
declare function decamelize(str: string, options: object): string
declare function isPhone(number: string | number): boolean
declare function isEmail(email: string): boolean
declare function isPassword(password: string): boolean
declare function isIdCard(str: string | number): boolean
declare function formatDate(x: string | number, y: string): String
declare function timeStamp(myDate: string): number
declare function formatDateGL(myTimes: string): string
declare function getNday(n: number): string
declare function getEnvironmentInfo(): boolean
declare function toDecimal(cnum: string | number, decimal: number): string
declare function getDecimal(num: string | number): number
declare function science(num: string | number): number
declare function maxSort(prop: string): any
declare function minSort(prop: string): any
declare function downloadCSV(url: string, params?: Object): void
declare function comdify(num: string | number): string
declare function dataURLtoFile(dataurl: string, filename: string): File
declare function dataURLtoBlob(dataurl: string): Blob
declare function generateUUID(): string