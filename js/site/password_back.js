define(['jquery'], function (jquery) {

	var flag = true;          //下一步按钮   true输入用户名  false输入问题
	var userId;             //用户id
	var asw;                //答案
	var account;            //用户名
	//1.控制显示和隐藏
	$("#giveQuestion").css({ display: "none" });

	//2.用户名输入框检查
	$("#userName").blur(function () {
		if ($("#userName").val() == null || $("#userName").val() == "") {
			alert("请先输入用户名!");
			return;
		}
	});

	//答案输入框检查
	$("#answer").blur(function () {
		if ($("#answer").val() == null || $("#answer").val() == "") {
			alert("请输入答案!");
			return;
		}
	});

	//新密码输入框检查
	$("#newPwd").blur(function () {
		newPwdValidate();
	});
	//确认密码输入框检查
	$("#surePwd").blur(function () {
		surePwdValidate();
	});

	//验证密码的非空、长度、组成
	function validatePwd(labelId, showName) {
		var pwd = $("#" + labelId).val();
		if (pwd == null || pwd == "") {
			return "请输入" + showName + "!";
		}
		if (pwd.length < 6 || pwd.length > 12) {
			return "密码长度为6到12位!";
		}
		var reg = /^[0-9a-zA-Z]+$/;
		if (!reg.test(pwd)) {
			return "密码只能为数字和英文!";
		}
		return null;
	}

	//新密码验证
	function newPwdValidate() {
		var ms = validatePwd("newPwd", "新密码");
		if (ms == null) { //成功时隐藏信息
			$("#newPwd+div").css("display", "none");
			return true;
		}
		$("#newPwd+div").css("display", "block");
		$("#newPwd+div").html(ms);
		return false;
	}
	//确认密码验证
	function surePwdValidate() {
		//验证是否一致
		var surePwd = $("#surePwd").val();
		var newPwd = $("#newPwd").val();
		if (newPwd != surePwd) {
			$("#surePwd+div").css("display", "block");
			$("#surePwd+div").html("密码不一致!");
			return false;
		}
		//验证确认密码是否为空
		var ms = validatePwd("surePwd", "确认密码");
		$("#surePwd+div").css("display", "none");
		if (ms != null) { //成功时隐藏信息
			$("#surePwd+div").css("display", "block");
			$("#surePwd+div").html(ms);
			return false;
		}
		$("#surePwd+div").css("display", "none");
		return true;
	}

	//3.为下一步按钮绑定事件
	$("#nextOpt").click(function () {

		//判断输入的是用户名还是问题
		if (flag) {
			//用户名为空判断
			if ($("#userName").val() == null || $("#userName").val == "") {
				alert("请先输入用户名!");
				return;
			}
			//用户名是否正确   显示密码问题部分
			$.ajax({
				url: baseUrl + "user/getUserByAccount.do",
				type: "post",
				xhrFields: { withCredentials: true },//允许跨域请求携带cookie数据
				crossDomain: true,//跨域请求
				data: { account: $("#userName").val() },
				// headers: {
				// 	'Authorization': getCookie('Authorization'),
				// 	"content-type": "application/json;charset=UTF-8"
				// },
				success: function (data) {
					//成功时 数据加入页面  将参数附上数据
					if (data.status == 0) {
						$("#question").html(data.data.question);
						userId = data.data.id;
						asw = data.data.answer;
						$("#giveQuestion").css({ display: "block" });       //显示问题
						flag = false;
					} else {
						alert(data.msg);
					}
				}
			});
		} else {
			//输入问题  答案提交
			$.ajax({
				url: baseUrl + "user/checkuserasw.do  ",
				type: "post",
				xhrFields: { withCredentials: true },//允许跨域请求携带cookie数据
				crossDomain: true,//跨域请求
				data: {
					account: $("#userName").val(),
					question: $("#question").text(),
					asw: $("#answer").val()
				},
				// headers: {
				// 	'Authorization': getCookie('Authorization'),
				// 	"content-type": "application/json;charset=UTF-8"
				// },
				success: function (data) {
					//成功时 
					if (data.status == 0) {
						$("#validateUser").css({ display: "none" });       //隐藏验证身份
						$("#changePwd").css({ display: "block" });         //显示重置密码
						$("#changePwd").find("div").first().css("background-image", "url(images/common/wangjimima.png)");
						$("#changePwd p:eq(1)").css("color", "#fff");
						//清空用户名  答案
						$("#userName").val("");
						$("#question").val("");
					} else {
						alert(data.msg);
					}
				}
			});
		}

	});

	//4.重置密码
	$("#submitBtn").click(function () {
		//验证
		if (!newPwdValidate()) {
			return;
		}
		if (!surePwdValidate()) {
			return;
		}
		//向后台提交
		$.ajax({
			url: baseUrl + "user/resetpassword.do   ",
			type: "post",
			xhrFields: { withCredentials: true },//允许跨域请求携带cookie数据
			crossDomain: true,//跨域请求
			data: { "id": userId, "newPwd": $("#newPwd").val() },
			// headers: {
			// 	'Authorization': getCookie('Authorization'),
			// 	"content-type": "application/json;charset=UTF-8"
			// },
			success: function (data) {
				if (data.status == 0) {//修改成功
					alert(data.msg);
					$(window).attr("location", "login.html");
				}
			}
		});
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

});


