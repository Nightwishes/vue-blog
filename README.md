# vue-bolg
这是一个vue和koa构建的博客,学习了vue和一些些后端知识后，我就迫不及待跃跃欲试的想搭建一个属于自己的博客,一开始以为很简单吧。但真正做起来之后才发觉要考虑的东西真的太多了
- 首先就是数据库的设计
> 数据库设计没有考虑好，所以后面我想多做一些功能也因为字段的原因只能放弃了
- 前后台接口的设计
- 前端展示是否合理
> 因为都是我自己一个做的，所以页面的UI也是我自己设计的（巨丑）,曾全删了重新写过了一次css
## 总结
1. 很直观的感觉就是做项目代码真的是其次，对整个项目的工程化构建还有步骤的设计都是非常重要。这些没做好都会造成自己负担.
2. 还有一点就是对于框架的使用真的要很完全的了解它的设计理念，还有它的API有哪些,我在这个项目中因为没有使用slot而绕了很大的弯子，做完之后才发现我要的功能用slot真方便就解决了
3. 最后一点就是还是要注重于原生毕竟框架只是工具.

-本人虽愚钝但从未停止学习。 性格开朗，随和。希望能得到一份实习。大佬们带带我吧O(∩_∩)O哈哈~ tel：18950679123-
### 项目浏览 

![img1](https://github.com/Nightwishes/vue-bolg/blob/master/show/3.png)
![img1](https://github.com/Nightwishes/vue-bolg/blob/master/show/2.png)
![img1](https://github.com/Nightwishes/vue-bolg/blob/master/show/1.png)
### 执行一下操作开启项目
<br/> git clone 项目地址
<br/> cd client npm i
<br/> cd server npm i
<br/>cd shujuku
 <br/>npm i sequelize-cli
<br/> cd shujuku
<br/> npx sequelize db:create
<br/> npx sequelize db:migrate

