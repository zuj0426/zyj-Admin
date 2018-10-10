<!doctype html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>一站管家 - 一站网集团</title>
    <meta name="description" content="一站网集团作为互联网商业生态圈的先创者与实践者，专注于为广大电商企业提供体验式营销、口碑分享传播服务，为消费者提供专业体验服务，致力于成为互联网行业中最有影响力的品牌企业，旗下有一站官网、一站管家、众划算、众夺宝、试新鲜等八大平台">
    <meta name="keywords" content="一站网 一站网集团 一站管家"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="<?=config_item("domain_static")?>www/css/jquery.fullPage.css" />
    <link rel="stylesheet" href="<?=config_item("domain_static")?>www/css/global.css">
    <script src="<?=config_item("domain_static")?>www/js/jquery.min.js"></script>
    <link rel="stylesheet" href="<?=config_item("domain_static")?>www/css/home.css">
		<link rel="stylesheet" type="text/css" href="<?=config_item("domain_static")?>www/dload/bootstrap.css" />
		<link rel="stylesheet" type="text/css" href="<?=config_item("domain_static")?>www/dload/viewGray.css" />
		<link rel="stylesheet" type="text/css" href="<?=config_item("domain_static")?>www/dload/style.css" />
		<link rel="stylesheet" type="text/css" href="<?=config_item("domain_static")?>www/dload/font-awesome.min.css" />
		<link rel="stylesheet" type="text/css" href="<?=config_item("domain_static")?>www/dload/app.css" />


</head>

<body>



<!-- heeader -->
<div id="header">
    <div class="w_wrap2 Center h_min">
        <div class="logo">
            <a href="/"><img src="<?=config_item("domain_static")?>www/img/new/logo.png"></a>
        </div>
        <div class="nav">
            <ul>
                <li>
                    <a href="/" class="a1">OA简介</a>
                </li>
              
                <li>
                    <a href="http://www.yizhangroup.com/" target="_blank"  class="a1">一站官方网</a>
                </li>
                   <li>
                    <a href="/download/"  class="a1 tabactive" style="color:#FFF;">下载app</a>
                </li>
                <li>
                    <a href="<?=config_item("domain_admin")?>" target="_blank"  class="a1">我的管家</a>
                </li>
                
            </ul>
        </div>
    </div>
</div>
	<!--wechat share icon -->
		<div style="display:none;">
			<img alt="" src="<?=config_item("domain_static")?>www/dload/logo.png" />
		</div>
		<div class="view-gray-body">
			<div class="container-fluid view-fashion-content">
				<div class="row">
					<div class="col-md-12 col-sm-12 col-xs-12">
						<div class="phone-small">
							<div class="row">
								<!--左侧 -->
								<div class="col-md-6 col-sm-6 col-xs-6 gray-appinfo-left">
									<!--图标log -->
									<div class="install-btn margin-bottom-20">
										<div class="view row">
											<div class="span12" style="text-align:center;">
												<img alt="" class="appicon" src="<?=config_item("domain_static")?>www/dload/logo.png" width="120"/>
											</div>
										</div>
									</div>
									<!--用友钱客文字 -->
									<div class="row view-fashion-app-info content-right">
										<div class="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-8 col-xs-offset-2  text-center">
											<h1 class="pull-left app-name">一站管理</h1>
										</div>
									</div>
									<!--文件信息-->
									<div class="row view-fashion-app-info ">
										<div class="col-md-8 col-md-offset-2 col-xs-12 text-center">
											<ul class="breadcrumb pull-left " style="padding-left: 0px;padding-top:0px;">
												<li>版本:<span style="color:white;">1.0.1</span></li>
												<li>大小:<span style="color:white;" >12.3 MB</span></li>
												<li>更新于:<span style="color:white;" >2018-08-18 18:18:18</span></li>
											</ul>
										</div>
									</div>
								</div>
								<!--右侧 -->
								<div class="col-md-5 col-md-offset-1 col-sm-5 col-xs-6 gray-appinfo-right">
									<div style="padding-top:80px">
										<div class="view row">
											<div class="span12 margin-bottom-10" style="text-align:center;">
													<div id="showtext">正在安装，请按Home键在桌面查看</div>
													<div class="loading"></div>
													<a href="/download/app" class="btn-u btn-u-lg install-a" title="下载">点击安装</a>
											</div>
											<div class="span12 margin-bottom-30" style="text-align:center;">
												<span> 适用于Android,ios设备</span>
											</div>
										</div>
									</div>
									<div id="scan-qr" class="view row" style="padding-left:0px;padding-right:0px;">
										<div class="span12" style="text-align:center;">
											<div class="row margin-bottom-10">
											<img class="img-qr" style="height: 150px; width: 150px" src="<?=config_item("domain_static")?>www/dload/qr.png" />
											</div>
											<div class="row margin-bottom-10">
												<span>扫描二维码安装</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!--二维码部分结束 -->
					<div style="margin: -50px;left: 100px" class="col-md-12 col-sm-12 col-xs-12 app-info">
						<form class="form-horizontal" action="/v1/app/appDownload" method="post">
							<!--更新说明内容区 -->
							<div class="row">
								<div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12" style="word-bread:break-all;">
									<div class="margin-bottom-40">
										<h2>应用介绍</h2>
											<!--应用介绍内容区 -->
											<p><span id="box" style="width:50%;" >对“一站管家”工作计划进行优化</span></p>
										<h2>更新说明</h2>
											<!--更新说明内容区 -->
											<p><span id="box" style="width:50%;" >对“一站管家”简化互网优化</span></p>
											<div> -</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	
		<div id="footer">
 
            <div id="copyright">
                广西一站网集团有限公司&nbsp;&nbsp;&nbsp;Copyright &copy;Copyright 2006-2018 yizhangroup.com 版权所有 桂B2-20110047 桂ICP备07009935号
					<br>
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=45010702000276"><img src="http://static.yizhangroup.com/www/img/wj.png" alt=""></a>
           地址：南宁市西乡塘高新区高新大道62号光辉大楼6楼（安吉万达广场斜对面）
           <a href="<?=config_item("domain_admin")?>" target="_blank"  class="a1">oa管理员</a>
            </div>
        </div>
    </div>
</div>

<div class="qr_show" id="down_load_ui" style="display: none;">
	<div class="qr_content">
		<div class="qr_img"></div>
		<div class="qr_btn">请用微信扫一扫,支持苹果与安卓</div>
		<div class="qr_title">一站管家<div class="q_1">全新的设计理念，全新的管理思想，人性化轻量级管理方法</div></div>
		<div class="qr_close" onClick="close_download()"></div>
	</div>
</div>

</body>
</html>
