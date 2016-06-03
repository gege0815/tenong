require('./lib/spa.min.js');
require('./lib/swiper-3.3.1.min.js');


require('./views/index.js');
require('./views/guide.js');


// 配置视图的信息
var indexView = SPA.util.storage('isVisited') ? 'index' : 'guide';  //判断是否访问过，如果访问过为true，进入index页面，没有进入guide页面

SPA.config({
  indexView: indexView   //第一个界面的入口
});