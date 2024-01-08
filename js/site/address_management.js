define(['jquery', 'ChineseDistricts', 'distpicker', 'handlebar', './common'], function (jquery, distpicker_data, distpicker, Handlebars, common) {
	var aId = null;  //地址id，通过它判断修改/保存
	//注册helper   默认地址和设置默认地址
	Handlebars.registerHelper("state", function (default_addr, id) {
		//判断是否默认地址绑定对应的按钮
		if (default_addr == 1) {
			return new Handlebars.SafeString("<div addr_id=" + id + " class='t_default'>默认地址</div>");
		}
		return new Handlebars.SafeString('<button class="btn_default"  addr_id=' + id + '   style="background:#fff;border:none;">设为默认</button');
	});

	function ready() {
		//1.设置三级联动不选中
		$("#distpicker1").distpicker("destroy");
		$("#distpicker1").distpicker({
			//动态赋值
			autoSelect: false
		});

		//2.显示所有地址信息
		showAddressInfo();
		//3.设置默认地址事件绑定
		$("#address_container").on("click", '.btn_default', function () {
			//获得地址id
			var addrId = $(this).attr("addr_id");
			//向服务器发送请求
			$.ajax({
				url: baseUrl + "addr/setdefault.do",
				xhrFields: { withCredentials: true },
				crossDomain: true,
				data: { 'id': addrId },
				type: "get",
				headers: {
					'Authorization': getCookie('Authorization'),
					// "content-type": "application/json;charset=UTF-8"
				},
				success: function (rs) {
					// fillAddress(rs.data);
					updatePageInfo(rs);

				}
			});
		});

		//4.修改事件绑定
		$("#address_container").on("click", ".addr_update", function () {
			var addrId = $(this).attr("addr_id");
			$.ajax({
				url: baseUrl + "addr/findAddressById.do  ",
				xhrFields: { withCredentials: true },
				crossDomain: true,
				data: { 'id': addrId },
				type: "post",
				headers: {
					'Authorization': getCookie('Authorization'),
					// "content-type": "application/json;charset=UTF-8"
				},
				success: function (rs) {
					aId = rs.data.id;
					//数据返回成功  信息添加到页面中
					fillAddress(rs.data);
					// updatePageInfo(rs);

				}
			});
		});

		//5.删除事件绑定
		$("#address_container").on("click", ".addr_del", function () {
			var result = confirm("要删除该地址吗？");
			if (!result) {
				return;
			}
			var addrId = $(this).attr("addr_id");
			$.ajax({
				url: baseUrl + "addr/deladdr.do",
				xhrFields: { withCredentials: true },
				crossDomain: true,
				data: { 'id': addrId },
				type: "get",
				headers: {
					'Authorization': getCookie('Authorization'),
					// "content-type": "application/json;charset=UTF-8"
				},
				success: function (rs) {
					//数据返回成功  信息添加到页面中
					updatePageInfo(rs);
				}
			});
		});

		//6.保存按钮
		$("#btnSave").click(function () {
			//验证
			if (!validate()) {
				return;
			}
			//提取数据 提交后台
			// var formData = {
			// 	name: $("#consignee").val(),
			// 	moblie: $("#phone").val(),
			// 	province: $("#eprovinceName").find("option:selected").text(),
			// 	city: $("#ecityName").find("option:selected").text(),
			// 	district: $("#edistrictName").find("option:selected").text(),
			// 	zip: $("#zip").val(),
			// 	addr: $("#detailAddr").val(),
			// 	aid: aId
			// };
			//判断aId（修改/保存）
			var addrId = null;
			if (aId != null) {
				addrId = aId;
				aId = null;
			}
			$.ajax({
				url: baseUrl + "addr/saveaddr.do ",
				xhrFields: { withCredentials: true },
				crossDomain: true,
				type: "post",
				data: {
					name: $("#consignee").val(),
					mobile: $("#phone").val(),
					province: $("#eprovinceName").find("option:selected").text(),
					city: $("#ecityName").find("option:selected").text(),
					district: $("#edistrictName").find("option:selected").text(),
					zip: $("#zip").val(),
					addr: $("#detailAddr").val(),
					addrId: addrId
				},
				headers: {
					'Authorization': getCookie('Authorization'),
					// "content-type": "application/json;charset=UTF-8"
				},
				success: function (rs) {
					updatePageInfo(rs);   //更新页面信息
					clearAddress();       //清空地址信息
				}
			});

		});
	}



	function showAddressInfo() {       //显示所有地址信息
		$.ajax({
			url: baseUrl + "addr/findaddrs.do",
			xhrFields: { withCredentials: true },
			crossDomain: true,
			headers: {
				'Authorization': getCookie('Authorization'),
				// "content-type": "application/json;charset=UTF-8"
			},
			success: function (rs) {
				updatePageInfo(rs);   //更新页面信息
			}
		});
	}

	function updatePageInfo(rs) {     //更新页面信息





		if (rs.status == 0) {
			$("#address_container").html();
			var tpl = $("#address_tpl").html();
			var func = Handlebars.compile(tpl);
			var result = func(rs.data);
			$("#address_container").html(result);
		} else {
			$("window").attr("location", "login.html");
		}
	}

	function fillAddress(data) {       //获得地址信息填充标签显示

		//填充省份市区 
		$("#distpicker1").distpicker("destroy");   //销毁实例
		$("#distpicker1").distpicker({
			province: data.province,
			city: data.city,
			district: data.district
		});
		//填充其他信息
		$("#detailAddr").val(data.addr);
		$("#zip").val(data.zip);
		$("#consignee").val(data.name);
		$("#phone").val(data.mobile);


	}

	function validate() {      //字段验证
		var province = $("#eprovinceName").find("option:selected").attr("data-code");
		if (province == null || province == "") {
			alert("请选择省份!");
			return false;
		}
		var city = $("#ecityName").find("option:selected").attr("data-code");
		if (city == null || city == "") {
			alert("请选择城市!");
			return false;
		}
		var district = $("#edistrictName").find("option:selected").attr("data-code");
		if (district == null || district == "") {
			alert("请选择区!");
			return false;
		}
		var detail = $("#detailAddr").val();
		if (detail == null || detail == "") {
			alert("请输入详细地址信息!");
			return false;
		}
		var zip = $("#zip").val();
		if (zip == null || zip == "") {
			alert("请输入邮编地址!");
			return false;
		}
		if (zip != null && zip != "") {
			var reg = /^[0-9]{6}$/;
			if (!reg.test(zip)) {
				alert("请输入正确格式的邮编地址!");
				return false;
			}
		}
		var name = $("#consignee").val();
		if (name == null || name == "") {
			alert("请输入收货人姓名!");
			return false;
		}
		var phone = $("#phone").val();
		if (name == null || name == "") {
			alert("请输入收货人电话!");
			return false;
		}
		var reg = /^1[0-9]{10}$/;
		if (!reg.test(phone)) {
			alert("请输入正确格式的手机号码!");
			return false;
		}
		return true;
	}

	function clearAddress() {    //清空地址信息
		//恢复省市区 默认值
		$("#distpicker1").distpicker("destroy");
		$("#distpicker1").distpicker({
			//动态赋值
			autoSelect: false
		});
		//填充其他
		$("#detailAddr").val('');
		$("#zip").val('');
		$("#consignee").val('');
		$("#phone").val('');
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