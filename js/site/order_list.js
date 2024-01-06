define(['jquery', './common', 'handlebar'], function (jquery, common, Handlebars) {
	var status = 0;         //订单状态
	var pageNum = 1;        //当前页
	var pageSize = 10;       //一页的数量
	function ready() {
		//点击全部订单 待付款 待收货事件
		$(".nav_item").live("click", function () {
			//获取位置及订单状态
			status = $(this).attr("data-status");
			//清除选中样式
			$(".nav_item").removeClass("on");
			//添加点击标签选中样式
			$(this).addClass("on");
			//获取订单信息
			pageNum = 1;
			getOrders(status, pageNum, pageSize);
		});

		//绑定分页点击事件
		$(".btn_prev").click(function () {
			//获取上一页页码
			pageNum = $(".btn_prev").attr("data-page");   //当前页
			getOrders(status, pageNum, pageSize);
		});
		$(".btn_next").click(function () {
			//获取上一页页码
			pageNum = $(".btn_next").attr("data-page");   //当前页
			getOrders(status, pageNum, pageSize);
		});

		//确认收货
		$(".confirm_receipt").live("click", function () {
			//获取订单号
			var orderNo = $(this).attr("data-orderno");
			//向服务器发送请求
			$.ajax({
				url: baseUrl + "order/confirmreceipt.do  ",
				xhrFields: { withCredentials: true },
				crossDomain: true,
				data: { 'orderNo': orderNo },
				type: "post",
				success: function (rs) {
					if (rs.status == 0) {
						alert(rs.msg);
						$(window).attr("location", "order_list.html");
					} else {
						alert(rs.msg);
					}
				}
			});
		});

		//获取订单列表
		// getOrders(1, 1, 10, function () {
		// 	getOrders(3, 1, 10, function () {
		// 		getOrders(0, 1, 10, null);
		// 	})
		// })
		getOrders();
	}

	//单击搜索
	$("#searchBtn").click(function () {
		var proName = $("#keywod").val();
		$(window).attr("location", "product_search.html?name=" + proName);
	});

	//获取订单列表
	function getOrders(status, pageNum, pageSize, callBack) { //callBack回调函数
		$.ajax({
			url: baseUrl + "order/getlist.do",
			xhrFields: { withCredentials: true },
			crossDomain: true,
			type: "get",
			// data: { 'status': status, 'pageNum': pageNum, 'pageSize': pageSize },
			headers: {
				'Authorization': getCookie('Authorization')
			},
			success: function (rs) {
				if (rs.status == 0) {
					updataOrderInfo(rs);
					//内容嵌入
					// $("#order_list_container").html();
					// var tpl = $("#order-item-tpl").html();
					// var func = Handlebars.compile(tpl);
					// var result = func(rs.data.data);
					// $("#order_list_container").html(result);   //将结果添加到页面上
					// //处理分页显示
					// $(".btn_prev").attr("data-page", rs.data.prePage);
					// $(".btn_next").attr("data-page", rs.data.nextPage);
					// $("#page_num").attr("data-page-num", rs.data.pageNum);
					// $("#page_num").html(rs.data.pageNum);
					// $("#page_count").html("共" + rs.data.totalPage + "页");
					// //各种状态的订单数量显示
					// if (status == 0) {  //全部订单
					// 	$("#all_num").html("(" + rs.data.totalRecord + ")");
					// 	//修改立即付款按钮(除未付款)
					// 	$(".page_order" + 3).html("查看订单");
					// 	$(".page_order" + 4).html("查看订单");
					// 	$(".page_order" + 6).html("查看订单");
					// }
					// if (status == 1) {  //待付款
					// 	$("#no_pay_num").html("(" + rs.data.totalRecord + ")");
					// }
					// if (status == 3) {  //待收货
					// 	$("#unshipped_num").html("(" + rs.data.totalRecord + ")");
					// 	//清除立即付款  显示确认收货
					// 	$(".page_order" + 3).remove();
					// 	$(".confirm_receipt").attr("style", "display:block");
					// }
					// //调用回调函数
					// if (callBack) callBack();
				}
			}
		});
	}

	function updataOrderInfo(rs) {
		if (rs.status == 0) {
			var tpl = $("#order-item-tpl").html();
			var func = Handlebars.compile(tpl);
			var result = func(rs.data);
			$("#order_list_container").html(result);
		} else {
			$("window").attr("location", "login.html");
		}
		// if (rs.status == 0) {
		// 	$("#address_container").html();
		// 	var tpl = $("#address_tpl").html();
		// 	var func = Handlebars.compile(tpl);
		// 	var result = func(rs.data);
		// 	$("#address_container").html(result);
		// } else {
		// 	$("window").attr("location", "login.html");
		// }


		// if (rs.status == 0) {
		// 	//判断购物车是否存在商品
		// 	if (rs.data.lists.length == 0) {
		// 		$("#cart-empty").css("display", "block");
		// 		$("#cart-container").css("display", "none");
		// 	} else {
		// 		$("#cart-empty").css("display", "none");
		// 		$("#cart-container").css("display", "block");
		// 		//更新购物车列表
		// 		$("#cart-item-container").html();
		// 		var tpl = $("#cart-item-tpl").html();
		// 		var func = Handlebars.compile(tpl);
		// 		var result = func(rs.data.lists);
		// 		$("#cart-item-container").html(result);
		// 		//更新购物车总价格
		// 		console.log(rs.data.totalPrice);
		// 		$("#amount").html("￥" + rs.data.totalPrice);
		// 		//更新复选框状态
		// 		for (var i = 0; i < rs.data.lists.length; i++) {
		// 			if (rs.data.lists[i].checked == 1) {
		// 				$(".pro00>input").get(i).checked = true;
		// 			}
		// 		}
		// 		//判断是否反选
		// 		checkList();
		// 	}
		// } else {
		// 	//未登录直接跳转登录页面
		// 	$(window).attr("location", "login.html");
		// }
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