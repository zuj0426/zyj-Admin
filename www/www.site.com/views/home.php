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
    <script src="<?=config_item("domain_static")?>www/js/jquery.fullPage.min.js"></script>
    <link rel="stylesheet" href="<?=config_item("domain_static")?>www/css/home.css">

    <script type="text/javascript">
        $(document).ready(function() {
            //ie8 特殊处理
            if(  !document.addEventListener  ){
                $(".rotatepic>img").hide();
                $(".roteitem").css("margin-top","0px");
            }
            $('#content').fullpage({
                sectionsColor: ['#7BAABE', '#fff', '#f7f9fb', '#fff', '#f7f9fb', '#fff', '#f7f9fb', '#FAFAFA', '#f7f9fb', '#fff', '#f7f9fb', '#fff', '#f7f9fb', '#fff', '#f7f9fb', '#fff', '#f7f9fb', '#fff', '#f7f9fb'],
                slidesNavigation: true,
                navigation: true,
                navigationPosition: 'right',
                afterLoad :function(anchorLink, index){
                    
                }
            });

            
        });
    </script>
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
                    <a href="/" class="a1 tabactive" style="color:#FFF;">OA简介</a>
                </li>
              
                <li>
                    <a href="http://www.yizhangroup.com/" target="_blank"  class="a1">一站官方网</a>
                </li>
                   <li>
                    <a href="/download/"  class="a1">下载app</a>
                </li>
                
                
                <li>
                    <a href="<?=config_item("domain_admin")?>" target="_blank"  class="a1">我的管家</a>
                </li>
            </ul>
        </div>
    </div>
