const express = require('express')

const app = express()

//静态资源中间件设置
app.use(express.static(__dirname+'/public'))

app.get('/home',(req,res)=>{
  // console.log(req.url);
  res.end('home')
})

app.listen(3000,()=>{
  console.log('服务已经启动, 端口监听为 3000...');
})