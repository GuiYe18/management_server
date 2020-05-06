let Koa = require('koa')
let KoaRouter = require('koa-router');


const app = new Koa();
const router = new KoaRouter();


let demoData = require('./datas/demo.json');
let indexData = require('./datas/index.json');
let indexCateModuleData = require('./datas/indexCateModule.json');
let cateListsData = require('./datas/cateLists.json');
let cateNavDatasData = require('./datas/cateNavDatas.json');

router.get('/demo', (ctx, next) => {
  ctx.body = demoData
});

router.get('/index', (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin","*")
  ctx.body = indexData
});
router.get('/indexCateModule', (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin","*")
  ctx.body = indexCateModuleData
});
router.get('/cateLists', (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin","*")
  ctx.body = cateListsData
});
router.get('/cateNavDatas', (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin","*")
  ctx.body = cateNavDatasData
});

app
  .use(router.routes())
  .use(router.allowedMethods())



app.listen('4000', () => {
  console.log('服务器地址: http://localhost:4000');
})
