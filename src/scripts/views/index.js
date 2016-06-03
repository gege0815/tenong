var indexTpl = require('../tpl/index.string');
var IScroll = require('../lib/iscroll-probe.js');
var Swiper = require('../lib/swiper-3.3.1.min.js');

document.body.innerHTML += indexTpl;

window.onload = function () {
var myScroll = new IScroll('.container');
};

//----------banner图
var mySwiper = new Swiper('.swiper-container', {
	autoplay: 3000,//可选选项，自动滑动
	speed:800,
	loop:true,
})
