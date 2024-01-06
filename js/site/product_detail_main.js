require.config({
	paths:{
		"jquery": "../jquery-1.6.2.min",
            "jquery_SuperSlide": "../jquery.SuperSlide.2.1.1",
            "handlebar": "../handlebars-v4.0.11",
            "jquery_url": "../jquery.url",
	},
	shim:  {
		'jquery_SuperSlide':['jquery'],
		'jquery_url':['jquery'],
		}
});


require(['jquery','./common','handlebar','product_detail'],function(jquery, common, handlebar, product_detail){
	$(function(){
		// 加载登录用户信息
		common.getUserInfo();
		// 用户登出
		// common.loginOut();
		product_detail.ready();
	});
});