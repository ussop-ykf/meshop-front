define(['jquery','./common','handlebar'],function(jquery, common, Handlebars){
	var status=0;         //订单状态
	var pageNum=1;        //当前页
	var pageSize=10;       //一页的数量
	function ready(){
		//点击全部订单 待付款 待收货事件
		$(".nav_item").live("click",function(){
			//获取位置及订单状态
			status=$(this).attr("data-status");
			//清除选中样式
			$(".nav_item").removeClass("on");
			//添加点击标签选中样式
			$(this).addClass("on");
			//获取订单信息
			pageNum=1;
			getOrders(status,pageNum,pageSize);
		});
		
		//绑定分页点击事件
		$(".btn_prev").click(function(){
			//获取上一页页码
		    pageNum=$(".btn_prev").attr("data-page");   //当前页
		    getOrders(status,pageNum,pageSize);
		});
		$(".btn_next").click(function(){
			//获取上一页页码
		    pageNum=$(".btn_next").attr("data-page");   //当前页
		    getOrders(status,pageNum,pageSize);
		});
		
		//确认收货
		$(".confirm_receipt").live("click",function(){
			//获取订单号
			var orderNo=$(this).attr("data-orderno");
			//向服务器发送请求
			$.ajax({
				url:baseUrl+"order/confirmreceipt.do  ",
				xhrFields:{withCredentials:true},
				crossDomain:true,
				data:{'orderNo':orderNo},
			    type:"post",
				success:function(rs){
					if(rs.status==0){
						alert(rs.msg);
						$(window).attr("location","order_list.html");
					}else{
						alert(rs.msg);
					}
				}
			});
		});
		
		//获取订单列表
		getOrders(1,1,10,function(){
			getOrders(3,1,10,function(){
				getOrders(0,1,10,null);
			})
		})
	}
	
	//单击搜索
	$("#searchBtn").click(function(){
		var proName=$("#keywod").val();
		$(window).attr("location","product_search.html?name="+proName);
	});
	
	//获取订单列表
	function getOrders(status,pageNum,pageSize,callBack){ //callBack回调函数
		$.ajax({
			url:baseUrl+"order/getlist.do",
			xhrFields:{withCredentials:true},
			crossDomain:true,
			type:"post",
			data:{'status':status,'pageNum':pageNum,'pageSize':pageSize},
			success:function(rs){
				if(rs.status==0){
				//内容嵌入
				$("#order_list_container").html();
				var tpl=$("#order-item-tpl").html();
				var func=Handlebars.compile(tpl);
				var result=func(rs.data.data);
				$("#order_list_container").html(result);   //将结果添加到页面上
				//处理分页显示
				$(".btn_prev").attr("data-page",rs.data.prePage);
				$(".btn_next").attr("data-page",rs.data.nextPage);
				$("#page_num").attr("data-page-num",rs.data.pageNum);
				$("#page_num").html(rs.data.pageNum);
				$("#page_count").html("共"+rs.data.totalPage+"页");
				//各种状态的订单数量显示
				if(status==0){  //全部订单
					$("#all_num").html("("+rs.data.totalRecord+")");
					//修改立即付款按钮(除未付款)
					$(".page_order"+3).html("查看订单");
					$(".page_order"+4).html("查看订单");
					$(".page_order"+6).html("查看订单");
				}
				if(status==1){  //待付款
					$("#no_pay_num").html("("+rs.data.totalRecord+")");
				}
                if(status==3){  //待收货
                	$("#unshipped_num").html("("+rs.data.totalRecord+")");
                	//清除立即付款  显示确认收货
                	$(".page_order"+3).remove();
                	$(".confirm_receipt").attr("style","display:block");
				}
				//调用回调函数
                if(callBack)  callBack();
				}
			}
		});
	}
	
	
	
	
	
	
	return{
		ready:ready
	};
});