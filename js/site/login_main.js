require.config({
	paths:{
		"jquery":"../jquery-1.6.2.min",
	},
});


require(['jquery','./common','login'],function(jquery, common, login){
	$(function(){
		
      login.accountCheck();      //用户名验证
      login.passwordCheck();     //密码验证
      login.loginBtn();          //登录
		
	});
});