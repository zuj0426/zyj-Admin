 //非极速模式下   
//极速模式下的 值为 Netscape  
if (navigator.appName === 'Microsoft Internet Explorer') {  
    //动态添加 meta元素 并设置相关项  
    var headV=document.getElementsByTagName("head"); 
    var metaV=document.createElement('meta');  
    metaV.name='renderer';  
    metaV.content='webkit';  
    headV.appendChild(metaV);  
}
$(function(){
	//表格偶数列变色
	$('.tr:odd').css('background' , '#f1f1f1');
	$('.tr:odd').hover(function(){
		$(this).css('background' , '#C6EAFF');
	},function(){
		$(this).css('background' , '#f1f1f1');
	});
	$('.tr:even').hover(function(){
		$(this).css('background' , '#C6EAFF');
	},function(){
		$(this).css('background' , '#fff');
	});
});


//ajax请求
function post(data,url,callback){
	url = url == undefined  ?  location.href : url;
	//console.log(data);
	
	$.ajax({
		type:"post",
		url:url,
		data:data,
		dataType:'json',
		success: function (data) {
			if(callback){
				callback(data);				
				return;
			}
            var msg = data.msg;
            if (data.success) {	         
            	var renovate_type = data.data.renovate_type;
            	layer.open({
	               	title: "温馨提示",
	               	icon: 1,
	               	content: msg,
	               	yes: function(index, layero){
	               		renovate(renovate_type);
					    layer.close(index); //如果设定了yes回调，需进行手工关闭						    
				  	}	                   
	            }); 	 
            	
                   	                
            } else {
               	layer.open({
	               title: "温馨提示",
	               icon: 2,
	               content: msg	                   
	            });               
            }
        },
       	error: function (error) { 
       		console.log(error);
       		layer.open({
               title: "温馨提示",
               icon: 2,
               content: "提交信息出现错误！请稍后重试"	                   
            }); 
       	}
        
	})
	return false;
}

function renovate(renovate_type){
	switch(renovate_type){
	case 0:
		//console.log('不操作');		
		break;
	case 1:
		//console.log('刷新页面');
		location.reload();		 
		break;
	case 2:		
		parent.location.href = document.referrer;			  
		break;
	default:
		//console.log('未定义，刷新本页');
		location.reload();		 
		break;
	}
}