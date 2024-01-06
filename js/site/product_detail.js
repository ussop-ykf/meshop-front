define(['jquery','./common'],function(jquery, common){
	
	var search = window.location.search;  
	var params = new URLSearchParams(search);  
	var pid = params.get("id");//读取传递的商品编号
	console.log(pid);
	//1.获取商品详情
	function ready(){
		$.ajax({
			url:baseUrl+"product/getdetail.do ",
			xhrFields:{withCredentials:true},
			crossDomain:true,
			type:"post",
			data:{'productId':pid},
			success:function(result){
				console.log(result.data);
				//数据加载成功时
				if(result.status==0){
					$("#product_name_container").html(result.data.name);    //添加商品名称
					$("#product_name_container").attr("data-id",result.data.id);     //添加id
					$("#productPriceContainer").html(result.data.price);     //添加商品价格
					$("#productMainImage").attr("src","images/products/"+result.data.iconUrl);    //添加主图
					$("#productMainImage").addClass(".product_picture_img");
					
					$("#detailContainer").html(result.data.detail);   //添加详情
					$("#specParamContainer").html(result.data.specParam);   //添加规格参数
					$("#product_num").attr("data-stock",result.data.stock);
					$("#stock_container").html("库存:"+result.data.stock);     //添加库存
					
					var subimages=result.data.subImages;    //子图
					subimages=subimages.substring(0,subimages.length);
					//切割图片
					var images=subimages.split(",");
					var small_item="";
					for(var i=0;i<images.length;i++){
						small_item="<li><img src=\'";
						images[i]=baseUrl+image[i];
						small_item+=images[i];
						small_item+="\'></li>";
					}
					//将子图加入页面
					$("#picturelist_container").html();
					$("#picturelist_container").append(small_item);
				}else{//数据加载失败
					
				}
				
				
	       }
		});
	}
	
	//购买数量增加
	$(".product_plus_1").click(function(){
		var stock=$("#product_num").attr("data-stock");    //获取库存
		var num=$("#product_num").val();
		num=parseInt(num)+1;
		if(num>=stock){
			num=stock;
		}
		$("#product_num").val(num);
	});
	//购买数量减少
	$(".product_minus_2").click(function(){
		var stock=$("#product_num").attr("data-stock");    //获取库存
		var num=$("#product_num").val();
		num=parseInt(num)-1;
		if(num<=0){
			num=0;
		}
		$("#product_num").val(num);
	});
	
	//加入购物车
	$("#addCart").click(function(){
		//验证数量是否符合规范
		var count=$("#product_num").val();
		if(count<=0){
			alert("请选择正确购买数量!");
			return;
		}
		//请求服务器 加入购物车
		$.ajax({
			url:baseUrl+"cart/savecart.do  ",
			xhrFields:{withCredentials:true},
			crossDomain:true,
			type:"post",
			data:{'productId':pid,'count':count},
			success:function(rs){
				if(rs.status==0){
					alert(rs.msg);
				}else{
					alert(rs.msg);
				}
			  
			}
	});
});
	
	//商品小图切换为大图
	$(".product_picture_table_main ul li img").live("click",function(){
		//清除其他图片选中样式
		$(".product_picture_table_main ul li img").removeClass("product_picture_selected");
		$(this).addClass("product_picture_selected");
		//将小图放置为主图位置
		var imgSrc=$(this).attr("src");
		$("#productMainImage").attr("src",imgSrc);
	});
	
	//Tab页切换
	$(".product_tab_bar li").click(function(){
		$(".product_tab_bar li").removeClass("product_tab_selected");
		$(this).addClass("product_tab_selected");
		//获取点击tab页的index   
		var index=$(this).attr("data-index");
		$(".product_tab_contents li").css("display","none");
		$(".product_tab_contents").find("li").eq(index).css("display","block");
	});
	
	//搜索商品
	$("#searchBtn").click(function(){
		var proName=$("#keyword").val();
		$(window).attr("location","product_search.html?name="+proName);
	});
	
	
	
	return {
		ready:ready
	};	
	
});
