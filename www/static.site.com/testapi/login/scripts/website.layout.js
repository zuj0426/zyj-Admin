var howToStartIndex = 1;
$(function () {
    //如何开始使用
    $('.htsBtn').unbind('click').click(function () {
        var preOrNext = $(this).attr("id") == "htsBtnPre" ? "pre" : "next";
        if (preOrNext == "pre" && howToStartIndex > 1) {
            howToStartIndex--;
            $(this).parent().parent().css("background-image", "url(/images/howToStart_0" + howToStartIndex + ".png)");
        } else if (preOrNext == "next" && howToStartIndex < 4) {
            howToStartIndex++;
            $(this).parent().parent().css("background-image", "url(/images/howToStart_0" + howToStartIndex + ".png)");
        }
        if (howToStartIndex == 1) {
            $("#htsBtnPre,#htsBtnStartNow").hide();
            $("#htsBtnNext").show();
        } else if (howToStartIndex == 4) {
            $("#htsBtnPre,#htsBtnStartNow").show();
            $("#htsBtnNext").hide();
        } else {
            $("#htsBtnPre,#htsBtnNext").show();
            $("#htsBtnStartNow").hide();
        }
    });
    $("#htsBtnStartNow").unbind('click').click(function () {
        $("#btnCloseHts").click();
    });
    $("#btnCloseHts").unbind('click').click(function () {
        $("html").css("overflow", "auto");
        $("#htsBg,#htsContainer").hide();
    });

    if (window.location.href.indexOf("hts=") > -1) {
        $("html").css("overflow", "hidden");
        $("#htsBg,#htsContainer").show();
    }

    //通知
    if (window.location.href.indexOf("notice=true") > -1) {
        $("html").css("overflow", "hidden");
        $("#htsBg,#notice").show();
    }

    $("#btnCloseNotice").click(function () {
        $("html").css("overflow", "auto");
        $("#htsBg,#notice").hide();
    });

    //专属客服
    $(".myService").bind("click", function () {
        $("#contactMyService").show();
        if ($("#contactMyService .content").html() == "") {
            $("#contactMyService .content").html("<span style='float:left; margin:40px 0 0 20px;'>正在获取专属客服联系方式...</span>");
            $.ajax
           ({
               beforeSend: function () { },
               type: "POST",
               async: true,
               dataType: "json",
               url: "/SystemMsg/LoadUserService",
               error: function (XmlHttpRequest, textStatus, errorThrown) {
                   if (XmlHttpRequest.responseText != "") {
                       var defaultHtml = "<div style='width:100%; text-align:left; line-height:28px; padding:10px 0 20px 20px;color:#000; font-size:14px;'>";
                       defaultHtml += "电话1：400-000-7749<br/>";
                       defaultHtml += "电话2：0592-3135666<br/>";
                       defaultHtml += "Q Q：<a href='tencent://message/?uin=800008626' title='PosPal客服'>800008626</a>";
                       defaultHtml += "</div>";
                       $("#contactMyService .content").html(defaultHtml);
                   }
               },
               success: function (result) {
                   if (result.successed) {
                       $("#contactMyService .content").html(result.view);
                   }
               },
               complete: function () { }
           });

            //$.ajax
            //({
            //    beforeSend: function () { },
            //    type: "POST",
            //    async: true,
            //    dataType: "json",
            //    url: "/Count/GetMyService",
            //    data: {},
            //    error: function (XmlHttpRequest, textStatus, errorThrown) { },
            //    success: function (msg) { },
            //    complete: function () { }
            //});
        }
    });

    $("#contactMyService .closeMyService").bind("click", function () {
        $("#contactMyService").hide();
    });
});

//防止退格键页面退回
$(document).keydown(function (e) {
    var doPrevent;
    if (e.keyCode == 8) {
        var d = e.srcElement || e.target;
        if (d.tagName.toUpperCase() == 'INPUT' || d.tagName.toUpperCase() == 'TEXTAREA') {
            doPrevent = d.readOnly || d.disabled;
        } else {
            doPrevent = true;
        }
    }
    else
        doPrevent = false;

    if (doPrevent)
        e.preventDefault();
});

function isValidTimeSpan(beginDateTime, endDateTime){
    var beginDateTime = new Date(Date.parse(beginDateTime.replace(/-/g, "/"))).getTime();
    var endDateTime = new Date(Date.parse(endDateTime.replace(/-/g, "/"))).getTime();
    var days = Math.abs((endDateTime - beginDateTime)) / (1000 * 60 * 60 * 24);

    var hour = (new Date()).getHours();
    if (days > 31 && hour >= 11 && hour < 20){
        new $.msgbox({ content: "服务器正忙，请缩短查询时间段至一个月内，或在非高峰时间段操作（11-20点外）。", type: "divContainer" }).show();
        return false;
    } else if (days > 370){
        new $.msgbox({ content: "系统暂不支持超过1年查询。", type: "divContainer" }).show();
        return false;
    }

    return true;
}