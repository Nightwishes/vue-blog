const koaRouter = require('koa-router')
let router = new koaRouter()
let models = require('../shujuku/models')
router.get('/doc', async ctx => {
  let page = ctx.query.page
  console.log(page)
  const LIMIT = 8
  let artcles = await models.Article.findAndCountAll({
    order: [
      ['id', 'desc']
    ],
    limit: LIMIT,
    offset: page * LIMIT
  })
  ctx.body = {
    code: 0,
    artcles
  }
})
module.exports = router