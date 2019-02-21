const koaRouter = require('koa-router');
const models = require('../shujuku/models');

let router = new koaRouter();

router.get('/login', async ctx => {
  let data = await models.users.findOne({
    where: {
      username: ctx.query.username
    }
  })
  if (data) {
    ctx.body = {
      code: 0,
      data: {
        id: data.get('id'),
        username: data.get('username')
      }
    }
  } else {
    ctx.body = {
      code: 1
    }
  }
})
module.exports = router;
