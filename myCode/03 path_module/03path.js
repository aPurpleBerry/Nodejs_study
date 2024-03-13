const path = require('path')
console.log(__dirname);

const f = require('fs')
f.writeFile(path.join(__dirname,'./03test.txt'),'444444',err => {
 if (err) {
   console.log(err);
 } else {
   console.log('写入成功');
 }
})

// const f = require('fs')
// f.writeFile('./03test.txt','333333333',err => {
//  if (err) {
//    console.log(err);
//  } else {
//    console.log('写入成功');
//  }
// })