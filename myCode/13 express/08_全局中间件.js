const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')

//中间件函数
let recordMiddleware = function(req,res,next){
  //实现功能代码
  let {url, ip} = req 
  fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url}, ${ip}\r\n`)
  //执行next函数(当如果希望执行完中间件函数之后，仍然继续执行路由中的回调函数，必须调用next)
  next();
}

//使用中间件
app.use(recordMiddleware)

app.get('/home',(req,res)=>{
  res.setHeader('content-type', 'text/html;charset=utf-8') //不乱码
  res.end('全局中间件1')
})


app.get('/',(req,res)=>{
  res.setHeader('content-type', 'text/html;charset=utf-8') //不乱码
  res.end('全局中间件2')
})

app.listen(3000,()=>{
  console.log('服务已经启动, 端口监听为 3000...');
})