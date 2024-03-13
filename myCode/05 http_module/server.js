// 1. 加载 http 模块，创建 Web 服务对象
const h = require('http')
const server = h.createServer()

// 2. 监听 request 请求事件，设置响应头和响应体
server.on('request', (req, res) => {
  // 设置响应头: 内容类型 普通文本以及中文编码格式
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  // 设置响应体内容，结束本次请求与响应
  res.end('欢迎使用node.js和http模块创建的web服务')
})

// 3. 配置端口号并启动 Web 服务（一个web服务程序对应一个端口号）
server.listen(3000, () => {
  console.log('web服务启动成功');
})


// 4. 浏览器请求 http://localhost:3000 测试
