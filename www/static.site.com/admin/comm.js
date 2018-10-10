function gotoUrl(_url){
  window.location.href=_url;
}
// function ajaxPost(url, form) {
// 	$.ajax({
// 		type: "POST",
// 		url: url,
// 		dataType: 'json',
// 		timeout: 15000,
// 		error: function(){setTimeout(close_luoui,500);login_tip(99, "请求网络出错！");},
// 		data: $(form).serializeArray(),
// 		success: function(dataJson) {
// 			login_success_tip(200, "登录成功！");
// 		}
// 	})
// }
function error_tip(state_code, msg_content) {
    // layer.alert('酷毙了', {icon: 2});
		layer.open({
      icon:2,
      title:"错误提示:",
		  content: msg_content+"<br>3秒自动消失！"
		  ,time: 3000,
      btn: ['明白']
		});
	return false;
}
function close_luoui(){
	$("#luoui_mark").fadeOut(500);
	$("#luoui_loading").fadeOut(500);
  return false;
}

function success_tip(state_code, msg_content,back_url) {
  var _url = "";
  if(back_url != undefined){
      _url == back_url;
  }
  if(back_url == "reload" || back_url == undefined){
    _url == location.href;
  }
		layer.open({
      icon:1,
		  content: msg_content+"<br>10秒后自动返回！"
		   ,time: 12000
      ,cancel: function(index, layero){
      if(confirm('确定要刷新本页！')){
        layer.close(index)
        location.href=location.href;
      }
        return false;
      }
      ,yes: function(index, layero){
    //do something
        layer.close(index); //如果设定了yes回调，需进行手工关闭
        location.href=_url;
    }
		});
		// setTimeout(function(){parent.location.href="/main/";},800);
	}
function success_goto(state_code, msg_content,back_url) {

    layer.open({
        icon:1,
        content: msg_content+"<br>10秒后自动返回！"
        ,time: 12000
        ,cancel: function(index, layero){
            if(confirm('确定要刷新本页！')){
                layer.close(index)
                location.href=back_url;
            }
            return false;
        }
        ,yes: function(index, layero){
            //do something
            layer.close(index); //如果设定了yes回调，需进行手工关闭
            location.href=back_url;
        }
    });
    // setTimeout(function(){parent.location.href="/main/";},800);
}