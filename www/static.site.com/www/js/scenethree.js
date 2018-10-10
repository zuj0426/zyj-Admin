/**
 * Created by Administrator on 2015/3/23.
 */

var scenethree = (function(){

    var categorys = [],sub,cmapping={},submapping={};
    //分类
    var category = {name:"数据报表",id:"sjbb",submenus:[]};
    cmapping["sjbb"] = category;
    categorys.push(category);

 var submenu = {name:"数据报表场景",id:"sjbbsub0"};
    submapping["sjbbsub0"]=submenu;
    //首页
    submenu.indeximg = "img/scene/index3_1.png";
    category.submenus.push(submenu);


    //子菜单
    var submenu = {name:"各类指标门户",id:"sjbbsub1"};
    submapping["sjbbsub1"]=submenu;
    //描述信息
    var subde = [{name:"通过财务门户获取各项财务指标，其中包括偿债能力指标、运营能力指标以及盈利能力指标等，帮助决策层掌握公司财务运营状况",imgsrc:"img/scene/03_01_01_01.png"},{name:"通过销售门户获取各项销售指标，其中包括年度销售指标、新客户开发数量、合同履约率等，帮助管理层掌握公司产品销售情况",imgsrc:"img/scene/03_01_01_02.png"},{name:"通过项目门户获取各项项目指标，其中包括项目验收率、客户满意度等，帮助管理层了解公司项目进展情况",imgsrc:"img/scene/03_01_01_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"业绩经营表",id:"sjbbsub2"};
    submapping["sjbbsub2"]=submenu;
    //描述信息
    var subde = [{name:"通过经营业绩表便于企业管理层了解公司经营情况、销售业务情况等",imgsrc:"img/scene/03_01_02_01.png"},{name:"通过报表门户，企业高层人员可以了解公司的项目统计、合同金额汇总等信息",imgsrc:"img/scene/03_01_02_02.png"},];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	var category = {name:"客户管理",id:"khgl",submenus:[]};
    cmapping["khgl"] = category;
    categorys.push(category);

	 var submenu = {name:"客户管理场景",id:"khglsub0"};
    submapping["khglsub0"]=submenu;
    //首页
    submenu.indeximg = "img/scene/index3_2.png";
    category.submenus.push(submenu);

    //子菜单
    var submenu = {name:"客户查询",id:"khglsub1"};
    submapping["khglsub1"]=submenu;
    //描述信息
    var subde = [{name:"通过客户名称、客户类型、客户状态等多维度进行搜索",imgsrc:"img/scene/03_02_01_01.png"},{name:"在客户列表中可直接给客户联系人发送邮件、创建与此客户有关的流程、协作和日程",imgsrc:"img/scene/03_02_01_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"客户联系",id:"khglsub2"};
    submapping["khglsub2"]=submenu;
    //描述信息
    var subde = [{name:"通过客户名称、客户类型、客户状态等多维度进行搜索",imgsrc:"img/scene/03_02_02_01.png"},{name:"上级可以随时跟踪下属跟踪客户的情况，进行沟通反馈",imgsrc:"img/scene/03_02_02_02.png"},{name:"支持设置周期，对客户经理进行提醒，保持与客户的定期交流和联系",imgsrc:"img/scene/03_02_02_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"商机管理",id:"khglsub3"};
    submapping["khglsub3"]=submenu;
    //描述信息
    var subde = [{name:"清晰的记录商机来源、预期销售金额以及当前商机所处的阶段",imgsrc:"img/scene/03_02_03_01.png"},{name:"对商机可以进行实时反馈，支持商机灵活分配，商机合并等功能",imgsrc:"img/scene/03_02_03_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	var category = {name:"项目管理",id:"xmgl",submenus:[]};
    cmapping["xmgl"] = category;
    categorys.push(category);

	 var submenu = {name:"项目管理场景",id:"xmglsub0"};
    submapping["xmglsub0"]=submenu;
    //首页
    submenu.indeximg = "img/scene/index3_3.png";
    category.submenus.push(submenu);


    //子菜单
    var submenu = {name:"立项管理",id:"xmglsub1"};
    submapping["xmglsub1"]=submenu;
    //描述信息
    var subde = [{name:"根据不同项目类型制定不同的项目模板",imgsrc:"img/scene/03_03_01_01.png"},{name:"项目新建后通过流程审核即立项成功",imgsrc:"img/scene/03_03_01_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"项目协助",id:"xmglsub2"};
    submapping["xmglsub2"]=submenu;
    //描述信息
    var subde = [{name:"可根据当前项目创建协作区，随时与相关人员进行沟通交流",imgsrc:"img/scene/03_03_02_01.png"},{name:"将项目任务化，在任务中执行反馈交流",imgsrc:"img/scene/03_03_02_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
    var submenu = {name:"项目台账",id:"xmglsub3"};
    submapping["xmglsub3"]=submenu;
    //描述信息
    var subde = [{name:"项目信息的统一管理，支持关键字搜索",imgsrc:"img/scene/03_03_03_01.png"},{name:"项目信息受权限控制，项目组成员及项目维护人员有项目查看权限",imgsrc:"img/scene/03_03_03_02.png"},{name:"通过项目台账可以查看项目卡片，详细了解项目的进展情况",imgsrc:"img/scene/03_03_03_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);	
	
	
	var category = {name:"研发管理",id:"yfgl",submenus:[]};
    cmapping["yfgl"] = category;
    categorys.push(category);

	 var submenu = {name:"研发管理场景",id:"yfglsub0"};
    submapping["yfglsub0"]=submenu;
    //首页
    submenu.indeximg = "img/scene/index3_4.png";
    category.submenus.push(submenu);

    //子菜单
    var submenu = {name:"需求收集",id:"yfglsub1"};
    submapping["yfglsub1"]=submenu;
    //描述信息
    var subde = [{name:"通过日常的项目开发流程，开发需求文档形成统一的需求库",imgsrc:"img/scene/03_04_01_01.png"},{name:"在相关协作区中时时收集来自公司内部员工对产品的优化建议",imgsrc:"img/scene/03_04_01_02.png"},{name:"客服人员接收来自客户的问题反馈，将问题进行总结归纳后部分转入需库",imgsrc:"img/scene/03_04_01_03.png"},{name:"可在知识树中针对具体功能点提出建议和需求",imgsrc:"img/scene/03_04_01_04.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"需求讨论",id:"yfglsub2"};
    submapping["yfglsub2"]=submenu;
    //描述信息
    var subde = [{name:"可在相关技术讨论协作区内就需求方面进行探讨",imgsrc:"img/scene/03_04_02_01.png"},{name:"在知识树中可以就研发中或规划中的具体功能进行讨论",imgsrc:"img/scene/03_04_02_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"研发任务",id:"yfglsub3"};
    submapping["yfglsub3"]=submenu;
    //描述信息
    var subde = [{name:"在研发任务管理中可根据产品线、产品功能、系统版本跟踪每一项研发任务的进度",imgsrc:"img/scene/03_04_03_01.png"},{name:"对研发任务中的附件、版本、交流沟通情况进行统一管理",imgsrc:"img/scene/03_04_03_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	var category = {name:"客服管理",id:"kfgl",submenus:[]};
    cmapping["kfgl"] = category;
    categorys.push(category);

	 var submenu = {name:"客服管理场景",id:"kfglsub0"};
    submapping["kfglsub0"]=submenu;
    //首页
    submenu.indeximg = "img/scene/index3_5.png";
    category.submenus.push(submenu);


    //子菜单
    var submenu = {name:"客户问题跟踪",id:"kfglsub1"};
    submapping["kfglsub1"]=submenu;
    //描述信息
    var subde = [{name:"可跟踪客户问题当前处理状态，相关负责人，以及客户对问题的持续反馈",imgsrc:"img/scene/03_05_01_01.png"},{name:"可在微云中提交、查询问题处理情况",imgsrc:"img/scene/03_05_01_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"客户生日提醒",id:"kfglsub2"};
    submapping["kfglsub2"]=submenu;
    //描述信息
    var subde = [{name:"设置客户联系人的生日，客户联系人到了生日的时候可以给出相应的祝福",imgsrc:"img/scene/03_05_02_01.png"},{name:"根据客户生日系统自动触发提醒工作流",imgsrc:"img/scene/03_05_02_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);

	var submenu = {name:"客户问题自助",id:"kfglsub3"};
    submapping["kfglsub3"]=submenu;
    //描述信息
    var subde = [{name:"可在客户门户中跟踪相关问题处理过程，下载相关产品手册",imgsrc:"img/scene/03_05_03_01.png"},{name:"可在云服务中心里查找常见问题的解答，以及阅读在线文库",imgsrc:"img/scene/03_05_03_02.png"},{name:"可在云商店中下载相关应用及模板",imgsrc:"img/scene/03_05_03_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	var category = {name:"市场活动",id:"schd",submenus:[]};
    cmapping["schd"] = category;
    categorys.push(category);

	 var submenu = {name:"市场活动场景",id:"schdsub0"};
    submapping["schdsub0"]=submenu;
    //首页
    submenu.indeximg = "img/scene/index3_6.png";
    category.submenus.push(submenu);


    //子菜单
    var submenu = {name:"idea收集讨论",id:"schdsub1"};
    submapping["schdsub1"]=submenu;
    //描述信息
    var subde = [{name:"在协作区中收集市场活动相关建议想法",imgsrc:"img/scene/03_06_01_01.png"},{name:"在任务中收集活动相关的建议和想法",imgsrc:"img/scene/03_06_01_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
    var submenu = {name:"市场活动任务安排",id:"schdsub2"};
    submapping["schdsub2"]=submenu;
    //描述信息
    var subde = [{name:"根据市场活动的主线建任务，对主要任务进行分解，确定每个任务的负责人和完成日期，执行过程中可随时进行反馈",imgsrc:"img/scene/03_06_02_01.png"},{name:"根据市场活动的会议，形成会议任务",imgsrc:"img/scene/03_06_02_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
    var submenu = {name:"市场活动知识分享",id:"schdsub3"};
    submapping["schdsub3"]=submenu;
    //描述信息
    var subde = [{name:"把市场活动中的方案、宣传资料、案例等在知识库中进行统一管理和分享",imgsrc:"img/scene/03_06_03_01.png"},{name:"市场活动的相关新闻、照片、视频资料等第一时间在门户中推送出来",imgsrc:"img/scene/03_06_03_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);	
	
	
	var category = {name:"质量管理",id:"zlgl",submenus:[]};
    cmapping["zlgl"] = category;
    categorys.push(category);

	 var submenu = {name:"质量管理场景",id:"zlglsub0"};
    submapping["zlglsub0"]=submenu;
    //首页
    submenu.indeximg = "img/scene/index3_7.png";
    category.submenus.push(submenu);


    //子菜单
    var submenu = {name:"ISO文件管理",id:"zlglsub1"};
    submapping["zlglsub1"]=submenu;
    //描述信息
    var subde = [{name:"提供文档显示和编辑模板，确保文档按照格式要求发布",imgsrc:"img/scene/03_07_01_01.png"},{name:"对文档的版本、状态、审批进行严格的控制，帮助企业建立质量体系中的文控体系",imgsrc:"img/scene/03_07_01_02.png"},{name:"ISO程序文件的生效、实效以及受控都可以通过后台的设置完成",imgsrc:"img/scene/03_07_01_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);

	 var submenu = {name:"流程安全管理",id:"zlglsub2"};
    submapping["zlglsub2"]=submenu;
    //描述信息
    var subde = [{name:"实现流程的版本统一管理",imgsrc:"img/scene/03_07_02_01.png"},{name:"记录流程字段内容修改日志，作为审计的依据",imgsrc:"img/scene/03_07_02_02.png"},{name:"系统自动记录流程维护日志，后台安全管理",imgsrc:"img/scene/03_07_02_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	var category = {name:"供应商管理",id:"gysgl",submenus:[]};
    cmapping["gysgl"] = category;
    categorys.push(category);

	 var submenu = {name:"供应商场景",id:"gysglsub0"};
    submapping["gysglsub0"]=submenu;
    //首页
    submenu.indeximg = "img/scene/index3_8.png";
    category.submenus.push(submenu);


    //子菜单
    var submenu = {name:"供应商查询",id:"gysglsub1"};
    submapping["gysglsub1"]=submenu;
    //描述信息
    var subde = [{name:"可以通过供应商的关键字、分类等信息进行查询",imgsrc:"img/scene/03_08_01_01.png"},{name:"可通过供应商的地域信息进行查询统计",imgsrc:"img/scene/03_08_01_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
    var submenu = {name:"供应商台账",id:"gysglsub2"};
    submapping["gysglsub2"]=submenu;
    //描述信息
    var subde = [{name:"建立统一的供应商台账，维护台账的管理权限，通过台账可以查看供应商卡片中的详细信息以及业务往来",imgsrc:"img/scene/03_08_02_01.png"},{name:"通过流程转数据，将流程信息转为台账信息，如供应商台账评分记录来自供应商评分流程",imgsrc:"img/scene/03_08_02_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"供应商共享",id:"gysglsub3"};
    submapping["gysglsub3"]=submenu;
    //描述信息
    var subde = [{name:"通过供应供应商的卡片共享，可以全方位的记录供应商联系过程中的所有信息",imgsrc:"img/scene/03_08_03_01.png"},{name:"异构系统的供应商信息同步",imgsrc:"img/scene/03_08_03_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);	
	
	var submenu = {name:"供应商门户",id:"gysglsub4"};
    submapping["gysglsub4"]=submenu;
    //描述信息
    var subde = [{name:"通过供应商门户可随时跟踪订单情况、在线提供最新报价",imgsrc:"img/scene/03_08_04_01.png"},{name:"通过供应商统计报表门户了解供应商运营情况",imgsrc:"img/scene/03_08_04_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	

	var category = {name:"代理商管理",id:"dlsgl",submenus:[]};
    cmapping["dlsgl"] = category;
    categorys.push(category);

	 var submenu = {name:"代理商场景",id:"dlsglsub0"};
    submapping["dlsglsub0"]=submenu;
    //首页
    submenu.indeximg = "img/scene/index3_9.png";
    category.submenus.push(submenu);


    //子菜单
    var submenu = {name:"代理商门户",id:"dlsglsub1"};
    submapping["dlsglsub1"]=submenu;
    //描述信息
    var subde = [{name:"通过代理商门户可随时获知最新代理政策、渠道策略、代理产品资讯等",imgsrc:"img/scene/03_09_01_01.png"},{name:"根据代理商行业不同，打造不同风格的代理商门户",imgsrc:"img/scene/03_09_01_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);	
	
    var submenu = {name:"代理商查询",id:"dlsglsub2"};
    submapping["dlsglsub2"]=submenu;
    //描述信息
    var subde = [{name:"通过代理商关键字、代理产品系列、代理地区等信息进行查询",imgsrc:"img/scene/03_09_02_01.png"},{name:"代理商发展历程图指引如何发展代理商",imgsrc:"img/scene/03_09_02_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);	
	
    var submenu = {name:"代理商台账",id:"dlsglsub3"};
    submapping["dlsglsub3"]=submenu;
    //描述信息
    var subde = [{name:"建立统一的代理商台账，维护台账的管理权限，通过台账可以查看代理商卡片中的详细信息以及业务往来",imgsrc:"img/scene/03_09_03_02.png"},{name:"代理商培训方式通知以及相关注意事宜",imgsrc:"img/scene/03_09_03_02.png"},];
    submenu.subdes = subde;
    category.submenus.push(submenu);	
	
	


    return {
        initApp:function(){
           this.initCategory();
           this.bindEvents();
           $(".scenethree .weaver_scenemenu").eq(0).trigger('click');
        //初始化根菜单
        },initCategory:function(){
            var catehtmls = [];
            for(var i=0;i<categorys.length;i++){
                catehtmls.push(" <span class='weaver_scenemenu'  item-id='"+categorys[i].id+"'>"+categorys[i].name+"</span>");
            }
            $(".scenethree .weaver_scenemenusall").html(catehtmls.join(""));
        //初始化事件集合
        },bindEvents:function(){
           $(".scenethree .weaver_scenemenusall").delegate('.weaver_scenemenu','click',function(){
                var current = $(this);
                var itemid = current.attr("item-id");
                var subhtmls = [];
                var submenus = cmapping[itemid].submenus;
                for(var i=0;i<submenus.length;i++){
                    subhtmls.push("<span class='weaver_scenesubmenu' item-id='"+submenus[i].id+"'>"+submenus[i].name+"</span>");
                }
				current.parents(".weaver_scenemenusall").find(".weaver_scenemenu").removeClass("weaver_active"); 
			   current.addClass("weaver_active");
               $(".scenethree .weaver_scenesubmenus").html(subhtmls.join(""));
               $(".scenethree .weaver_scenesubmenu").eq(0).trigger('click');
           });

           
            $(".scenethree .weaver_scenesubmenus").delegate('.weaver_scenesubmenu','click',function(){
                var current = $(this);
                var itemid = current.attr("item-id");
                var subhtmls = [];
                var imgs = ["<div class='weaver_banner'>","<ul>"];
                 
                if(submapping[itemid].indeximg){
				     $(".scenethree .weaver_scenedescribe").append("<div class='imgoverlay' style='position:absolute;left:0;top:0;right:0;bottom:0;z-index:10;text-align: center;margin-top: 12px;  background: #fff;'><span style='display:inline-block;height:100%;vertical-align: middle;'></span><img src='"+submapping[itemid].indeximg+"'></div>");
                     $(".scenethree .weaver_scenesubmenu").removeClass("activemn");
					 current.addClass("activemn");
				}else{
					$(".scenethree .imgoverlay").remove();
					var subdes = submapping[itemid].subdes;
					for(var i=0;i<subdes.length;i++){
						for(var i=0;i<subdes.length;i++){
							if(i===0)
								subhtmls.push("<div class='weaverdes weaver_scenedeslist hlight' index='"+i+"'>"+subdes[i].name+"</div>");
							else
								subhtmls.push("<div class='weaverdes weaver_scenedeslist'  index='"+i+"'>"+subdes[i].name+"</div>");
							imgs.push(" <li style=\"background-image: url('"+subdes[i].imgsrc+"');\"></li>");
						}
					}
					imgs.push("</ul>","</div>");
					$(".scenethree .weaver_scenedeslists").html(subhtmls.join(""));
					$(".scenethree .weaver_scenesubmenu").removeClass("activemn");
					current.addClass("activemn");
					var wrapper = current.parents(".weaver_scenecontent").find(".weaver_bannerwrapper");
					wrapper.html(imgs.join(""));
					wrapper.find('.weaver_banner').unslider({
						arrows: true,
						fluid: true,
						dots: true
					});
				}


            });
        
           
            $(".scenethree .weaver_scenedeslists").delegate(".weaverdes",'click',function(){
                var index = $(this).attr("index");
                var weaver_deslists = $(this).parents(".weaver_deslists");
                weaver_deslists.find(".dot").eq(index).trigger("click");
            });

            $(".scenethree .weaver_scenemenusmore").click(function(){
                var el = $(".scenethree .weaver_scenemenusall"),moreel = $(".scenethree .weaver_scenemenusmore");
               if(el.css("white-space") === 'nowrap'){
                   el.css("white-space","normal");
                   //箭头向上
                   moreel.find("img").attr("src","imgs/jt.png");
               }else {
                   el.css("white-space","nowrap");
                   //箭头向下
                   moreel.find("img").attr("src","imgs/jt2.png");
               }

            });



        }


    }

})();