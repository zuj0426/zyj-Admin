// 错误提示
function error_tip(state_code, msg_content) {
		layer.open({
		  content: msg_content+"3秒自动消失！"
		  ,style: 'background-color:#fff; color:#c80000; border:none;font-weight: bold;font-size:16px;' //自定风格
		  ,time: 3
		});

	return false;
}
function success_tip(state_code, msg_content,jump_url) {
		layer.open({
		  content: msg_content+"1秒后自动登录！"
		  ,style: 'background-color:#fff; color:#73c990; border:none;font-weight: bold;font-size:16px;' //自定风格
		  ,time: 3
		});
		setTimeout(function(){parent.location.href=jump_url;},800);
	}
function close_luoui(){
	$("#luoui_mark").fadeOut(500);
	$("#luoui_loading").fadeOut(500);
}

//手机号码
function checkMobile(sMobile){
    if(!(/^1[2|3|4|5|6|7|8][0-9]{9}$/.test(sMobile))){
        return false;
    }
    return true;
}

function ajaxPost(url, form) {
	$.ajax({
		type: "POST",
		url: url,
		dataType: 'json',
		timeout: 15000,
		error: function(){setTimeout(close_luoui,500);login_tip(99, "请求网络出错！");},
		data: $(form).serializeArray(),
		success: function(dataJson) {
			login_success_tip(200, "登录成功！");
		}
	})
}
