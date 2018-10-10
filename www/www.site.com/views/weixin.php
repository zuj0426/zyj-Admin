<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" /> 
<meta content="yes" name="apple-mobile-web-app-capable" /> 
<meta content="black" name="apple-mobile-web-app-status-bar-style" /> 
<meta content="telephone=no" name="format-detection" />
<title>一站管家微信端-微信</title>
<link rel="stylesheet" type="text/css" href="<?php echo config_item('domain_static')?>www/css/weixin.css">
</head>
<body>
    <div class="weixin" >
        <div class="m-wx"><img src="<?php echo config_item('domain_static')?>www/img/weixin.png" alt="" /></div>
    </div>
     <div class="top">
     	<img src="<?php echo config_item('domain_static')?>www/img/wxtop.png" alt="" />
     </div>
     <div class="main">
        <img src="<?php echo config_item('domain_static')?>www/img/wxmain.png" alt="" />
        <a class="btn" href="/download/app"><img src="<?php echo config_item('domain_static')?>www/img/wxbtn.png" alt="" /></a>
     </div>
</body>
</html>
    <script src="<?=config_item("domain_static")?>www/js/jquery.min.js"></script><script type="text/javascript">
window.onload = function(){
 if(isWeiXin()){
     $('.weixin').show();
 }
}
function isWeiXin(){
 var ua = window.navigator.userAgent.toLowerCase();
 if(ua.match(/MicroMessenger/i) == 'micromessenger'){
     return true;
 }else{
     return false;
 }
}
$('.weixin').click(function(){
    $(this).hide();
})
 </script>