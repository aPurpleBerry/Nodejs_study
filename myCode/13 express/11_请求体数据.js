const express = require('express')
const app = express()
//引入中间件
const bodyParser = require('body-parser')
let urlParser = bodyParser.urlencoded({extended:false})

//客户端请求login界面的时候，把写好的11_form.html发给它
app.get('/login',(req,res)=>{
   res.sendFile(__dirname+'/11_form.html')
})

//客户端在login界面提交表单的时候，服务端接收
//利用中间件，body-parser，路由中间件处理之后，req身上会多出一个body参数
app.post('/login',urlParser,(req,res)=>{
  console.log('123');
  console.log(req.body);
  res.send('获取用户数据')
})

app.listen(3000,()=>{
  console.log('服务已经启动, 端口监听为 3000...');
})