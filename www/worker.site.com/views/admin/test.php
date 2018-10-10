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

  <div id="demo7"></div>


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
      <td>贤心</td>
      <td>2017-11-29</td>
      <td>购买 800元苹果8 plus手机</td>
    </tr>
    <tr>
      <td>许闲心</td>
      <td>2017-11-28</td>
      <td>购买 1000元三星S8+</td>
    </tr>
    <tr>
      <td>sentsin</td>
      <td>2017-11-27</td>
      <td>购买600元华为x11 plus.</td>
    </tr>
  </tbody>
</table>
<table class="layui-table" lay-size="sm">
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
      <td>许闲心</td>
      <td>2017-11-28</td>
      <td>购买 1000元三星S8+</td>
    </tr>
    <tr>
      <td>许闲心</td>
      <td>2017-11-28</td>
      <td>购买 1000元三星S8+</td>
    </tr>
    <tr>
      <td>许闲心</td>
      <td>2017-11-28</td>
      <td>购买 1000元三星S8+</td>
    </tr>
  </tbody>
</table>





<script src="<?=config_item("domain_static")?>admin/layui/layui.js"></script>
<script>
layui.use(['laydate', 'laypage', 'layer', 'table', 'carousel', 'upload', 'element'], function(){
var laydate = layui.laydate //日期
,laypage = layui.laypage //分页
layer = layui.layer //弹层
,table = layui.table //表格
,carousel = layui.carousel //轮播
,upload = layui.upload //上传
,element = layui.element; //元素操作

//向世界问个好
layer.msg('Hello World');
	  //完整功能
  laypage.render({
    elem: 'demo7'
    ,count: 100
    ,layout: ['count', 'prev', 'page', 'next', 'limit', 'skip']
    ,jump: function(obj){
      console.log(obj)
    }
  });

});
</script>
</body>
</html>
