<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<meta name="renderer" content="webkit|ie-comp|ie-stand">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
<meta http-equiv="Cache-Control" content="no-siteapp" />
<link rel="stylesheet" type="text/css" href="<?=config_item("domain_static")?>admin/hui/static/h-ui/css/H-ui.min.css" />
<link rel="stylesheet" type="text/css" href="<?=config_item("domain_static")?>admin/hui/static/h-ui.admin/css/H-ui.admin.css" />
<link rel="stylesheet" type="text/css" href="<?=config_item("domain_static")?>admin/hui/lib/Hui-iconfont/1.0.8/iconfont.css" />
<link rel="stylesheet" type="text/css" href="<?=config_item("domain_static")?>admin/hui/static/h-ui.admin/skin/default/skin.css" id="skin" />
<link rel="stylesheet" type="text/css" href="<?=config_item("domain_static")?>admin/hui/static/h-ui.admin/css/style.css" />
<title>工作进度api</title>
<meta name="keywords" content="">
<meta name="description" content="">
</head>
<body>
<header class="navbar-wrapper">
	<div class="navbar navbar-fixed-top">
		<div class="container-fluid cl"> <a class="logo navbar-logo f-l mr-10 hidden-xs" href="#">api测试平台</a> <a class="logo navbar-logo-m f-l mr-10 visible-xs" href="#">后台</a>
			<span class="logo navbar-slogan f-l mr-10 hidden-xs">v1.1</span>
			<a aria-hidden="false" class="nav-toggle Hui-iconfont visible-xs" href="javascript:;">&#xe667;</a>
			<nav class="nav navbar-nav">
				<ul class="cl">
					<li class="dropDown dropDown_hover"><a href="javascript:;" class="dropDown_A"><i class="Hui-iconfont">&#xe671;</i>站内快链<i class="Hui-iconfont">&#xe6d5;</i></a>
						<ul class="dropDown-menu menu radius box-shadow">
							<li><a href="javascript:;" onclick="product_add('分类管理','/category/category_list','810')"><i class="Hui-iconfont">&#xe616;</i> 分类管理</a></li>
					</ul>
				</li>
			</ul>
		</nav>
		<nav id="Hui-userbar" class="nav navbar-nav navbar-userbar hidden-xs">
			<ul class="cl">
				<li>权限【管理员组】</li>
				<li class="dropDown dropDown_hover">
					<a href="#" class="dropDown_A">罗在线 <i class="Hui-iconfont">&#xe6d5;</i></a>
					<ul class="dropDown-menu menu radius box-shadow">
						<li><a onclick="member_add('退出','/admin/admin_exit','','510')">退出</a></li>
				</ul>
			</li>
				<!-- <li id="Hui-msg"> <a href="#" title="消息"><span class="badge badge-danger">32</span><i class="Hui-iconfont" style="font-size:18px">&#xe68a;</i></a> </li> -->
				<li id="Hui-skin" class="dropDown right dropDown_hover"> <a href="javascript:;" class="dropDown_A" title="换肤"><i class="Hui-iconfont" style="font-size:18px">&#xe62a;</i></a>
					<ul class="dropDown-menu menu radius box-shadow">
						<li><a href="javascript:;" data-val="default" title="默认（无色）">默认（无色）</a></li>
						<li><a href="javascript:;" data-val="blue" title="蓝色">蓝色</a></li>
						<li><a href="javascript:;" data-val="green" title="绿色">绿色</a></li>
						<li><a href="javascript:;" data-val="red" title="红色">红色</a></li>
						<li><a href="javascript:;" data-val="yellow" title="黄色">黄色</a></li>
						<li><a href="javascript:;" data-val="orange" title="橙色">橙色</a></li>
					</ul>
				</li>
			</ul>
		</nav>
	</div>
