# vue-blog
一个基于Vue的个人博客，为了初学Vue和记录笔记而打造，后端还在学习开发中。

## 博客地址
四叶草的博客：www.luckyclover.top

觉得不错的点个star吧

## 小白教程

0. 安装[Node.js](https://nodejs.org/en/)

1. 下载代码，vscode打开根目录，终端执行

   ```
   npm install   //下载项目依赖
   ```

2. 本地调试（退出 Ctrl + C）

   ```
   npm start
   ```

3. 打包

   修改config/index.js下的两处

   ```
   assetsPublicPath: '/'
   ```

   改为

   ```
   assetsPublicPath: './'
   ```

   终端运行

   ```
   npm run build
   ```

4. 部署

   打开生成的dist目录，复制里面的内容到你的网站上即可

   

