define(['jquery', './common'], function (jquery, common) {


	//检查字段是否有效
	var isUserNameValidate = false;    //用户名是否有效
	var isUserPwdValidate = false;     //密码是否为空
	var isUserRePwdValidate = false;   //确认密码是否为空
	var isPwdValidate = false;         //密码是否一样
	var isEmailValidate = false;       //邮箱
	var isPhoneValidate = false;       //手机号
	var isQuestionValidate = false;    //密码提示问题是否有效
	var isAnswerValidate = false;      //提示回答是否有效
	var isAgeValidate = false;      //年龄是否有效
	var isSexValidate = false;      //年龄是否有效
	//1.检验用户名
	$("#username").blur(function () {
		isUserNameValidate = checkUserName("username");
	});
	function checkUserName(objId) {
		var userName = $("#username").val();
		$("#username-erro").css({ display: "none" });
		//验证用户名是否为空
		if (userName == "") {
			$("#usernameError").css({ display: "block" });
			$("#usernameError").html("请输入用户名!");

			return false;
		}
		//验证用户名长度
		if (userName.length < 5 || userName.length > 16) {
			$("#usernameError").css({ display: "block" });
			$("#usernameError").html("用户名长度错误!");
			return false;
		}
		//用户名是否规范
		var reg = /^[0-9a-zA-Z]+$/;
		var str = document.getElementById("username").value;
		if (!reg.test(str)) {
			$("#usernameError").html("用户名只能为数字和英文!");
			$("#usernameError").css({ display: "block" });

			return false;
		}
		//请求服务器验证用户名是否存在  同步
		var flag = false;
		$.ajax({
			url: baseUrl + "user/do_check_info.do?number=" + Math.random(),
			type: "post",
			data: { info: userName, type: "account" },
			async: false,
			crossDomain: true,//跨域请求
			xhrFields: { withCredentials: true },//允许跨域请求携带cookie数据
			success: function (rs) {
				//判断是否成功
				if (rs.status == 1) {//显示错误
					$("#usernameError").css({ display: "block" });
					$("#usernameError").html(rs.msg);
				} else {//隐藏错误
					$("#usernameError").css({ display: "none" });
					flag = true;
				}
			}
		});
		return flag;
	}

	//2.验证密码是否为空
	$("#password").blur(function () {

		isUserPwdValidate = checkUserPwd("password");
		//如果确认密码已经校验，则需校验二者是否相同
		if (isUserRePwdValidate) {
			isPwdValidate = checkPwdAndRePwd("password", "rePassword");
		}
	});
	//检查密码是否为空
	function checkUserPwd(objId) {
		var pwd = $("#" + objId).val();
		$("#userpasswordError").css({ display: "none" });
		//密码是否为空
		if (pwd == "") {
			$("#userpasswordError").css({ display: "block" });
			$("#userpasswordError").html("请输入密码!");
			return false;
		}
		//验证密码长度
		if (pwd.length < 6 || pwd.length > 12) {
			$("#userpasswordError").css({ display: "block" });
			$("#userpasswordError").html("密码长度错误!");
			return false;
		}
		//验证密码格式
		var reg = /^[0-9a-zA-Z]+$/;
		var str = document.getElementById("password").value;
		if (!reg.test(str)) {
			$("#userpasswordError").css({ display: "block" });
			$("#userpasswordError").html("密码只能为数字和英文!");
			return false;
		}
		return true;
	}

	//3.确认密码是否为空    两次密码是否一致
	$("#rePassword").blur(function () {
		isUserRePwdValidate = checkReUserPwd("rePassword");
		//如果确认密码已经校验，则需校验二者是否相同
		if (isUserPwdValidate && isUserRePwdValidate) {
			isPwdValidate = checkPwdAndRePwd("password", "rePassword");
		}
	});
	//检查确认密码是否为空
	function checkReUserPwd(reObjId) {
		var rePwd = $("#" + reObjId).val();
		$("#userpasswordError").css({ display: "none" });
		$("#repasswordError").css({ display: "none" });
		//密码是否为空
		if (rePwd == "") {
			$("#repasswordError").css({ display: "block" });
			$("#repasswordError").html("请输入确认密码!");
			return false;
		}
		return true;
	}
	//验证密码是否一致
	function checkPwdAndRePwd(objId, reobjId) {
		var pwd = $("#" + objId).val();
		var rePwd = $("#" + reobjId).val();
		$("#repasswordError").css({ display: "none" });
		if (!(pwd === rePwd)) {
			$("#repasswordError").css({ display: "block" });
			$("#repasswordError").html("两次密码不一致");
			return false;
		}
		return true;
	}

	//4.手机输入框验证
	$("#phone").blur(function () {
		isPhoneValidate = checkPhone("phone");
	});
	//验证手机号输入是否正确
	function checkPhone(objId) {
		var phone = $("#" + objId).val();
		$("#phoneError").css({ display: "none" });
		//手机号输入是否为空
		if (phone == "") {
			$("#phoneError").css({ display: "block" });
			$("#phoneError").html("请输入手机号!");
			return false;
		}
		//手机号格式验证
		var reg = /^1[0-9]{10}$/;
		var str = document.getElementById("phone").value;
		if (!reg.test(str)) {
			$("#phoneError").css({ display: "block" });
			$("#phoneError").html("请输入正确的手机号码!");
			return false;
		}
		return true;
	}

	//5.邮箱输入框验证
	$("#email").blur(function () {
		isEmailValidate = checkEmail("email");
	});
	//验证手机号输入是否正确
	function checkEmail(objId) {
		var email = $("#" + objId).val();
		$("#emailError").css({ display: "none" });
		//邮箱输入是否为空
		if (email == "") {
			$("#emailError").css({ display: "block" });
			$("#emailError").html("请输入邮箱!");
			return false;
		}
		//邮箱格式验证
		var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
		var str = document.getElementById("email").value;
		if (!reg.test(str)) {
			$("#emailError").css({ display: "block" });
			$("#emailError").html("邮箱格式错误!");
			return false;
		}
		return true;
	}

	//6.密码提示问题输入框验证
	$("#question").blur(function () {
		isQuestionValidate = checkQuestion("question");
	});
	//验证输入是否为空
	function checkQuestion(objId) {
		var question = $("#" + objId).val();
		$("#questionError").css({ display: "none" });
		if (question == "") {
			$("#questionError").css({ display: "block" });
			$("#questionError").html("请输入问题!");
			return false;
		}
		return true;
	}

	//7.密码提示答案输入框验证
	$("#answer").blur(function () {
		isAnswerValidate = checkAnswer("answer");
	});
	//验证输入是否为空
	function checkAnswer(objId) {
		var answer = $("#" + objId).val();
		$("#answerError").css({ display: "none" });
		if (answer == "") {
			$("#answerError").css({ display: "block" });
			$("#answerError").html("请输入提示答案!");
			return false;
		}
		return true;
	}
	//8.年龄输入框验证
	$("#age").blur(function () {
		isAgeValidate = checkAge("age");
	});
	//验证输入是否为空
	function checkAge(objId) {
		var age = $("#" + objId).val();
		$("#ageError").css({ display: "none" });
		if (age == "") {
			$("#ageError").css({ display: "block" });
			$("#ageError").html("请输入年龄!");
			return false;
		}
		return true;
	}
	$("input[name=sex]").click(function () {
		console.log($('input:radio:checked').val())
	});
	
	//8.点击注册功能
	function registerBtn() {
		$("#register_btn").click(function () {

			//验证校验结果
			if (!isUserNameValidate) {
				return checkUserName("username");
			}
			if (!isUserPwdValidate) {
				return checkUserPwd("password");
			}
			if (!isUserRePwdValidate) {
				return checkReUserPwd("rePassword");
			}
			if (!isPwdValidate) {
				return checkPwdAndRePwd("password", "rePassword");
			}
			if (!isPhoneValidate) {
				return checkPhone("phone");
			}
			if (!isEmailValidate) {
				return checkEmail("email");
			}
			if (!isQuestionValidate) {
				return checkQuetion("question");
			}
			if (!isAnswerValidate) {
				return checkAnswer("answer");
			}
			if (!isAgeValidate) {
				return checkAge("age");
			}
			
			//提交表单
			var formData = {
				account: $("#username").val(),
				password: $("#password").val(),
				email: $("#email").val(),
				phone: $("#phone").val(),
				question: $("#question").val(),
				asw: $("#answer").val(),
				age: $("#age").val(),
				sex: $('input:radio:checked').val()
			};
			console.log(formData)

			//请求服务器
			$.ajax({
				url: baseUrl + "user/do_register.do",
				type: "post",
				data: formData,
				success: function (data) {
					//判断是否成功
					if (data.status == 0) {//成功跳转
						alert(data.status);
						$(window).attr("location", "login.html");
					} else {//失败弹出提示
						alert(data.msg);
					}
				}
			});

		});
	}


	return {
		registerBtn: registerBtn
	};
});