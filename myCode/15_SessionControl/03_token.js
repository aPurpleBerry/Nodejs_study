//导入 jsonwebtokan
const jwt = require('jsonwebtoken');

//创建 token
// jwt.sign(数据, 加密字符串, 配置对象) 三个参数
let token = jwt.sign(
  { username: 'zhangsan'},  
  'atguigu', 
  {expiresIn: 60 }//单位是 秒
)

//解析 token
jwt.verify(token, 'atguigu', (err, data) => {
  if(err){
    console.log('校验失败~~');
    return
  }
  console.log(data);
})