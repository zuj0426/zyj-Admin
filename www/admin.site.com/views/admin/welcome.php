<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <title>欢迎首页</title>
<link rel="stylesheet" href="<?=config_item("domain_static")?>admin/layui/css/layui.css" media="all">
<style>
  body{margin: 10px;}
  .demo-carousel{height: 200px; line-height: 200px; text-align: center;}
</style>
</head>
<body>
  <fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">
    <legend>总排队行情</legend>
  </fieldset>

  <div id="demo7" style="padding-left: 30px; font-size: 20px;"><font color="red">0</font>人</div>


  <fieldset class="layui-elem-field layui-field-title" style="margin-top: 50px;">
  <legend>今日排队购买行情</legend>
</fieldset>

<table class="layui-table" lay-size="lg">
  <colgroup>
    <col width="150">
    <col width="200">
    <col>
  </colgroup>
  <thead>
    <tr>
      <th>昵称</th>
      <th>加入时间</th>
      <th>签名</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td  colspan="3">无数据</td>
    </tr>

  </tbody>
</table>






<script src="<?=config_item("domain_static")?>admin/layui/layui.js"></script>
<script>
layui.use(['laydate', 'laypage', 'layer', 'table', 'carousel', 'element'], function(){
var laydate = layui.laydate //日期
,laypage = layui.laypage //分页
layer = layui.layer //弹层
,table = layui.table //表格
,carousel = layui.carousel //轮播
,element = layui.element; //元素操作


</script>
</body>
</html>
