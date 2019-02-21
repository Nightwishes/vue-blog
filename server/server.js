
(async function() {
  const koa = require('koa');
  const path = require('path')
	const koaStaticCache = require('koa-static-cache');
  const { resolve } = require('path');
  const cors = require('koa-cors');
  const koaBody = require('koa-body')
  const loginRouter = require('./routers/loginRouter');
  const artcleRouter = require('./routers/artcleRouter')
  const viewsRouter = require('./routers/viewsRouter')
	const app = new koa();
	app.use(koaStaticCache(resolve(__dirname,'./public'), {
		prefix: '/public',
		gzip: true
  }));
  app.keys = ['xjhwyx', 'guoyiyang'];
  app.use(cors());
  app.use(koaBody({
    multipart: true,
    formidable: {
      uploadDir: path.join(__dirname, '/public/upload/'),
      keepExtensions: true,
      maxFieldsSize: 2 * 1024 * 1024
    }
  }))
  app.use(loginRouter.routes());
  app.use(artcleRouter.routes());
  app.use(viewsRouter.routes());
	// app.use(koaViews)
  app.listen(4000);
  console.log("app run at port 4000");
  
})()
