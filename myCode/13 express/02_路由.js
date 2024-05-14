const express = require('express')

const app = express()

app.get('/',(req,res)=>{
  res.end('shouyeshouye')
})

//路由参数
app.get('/:id.html',(req,res)=>{
  console.log(req.params)
  console.log(req.params.id)
  res.setHeader('content-type', 'text/html;charset=utf-8') //不乱码
  res.end('商品详情')
})

app.get('/home',(req,res)=>{
  // console.log(req.url);
  res.end('home')
  console.log(req.headers);
  console.log(req.get('host')); // 获取指定的请求头
})

app.listen(3000,()=>{
  console.log('服务已经启动, 端口监听为 3000...');
})