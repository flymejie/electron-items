/* 操作端路由分配 */
var express = require('express');
var router = express.Router();


var socketio = require('../socket/socketIo');

// 产品JSON文件
var productJson = require('../public/Json/language');


/* GET index page. */
router.get('/', function (req, res, next) {
  res.render('./show/index', {title: '展示端视频展示'});
});

/* home page*/
router.get('/home', function (req, res, next) {
  res.render('./show/home', {title: '通信home展示端展示'});
});

/* cate page */
router.get('/productCate', function (req, res, next) {
  res.render('./show/cate', {
    title: productJson[global.langNum].title[0],
    proListJson: productJson[global.langNum].product,
    proType: "product"
  });
});


router.get('/product', function (req, res, next) {
  res.render('./show/product', {
    title: '通信产品体系展示端产品分类',
    proListJson: productJson[global.langNum].product,
    leftTopImg: productJson[global.langNum].title,
    proType: "product"
  });
});


router.get('/product/:list', function (req, res, next) {
  let dataType = req.params.list.split(':')[1];
  console.log(dataType);
  res.render('./show/list', {
    title: '通信产品体系展示端产品',
    proListJson: productJson[global.langNum][dataType.split('&&')[0]][dataType.split('&&')[1]]
  });
});

///////  产品列表页数据
router.get('/product/:list/:num', function (req, res, next) {
  let dataType = req.params.list.split(':')[1];
  let numIndex = req.params.num.split(':')[1];
  /// 传参 product --> [0] --> .list --> [0]
  console.log(dataType, numIndex);
  res.render('./show/productList', {
    title: '通信产品体系展示端产品列表页',
    proListJson: productJson[global.langNum][dataType.split('&&')[0]][dataType.split('&&')[1]].list[numIndex],
    proRouter: req.params.list + '/' + req.params.num
  });
});
///// 产品介绍页  根据位置传产品详情
router.get('/product/:list/:num/:index', function (req, res, next) {
  let dataType = req.params.list.split(':')[1];
  let numIndex = req.params.num.split(':')[1];
  let Index = req.params.index.split(':')[1];
  /// 传参 product --> [0] --> .list --> [0]
  console.log(dataType, numIndex);
  res.render('./show/details', {
    title: '通信产品体系展示端产品详情页',
    proListJson: JSON.stringify(productJson[global.langNum][dataType.split('&&')[0]][dataType.split('&&')[1]].list[numIndex].proList[Index]),
    proRouter: req.params.list + '/' + req.params.num + '/' + req.params.index
  });
});

///// 产品介绍页  根据位置传产品详情
router.get('/productModel', function (req, res, next) {
  res.render('./show/model', {
    title: '通信产品体系展示端模型加载页'
  });
});

////// 通信解决方案
router.get('/planCate', function (req, res, next) {
  /////  解决方案
  res.render('./show/cate', {
    title: productJson[global.langNum].title[1],
    proListJson: productJson[global.langNum].plan,
    proType: "plan"
  });
});

router.get('/plan', function (req, res, next) {
  res.render('./show/plan', {
    title: '通信解决方案展示端产品分类',
    proListJson: productJson[global.langNum].plan,
    leftTopImg: productJson[global.langNum].title,
    proType: "plan"
  });
});


router.get('/plan/:list', function (req, res, next) {
  let dataType = req.params.list.split(':')[1];
  console.log(dataType);
  res.render('./show/planlist', {
    title: '通信产品体系展示端产品',
    proListJson: productJson[global.langNum][dataType.split('&&')[0]][dataType.split('&&')[1]]
  });
});


module.exports = router;
