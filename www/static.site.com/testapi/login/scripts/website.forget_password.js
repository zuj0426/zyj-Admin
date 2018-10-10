$(document).ready(function () {
    //密码控件
    //$("input:password").chromaHash({ bars: 3 });
    //省市控件     
    initcheck();
    $("#username").focus();
});

function detectAddress() {
    $.ajax
	({
	    type: "POST",
	    async: true,
	    cache: false,
	    dataType: 'json',
	    contentType: 'application/json; charset=utf-8',
	    url: "/home/detectAddress",
	    success: function (data) {
	        if (data.status) {
	            $("select#province option:contains('" + data.province + "')").attr('selected', true);
	            $('#province').trigger('change');
	            $("select#city option:contains('" + data.city + "')").attr('selected', true);
	        }
	    }
	});
}

function register() {
    if (check()) {
        var addressStr = $("#province")[0].value + "省" + $("#city")[0].value + "市" + $("#detailaddr")[0].value;
        $("#address").val(addressStr);
        $("#btn_register").attr("disabled", "disabled");
        $("#RegisterForm").ajaxSubmit({
            success: function (data) {
                if (data.status) {
                    //alert("账号注册成功，请添加收银员和商品资料.");
                    //SendWelcomeEmailAndMsg();
                    window.location.href = data.redirectUrl;
                }
                else {
                    $("#btn_register").removeAttr("disabled");
                    var msg = data.returnStr.split("|");
                    for (var i = 0; i < msg.length; i++) {
                        var msgContent = msg[i].split(":");
                        $("#" + msgContent[0]).html(msgContent[1]);
                        $("#" + msgContent[0]).show();
                    }
                }
            },
            error: function (error) { alert("提交注册信息出现错误！"); },
            url: $('RegisterForm').attr('action'),
            type: "post"
        });
    }
}

function SendWelcomeEmailAndMsg() {
    $.ajax
	({
	    beforeSend: function () {},
	    type: "POST",
	    async: true,
	    dataType: "json",
	    url: "/Account/SendWelcomeEmailAndMsg",
	    data: {},
	    error: function (XmlHttpRequest, textStatus, errorThrown) {},
	    success: function (msg) {},
	    complete: function () {
	    }
	});
}

function checkEmail() {
    var txt = $('#txtemail').val();
    if (txt.length == 0) {
        $('#spemail').html('邮箱不能为空');
        $('#spemail').show();
        return false;
    }
    else {
        if (chkemail(txt) == false) {
            $('#spemail').html('邮箱格式不正确，请重新输入');
            $('#spemail').show();
            return false;
        }
        else {
            $('#spemail').hide();
            return true;
        }
    }
}

function chkemail(stremail) {
    if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(stremail)) {
        return false;
    }
    else {
        return true;
    }
}

function checkUsername() {
    var txt = $("#username").val();
    if (txt.length == 0) {
        $('#speusername').html('手机号码不能为空');
        $('#speusername').show();
        return false;
    }
    if (txt.length < 6) {
        $('#speusername').html('手机号码长度不能少于6位');
        $('#speusername').show();
        return false;
    }
    if (txt.length > 32) {
        $('#speusername').html('手机号码长度不能超过32位');
        $('#speusername').show();
        return false;
    }
    if (chkUsername(txt) == false) {
        $('#speusername').html('手机号码只能由数字、字母、下划线组成');
        $('#speusername').show();
        return false;
    }
    else {
        $('#speusername').hide();
        return true;
    }
}

function chkUsername(strUsername) {
    if (!/^[a-zA-Z0-9_]{1,}$/.test(strUsername))
        return false;
    else
        return true;
}

function checkPassword() {
    var txt = $("#password").val();
    if (txt.length == 0) {
        $('#spepassword').html('密码不能为空');
        $('#spepassword').show();
        return false;
    } else if (txt.length < 6) {
        $('#spepassword').html('密码长度不能小于6位');
        $('#spepassword').show();
        return false;
    } else if (txt.length > 32) {
        $('#spepassword').html('密码长度不能超过32位');
        $('#spepassword').show();
        return false;
    }
    else {
        $('#spepassword').hide();
        return true;
    }
}

function checkConfirmpassword() {
    var txt = $("#confirm-password").val();
    if (txt.length == 0) {
        $('#speconfirm-password').html('确认密码不能为空');
        $('#speconfirm-password').show();
        return false;
    } else if (txt != $("#password").val()) {
        $('#speconfirm-password').html('两次输入的密码不一致！');
        $('#speconfirm-password').show();
        return false;
    }
    else {
        $('#speconfirm-password').hide();
        return true;
    }
}

function checkPhoneNum() {
    var txt = $("#phonenum").val();
    if (txt.length == 0) {
        $('#spephonenum').html('电话号码不能为空');
        $('#spephonenum').show();
        return false;
    }
    else {
        var reg = /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/;
        if (!reg.test(txt)) {
            $('#spephonenum').html('输入的号码不正确');
            $('#spephonenum').show();
            return false;
        } else {
            $('#spephonenum').hide();
            return true;
        }
    }
}

function checkRegistrationCode() {
    var registrationCode = $("#registrationcode").val();
    if (registrationCode != "") {
        $.ajax({
            type: "post",
            url: "/Account/ValidateRegistrationCode" + "?RegistrationCode=" + registrationCode,
            success: function (data) {
                $('#speregistrationcode').html(data.html);
                $('#speregistrationcode').show();
            }
        });
    }
    else {
        $('#speregistrationcode').hide();
    }
}

function checkCompanyName() {
    var txt = $("#corpname").val();
    if (txt.length == 0) {
        $('#specorpname').html('店名不能为空');
        $('#specorpname').show();
        return false;
    }
    else {
        $('#specorpname').hide();
        return true;
    }
}

function checkAddress() {
    if ($("#province").val() == "请选择省份") {
        $('#spedetailaddr').html('请选择具体省份');
        $('#spedetailaddr').show();
        return false;
    }
    else if ($("#detailaddr")[0].value.length == 0) {
        $('#spedetailaddr').html('请输入详细地址');
        $('#spedetailaddr').show();
        return false;
    }
    else {
        $('#spedetailaddr').hide();
        return true;
    }
}

function initcheck() {
    //电子邮件检验
    $('#txtemail').blur(function () {
        checkEmail();
    })
    //手机号码检验
    $('#username').blur(function () {
        checkUsername();
    })
    //密码检验
    $('#password').blur(function () {
        checkPassword();
    })
    //确认密码检验
    $('#confirm-password').blur(function () {
        checkConfirmpassword();
    })
    //电话检验
    $('#phonenum').blur(function () {
        checkPhoneNum();
    })   
    //公司名称检验
    $('#corpname').blur(function () {
        checkCompanyName();
    })
    //地址检验
    $('#detailaddr').blur(function () {
        checkAddress();
    })
    //注册码检验
    $('#registrationcode').blur(function () {
        checkRegistrationCode();
    })
}

function check() {
    var emailCheck = checkEmail();
    var usernameCheck = checkUsername();
    var passwordCheck = checkPassword();
    var confirmpasswordCheck = checkConfirmpassword();
    var phonenumCheck = checkPhoneNum();
    var companyNameCheck = checkCompanyName();
    var addressCheck = checkAddress();

    if (emailCheck == false || usernameCheck == false || passwordCheck == false
        || confirmpasswordCheck == false || phonenumCheck == false || companyNameCheck == false
        || addressCheck == false)
        return false;
    else
        return true;
}
