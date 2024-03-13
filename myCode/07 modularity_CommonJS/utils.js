const baseURL = 'http://hmajax.itheima.net'
const getArraySum = arr => arr.reduce((sum, item) => sum += item, 0)

// const getArraySum2 =  function (arr) {
//   return arr.reduce((sum,item) => sum + item ,0)
// }
// console.log(getArraySum([1,2,5]));
// console.log(getArraySum2([1,2,8]));

// 导出
module.exports = {
  url: baseURL,
  arraySum: getArraySum
}