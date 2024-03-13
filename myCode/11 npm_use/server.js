/**
 * 1. 初始化清单文件 ：npm init -y（得到 package.json 文件，用于记录当前项目下载过哪些软件包，有则略过此命令）
 * 2. 下载软件包 ：npm i 软件包名称
 * 3. 使用软件包
 */

const dayjs = require('dayjs')
const nowDateStr = dayjs().format('YYYY-MM-DD') // dayjs()返回一个对象
console.log(nowDateStr);