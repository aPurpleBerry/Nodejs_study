const express =require('express');
const app = express();

//1. 安装 cookie-parser npm i cookie-parser
//2. 引入 cookieParser 包
const cookieParser = require('cookie-parser');
//3. 设置 cookieParser 中间件
app.use(cookieParser());

//4-1 设置 cookie
app.get('/set-cookie', (request, response) => {
  // 不带时效性:关闭浏览器之后
  response.cookie('username','wangwu');
  // 带时效性
  response.cookie('email','12345678@qq.com', {maxAge: 60*1000 }); //max最大 age年龄，单位是毫秒 60*1000是一分钟
  //响应
  response.send('Cookie的设置');
});

//4-2 读取 cookie
app.get('/get-cookie', (request, response) => {
  //读取 cookie
  console.log(request.cookies);
  //响应体
  response.send('Cookie的读取');
});

//4-3 删除cookie
app.get('/delete-cookie', (request, response) => {
  //删除
  response.clearCookie('username');
  //响应
  response.send('cookie 的清除');
});


//4. 启动服务
app.listen(3000, () => {
  console.log('服务已经启动....');
});