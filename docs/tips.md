一些知识点
==========

## ejs 实现页面布局复用
* [如何使用ejs创建可复用的head.html](https://segmentfault.com/q/1010000003003659)
* [ejs母版页让你的node.js应用开发更快更有效- 一介布衣](http://yijiebuyi.com/blog/08cf14e904325c19814465689453b3aa.html)

## `app.js` 配置
* 使用 `ejs` 模板：`app.set('view engine', 'jade');`
* 使用 `ejs` 模板，并使用 `.html` 后缀：`app.engine('.html', require('ejs').__express);app.set('view engine', 'html');`
* 使用 `ejs` && `ejs-mate`：`app.set('view engine', 'html');app.engine('html', require('ejs-mate'));app.locals._layoutFile = 'layout.html';`
* 
