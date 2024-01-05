require.config({
	paths:{
		"jquery":"../jquery-1.6.2.min",
	},
});


require(['jquery','./register'],function(jquery, register){
	$(function(){
		register.registerBtn();
    
	});
});