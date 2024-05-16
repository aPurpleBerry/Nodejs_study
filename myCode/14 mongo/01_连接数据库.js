//1. 安装 mongoose
// npm i Mongoose 

//2. 导入 mongoose
const mongoose = require('mongoose');

//3. 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

//4. 设置连接回调
//连接成功
mongoose.connection.on('open', () => {
  console.log('连接成功');

  //5. 创建文档结构对象
    //约束集合中文档的属性一级属性值的类型
  let BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number,
    is_hot: Boolean,
    tags: Array,
    pub_time: Date
  });

  //6. 创建文档模型对象
    // book是集合名称 
  let BookModel = mongoose.model('book', BookSchema);

  //7. 插入文档
  BookModel.create({
    title: '西游记',
    author: '吴承恩',
    price: 19.9,
    is_hot: true,
    tags: ['悬疑','社会','励志'],
    pub_time: new Date()
  }).then(doc=>{
    //输出 data 对象
    console.log(doc);
    //8. 断开连接
    mongoose.disconnect();
  }).catch(err=>{
      throw err
  })
});

//连接出错
mongoose.connection.on('error', () => {
  console.log('连接出错~~');
})

//连接关闭
mongoose.connection.on('close', () => {
  console.log('连接关闭');
})