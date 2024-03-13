 /**
  * 目标：基于FS模块读写文件内容
  * 1. 加载 fs 模块对象
  * 2. 写入文件内容
  * 3. 读取文件内容
  */

 const f = require('fs')
 // 写
 f.writeFile('./02test.txt','hello,node.js',err => {
  if (err) {
    console.log(err);
  } else {
    console.log('写入成功');
  }
 })

// 读
f.readFile('./02test.txt',(err, data) => {
  if(err) console.log(err);
  else {
    console.log(data); // 68 65 6c 6c 6f 2c 6e 6f 64 65 2e 6a 73>
    // data是文件内容的 Buffer数据流 （是字符串在 计算机中保存的二进制数据 转换成的十六进制数据）
    console.log(data.toString()); // hello,node.js
  } 
})