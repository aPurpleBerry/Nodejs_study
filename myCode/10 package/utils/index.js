// 本文件是 utils工具包的唯一出口
// 作用：把所有工具模块方法集中起来,统一向外暴露


const {getArraySum} = require('./lib/arr.js') 
// 使用了对象解构，并简写了
// const {getArraySum :getArraySum} = require('./lib/arr.js') 

const {checkUser,checkPwd} = require('./lib/str.js') 

// 同意导出
module.exports = {
  getArraySum,
  checkUser,
  checkPwd
}