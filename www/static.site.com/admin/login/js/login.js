$(document).ready(function() {
	// 绑定登录按钮
	try{
		$("#input_account").val(localStorage.getItem("input_account"));
		$("#input_password").val(localStorage.getItem("input_password"));
	}catch(e){

	}
	$("#login_submit").click(function() {
		// 表单处理
		var account = $("#input_account").val();
		var password = $("#input_password").val();
		checkMobile(account);
		if (account == "") {
			return login_tip(99, "帐号不能为空,");
		}
		// if(checkMobile(account)==false){
		// 	return login_tip(99, "请输入正确的手机号码,");
		// }
		if (password == "") {
			return login_tip(99, "密码不能为空,");
		}

		if($('#checkbox1').is(':checked')) {
			try{
				localStorage.setItem("input_account", account);
				localStorage.setItem("input_password", password);
				localStorage.setItem("checkbox1", 1);
			}catch(e){

			}
		}else{
			localStorage.removeItem("input_account");
			localStorage.removeItem("input_password");
			localStorage.setItem("checkbox1", 0);
		}
		// ajax异步操作
		$("#luoui_mark").fadeIn(450);
		$("#luoui_loading").fadeIn(450);
		//setTimeout(close_luoui,500);//延时3秒
		ajaxPost("/home/login_check", "form");
	});

});

// 错误提示
function login_tip(state_code, msg_content) {
		layer.open({
		  content: msg_content+"3秒自动消失！"
		  ,style: 'background-color:#fff; color:#c80000; border:none;font-weight: bold;font-size:16px;' //自定风格
		  ,time: 3
		});
//	layer.open({
//		title : [ '错误提示',
//				'background-color:#c80000;font-weight: bold;color:#fff;text-align:left;padding:0px;margin:0px;padding-left:10px;' ],
//		anim : 'up',
//		content : msg_content,
//		style : 'color:#c80000;font-size:14px;',
//		btn : [ '我知道了' ]
//	})
	return false;
}
function login_success_tip(state_code, msg_content) {
		layer.open({
		  content: msg_content+"1秒后自动登录！"
		  ,style: 'background-color:#fff; color:#73c990; border:none;font-weight: bold;font-size:16px;' //自定风格
		  ,time: 3
		});
		setTimeout(function(){parent.location.href="/main/";},800);
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
		success: function(json) {
			setTimeout(close_luoui,500);
			if(json.code!=200){
					return login_tip(99, json.msg);
			}
			login_success_tip(200, json.msg);
		}
	})
}
