//全局公共JavaScript

$(document).ready(function() {
	if(document.documentElement.clientHeight >= document.documentElement.offsetHeight) {
       $("#header").css('padding-right', '17px');
    }

	 $(".qcode").bind('click',function(event){
		 $(".wcode").css("display","block");
        event.stopPropagation();
	    
     });
     
     $(".wcode").mouseleave(function(){
	    $(".wcode").css("display","none");
	 });
     

	 $(document).bind('click',function(ev){
         $(".wcode").css("display","none");
     });
     
   $(".w_wrap2 ").css("position","relative").prepend('<div style="width: 200px; text-align: right; float: right; margin-top: 12px; margin-right: 10px; position: absolute; right:0;"><span style="font-size:12px;">服务热线：</span><span style="font-size:16px;">400 820 2126</span></div>');
   $("head title").after('<meta name="description" content="泛微公司专业研发协同OA管理软件,致力于为企业用户提供专业OA,OA系统,OA办公自动化系统,OA办公系统,OA软件,协同OA,移动OA,移动办公,协同管理软件的咨询、订制及应用解决方案。">');
   $("head title").after('<meta name="keywords" content="泛微OA,OA,OA系统,OA办公自动化系统,OA办公系统,移动办公,OA软件,协同OA,移动OA">');


});