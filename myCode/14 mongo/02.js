const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

//连接成功
mongoose.connection.once('open', () => {
  console.log('连接成功');

  let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    is_hot: Boolean,
  });

  let BookModel = mongoose.model('book', BookSchema);

  //插入文档-插入一条
  // BookModel.create({
  //   name: '西游记',
  //   author: '吴承恩',
  //   price: 19.9,
  //   is_hot: true,
  // }).then(doc=>{
  //   console.log(doc);
  //   mongoose.disconnect();
  // }).catch(err=>{
  //     throw err
  // })

  //批量插入
  // BookModel.insertMany([
  //   {
  //     name: '西游记',
  //     author: '吴承恩',
  //     price: 19.9,
  //     is_hot: true,
  //   },
  //   {
  //     name: '红楼梦',
  //     author: '曹雪芹',
  //     price: 20.1,
  //     is_hot: true,
  //   },
  //   {
  //     name: '代号鸢',
  //     author: '灵犀',
  //     price: 8.1,
  //     is_hot: false,
  //   }
  // ]).then(doc=>{
  //   console.log(doc);
  //   mongoose.disconnect();
  // }).catch(err=>{
  //     throw err
  // })

  //删除
// BookModel.deleteOne({_id:'6645ac91b649389db23b8113'}).then(doc=>{
//   console.log(doc);
//   console.log('删除成功');
//   mongoose.disconnect();
// }).catch(err=>{
//   throw err
// })

//更新
  // BookModel.updateOne({author:'灵犀'},{price:11.1}).then(doc=>{
  //   console.log(doc);
  //   console.log('修改成功');
  //   mongoose.disconnect();
  // }).catch(err=>{
    
  // })

  BookModel.find().then(doc=>{
    console.log(doc);
    mongoose.disconnect();
  }).catch(err=>{})

});

//连接出错
mongoose.connection.on('error', () => {
  console.log('连接出错~~');
})

//连接关闭
mongoose.connection.on('close', () => {
  console.log('连接关闭');
})