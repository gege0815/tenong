var tplGuide = require('../tpl/guide.string');

//定义一个视图
SPA.defineView('guide',{
	html:tplGuide,
	//添加插件
	plugins:['delegated'],
	//绑定事件
	bindActions:{
		'goto.index':function(){
			SPA.open('index');
			//种localstorage,引用框架
			SPA.util.storage('isVisited',true)  //看是否已访问过
		}
	},
	//给视图绑定事件
	bindEvents:{
		'boforeshow':function(){
//			console.log(Swiper);  看swiper是否成功被加载
			var guideSwiper = new Swiper('#guide-swiper',{
				loop:false
			})
		}
	}
})
