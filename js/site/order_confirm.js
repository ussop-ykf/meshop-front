define(['jquery_SuperSlide','handlebar'], function (jquery,Handlebars){
	//读取用户生成的订单购物车信息
	function getCartInfo(){
		$.ajax({
			url:baseUrl+"cart/findallcarts.do ",
			xhrFields:{withCredentials:true},
			crossDomain:true,
			type: 'post',
			headers: {
				'Authorization': getCookie('Authorization')
			},
			success:function(rs){
				console.log(rs)
				updatePageInfo(rs);   //更新页面
			}
		});
	}
	
	//提交确认信息生成订单
	function submitBtn(){
		$("#submit").click(function(){
			//获取收货人地址id
			var id=$("#submit").attr("datta-id");
			//提交订单
			$.ajax({
				url:baseUrl+"order/createorder.do ",
				xhrFields:{withCredentials:true},
				crossDomain:true,
				type:"post",
				data:{'addId':id},
				success:function(rs){
					if(rs.status==0){
						//跳转到订单详情页面
						$(window).attr("location","order_detail.html?orderNo="+rs.data.orderNo);
					}else{
						alert(rs.msg);
					}
				}
			});
			
		});
	}
	
	//根据返回数据更新页面信息
	function updatePageInfo(rs){
		if(rs.status==0){
			$("#order_confirm_item_container").html(); 
			var tpl=$("#product-item-tpl").html();
			var func=Handlebars.compile(tpl);
			var result=func(rs.data.lists);
			$("#order_confirm_item_container").html(result); 
			$("#amount").html("￥"+rs.data.totalPrice);    //更新购物车价格
		}else{  //未登录时
			// $(window).attr("location","login.html");
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
	
   return{
	   getCartInfo:getCartInfo,
	//    submitBtn:submitBtn,
	   
	};
});
