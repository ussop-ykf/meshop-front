define(['./common'],function(common){
	var isAccountValidate=false;
	var isPasswordValidate=false;
	//1.失去光表时验证用户名
	function accountCheck(){
		$("#username").blur(function(){
			isAccountValidate=checkAccount();
		})
	}
	//2.失去光标时验证密码
	function passwordCheck(){
		$("#password_tmp").blur(function(){
			isPasswordValidate= checkPassword();
		})
	}
	
	//登录功能
	function loginBtn(){
		//创建单机时间
		$("#login_btn").click(function(){
			//判断验证信息
			//失败，返回信息
			if(!isAccountValidate){
				return checkAccount();
			}
			if (!isPasswordValidate) {
				return checkPassword();
			}
			//成功，进入接口
			$.ajax({
				url:baseUrl+"user/do_login.do",
				type:"post",
				data:{account:$("#username").val(), password:$("#password_tmp").val()},
				dataType: "json",
				xhrFields:{withCredentials:true},//允许跨域请求携带cookie数据
				crossDomain:true,//跨域请求
				success:function(data){

					// 判断是否成功
					if (data.status == 0) {
						setCookie('Authorization', data.data, 7);
						
						$(window).attr("location", "index.html")
					} else {
						$("#password-erro").css({display:"block"});
						$("#password-erro").html(data.msg);

					}
				}
			});
		})
	}
	return {
		accountCheck:accountCheck,
		passwordCheck:passwordCheck,
		loginBtn:loginBtn
	}
	//校验用户名
	function checkAccount(){
		//获取用户名
		var account = $("#username").val();
		$("#username-erro").css({display:"none"});
		if(account == ""){
			$("#username-erro").css({display:"block"});
			$("#username-erro").html("用户名不能为空");	
			return false
		}
		return true
	}
	function checkPassword(){
		
		var password = $("#password_tmp").val();
		$("#password-erro").css({display:"none"});
		if(password == ""){
			$("#password-erro").css({display:"block"});
			$("#password-erro").html("密码不能为空");
			return false;
		}
		return true;
	}

	
});


function getCookie(cname) {
	var name = cname + '=';
	var ca = document.cookie.split(';'); 
	for (var i = 0; i < ca.length; i++) {
		if (ca[i].indexOf(name) >= 0) {
		   return ca[i].split('=')[1];
		}
    }
		  return '';
}
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
	var expires = 'expires=' + d.toGMTString();
	document.cookie = cname + '=' + cvalue + ';' + expires;
}
 

