define(['jquery_SuperSlide','./common','handlebar'],function(jquery_SuperSlide, common, Handlebars){
	function getGoodDetail(){
        var search = window.location.search;  
        var params = new URLSearchParams(search);  
        var img = params.get("img");
        var price=params.get("price");
        var name=params.get("name");
        var detail=params.get("detail");
        $("#product-name").html(name);
        var myImg = document.getElementById("img");
       $("#product-price").html(price);
       $("#product-description").html(detail);
        myImg.src='images/'+img+'';  
    }
    function addCart(){
        $("#add_cart").click(function(){
         var num=$("#num").val();
         
        });


    }
 


        
    
	return{
		getGoodDetail:getGoodDetail,
	};
});