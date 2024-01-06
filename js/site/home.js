define(['jquery_SuperSlide','./common','handlebar'],function(jquery_SuperSlide, common, Handlebars){
	//1.加载产品分类
	function getParam(){
		$.ajax({
			url:baseUrl+"param/findallparams.do",
			xhrFields:{withCredentials:true},
			crossDomain:true,
			success:function(rs){
				//创建对象 预编译插件
				var tpl = $("#param_tpl").html();
				var func =Handlebars.compile(tpl);
				//获取数据
				var data = rs.data;
				var result = func(data);
				//插入页面
				$("#paramContainer").html(result);
			}
		});
	}
	//2.加载热销商品
	function getHotProduct(){
		
		$.ajax({
			url:baseUrl+"product/findhotproducts.do",
			// beforeSend: function (request) {
			// 	request.setRequestHeader('Authorization', getCookie('Authorization'));
			// },
			crossDomain: true,
			type:'POST',
			xhrFields: { withCredentials: true },
			data:{num:"6"},
			success:function(rs){
				//循环解包的json数据
				$.each(rs.data, function(index, item) {  
					// 创建模板字符串
					 console.log(item);
					var template =  '<li class="unew-li"><a target="_blank" href="detail.html?img='+item.iconUrl+'&price='+item.price+'&name='+item.name+'&detail='+item.detail+'" class="unewli-box"><div class="unewli-img"><img src="images/'+item.iconUrl+'" data-original="images/'+item.iconUrl+'" /></div>  <h2 class="font-ublack font-title">'+item.name+'</h2><p class="price-box"></p><p class="font3 font-size2" style="padding-top:0px;"><span>'+item.price+'</span><span style="margin-left:50px;">市场价</span><span class=" text-de">'+item+100+'</span></p></a></li>';  
					// 将模板字符串插入到页面中  
					$('#hotContainer').append(template);  
					
					
				  });  
			}

		});
	}
	//3.加载楼层信息
	function getFloors(){
		$.ajax({
			url:baseUrl+"product/findfloors.do",
			xhrFields:{withCredentials:true},
			crossDomain:true,
			success:function(rs){
				//判断是否成功
				if(rs.status==1){
					return;
				}
				//1楼数据      获取数据（修改图片路径） 插件预编译  插入页面
				var data1 = rs.data.oneFloor;
				for(var i=0;i<data1.length;i++){
					data1[i].iconUrl=baseUrl+data1[i].iconUrl;
				}
				var func =Handlebars.compile($("#floor_odd_top").html());
				$("#floor_one_m").html();
				$("#floor_one_m").append(func(data1));
				//2楼数据
				var data2 = rs.data.twoFloor;
				for(var i=0;i<data2.length;i++){
					data2[i].iconUrl=baseUrl+data2[i].iconUrl;
				}
				$("#floor_two_m").html();
				$("#floor_two_m").append(func(data2));
				//3楼数据
				var data3 = rs.data.threeFloor;
				for(var i=0;i<data3.length;i++){
					data3[i].iconUrl=baseUrl+data3[i].iconUrl;
				}
				$("#floor_three_m").html();
				$("#floor_three_m").append(func(data3));
				//4楼数据
				var data4 = rs.data.fourFloor;
				for(var i=0;i<data4.length;i++){
					data4[i].iconUrl=baseUrl+data4[i].iconUrl;
				}
				$("#floor_four_m").html();
				$("#floor_four_m").append(func(data4));
			}
		});
	}
	
	//4.首页轮播
	// $(".slide_box").slide({mainCell:".bd ul" ,effect:"leftLoop",autoPlay:true});
	//5.产品分类
	$(".iten").live({
		mouseenter:function(){
			//获取对象
			var children_div = $(this).children("div");
			var t_this = $(this);
			//显示子分类
			t_this.find('.item_hd').css({border:'none'});
			t_this.prev().find('.item_hd').css({border:'none'});
			children_div.show();
			$(this).addClass("selected");
		},
		mouseleave:function(){
			//获取对象
			var children_div = $(this).children("div");
			//隐藏子分类
			$(this).find('.item_hd').css({'border-bottom':'1px dotted white'});
			$(this).prev().find('.item_hd').css({'border-bottom':'1px dotted white'});
			children_div.hide();
			$(this).removeClass("selected");
		}
	});
	//单击搜索
	$("#searchBtn").click(function(){
		var proName = $("#keyword").val();
		$(window).attr("location","product_search.html?name="+proName);
	});
	
	return{
		getParam:getParam,
		getHotProduct:getHotProduct,
		getFloors:getFloors
	};
});