</div>
<div id="content">
    <div id="section1" class="section section1">

            <div class="intro1">
                <img class="pic1" src="<?=config_item("domain_static")?>www/img/new/t1.png">
                <div class="apply" onClick="open_download()">马上体验</div>
                <div class="hotline"></div>
            </div>

    </div>


    <div id="section2" class="section section2">

		<div class="containerwrapper"  style="background-image: url('img/index/s_bg.jpg');background-repeat: no-repeat;background-size: 100% 100%">
                <div class="contentcontainer" >
                     <div class="imgstack" style="background-image: url('img/index/h/s_picbg_right.png');background-position: 250px;background-repeat: no-repeat">
                          <img src="<?=config_item("domain_static")?>www/img/index/h/s_pic1.png"  class="s_pic s_pic1">
						  <img src="<?=config_item("domain_static")?>www/img/index/h/s_pic2.png"  class="s_pic s_pic2">
						  <img src="<?=config_item("domain_static")?>www/img/index/h/s_pic3.png"  class="s_pic s_pic3">
						  <img src="<?=config_item("domain_static")?>www/img/index/h/s_pic4.png"  class="s_pic s_pic4">
                     </div>
					 <div class="deslist" >
						 <h3>十一年创新电商之路</h3>
						 <p>众划算,一站之家，试客联盟，互联支付<br>广西电商行业发展</p>
						 <div class="textsplit" style="width: 318px;"></div>
						 <h3>一站管家PC端</h3>
						 <p>包含流程、门户、知识、人事、沟通、客户、项目、财务等</p>
						 <p>20多个功能模块</p>
						 <div class="textsplit" style="width: 432px;"></div>
						 <h3>APP移动端</h3>
						 <p>形成工作中心、企业微信、通信录、流程审批、移动审批、移动邮件<br>、移动文档等20多个功能模块</p>
						 <div class="textsplit" style="width: 512px;"></div>
						 <h3>微信办公</h3>
						 <p>在微信中可以方便的使用移动办公、协助沟通、流程审批</p>
						 <p>考勤签到等15个模块</p>
						 <div class="applybtn" onClick="open_download()">马上体验</div>
					 </div>
				</div>
		</div>


    </div>


    <div id="section3" class="section section3">

        <div class="introcontainer">
            <div class="textcontainer">
                <div class="textinfo">
                    <p  class="etitle">一站管家</p>
                    <h3>全新简化工作体验</h3>
                    <div class="animate-enlarge">
                      <p>
                          全新的设计理念，全新的管理思想，人性化轻量级管理方法
                      </p>
                      <p>
                          为中大型组织创建全新的高效协同办公环境
                      </p>
                      <p>
                          让组织内部的沟通协助畅通无阻!
                      </p>
                      <p>
                          为组织构建一个内部的任务管理
                      </p>
                      <p>
                          让组织内部的制度流程落地有效执行
                      </p>
                      <p>
                          让组织内的信息能够自动找人，满足各类岗位的办公所需！
                      </p>
                    </div>
                    <span class="applybtn" onClick="open_download()">马上体验</span>
                </div>
            </div>
            <div class="imgcontainer">
                <img src="<?=config_item("domain_static")?>www/img/index/imac.png">
            </div>
        </div>
    </div>


    <div id="section4" class="section section4">

        <div class="introcontainer">
            <div class="textcontainer">
                   <div class="textinfo">
                        <h3>让OA在手机app轻轻点一下完成</h3>
                        <div class="animate-rotation">
                          <p>让OA使用像微信一样方便.</p>
                          <p>让你的企业24小时移动互联.</p>
                          <p>语音、拍照、GPS等移动原生组件全面接入</p>
                            <p>支持移动建模，满足企业个性化的移动应用</p>
                            <p>支持多种微信接入方式，快速推动移动办公</p>
                          <p>APP手机端,web移动端,Pad移动端!</p>

                        </div>

                       <div class="textsplit"></div>

                       <span class="applybtn"  onClick="open_download()">
                                马上体验
                       </span>
                   </div>
             </div>
            <div class="imgcontainer">
                 <img src="<?=config_item("domain_static")?>www/img/index/phone_2.png">
             </div>
        </div>
    </div>

    <div id="section5" class="section section5">
          <div class="basecontainer">
              <div class="s5content">
                   <p style="font-size: 20px;color: #fff;margin-bottom: 6px;text-align: center;">How to improve work efficiency</p>
                   <h3>轻量级任务管家</h3>
                   <p class="animate-enlarge" style="color: #ccc;font-size: 13px;">执行力提升、知识创新、信息整合、员工自助高效办公、费用管控、移动办公、安全便捷</p>
                   <div class="rotatepic" style="text-align: center">
                       <img  src="<?=config_item("domain_static")?>www/img/index/app.png">
                   </div>
                   <div class="roteitem">
                       <div style="width: 1000px">
                        <div class="litems" style="float: left;width: 470px;">
                            <div class="item">
                                <img  src="<?=config_item("domain_static")?>www/img/index/app1.png">
                                <div >
                                    <h3 >提升执行力</h3>
                                    <p >建立以目标为核心的工作执行体系</p>
                                </div>
                            </div>
							<div class="item">
                                <img  src="<?=config_item("domain_static")?>www/img/index/app3.png">
                                <div >
                                    <h3 >知识创新</h3>
                                    <p >创建知识型组织，让知识在组织内流动</p>
                                </div>
                            </div>
                            <div class="item">
                                <img  src="<?=config_item("domain_static")?>www/img/index/app2.png">
                                <div >
                                    <h3 >保障制度落地</h3>
                                    <p >让组织的管理制度有效落地执行</p>
                                </div>
                            </div>
                            

                            <div class="item">
                                <img  src="<?=config_item("domain_static")?>www/img/index/app4.png">
                                <div >
                                    <h3 >信息门户</h3>
                                    <p >让信息主动找人而不是人找信息</p>
                                </div>
                            </div>
                        </div>

                       <div class="ritems" style="float: right;width: 470px;">
                           <div class="item">
                               <img  src="<?=config_item("domain_static")?>www/img/index/app5.png">
                               <div >
                                   <h3 >文化传播</h3>
                                   <p >让企业文化润物细无声</p>
                               </div>
                           </div>
						   <div class="item">
                               <img  src="<?=config_item("domain_static")?>www/img/index/app8.png">
                               <div >
                                   <h3 >移动化/社交化/云端化</h3>
                                   <p >让组织24小时运行，让组织更加柔性，快速部署节省成本</p>
                               </div>
                           </div>
                           <div class="item">
                               <img  src="<?=config_item("domain_static")?>www/img/index/app6.png">
                               <div >
                                   <h3 >员工自助</h3>
                                   <p >满足员工自助服务高效工作</p>
                               </div>
                           </div>
                           <div class="item">
                               <img  src="<?=config_item("domain_static")?>www/img/index/app7.png">
                               <div >
                                   <h3 >协助沟通</h3>
                                   <p >实时高效的跨部门协助沟通</p>
                               </div>
                           </div>

                          
                       </div>
                    </div>


                   </div>
				   <span class="applybtn" style="margin-top:20px;" onClick="open_download()">马上体验</span>
               </div>
          </div>
    </div>

    <div id="section6" class="section">
        <div class="introcontainer">
            <div class="textcontainer">
                 <div class="textinfo" style="width: 362px;">
                    <div class="animate-enlarge" style="background:url('img/index/list1.png') no-repeat 0 6px;padding-left: 73px;">
                      <h3>轻前端</h3>
                      <p>1、全新UI体系</p>
                      <p>2、扁平式设计风格</p>
                      <p>3、全面支持即时搜索</p>
                      <p>4、图文并茂设置向导</p>
                    </div>
                    <div class="animate-enlarge" style="background:url('img/index/list2.png') no-repeat 0 6px;padding-left: 73px; margin-top: 30px;">
                      <h3>重后台</h3>
                      <p>1、引擎式后台，灵活应对组织管理需求</p>
                      <p>2、<span style="">门户引擎、流程引擎、内容引擎构、集成引擎、建模引擎和移动引擎满足企业个性化需求</span></p>
                    </div>
                    <span class="applybtn" style="margin-left: 70px;" onClick="open_download()">马上体验</span>
                 </div>
             </div>
            <div class="imgcontainer">
                 <img src="<?=config_item("domain_static")?>www/img/index/mac.png">
             </div>
        </div>
    </div>

    <div id="section7" class="section">
          <div class="basecontainer">
              <div class="s7content">
                   <p style="font-size: 20px;">why is yizhangOA</p>
                   <h3>为什么选择一站管家</h3>
                   <div class="iconwarp">
                     <div class="iconitem iconitem1">
                       <img src="<?=config_item("domain_static")?>www/img/index/icon_1.png" alt="">
                       <h2>全面移动化</h2>
                       <p>集成微信和手机APP，web等方式让企业24小时运作</p>
                     </div>
                     <div class="iconitem iconitem2">
                       <img src="<?=config_item("domain_static")?>www/img/index/icon_2.png" alt="">
                       <h2>全面社交化</h2>
                       <p>让组织变得更加扁平，更加柔性，让员工成为中心</p>
                     </div>
                     <div class="iconitem iconitem3">
                       <img src="<?=config_item("domain_static")?>www/img/index/icon_3.png" alt="">
                       <h2>全面云端化</h2>
                       <p>满足客户开箱即用，快速部署，随时扩容的云架构设计</p>
                     </div>
                     <div class="iconitem iconitem4">
                       <img src="<?=config_item("domain_static")?>www/img/index/icon_4.png" alt="">
                       <h2>全面平台化</h2>
                       <p>前台轻量化、后台全面引擎化、灵活适用组织需求变化</p>
                     </div>
                     <span class="applybtn" style="margin-left: 365px;" onClick="open_download()">马上体验</span>
                   </div>
               </div>
          </div>
    </div>

    <div id="section8" class="section">
	     <div style="position: absolute;left: 0;top: 0;right: 0;bottom: 250px">
			<div style="width:920px;height:100%;margin:0  auto;">
                <div style="position:absolute;width: 100%;height: 300px;top: 50%;margin-top: -128px;">
				  <div class="vediocontainer" style="width:640px;height:100%;float:left;">
				  <img src="<?=config_item("domain_static")?>www/img/index/movie.png" width="640" height="364" alt=""/> </div>
				  <div style="width:280px;background:#fff;padding:20px;float:left; box-sizing: border-box;height:100%; position: relative;">
					<hr class="topline">
					<h2>"一站管理 移动办公 未来已来"<br>一站官网网宣传</h2>
					<p style="color:#A9A9A9;font-size:12px;">选择移动OA作为移动信息化的首要选择</p>
					<p style="color:#000;font-size:12px;">我们处于一个时时移动化的生活环境中！对于国内组织而言，革新工作模式，提高工作效率已经成为当务之急。我们需要把企业所有的应用装入手机，让企业内部的工作方式和沟通手段发生根本性的变化。</p>
					<hr class="bottomline">
				  </div>
				  <div class="clear"></div>
				</div>
			</div>
		 </div>
		<div id="footer">
            <div style="  background-image: url('img/new/footer_bg.png');height:250px;width:100%;color:#fff;text-align:center;font-size:14px;">
                 <div style="width:1024px;margin:0 auto;">
                    <div class="ftsection">
                        <a href="http://www.yizhangroup.com/" class="title">集团官方网</a><br>

                    </div>
                    <div class="ftsection">
                        <a href="http://www.shikee.com/" class="title">试客联盟</a><br>

                    </div>
                    <div class="ftsection">
                        <a href="http://www.zhonghuasuan.com/" class="title">众划算</a><br>

                        
                    </div>

                    <div class="ftsection">
                        <a href="https://login.hulianpay.com/" class="title">互联支付</a><br>

                    </div>
                    <div style="width:1px;height:115px;border-right:1px solid #A1B4DC;float:left;margin:95px 15px 0 15px;"></div>
                    <div class="ftsection">
					    <div class="wcode" style="display:none"><a href="http://www.yizhangroup.com/"><img src="images/wcode.png"/></a></div>
                        <a href="http://www.yizhangroup.com/" class="title" style="visibility:hidden;">关于我们</a><br>
                        <div class="qcode" style="padding-left: 75px;">一站公众号</div>
                        <div class="onlinechat" style="padding-left: 70px;">0771-3396980</div>
                    </div>
                </div>
            </div>
            <div id="copyright">
                广西一站网集团有限公司&nbsp;&nbsp;&nbsp;Copyright &copy;Copyright 2006-2018 yizhangroup.com 版权所有 桂B2-20110047 桂ICP备07009935号
					<br>
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=45010702000276"><img src="http://static.yizhangroup.com/www/img/wj.png" alt=""></a>
           地址：南宁市西乡塘高新区高新大道62号光辉大楼6楼（安吉万达广场斜对面）
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
<style type="text/css">
	.qr_close{
		width: 32px;
		height: 32px;
		top:10px;
		right: 10px;
		position: absolute;
		background:url(<?=config_item("domain_static")?>www/img/new/jaf-close-hover.png) no-repeat;
		background-size: 32px;
		cursor: pointer;
	}
	.qr_show{
	 	position: fixed;
		top: 150px;
		left: 50%;
		margin-left: -25%;
		width: 1000px;
		height: 500px;
		background: rgba(155,211,224,0.85) url(<?=config_item("domain_static")?>www/img/index/oa_bg.png) no-repeat bottom;
		border: 3px solid rgba(11,175,255,1.00);
	}
	.qr_content{
		width: 1000px;
		height: 500px;
		position: relative;
	}
	.qr_img{
		width: 300px;
		height: 300px;
		left: 20px;
		top: 20px;
		position: absolute;
		background: #999999 url(<?=config_item("domain_static")?>www/img/index/qr.png) no-repeat center;
		background-size: 90%;
		border-radius: 6px;
	}
		.qr_title{
		width: 530px;
		height: 300px;
		right: 60px;
		top: 50px;
		position: absolute;
		border-radius: 6px;
		color: #fff;
		font-size: 32px;
			font-weight: bold;
			line-height: 50px;
			text-align: right;
	}
	.qr_title .q_1{
	font-size: 20px;

	}
	.qr_btn{
		width: 600px;
		height:30px;
		left: 50px;
		bottom: 10px;
		position: absolute;
/*		background: rgba(22,158,224,1.00);	*/
		color: #fff;
		text-align: left;
		line-height: 25px;
	}
</style>
<script type="text/javascript">
    $(function(){
        $("#down_load_ui").fadeOut(1000);
    });
	function close_download(){
		$("#down_load_ui").fadeOut(1000);
	}
	function open_download(){
// 		$("#down_load_ui").fadeIn(1000);
// 		window.open('/download/app/');
		window.location.href="/download/" 

	}
</script>
</body>
</html>
