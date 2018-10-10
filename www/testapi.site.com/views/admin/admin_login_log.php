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
    <legend>登录记录</legend>
  </fieldset>
<div class="reload_top">
  <a href="javascript:location.reload()">
    <span class="layui-icon layui-anim layui-anim-rotate layui-anim-loop">&#x1002;</span>
    刷新
  </a>
</div>





  <table class="layui-table" lay-size="lg">
    <colgroup>
      <col width="150">
      <col width="200">
      <col>
    </colgroup>
    <thead>
      <tr>
        <th>序号</th>
        <th>管理员帐号</th>
        <th>姓名</th>
        <th>登录时间</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="5">没有登录日志数据</td>

      </tr>

    </tbody>
  </table>





  <div id="page01" class="page_auto_bottom"></div>







<script src="<?=config_item("domain_static")?>admin/layui/layui.js?version=<?=config_item("js_version")?>"></script>
<script src="<?=config_item("domain_static")?>admin/comm.js?version=<?=config_item("js_version")?>"></script>

<script>
layui.use(['laydate', 'laypage', 'layer', 'table'], function(){
var laydate = layui.laydate //日期
,laypage = layui.laypage //分页
layer = layui.layer //弹层
,table = layui.table //表格
	  //完整功能
  laypage.render({
    elem: 'page01'
    ,count: 200
    ,layout: ['count', 'prev', 'page', 'next', 'limit', 'skip']
    ,jump: function(obj){
      console.log(obj)
    }
  });

});

</script>
</body>
</html>
