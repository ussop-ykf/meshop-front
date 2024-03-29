define(['jquery', './common'], function (jquery, common) {
	userData = "";
	function ready() {

		//显示当前用户信息
		showUser();
		//姓名非空验证
		$("#username").blur(function () {
			nullValidate("username", "姓名");
		});
		//年龄非空验证  范围  组成
		$("#age").blur(function () {
			if (nullValidate("age", "年龄")) {
				return;
			}
			var reg = /^[0-9]+.?[0-9]*$/;
			if (!reg.test($("#age").val())) {
				$("#age+div").css("display", "block");
				$("#age+div").html("年龄必须为数字!");
				return;
			}
			if ($("#age").val() < 0 || $("#age").val() > 120) {
				$("#age+div").html("年龄在0~120之间!");
				$("#age+div").css("display", "block");
				return;
			}
			$("#age+div").css("display", "none");
		});
		//电话验证非空  格式
		$("#phone").blur(function () {
			if (nullValidate("phone", "电话")) {
				return;
			}
			var phone = $("#phone").val();
			var reg = /^1[0-9]{10}$/;
			if (!reg.test(phone)) {
				$("#phone+div").css("display", "block");
				$("#phone+div").html("电话号码格式不正确!");
				return;
			}
			$("#phone+div").css("display", "none");
		});
		//email验证  非空  格式
		$("#email").blur(function () {
			if (nullValidate("email", "邮箱")) {
				return;
			}
			var email = $("#email").val();
			var reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
			if (!reg.test(email)) {
				$("#email+div").css("display", "block");
				$("#email+div").html("邮箱格式不正确!");

				return;
			}
			$("#email+div").css("display", "none");
		});

		//保存添加事件
		$("#btnSave").click(function () {
			//非空验证
			// if (nullValidate("userName", "姓名")) {
			// 	return;
			// }
			if (nullValidate("age", "年龄")) {
				return;
			}
			if (nullValidate("phone", "电话")) {
				return;
			}
			if (nullValidate("email", "邮箱")) {
				return;
			}
			var sex = '女';
			if ($("input[name='sex]:checked").val() == 1) {
				sex = '男';
			}
			//提交后台修改
			var formData = {
				account: $("#account").val(),
				name: $("#userName").val(),
				sex: $('input:radio:checked').val(),
				age: $("#age").val(),
				phone: $("#phone").val(),
				email: $("#email").val(),
				question: userData.data.question,
				asw: userData.data.asw
			};
			$.ajax({
				url: baseUrl + "user/updateuserinfo.do  ",
				type: "post",
				data: JSON.stringify(formData),
				// dataType: "json",
				// beforeSend: function (request) {
				// 	request.setRequestHeader('Authorization', getCookie('Authorization'));
				// },
				// beforeSend: function (request) {
				// 	request.setRequestHeader("Authorization", sessionStorage.getItem("Authorization"));
				// },
				crossDomain: true,
				xhrFields: { withCredentials: true },
				headers: {
					'Authorization': getCookie('Authorization'),
					"content-type": "application/json;charset=UTF-8"
				},
				success: function (rs) {
					alert(rs.msg);
				}
			});
		});

	}



	function showUser() {
		$.ajax({
			url: baseUrl + "user/getuserinfo.do",
			type: "get",
			// dataType: "json",
			// beforeSend: function (request) {
			// 	request.setRequestHeader('Authorization', getCookie('Authorization'));
			// },
			// beforeSend: function (request) {
			// 	request.setRequestHeader("Authorization", sessionStorage.getItem("Authorization"));
			// },
			crossDomain: true,
			xhrFields: { withCredentials: true },
			headers: {
				'Authorization': getCookie('Authorization')
			},
			success: function (rs) {
				if (rs.status == 0) {   //显示用户信息
					userData = rs;
					$("#account").val(rs.data.account);
					$("#userName").val(rs.data.name);
					$("#age").val(rs.data.age);
					$("#phone").val(rs.data.phone);
					$("#email").val(rs.data.email);
					if (rs.data.sex == 1) {
						$("input:radio[name='sex']").get(0).checked = true;   //男
					} else {
						$("input:radio[name='sex']").get(1).checked = true;   //女
					}
				} else {
					alert(rs.msg);
				}
			}
		});
	}

	//通用非空验证
	function nullValidate(labelId, msg) {
		if ($("#" + labelId).val() == null || $("#" + labelId).val() == "") {
			$("#" + labelId + "+div").css("display", "block");
			$("#" + labelId + "+div").html(msg + "不能为空!");
			return true;
		} else {
			$("#" + labelId + "+div").css("display", "none");
			return false;
		}
	}



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
	return {
		ready: ready
	};
});