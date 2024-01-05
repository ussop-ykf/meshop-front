require.config({
	paths:{
		"jquery":"../jquery.min-1.11.3",
		"handlebar": "../handlebars-v4.0.11",
		"ChineseDistricts": "../jqueryDistpicker/distpicker.data",
		"distpicker": "../jqueryDistpicker/distpicker",
	},
	shim:  {
		'distpicker': ['jquery','ChineseDistricts'],
	}
});


require(['jquery','./common','handlebar','address_management'],function(jquery, common, handlebar, address_management){
	$(function(){
		//加载登录用户信息
		common.getUserInfo();
		//用户登出
		common.loginOut();
		
		address_management.ready();
	});
});