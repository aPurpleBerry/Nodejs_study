const baseURL = 'http://hmajax.itheima.net'
const getArraySum = arr => arr.reduce((sum, item) => sum += item, 0)


// 导出
export default {
  url: baseURL,
  arraySum: getArraySum
}