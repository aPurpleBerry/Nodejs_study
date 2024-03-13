// 导入utils软件包
const obj = require('./utils')
// 此时导入的是软件包，也就是文件夹，不是文件了，
// 他会自动找到utils文件夹下面的index.js
console.log(obj);