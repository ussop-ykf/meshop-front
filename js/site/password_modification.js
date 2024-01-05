define(['jquery','./common'],function(jquery, common){
	function ready(){
		//当前密码失去焦点非空验证
		$("#now_password").blur(function(){
			var pwd=$("#now_password").val();
			if(pwd==null||pwd==""){
				$("#now_password+div").css("display","block");
				$("#now_password+div").html("当前密码不能为空");
			}else{
				$("#now_password+div").css("display","none");
			}
		});
	}
	
	 //新密码的非空验证（长度 字符）
	$("#new_password").blur(function(){
		var result=validatePwd("new_password");
		if(result!=null){    //判断显示结果
			$("#new_password+div").css("display","block");
			$("#new_password+div").html(result);
			return;
		}
		 $("#new_password+div").css("display","none");
		
	});
	
	//确认密码的非空验证（长度 字符）两次密码是否一致
	$("#password_confirmation").blur(function(){
		var result=validatePwd("password_confirmation");
		if(result!=null){    //判断显示结果
			$("#password_confirmation+div").css("display","block");
			$("#password_confirmation+div").html(result);
			return;
		}
		 //判断密码是否一致
		if($("#password_confirmation").val()!=$("#new_password").val()){
			$("#password_confirmation+div").css("display","block");
			$("#password_confirmation+div").html("两次密码不一致!");
			return;
		}
		$("#password_confirmation+div").css("display","none");
	});
	
	//验证密码的非空 长度  组成
	function validatePwd(labelId){
		var pwd=$("#"+labelId).val();
		//非空验证
		if(pwd==null||pwd==""){
			return"密码不能为空";
		}
		//长度验证
		if(pwd.length<6||pwd.length>12){
			return"密码长度为6到12位";
		}
		//组成验证
		 var reg=/^[0-9a-zA-Z]+$/;
		 if(!reg.test(pwd)){
			 return "密码只能为数字和英文";
		 }
		 return null;
	}
	
	//保存按钮事件
	$("#btnSave").click(function(){
		 $.ajax({
				url:baseUrl+"user/updatepassword.do ",
				type:"post",
				xhrFields:{withCredentials:true},//允许跨域请求携带cookie数据
				crossDomain:true,//跨域请求
				data:{"newpwd":$("#new_password").val(),
					  "oldpwd":$("#now_password").val()},
				success:function(data){
					alert(data.msg);
					if(data.status==0){
					  $(window).attr("location","login.html");
					}
				}
			});
	});
	
	
	return{
		ready:ready
	};
});