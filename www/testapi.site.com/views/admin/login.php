<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>用户api登录</title>
    <link href="<?php echo config_item('domain_static')?>testapi/login/style/login.css" rel="stylesheet" type="text/css" />
    <script src="<?php echo config_item('domain_static')?>testapi/login/scripts/jquery-1.8.1.min.js" type="text/javascript"></script>
    <script src="<?php echo config_item('domain_static')?>testapi/login/scripts/website.account.login.js" type="text/javascript"></script>
</head>

<body>
    <div class="windowshadow"></div>
    <div class="box">
        <div class="logintop">
            <img class="logo" src="<?php echo config_item('domain_static')?>testapi/login/images/loginlogo.png" alt="未来之罗" title="" />
            <div class="menu" style="display: none;">
                客服热线：13768818000&nbsp;&nbsp;
                <a href="tencent://message/?uin=241105747">企业QQ：241105747</a>&nbsp;&nbsp;
                <a href="#" target="_blank">下载中心</a>&nbsp;&nbsp;
                <a href="#" target="_blank">帮助中心</a>
            </div>
        </div>
        <div id="showcasebg">
            <div class="loginbox">
                <h1>api人员登录</h1>
                <div>
                    <input type="text" id="txt_userName" value="请输入帐号" maxlength="32" />
                    <span><input type="text" id="txt_password" value="请输入密码" maxlength="32" /></span>
                </div>
                <div id="longinSubmit" class="submit">登录</div>
                <div class="forget"><a href="#" target="_parent">忘记密码？</a></div>
                <input type="hidden" id="returnUrl" />
                <div class="registbox">
                    <span>没有账号？</span>
                    <a href="/main" target="_parent">直接测试>></a>
                </div>

                <div class="tips accounttips">
                    <b>!</b>
                    <span>请输入手机，没有账号？</span>
                    <div class="triangle"></div>
                </div>
                <div class="tips posswordtips">
                    <b>!</b>
                    <span>请输入密码，忘记密码？</span>
                    <div class="triangle"></div>
                </div>
                <div class="tips errortips">
                    <b>!</b>
                    <span></span>
                    <div class="triangle"></div>
                </div>
            </div>

            <div id="image_1" class="showcase" style="background: url('<?php echo config_item('domain_static')?>testapi/login/images/banner_04_bg.jpg') repeat; ">
                <div class="showarea">
                    <img src="<?php echo config_item('domain_static')?>testapi/login/images/banner_04.jpg" alt="" style="float:left;" />
                </div>
            </div>


            

        </div>


        <div class="bottom">
            <div class="info">
                <a href="#"  title="未来之罗"><img class="logo2" src="<?php echo config_item('domain_static')?>testapi/login/images/loginlogo2.png" alt="未来之罗" /></a>
                <span>
                    <a href="#"><strong>未来之罗网</strong></a> | <a href="#"><strong>关于我们</strong></a> | <a href="#"><strong>联系我们</strong></a> |
                    2010-2016 © Copyright. luwiso Network - All Rights Reserved.
                </span>
            </div>
        </div>

        <div class="blank1"></div>
    </div>
   
    
</body>
</html>
