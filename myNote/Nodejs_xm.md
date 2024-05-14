> 跟着BV1cV4y1B7P4视频学习node



# npm

安装node 会自动同步安装 npm  npx

## npm init

- 在一个空文件夹中执行 npm init

**package.json**

```json
{
  "name": "xm",
  "version": "1.0.0",
  "description": "studywithxm",
  "main": "index.js",                  //入口文件
  "scripts": {                         //执行命令 运行脚本  通过【npm run+命令】执行
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "asferfed"
  },
  "author": "aPurpleBerry",
  "license": "ISC"
}
```



version

主版本号：重大的更新或者重大的改动 Vue2 Vue3 ；次版本号功能的更新编译宏3.1.e；修订号fix bug

## npm i

**npm i+ vue**之后，

① 根目录会多出一个文件夹node+modules

② 多出一个文件package-lock.json

③ package.json这里多出一个 dependencies



 **npm i vue --save --dev**：

--save在高版本中几乎可以不使用

package.json这里的 dependencies变成 devDependencies

- dependencies && devDependencies && peerDependencies

devDependencies 开发的依赖  【npm i 包名 --save -dev】【简写npm i 包名 -D】比如webpack生产环境不需要

dependencies 生产环境需要的依赖 vue vuex vue-router

peerDependencies 用的少，给编写插件人员

## 其他重要命令

1. `npm config list` 用于列出所有的 npm 配置信息。执行该命令可以查看当前系统和用户级别的所有 npm 配置信息，以及当前项目的配置信息（如果在项目目录下执行该命令）

2. `npm get registry` 用于获取当前 npm 配置中的 registry 配置项的值。registry 配置项用于指定 npm 包的下载地址，如果未指定，则默认使用 npm 官方的包注册表地址

3.  `npm config set registry <registry-url>` 命令，将 registry 配置项的值修改为指定的 `<registry-url>` 地址

4. `npm install -g <package-name>`：全局安装指定的包。

   

   