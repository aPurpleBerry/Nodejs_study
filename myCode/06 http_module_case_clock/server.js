const fs = require('fs')
const path = require('path')

// 基于http模块
const http = require('http');
// 创建服务器
const server = http.createServer()


// 服务器监听有没有请求
// req,request 意为请求. 是对请求报文的封装对象, 通过 request 对象可以获得请求报文的数据
// res,response 意为响应. 是对响应报文的封装对象, 通过 response 对象可以设置响应报文
server.on('request', (req, res) => {
  if(req.url === '/index.html') {
    // 返回该网址
    fs.readFile(path.join(__dirname, 'dist/index.html'), (err,data) =>{
      if(err) console.log(err);
      else {
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(data.toString())
      }
    })
  } else {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end('not found')
  }
})

// 配置端口号并启动 Web 服务
server.listen(8080, () => {
  console.log('web 服务器启动');
})
