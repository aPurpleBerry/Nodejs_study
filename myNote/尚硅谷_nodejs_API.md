# 接口

## 介绍

接口是 前后端通信的桥梁

简单理解：一个接口就是 服务端中的一个路由规则 ，根据请求响应结果，这个响应数据一般是JSON格式。

接口的英文单词是 API (Application Program Interface)，所以有时也称之为 API 接口

这里的接口指的是『数据接口』， 与编程语言（Java，Go 等）中的接口语法不同

## 开发与调用

大多数接口都是由 后端工程师 开发的， 开发语言不限

一般情况下接口都是由 前端工程师 调用的，但有时 后端工程师也会调用接口 ，比如短信接口，支付接口等

## 接口的组成

- **一个接口一般由如下几个部分组成：**

请求方法

接口地址（URL）

请求参数

响应结果

- 一个接口示例 **https://www.free-api.com/doc/325**

## RESTful API

RESTful API 是一种特殊风格的接口，主要特点有如下几个：

- URL 中的路径表示 资源 ，路径中不能有 动词 ，例如 create , delete , update 等这些都不能有

- 操作资源要与 HTTP 请求方法 对应

- 操作结果要与 HTTP 响应状态码 对应

![image-20240517102114113](img/image-20240517102114113.png)

## json-server工具

json-server 本身是一个 JS 编写的工具包，可以快速搭建 RESTful API 服务

> 官方地址: **https://github.com/typicode/json-server**



- **操作步骤：**

1. 全局安装 json-server

   > npm i -g json-server

2. 创建 JSON文件

   ```json
   {
   	"song": [
   		{ "id": 1, "name": "干杯", "singer": "五月天" },
   		{ "id": 2, "name": "当", "singer": "动力火车" },
   		{ "id": 3, "name": "不能说的秘密", "singer": "周杰伦" }
   	]
   }
   ```

3. 以 JSON 文件所在文件夹作为工作目录 ，执行如下命令

   > json-server --watch db.json

4. 默认监听端口为 3000

## 接口测试工具

apipost **https://www.apipost.cn/** (中文)

apifox **https://www.apifox.cn/** (中文)

postman **https://www.postman.com/** (英文)

> 可以用来测试 JSON-server接口