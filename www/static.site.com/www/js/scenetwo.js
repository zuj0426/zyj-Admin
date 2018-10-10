/**
 * Created by Administrator on 2015/3/23.
 */

var scenetwo = (function(){

    var categorys = [],sub,cmapping={},submapping={};
    //分类
    var category = {name:"协助沟通",id:"rule",submenus:[]};
    cmapping["rule"] = category;
    categorys.push(category);

	var submenu = {name:"协助沟通场景",id:"rulesub0"};
    submapping["rulesub0"]=submenu;
    //首页
    submenu.indeximg = "img/scene/index2_1.png";
    category.submenus.push(submenu);

    //子菜单
    var submenu = {name:"企业微信",id:"rulesub1"};
    submapping["rulesub1"]=submenu;
    //描述信息
    var subde = [{name:"企业微信与系统对接，自动推送新闻、流程、日程、会议等消息，并支持直接处理",imgsrc:"img/scene/02_01_01_01.png"},{name:"在企业微信中可与企业通讯录中的任意人员发送微信消息",imgsrc:"img/scene/02_01_01_02.png"},{name:"支持微信签到、名片扫描等个性化企业级应用",imgsrc:"img/scene/02_01_01_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
    //子菜单
    var submenu = {name:"即时通讯",id:"rulesub5"};
    submapping["rulesub5"]=submenu;
    //描述信息
    var subde = [{name:"类似QQ的即时聊天，支持单聊与群聊，与系统的组织架构同步",imgsrc:"img/scene/02_01_02_01.png"},{name:"所有发送的附件都能在知识库中搜索到，加强了知识的利用",imgsrc:"img/scene/02_01_02_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);

    submenu = {name:"内部邮件",id:"rulesub2"};
    submapping["rulesub2"]=submenu;
    //描述信息
    subde =[{name:"支持与系统内的用户进行邮件交流",imgsrc:"img/scene/02_01_03_01.png"},{name:"可依托于互联网的邮件供应商或者企业自己的邮件服务器，与外部用户进行首收发邮件的操作",imgsrc:"img/scene/02_01_03_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
    submenu = {name:"事项协助",id:"rulesub3"};
    submapping["rulesub3"]=submenu;
    //描述信息
    subde = [{name:"支持企业多事项跨部门的动态团队来协助事项",imgsrc:"img/scene/02_01_04_01.png"},{name:"可对事项进行实时互动交流，帮助沉淀协作中的信息交流知识",imgsrc:"img/scene/02_01_04_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
    submenu = {name:"工作微博",id:"rulesub4"};
    submapping["rulesub4"]=submenu;
    //描述信息
    subde = [{name:"记录每天的工作内容，工作心得，以微博的方式分享给你的上级和周围的同事",imgsrc:"img/scene/02_01_05_01.png"},{name:"可以通过关注了解其他同事的工作情况，打破了只有上下级的汇报关系，让工作更加透明",imgsrc:"img/scene/02_01_05_02.png"},{name:"可以在微博中随时进行反馈和工作交流",imgsrc:"img/scene/02_01_05_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);


    category = {name:"计划任务",id:"manager",submenus:[]};
    cmapping["manager"] = category;
    categorys.push(category);

    var submenu = {name:"计划任务场景",id:"managersub0"};
    submapping["managersub0"]=submenu;
    //首页
    submenu.indeximg = "img/scene/index2_2.png";
    category.submenus.push(submenu);


    submenu = {name:"任务管理",id:"managersub1"};
    submapping["managersub1"]=submenu;
    //描述信息
    subde = [{name:"随时记录个人工作想法",imgsrc:"img/scene/02_02_01_01.png"},{name:"分解任务为具体事项",imgsrc:"img/scene/02_02_01_02.png"},{name:"定期整理任务形成TodoList",imgsrc:"img/scene/02_02_01_03.png"},{name:"对任务进行实时反馈",imgsrc:"img/scene/02_02_01_04.png"},{name:"透视下属任务执行情况",imgsrc:"img/scene/02_02_01_05.png"},{name:"对任务进行分解层级查看",imgsrc:"img/scene/02_02_01_06.png"},{name:"按时间分类，把握时间节点",imgsrc:"img/scene/02_02_01_07.png"},{name:" 对任务进行多维对比分析",imgsrc:"img/scene/02_02_01_08.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
    submenu = {name:"计划管理",id:"managersub2"};
    submapping["managersub2"]=submenu;
    //描述信息
    subde = [{name:"周期性的进行计划和总结",imgsrc:"img/scene/02_02_02_01.png"},{name:"设定个性化的计划报告模板",imgsrc:"img/scene/02_02_02_02.png"},{name:"计划报告模板中设定审批人员",imgsrc:"img/scene/02_02_02_04.png"},{name:"对已提交的计划报告进行查阅",imgsrc:"img/scene/02_02_02_05.png"},{name:"可对计划的执行情况进行反馈",imgsrc:"img/scene/02_02_02_06.png"},{name:"对下属工作汇报进行督导与互动",imgsrc:"img/scene/02_02_02_07.png"},{name:"计划报告支持多维度统计分析",imgsrc:"img/scene/02_02_02_08.png"},{name:"可与绩效考核、任务管理协同关联",imgsrc:"img/scene/02_02_02_09.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
    

    category = {name:"通讯录管理",id:"final",submenus:[]};
    cmapping["final"] = category;

    categorys.push(category);
    
	 var submenu = {name:"通讯录场景",id:"finalsub0"};
    submapping["finalsub0"]=submenu;
    //首页
    submenu.indeximg = "img/scene/index2_3.png";
    category.submenus.push(submenu);

    submenu = {name:"统一通讯",id:"finalsub1"};
    submapping["finalsub1"]=submenu;
    //描述信息
    subde = [{name:"快速建立单聊和群聊的沟通渠道",imgsrc:"img/scene/02_03_01_01.png"},{name:"快速建立任务协作",imgsrc:"img/scene/02_03_01_02.png"},{name:"快速通过短信进行联系",imgsrc:"img/scene/02_03_01_03.png"},{name:"快速通过邮件进行联系",imgsrc:"img/scene/02_03_01_04.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	submenu = {name:"通讯录管理",id:"finalsub2"};
    submapping["finalsub2"]=submenu;
    //描述信息
    subde = [{name:"通过PC端查看通讯录",imgsrc:"img/scene/02_03_02_01.png"},{name:"通过手机客户端查看通讯录",imgsrc:"img/scene/02_03_02_02.png"},{name:"通过微信查看通讯录",imgsrc:"img/scene/02_03_02_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);

	
	
	category = {name:"员工自助",id:"ygzz",submenus:[]};
    cmapping["ygzz"] = category;
    categorys.push(category);

	 var submenu = {name:"员工自助场景",id:"ygzzsub0"};
    submapping["ygzzsub0"]=submenu;
    //首页
    submenu.indeximg = "img/scene/index2_4.png";
    category.submenus.push(submenu);
	
    submenu = {name:"假期查询",id:"ygzzsub1"};
    submapping["ygzzsub1"]=submenu;
    //描述信息
    subde = [{name:"在请假申请时可以查看年假的剩余天数，以及请假的历史记录",imgsrc:"img/scene/02_04_01_01.png"},{name:"在人事模块中可查询到年假剩余天数，以及请假历史记录",imgsrc:"img/scene/02_04_01_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"报销自助",id:"ygzzsub2"};
    submapping["ygzzsub2"]=submenu;
    //描述信息
    subde = [{name:"选择项目自动关联费用承担人",imgsrc:"img/scene/02_04_02_01.png"},{name:"选择费用报销科目自动带出相关预算",imgsrc:"img/scene/02_04_02_02.png"},{name:"填写金额后自动进行计算和大小写转换",imgsrc:"img/scene/02_04_02_03.png"},{name:"报销审批后自动生成财务凭证",imgsrc:"img/scene/02_04_02_04.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"查询工资",id:"ygzzsub3"};
    submapping["ygzzsub3"]=submenu;
    //描述信息
    subde = [{name:"根据自己的工资账号和公积金账户，可在系统中查看工资的详情及历史工资单",imgsrc:"img/scene/02_04_03_01.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"业绩查询",id:"ygzzsub4"};
    submapping["ygzzsub4"]=submenu;
    //描述信息
    subde = [{name:"在销售人员岗位门户中通过不同维度进行业绩查询",imgsrc:"img/scene/02_04_04_01.png"},{name:"在销售人员在报表门户查询业绩报表",imgsrc:"img/scene/02_04_04_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"办公用品领用",id:"ygzzsub5"};
    submapping["ygzzsub5"]=submenu;
    //描述信息
    subde = [{name:"选择办公用品自动显示当前库存数量",imgsrc:"img/scene/02_04_05_01.png"},{name:"领用后自动记录人力资源卡片中的资产信息",imgsrc:"img/scene/02_04_05_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"岗位知识自助",id:"ygzzsub6"};
    submapping["ygzzsub6"]=submenu;
    //描述信息
    subde = [{name:"根据岗位知识地图的引导，可自行获取与岗位相关的资料",imgsrc:"img/scene/02_04_06_01.png"},{name:"根据不同岗位分类在知识库中查询",imgsrc:"img/scene/02_04_06_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"事项提醒",id:"ygzzsub7"};
    submapping["ygzzsub7"]=submenu;
    //描述信息
    subde = [{name:"系统会通过弹窗、短信、邮件等方式进行事项提醒",imgsrc:"img/scene/02_04_07_01.png"},{name:"系统会自动触发提醒流程进行提醒",imgsrc:"img/scene/02_04_07_02.png"},{name:"系统会通过日程方式进行事项提醒",imgsrc:"img/scene/02_04_07_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"寻求帮助",id:"ygzzsub8"};
    submapping["ygzzsub8"]=submenu;
    //描述信息
    subde = [{name:"建立协作区与他人进行咨询讨论",imgsrc:"img/scene/02_04_08_01.png"},{name:"通过内部留言进行转发寻求帮助",imgsrc:"img/scene/02_04_08_02.png"},{name:"在专家库中找到对应的人员建立快速沟通渠道直接询问",imgsrc:"img/scene/02_04_08_03.png"},{name:"在内部沟通速查中找到相关负责人进行询问",imgsrc:"img/scene/02_04_08_04.png"}],{name:"在问答百科中直接提问等待别人回答",imgsrc:"img/scene/02_04_08_05.png"};
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	category = {name:"社交应用",id:"sjyy",submenus:[]};
    cmapping["sjyy"] = category;
    categorys.push(category);
	
	var submenu = {name:"社交应用场景",id:"sjyysub0"};
    submapping["sjyysub0"]=submenu;
    //首页
    submenu.indeximg = "img/scene/index2_5.png";
    category.submenus.push(submenu);

    submenu = {name:"工作微博",id:"sjyysub1"};
    submapping["sjyysub1"]=submenu;
    //描述信息
    subde = [{name:"以微博的形式记录每天的工作，个人成长历程收货，分享给周围的同事",imgsrc:"img/scene/02_05_01_01.png"},{name:"关注其他人的微博，进行评论互动交流",imgsrc:"img/scene/02_05_01_02.png"},{name:"可以设置微博权限，将我的微博共享给其他同事",imgsrc:"img/scene/02_05_01_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"圈子分享",id:"sjyysub2"};
    submapping["sjyysub2"]=submenu;
    //描述信息
    subde = [{name:"可以创建自己的工作圈，邀请大家加入，在圈子中进行工作交流和分享",imgsrc:"img/scene/02_05_02_01.png"},{name:"个人主页的维护，可以打上标签，形成专家卡片",imgsrc:"img/scene/02_05_02_02.png"},{name:"在圈子中可以通过@的方式随时与他人进行沟通分享",imgsrc:"img/scene/02_05_02_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"企业微信",id:"sjyysub3"};
    submapping["sjyysub3"]=submenu;
    //描述信息
    subde = [{name:"企业微信与系统对接，推送新闻、流程、日程、会议等消息，并可直接处理",imgsrc:"img/scene/02_05_03_01.png"},{name:"在企业微信中可给企业通讯录中的任意人员发送微信消息",imgsrc:"img/scene/02_05_03_02.png"},{name:"支持微信签到、微社区等掌上应用",imgsrc:"img/scene/02_05_03_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"即时通讯",id:"sjyysub4"};
    submapping["sjyysub4"]=submenu;
    //描述信息
    subde = [{name:"类似QQ的即时聊天，支持单聊与群聊",imgsrc:"img/scene/02_05_04_01.png"},{name:"类似于微信的即时聊天，可以给组织中存在的任意人员发送消息",imgsrc:"img/scene/02_05_04_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"问答百科",id:"sjyysub5"};
    submapping["sjyysub5"]=submenu;
    //描述信息
    subde = [{name:"收集了常见的问题集及应答，方便搜索和自助解决问题",imgsrc:"img/scene/02_05_05_01.png"},{name:"可以在线进行提问，等待别人回答",imgsrc:"img/scene/02_05_05_02.png"},{name:"可以在微博中随时进行反馈和工作交流",imgsrc:"img/scene/02_05_05_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	category = {name:"知识管理",id:"zsgl",submenus:[]};
    cmapping["zsgl"] = category;
    categorys.push(category);

	var submenu = {name:"知识场景",id:"zsglsub0"};
    submapping["zsglsub0"]=submenu;
    //首页
    submenu.indeximg = "img/scene/index2_6.png";
    category.submenus.push(submenu);
	
    submenu = {name:"知识积累",id:"zsglsub1"};
    submapping["zsglsub1"]=submenu;
    //描述信息
    subde = [{name:"作为员工的我们基本上每天产生的文件都通过新建文档建立到我们知识库中",imgsrc:"img/scene/02_06_01_01.png"},{name:"很多的文档来自于流程，通过流程中创建文档然后自动归档到知识库中",imgsrc:"img/scene/02_06_01_02.png"},{name:"我们的邮件、计划任务、项目、客户都是文档的重要来源",imgsrc:"img/scene/02_06_01_03.png"},{name:"协作沟通，包括即时通讯和邮件中的文档附件都会成为知识的来源",imgsrc:"img/scene/02_06_01_04.png"},{name:"通过虚拟目录的方式并根据一定的类型划分方式有规律的推送出去，把历史上有价值的知识文档再次呈现出来",imgsrc:"img/scene/02_06_01_05.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"知识分享",id:"zsglsub2"};
    submapping["zsglsub2"]=submenu;
    //描述信息
    subde = [{name:"文档会自动推送到相关门户中",imgsrc:"img/scene/02_06_02_01.png"},{name:"通过流程将文档分享给原本不具备查看权限的人员",imgsrc:"img/scene/02_06_02_02.png"},{name:"支持单篇或批量进行文档共享",imgsrc:"img/scene/02_06_02_03.png"},{name:"通过虚拟目录的方式并根据一定的类型划分方式有规律的推送出去，把历史上有价值的知识文档再次呈现出来",imgsrc:"img/scene/02_06_02_04.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"知识利用",id:"zsglsub3"};
    submapping["zsglsub3"]=submenu;
    //描述信息
    subde = [{name:"将知识进行加工提炼发布到相关门户中",imgsrc:"img/scene/02_06_03_01.png"},{name:"建立专家网络，专家的观点文章可以在相关领域起到很大借鉴作用",imgsrc:"img/scene/02_06_03_02.png"},{name:"根据不同的业务特性和岗位职责将分散的文档形成知识地图",imgsrc:"img/scene/02_06_03_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"知识创新",id:"zsglsub4"};
    submapping["zsglsub4"]=submenu;
    //描述信息
    subde = [{name:"提供了一个可以针对知识相互讨论、交流、评价的环境，激励机制能鼓励所有员工能更积极的共享知识和创新",imgsrc:"img/scene/02_06_04_01.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"知识地图",id:"zsglsub5"};
    submapping["zsglsub5"]=submenu;
    //描述信息
    subde = [{name:"将与岗位相关的知识聚合在一起形成岗位知识地图，帮助每个员工快速了解岗位职责和相关技能",imgsrc:"img/scene/02_06_05_01.png"},{name:"将培训相关课件和资料形成培训指引地图，帮助新员工进行自助学习，减少企业的培训成本",imgsrc:"img/scene/02_06_05_02.png"},{name:"将公司相关制度进行整理形成制度知识地图，帮助每一位员工更了解企业制度",imgsrc:"img/scene/02_06_05_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"知识门户",id:"zsglsub6"};
    submapping["zsglsub6"]=submenu;
    //描述信息
    subde = [{name:"文档会自动推送到相关门户中，通过知识门户能够快速获取对应的知识以及经验分享",imgsrc:"img/scene/02_06_06_01.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"全局搜索",id:"zsglsub7"};
    submapping["zsglsub7"]=submenu;
    //描述信息
    subde = [{name:"可以在系统统一的知识库中进行搜索，打造企业内部的baidu",imgsrc:"img/scene/02_06_07_01.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	category = {name:"人才服务",id:"rcfw",submenus:[]};
    cmapping["rcfw"] = category;
    categorys.push(category);

	var submenu = {name:"人才服务场景",id:"rcfwsub0"};
    submapping["rcfwsub0"]=submenu;
    //首页
    submenu.indeximg = "img/scene/index2_7.png";
    category.submenus.push(submenu);
	
    submenu = {name:"人力资源卡片",id:"rcfwsub1"};
    submapping["rcfwsub1"]=submenu;
    //描述信息
    subde = [{name:"通过人力资料卡片能够看到与人员相关的各类信息，支持直接发送邮件、短信与之沟通",imgsrc:"img/scene/02_07_01_01.png"},{name:"方便领导穿透了解下属的工作轨迹和成长历程",imgsrc:"img/scene/02_07_01_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"专家知识地图",id:"rcfwsub2"};
    submapping["rcfwsub2"]=submenu;
    //描述信息
    subde = [{name:"建立专家网络，专家的观点文章可以在相关领域起到很大借鉴作用",imgsrc:"img/scene/02_07_02_01.png"},{name:"通过查找专家可以建立快速沟通通道，进行问题的咨询和交流",imgsrc:"img/scene/02_07_02_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"优秀员工门户",id:"rcfwsub3"};
    submapping["rcfwsub3"]=submenu;
    //描述信息
    subde = [{name:"公布优秀员工名单以及其特长，旨在激励内部员工及提供更优质的服务",imgsrc:"img/scene/02_07_03_01.png"},{name:"优秀员工的经验分享传播",imgsrc:"img/scene/02_07_03_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	
	
	category = {name:"差旅服务",id:"clfw",submenus:[]};
    cmapping["clfw"] = category;
    categorys.push(category);

	var submenu = {name:"差旅服务场景",id:"clfwsub0"};
    submapping["clfwsub0"]=submenu;
    //首页
    submenu.indeximg = "img/scene/index2_8.png";
    category.submenus.push(submenu);
	
	 submenu = {name:"外出管理",id:"clfwsub1"};
    submapping["clfwsub1"]=submenu;
    //描述信息
    subde = [{name:"根据外出申请中的开始时间和结束时间，系统会自动更新到考勤模块中",imgsrc:"img/scene/02_08_01_01.png"},{name:"自动显示历史外出记录",imgsrc:"img/scene/02_08_01_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
    submenu = {name:"出差申请",id:"clfwsub4"};
    submapping["clfwsub4"]=submenu;
    //描述信息
    subde = [{name:"出差关联项目和客户信息，可作为费用报销的参考依据",imgsrc:"img/scene/02_08_02_01.png"},{name:"出差申请可自动触发借款流程",imgsrc:"img/scene/02_08_02_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"出差订票",id:"clfwsub2"};
    submapping["clfwsub2"]=submenu;
    //描述信息
    subde = [{name:"根据出差地点和日期，自动关联携程订票，方便查看相关航班信息",imgsrc:"img/scene/02_08_03_01.png"},{name:"差旅申请可自动触发商旅订票流程",imgsrc:"img/scene/02_08_03_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"出差报销",id:"clfwsub3"};
    submapping["clfwsub3"]=submenu;
    //描述
    subde = [{name:"基于多维度、多关联、多角度、多层级、多方案差旅报销实现",imgsrc:"img/scene/02_08_04_01.png"},{name:"根据费用承担单位，承担人，发生日期自动带出预算信息",imgsrc:"img/scene/02_08_04_02.png"},{name:"报销单中关联借款明细，方便对借款单的冲销",imgsrc:"img/scene/02_08_04_03.png"},{name:"项目费用报销选择具体项目，按项目进行费用的归集",imgsrc:"img/scene/02_08_04_04.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	
	category = {name:"时间管理",id:"sjgl",submenus:[]};
    cmapping["sjgl"] = category;
    categorys.push(category);
	
	var submenu = {name:"时间管理场景",id:"sjglsub0"};
    submapping["sjglsub0"]=submenu;
    //首页
    submenu.indeximg = "img/scene/index2_9.png";
    category.submenus.push(submenu);

	 submenu = {name:"日程管理",id:"sjglsub1"};
    submapping["sjglsub1"]=submenu;
    //描述信息
    subde = [{name:"可以随时创建日程，同时可以看到别人共享给我的日程",imgsrc:"img/scene/02_09_01_01.png"},{name:"通过流程、项目、客户、会议中的相关信息会自动转化成日程",imgsrc:"img/scene/02_09_01_02.png"},{name:"支持周期性日程，比如周报，每周都要提交的任务，每周自动创建一个填写周报的任务出来",imgsrc:"img/scene/02_09_01_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
    submenu = {name:"日程面板",id:"sjglsub4"};
    submapping["sjglsub4"]=submenu;
    //描述信息
    subde = [{name:"可以通过日、周、月的不同视图展现全部的日程安排",imgsrc:"img/scene/02_09_02_01.png"},{name:"可以通过周视图了解全部有权限查看的日程安排",imgsrc:"img/scene/02_09_02_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"时间冲突",id:"sjglsub2"};
    submapping["sjglsub2"]=submenu;
    //描述信息
    subde = [{name:"通过日程视图可以看到别人与自己的时间冲突情况",imgsrc:"img/scene/02_09_03_01.png"},{name:"通过人的维度查看别人的日程是否与自己冲突",imgsrc:"img/scene/02_09_03_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"人员动态看板",id:"sjglsub3"};
    submapping["sjglsub3"]=submenu;
    //描述信息
    subde = [{name:"当人员的请假、外出、出差审批通过后，门户中的人员动态看板会滚动外出信息，便于他人了解并协调工作",imgsrc:"img/scene/02_09_04_01.png"},{name:"通过查询日程了解他人安排并协调工作",imgsrc:"img/scene/02_09_04_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	
	
	category = {name:"工作效率",id:"gzxl",submenus:[]};
    cmapping["gzxl"] = category;
    categorys.push(category);

	var submenu = {name:"工作效率场景",id:"gzxlsub0"};
    submapping["gzxlsub0"]=submenu;
    //首页
    submenu.indeximg = "img/scene/index2_10.png";
    category.submenus.push(submenu);
	
	 submenu = {name:"超时提醒",id:"gzxlsub1"};
    submapping["gzxlsub1"]=submenu;
    //描述信息
    subde = [{name:"可根据流程节点设置处理时限，系统会自动通过短信、邮件等方式进行超时提醒，催促相关人员尽快处理，提供工作效率",imgsrc:"img/scene/02_10_01_01.png"},{name:"流程即将超时，短信提醒当前处理人",imgsrc:"img/scene/02_10_01_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
    submenu = {name:"流程效率",id:"gzxlsub4"};
    submapping["gzxlsub4"]=submenu;
    //描述信息
    subde = [{name:"通过流程类型数量统计，分析流程使用情况",imgsrc:"img/scene/02_10_02_01.png"},{name:"通过流程待办事宜统计，了解流程处理效率",imgsrc:"img/scene/02_10_02_02.png"},{name:"通过流程效率分析，可以看到流程、节点、人员的处理效率，作为流程优化和提高工作效率的依据",imgsrc:"img/scene/02_10_02_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	
	
	
	
	
	
    


    return {
        initApp:function(){
           this.initCategory();
           this.bindEvents();
           $(".scenetwo .weaver_scenemenu").eq(0).trigger('click');
        //初始化根菜单
        },initCategory:function(){
            var catehtmls = [];
            for(var i=0;i<categorys.length;i++){
                catehtmls.push(" <span class='weaver_scenemenu'  item-id='"+categorys[i].id+"'>"+categorys[i].name+"</span>");
            }
            $(".scenetwo .weaver_scenemenusall").html(catehtmls.join(""));
        //初始化事件集合
        },bindEvents:function(){
           $(".scenetwo .weaver_scenemenusall").delegate('.weaver_scenemenu','click',function(){
                var current = $(this);
                var itemid = current.attr("item-id");
                var subhtmls = [];
                var submenus = cmapping[itemid].submenus;
                for(var i=0;i<submenus.length;i++){
                    subhtmls.push("<span class='weaver_scenesubmenu' item-id='"+submenus[i].id+"'>"+submenus[i].name+"</span>");
                }
                current.parents(".weaver_scenemenusall").find(".weaver_scenemenu").removeClass("weaver_active"); 
			   current.addClass("weaver_active");
               $(".scenetwo .weaver_scenesubmenus").html(subhtmls.join(""));
               $(".scenetwo .weaver_scenesubmenu").eq(0).trigger('click');
           });

            $(".scenetwo .weaver_scenesubmenus").delegate('.weaver_scenesubmenu','click',function(){
                var current = $(this);
                var itemid = current.attr("item-id");
                var subhtmls = [];
                var imgs = ["<div class='weaver_banner'>","<ul>"];
                 
                if(submapping[itemid].indeximg){
				     $(".scenetwo .weaver_scenedescribe").append("<div class='imgoverlay' style='position:absolute;left:0;top:0;right:0;bottom:0;z-index:10;text-align: center;margin-top: 12px;  background: #fff;'><span style='display:inline-block;height:100%;vertical-align: middle;'></span><img src='"+submapping[itemid].indeximg+"'></div>");
                     $(".scenetwo .weaver_scenesubmenu").removeClass("activemn");
					 current.addClass("activemn");
				}else{
					$(".scenetwo .imgoverlay").remove();
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
					$(".scenetwo .weaver_scenedeslists").html(subhtmls.join(""));
					$(".scenetwo .weaver_scenesubmenu").removeClass("activemn");
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
        
          
            $(".scenetwo .weaver_scenedeslists").delegate(".weaverdes",'click',function(){
                var index = $(this).attr("index");
                var weaver_deslists = $(this).parents(".weaver_deslists");
                weaver_deslists.find(".dot").eq(index).trigger("click");
            });
            $(".scenetwo .weaver_scenemenusmore").click(function(){
                var el = $(".scenetwo .weaver_scenemenusall"),moreel = $(".scenetwo .weaver_scenemenusmore");
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