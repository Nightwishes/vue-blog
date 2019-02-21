const koaRouter = require('koa-router')
const models = require('../shujuku/models')

let router = new koaRouter()

router.post('/artcle', async ctx => {
  console.log(ctx.request.body)
  // 查找有没有相同的标题的 可能是重复提交
  let {id, title, content, type} = ctx.request.body
  let findArt = await models.Article.findOne({
    where: {
      title: ctx.request.body.title
    }
  })
  if (findArt) {
    console.log(1)
    ctx.body = {
      code: 1,
      message: '已有相同标题的文章存在'
    }
    return
  }
  let artcle = models.Article.build({
    title,
    type,
    content,
    u_id: id
  })
  await artcle.save();
  ctx.body = {
    code: 0
  }
})
router.post('/artcleImage', async ctx => {
  console.log(ctx.request.files.image.path)
  let imageName = ctx.request.files.image.path.split('\\')
  console.log(imageName[imageName.length-1])
  ctx.body = {
    code: 0,
    url: `http://localhost:4000/public/upload/${imageName[imageName.length-1]}`
  }
})
router.get('/artcle', async ctx => {
  // 查找文章
  const LIMIT = 9
  let u_id = ctx.query.u_id
  let currentPage = ctx.query.currentPage
  let artcles = await models.Article.findAndCountAll({
    limit: LIMIT,
    offset: currentPage * LIMIT,
    where: {
      type: Number(JSON.parse(ctx.query.type)),
      u_id
    }
  })
  ctx.body = {
    code: 0,
    count: artcles.count,
    artcles: artcles.rows.map(item => {
      return {
        id: item.get('id'),
        u_id: item.get('u_id'),
        like_count: item.get('like_count'),
        title: item.get('title'),
        type: item.get('type')
      }
    })
  }
})
router.delete('/artcle', async ctx => {
  let artcle = await models.Article.findOne({
    where: {
      id: ctx.query.id
    }
  })
  if (artcle) {
    await artcle.destroy()
    ctx.body = {
      code: 0
    }
  } else {
    ctx.body = {
      code: 1
    }
  } 
})
router.get('/oneArtcle', async ctx => {
  let artcle = await models.Article.findOne({
    where: {
      id: ctx.query.id
    }
  })
  if (artcle) {
    ctx.body = {
      code: 0,
      artcle: {
        id: artcle.get('id'),
        u_id:artcle.get('u_id'),
        content: artcle.get('content'),
        title: artcle.get('title'),
        type: artcle.get('type')
      }
    }
  } else {
    ctx.body = {
      code: 1
    }
  }
})
module.exports = router