require.config({
	paths:{
		"jquery":"../jquery-1.6.2.min",
		"handlebar": "../handlebars-v4.0.11",
	},
});


require(['jquery','./common','handlebar','order_list'],function(jquery, common, handlebar, order_list){
	$(function(){
		//加载登录用户信息
		common.getUserInfo();
		//用户登出
		common.loginOut();
		
	    order_list.ready();
		
	});
});