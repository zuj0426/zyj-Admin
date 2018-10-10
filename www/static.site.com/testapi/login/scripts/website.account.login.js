

$(document).ready(function () {
    //playAd();

    //$("#txt_userName").focus();

    $('.hidden').hide();

    txtInputInit();

    $("#longinSubmit").bind("click", function () {
        longinSubmit();
    })

    $(document).keydown(function (e) {
        if (e.keyCode == 13) {
            longinSubmit();
        }
    });

});

function longinSubmit() {
    var isValid = true;
    var userName = $("#txt_userName").val();
    var password = $("#txt_password").val();

    $(".errortips").hide();

    if (userName == "" || userName == "请输入帐号")
    {
        $(".accounttips").show();
        isValid = false;
    }

    if (password == "" || password == "请输入密码")
    {
        $(".posswordtips").show();
        isValid = false;
    }

    if (isValid) {
        $.ajax
	    ({
	        beforeSend: function () {
	            $("#longinSubmit").css({ "background-color": "#cccccc" });
	            $("#longinSubmit").html("登录中...");
	        },
	        type: "POST",
	        async: true,
	        dataType: "json",
	        url: "/home/login_check",
	        data: { "phone": userName, "password": password,"returnUrl":$("#returnUrl").val() },
	        error: function (XmlHttpRequest, textStatus, errorThrown) {
	            if (XmlHttpRequest.responseText != "") {
	                alert("登陆失败，请稍后尝试！");
	                $("#longinSubmit").css({ "background-color": "#09C" });
	                $("#longinSubmit").html("登录");
	            }
	        },
	        success: function (data) {
	            if (data.success) {
                    console.log(data);
	                parent.location.href = data.data.url;
	                $(".errortips span").html(data.msg);
	                $(".errortips").show();
	            } else {
	                $("."+data.ui_name+" span").html(data.msg);
	                $("."+data.ui_name).show();

	                $("#longinSubmit").css({ "background-color": "#09C" });
	                $("#longinSubmit").html("登录");
	            }
	        },
	        complete: function () {
	        }
	    });
    } 
}

function txtInputInit(){
    $("#txt_userName").bind("focus", function () {
        if ($(this).val() == "请输入帐号") {
            $(this).val("");
        }
    })

    $("#txt_userName").bind("blur", function () {
        if ($.trim($(this).val()) == "") {
            $(this).val("请输入帐号");
        } else {
            $(".accounttips").hide();
        }
    })


    $("#txt_password").live("focus", function () {
        if ($(this).val() == "请输入密码") {
            $(this).parent().html("<input type='password' id='txt_password' value='' />");
            $("#txt_password").focus();
        }
    })

    $("#txt_password").live("blur", function () {
        if ($.trim($(this).val()) == "") {
            $(this).parent().html("<input type='text' id='txt_password' value='请输入密码' />");
        } else {
            $(".posswordtips").hide();
        }
    })

}

function playAd() {
    var i = 0;
    iCurrent = 1;
    iTotal = 5;
    arrImages = new Array;
    var cycleTime = 8000;
    var stopTime = 10000;
    var timer;
    var timeOut;

    i = 1;
    objImage = new Array;

    while (i <= iTotal) {
        objImage[i] = new Image();
        objImage[i].src = arrImages[i];
        i++;
    }

    $('#prev_key, #next_key').css({ cursor: 'pointer' });

    shortcut.add("Right", function () {
        next();
        stopCycle();
    });

    shortcut.add("Left", function () {
        prev();
        stopCycle();
    });

    timer = setInterval(function () {
        next();
    }, cycleTime);

    function stopCycle() {
        window.clearInterval(timer);
        window.clearTimeout(timeOut);
        timeOut = setTimeout(function () {
            timer = setInterval(function () {
                next();
            }, cycleTime);
        }, stopTime);
    }

    $('#next_key').click(function () {
        next();
        stopCycle();
    });

    $('#prev_key').click(function () {
        prev();
        stopCycle();
    });

    function next() {
        if (iCurrent >= iTotal) {
            $("#image_1").show('slide', { direction: 'right' }, 1000);
            $("#image_" + iCurrent).hide('slide', { direction: 'left' }, 1000);

            $("#small_1").addClass("li_in");
            $("#small_" + iCurrent).removeClass("li_in");

            iCurrent = 1;
        } else {
            $("#image_" + (iCurrent + 1)).show('slide', { direction: 'right' }, 1000);
            $("#image_" + iCurrent).hide('slide', { direction: 'left' }, 1000);

            $("#small_" + (iCurrent + 1)).addClass("li_in");
            $("#small_" + iCurrent).removeClass("li_in");

            iCurrent++;
        }
    }

    function prev() {
        if (iCurrent <= 1) {
            $("#image_" + iTotal).show('slide', { direction: 'left' }, 1000);
            $("#image_1").hide('slide', { direction: 'right' }, 1000);

            $("#small_" + iTotal).addClass("li_in");
            $("#small_1").removeClass("li_in");

            iCurrent = iTotal;
        } else {
            $("#image_" + (iCurrent - 1)).show('slide', { direction: 'left' }, 1000);
            $("#image_" + iCurrent).hide('slide', { direction: 'right' }, 1000);

            $("#small_" + (iCurrent - 1)).addClass("li_in");
            $("#small_" + iCurrent).removeClass("li_in");

            iCurrent--;
        }
    }

    function show(showId) {

        if (showId < iCurrent) {
            $("#image_" + showId).show('slide', { direction: 'left' }, 1000);
            $("#image_" + iCurrent).hide('slide', { direction: 'right' }, 1000);
        } else {
            $("#image_" + showId).show('slide', { direction: 'right' }, 1000);
            $("#image_" + iCurrent).hide('slide', { direction: 'left' }, 1000);
        }

        $("#small_" + showId).addClass("li_in");
        $("#small_" + iCurrent).removeClass("li_in");

        iCurrent = parseInt(showId);
    }
}