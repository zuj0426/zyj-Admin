<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <title>登录记录</title>
<link rel="stylesheet" href="<?=config_item("domain_static")?>admin/layui/css/layui.css?version=<?=config_item("css_version")?>" media="all">
<link rel="stylesheet" href="<?=config_item("domain_static")?>admin/comm.css?version=<?=config_item("css_version")?>" media="all">

</head>
<body>
  <fieldset class="layui-elem-field layui-field-title" style="margin-top:40px;">
    <legend>退出管理员系统</legend>
  </fieldset>
<div class="reload_top">
  <a href="javascript:location.reload()">
    <span class="layui-icon layui-anim layui-anim-rotate layui-anim-loop">&#x1002;</span>
    刷新
  </a>
</div>





<a href="/main/admin_exit" class="layui-btn">马上退出</a>



<script src="<?=config_item("domain_static")?>admin/layui/layui.js?version=<?=config_item("js_version")?>"></script>
<script src="<?=config_item("domain_static")?>admin/comm.js?version=<?=config_item("js_version")?>"></script>

<script>
layui.use(['laydate', 'laypage', 'layer', 'table'], function(){
var laydate = layui.laydate //日期
,laypage = layui.laypage //分页
layer = layui.layer //弹层
,table = layui.table //表格
	  //完整功能


});

</script>
</body>
</html>
