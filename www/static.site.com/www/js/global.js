//ȫ�ֹ���JavaScript

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
     
   $(".w_wrap2 ").css("position","relative").prepend('<div style="width: 200px; text-align: right; float: right; margin-top: 12px; margin-right: 10px; position: absolute; right:0;"><span style="font-size:12px;">�������ߣ�</span><span style="font-size:16px;">400 820 2126</span></div>');
   $("head title").after('<meta name="description" content="��΢��˾רҵ�з�ЭͬOA�������,������Ϊ��ҵ�û��ṩרҵOA,OAϵͳ,OA�칫�Զ���ϵͳ,OA�칫ϵͳ,OA���,ЭͬOA,�ƶ�OA,�ƶ��칫,Эͬ�����������ѯ�����Ƽ�Ӧ�ý��������">');
   $("head title").after('<meta name="keywords" content="��΢OA,OA,OAϵͳ,OA�칫�Զ���ϵͳ,OA�칫ϵͳ,�ƶ��칫,OA���,ЭͬOA,�ƶ�OA">');


});