</div>
</header>
<aside class="Hui-aside">
	<div class="menu_dropdown bk_2">
        <dl id="menu-product">
            <dt><i class="Hui-iconfont">&#xe62c;</i>行政人员管理<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
            <dd>
                <ul>
                    <li><a data-href="/login/login/" data-title="用户登录" href="javascript:void(0)">用户登录</a></li>
                    <li><a data-href="/user/home/" data-title="我的app首页" href="javascript:void(0)">我的app首页</a></li>
                    <li><a data-href="/user/my_task/" data-title="指派我任务列表" href="javascript:void(0)">指派我任务列表</a></li>
                    <li><a data-href="/user/my_create_task/" data-title="我创建任务列表" href="javascript:void(0)">创建任务列表</a></li>
                    <li><a data-href="/user/create_read/" data-title="创建任务-读取" href="javascript:void(0)">创建任务-读取</a></li>
                    <li><a data-href="/user/create_save/" data-title="创建任务-保存" href="javascript:void(0)">创建任务-保存</a></li>
                    <li><a data-href="/user/get_create_task_info/" data-title="我创任务信息" href="javascript:void(0)">我创任务信息</a></li>
                    <li><a data-href="/user/get_my_task_info/" data-title="指派给我任务信息" href="javascript:void(0)">指派给我任务信息</a></li>
                    <li><a data-href="/user/task_create_user_change/" data-title="操作任务状态" href="javascript:void(0)">操作任务状态</a></li>

                </ul>
            </dd>
        </dl>
		<dl id="menu-member">
			<dt><i class="Hui-iconfont">&#xe61d;</i>系统安全<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
			<dd>
				<ul>
					<li><a data-href="/user/edit_passwd" data-title="密码修改" href="javascript:;">密码修改</a></li>
					<li><a data-href="/user/app_exit" data-title="退出系统" href="javascript:;">退出系统</a></li>
			</ul>
		</dd>
	</dl>

</div>
</aside>
<div class="dislpayArrow hidden-xs"><a class="pngfix" href="javascript:void(0);" onClick="displaynavbar(this)"></a></div>
<section class="Hui-article-box">
	<div id="Hui-tabNav" class="Hui-tabNav hidden-xs">
		<div class="Hui-tabNav-wp">
			<ul id="min_title_list" class="acrossTab cl">
				<li class="active">
					<span title="后台首页" data-href="login/login">后台首页</span>
					<em></em></li>
		</ul>
	</div>
		<div class="Hui-tabNav-more btn-group"><a id="js-tabNav-prev" class="btn radius btn-default size-S" href="javascript:;"><i class="Hui-iconfont">&#xe6d4;</i></a><a id="js-tabNav-next" class="btn radius btn-default size-S" href="javascript:;"><i class="Hui-iconfont">&#xe6d7;</i></a></div>
</div>
	<div id="iframe_box" class="Hui-article">
		<div class="show_iframe">
			<div style="display:none" class="loading"></div>
			<iframe scrolling="yes" frameborder="0" src="login/login"></iframe>
	</div>
</div>
</section>

<div class="contextMenu" id="Huiadminmenu">
	<ul>
		<li id="closethis">关闭当前 </li>
		<li id="closeall">关闭全部 </li>
</ul>
</div>
<!--_footer 作为公共模版分离出去-->
<script type="text/javascript" src="<?=config_item("domain_static")?>admin/hui/lib/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript" src="<?=config_item("domain_static")?>admin/hui/lib/layer/3.1.5/layer.js"></script>
<script type="text/javascript" src="<?=config_item("domain_static")?>admin/hui/static/h-ui/js/H-ui.min.js"></script>
<script type="text/javascript" src="<?=config_item("domain_static")?>admin/hui/static/h-ui.admin/js/H-ui.admin.js"></script> <!--/_footer 作为公共模版分离出去-->

<!--请在下方写此页面业务相关的脚本-->
<script type="text/javascript" src="<?=config_item("domain_static")?>admin/hui/lib/jquery.contextmenu/jquery.contextmenu.r2.js"></script>
<script type="text/javascript">
$(function(){
	/*$("#min_title_list li").contextMenu('Huiadminmenu', {
		bindings: {
			'closethis': function(t) {
				console.log(t);
				if(t.find("i")){
					t.find("i").trigger("click");
				}
			},
			'closeall': function(t) {
				alert('Trigger was '+t.id+'\nAction was Email');
			},
		}
	});*/
});
/*个人信息*/
function myselfinfo(){
	layer.open({
		type: 1,
		area: ['300px','200px'],
		fix: false, //不固定
		maxmin: true,
		shade:0.4,
		title: '查看信息',
		content: '<div>管理员信息</div>'
	});
}

/*资讯-添加*/
function article_add(title,url){
	var index = layer.open({
		type: 2,
		title: title,
		content: url
	});
	layer.full(index);
}
/*图片-添加*/
function picture_add(title,url){
	var index = layer.open({
		type: 2,
		title: title,
		content: url
	});
	layer.full(index);
}
/*产品-添加*/
function product_add(title,url){
	var index = layer.open({
		type: 2,
		title: title,
		content: url
	});
	layer.full(index);
}
/*用户-添加*/
function member_add(title,url,w,h){
	layer_show(title,url,w,h);
}


</script>

</body>
</html>
