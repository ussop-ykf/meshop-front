define(function(){
	function getParam(name){
		//构造一个含有目标参数的正则表达式对象
		var reg=new RegExp("(^|&)"+ name+"=([^&]*)(&|$)");
		//匹配目标参数
		var r=window.location.search.substr().match(reg);
		//返回参数值
		if(r !=null) return decodeURI(r[2]);return null;
	}
	function getUserInfo(){
		//向服务器请求数据
		$.ajax({
			url:baseUrl+"user/getuserinfo.do",
			xhrFields:{withCredentials:true},
			crossDomain:true,
			success:function(){
				// if(user.status==0){
					if(true){
					//隐藏登陆时的a标签
					$("#login").css({disply:"none"});
					$("#register").css({disply:"none"});
					//显示登陆后的a标签
					$("#loginName").css({disply:"block"});
					$("#retire").css({disply:"block"});
					//将用户名添加到对应位置
					$("#loginName").html("显示你的身份信息");
					$("#retire").html("退出");
					//获取用户购物车商品数量
					getCartCount();
				}
			}
		})
	}
	function getCarCount(){
		$.ajax({
			url:baseUrl+"cart/getcartcount.do",
			xhrFields:{withCredentials:true},
			crossDomain:true,
			success:function(){
				// if(user.status==0){
					if(true){
					//插入数据
					$("#car").html("["+9+"]")
					
				}
			}
		})
	}
	//用户登出
	function loginOut(){
		//给退出按钮挂上单机事件
		$("#retire").click(function(){
			$.ajax({
				url:baseUrl+"do_logout.do",
				xhrFields:{withCredentials:true},
				crossDomain:true,
				success:function(){
					// if(user.status==0){
						if(true){
						//显示登陆前的a标签
						$("#login").css({disply:"block"});
						$("#register").css({disply:"block"});
						//隐藏登陆后的a标签
						$("#loginName").css({disply:"none"});
						$("#retire").css({disply:"none"});
						//清空购物车数量
						$("#car").html("[0]")
					}
				}
			})
		})
	}
	return{
		getParam:getParam,
		getUserInfo:getUserInfo,
		getCarCount:getCarCount,
		loginOut:loginOut
	};
})