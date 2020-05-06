let Koa = require('koa')
let KoaRouter = require('koa-router');


const app = new Koa();
const router = new KoaRouter();


let demoData = require('./datas/demo');
//引入数据

router.get('/demo', (ctx, next) => {
  ctx.body = demoData
});


//主页推荐 对应数据
let indexListItem = require('./datas/index.json')
router.get('/indexListAction', (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set("Access-Control-Allow-Origin","*");
    //允许的header类型
  ctx.set("Access-Control-Allow-Headers","content-type");
  ctx.body = indexListItem
});

//分类右侧内容对应数据
let cateLists = require('./datas/cateLists.json')
router.get('/cateLists', (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.body = cateLists
});

//分类左侧导航数据
let cateNavDatas = require('./datas/cateNavDatas.json')
router.get('/cateNavDatas', (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.body = cateNavDatas
});

//主页模块nav横向滑块对应数据
let indexCateModule = require('./datas/indexCateModule.json')
router.get('/indexCateModule', (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.body = indexCateModule
});

//点击商品搜索
router.get('/searchList', async (ctx, next) => {
	// ctx.set('Access-Control-Allow-Origin', '*')
	let result = await fly.post('https://m.you.163.com/xhr/search/init.json')
	ctx.body = result.data
});

//主页推荐 对应数据
let indexList = require('./datas/index.json')
router.get('/getIndexList', (ctx, next) => {
  ctx.body = indexList.flashSaleModule.itemList
});

// 新品首发
let NewFirstList = require('./datas/index.json')
router.get('/getFirstList',(ctx,next) => {
  ctx.body = NewFirstList.newItemList
})

// 自营品牌
let AutarkyList = require('./datas/index.json')
router.get('/getAutarkyList',(ctx,next) => {
  ctx.body = AutarkyList.policyDescList
})
//推荐
let RecommendList = require('./datas/index.json')
router.get('/getRecommendList',(ctx,next) =>{
  ctx.body = RecommendList.categoryHotSellModule.categoryList
})

// 分类数据
let ClasserList = require('./datas/cateNavDatas.json')
router.get('/getClasserList',(ctx,next) =>{
  ctx.body = ClasserList.categoryL1List
})
// 左侧Id
let NavLeftList = require('./datas/cateNavDatas.json')
router.get('/getNavLeftList',(ctx,next) =>{
  ctx.body = NavLeftList
})


// 值得买中间swiper
let MisterList  = require('./datas/FeHelper.json')
router.get('/getMisterList',(ctx,next) => {
  ctx.body = MisterList
})

// 获取右侧图片列表
let CatListItem = require('./datas/cateLists.json')
router.get('/getCatListItem',(ctx,next) => {
  ctx.body = CatListItem
})

// newItemList
let indexNewList = require('./datas/index.json')
router.get('/getIndexNewList', (ctx, next) => {
  ctx.body = indexNewList.kingKongModule.kingKongList
});

// 懒加载图片数据
let ImgListItem = require('./datas/images.json')
router.get('/getImgListItem',(ctx,next) => {
  ctx.body = ImgListItem
})
// 登录信息
let getUserInfo = require('./datas/login.json')
router.get('/getListUserInfo',(ctx,next) => {
  ctx.body = getUserInfo
})
// 获取左侧信息
let getMenus = require('./datas/menusList.json')
router.get('/menus',(ctx,next) => {
  ctx.body = getMenus
})
// 获取用户管理信息
let getUserList = require('./datas/UserInfo.json')
router.get('/users',(ctx,next) => {
  ctx.body = getUserList
})
// 获取Welcome图片
let getImagese = require('./datas/Imgges.json')
router.get('/images',(ctx,next) => {
  ctx.body = getImagese
})

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen('4000', () => {
  console.log("服务器启动成功....")
  console.log('服务器地址: http://localhost:4000');
})
