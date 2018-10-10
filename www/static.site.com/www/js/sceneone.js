/**
 * Created by Administrator on 2015/3/23.
 */

var sceneone = (function(){

    var categorys = [],sub,cmapping={},submapping={};
    //分类
    var category = {name:"资金管理",id:"rule",submenus:[]};
    cmapping["rule"] = category;
    categorys.push(category);


    var submenu = {name:"资金管理场景",id:"rulesub0"};
    submapping["rulesub0"]=submenu;
    //首页
    submenu.indeximg = "img/scene/index1_1.png";
    category.submenus.push(submenu);

 
    //子菜单
    var submenu = {name:"报销管理",id:"rulesub1"};
    submapping["rulesub1"]=submenu;
    //描述信息
    var subde = [{name:"基于多维度、多关联、多角度、多层级、多方案差旅报销实现",imgsrc:"img/scene/01_01_01_01.png"},{name:"根据费用承担单位，承担人，发生日期自动带出预算信息",imgsrc:"img/scene/01_01_01_02.png"},{name:"报销单中关联借款明细，方便对借款单的冲销",imgsrc:"img/scene/01_01_01_03.png"},{name:"项目费用报销选择具体项目，按项目进行费用的归集",imgsrc:"img/scene/01_01_01_04.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"预算管理",id:"rulesub2"};
    submapping["rulesub2"]=submenu;
    //描述信息
    var subde = [{name:"多样化、规范化、流程化预算编制实现",imgsrc:"img/scene/01_01_02_01.png"},{name:"建立以费用成本中心为责任主体的预算责任主体",imgsrc:"img/scene/01_01_02_02.png"},{name:"基于规范流程、历史数据、版本、滚动预测的精准弹性预算变更体系",imgsrc:"img/scene/01_01_02_03.png"},{name:"构建科目、期间、强度、组织、流程节点等多方案执行管控体系",imgsrc:"img/scene/01_01_02_04.png"},{name:"构建编制、执行、监控、提醒全方位预算预警体系",imgsrc:"img/scene/01_01_02_05.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	var submenu = {name:"资金管理",id:"rulesub3"};
    submapping["rulesub3"]=submenu;
    //描述信息
    var subde = [{name:"便捷、规范、高效的资金结算、支付、借支与流程审批管理",imgsrc:"img/scene/01_01_03_01.png"},{name:"做好资金计划，确保资金支出分配的合理有效，提高资金周转速度和使用效率",imgsrc:"img/scene/01_01_03_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	
	var category = {name:"行政管理",id:"xzgl",submenus:[]};
    cmapping["xzgl"] = category;
    categorys.push(category);


    //子菜单
	var submenu = {name:"行政管理场景",id:"xzglsub0"};
    submapping["xzglsub0"]=submenu;
    //首页
    submenu.indeximg = "img/scene/index1_2.png";
    category.submenus.push(submenu);


    var submenu = {name:"车辆管理",id:"xzglsub1"};
    submapping["xzglsub1"]=submenu;
    //描述信息
    var subde = [{name:"企业车辆的信息、申请、维护进行统一管理",imgsrc:"img/scene/01_02_01_01.png"},{name:"通过流程对车辆使用进行申请",imgsrc:"img/scene/01_02_01_02.png"},{name:"通过日视图、周视图和月视图，查看车辆使用情况",imgsrc:"img/scene/01_02_01_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"资产管理",id:"xzglsub2"};
    submapping["xzglsub2"]=submenu;
    //描述信息
    var subde = [{name:"建立统一的资产卡片，记录资产的基本信息",imgsrc:"img/scene/01_02_02_01.png"},{name:"从采购、入库、领用，到调拨、维修、报废，全面跟踪资产的状况",imgsrc:"img/scene/01_02_02_02.png"},{name:"预算、预测和监控，减少开销、提高现有资产的可使用率",imgsrc:"img/scene/01_02_02_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	var submenu = {name:"办公用品管理",id:"xzglsub3"};
    submapping["xzglsub3"]=submenu;
    //描述信息
    var subde = [{name:"建立统一的办公用品库，记录办公用品的基本信息",imgsrc:"img/scene/01_02_03_01.png"},{name:"从出库、入库、领用、归还跟踪办公用品的使用状况",imgsrc:"img/scene/01_02_03_02.png"},{name:"办公用品管理制度的流程落地",imgsrc:"img/scene/01_02_03_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"会议室管理",id:"xzglsub4"};
    submapping["xzglsub4"]=submenu;
    //描述信息
    var subde = [{name:"结合资产管理对会议室进行合理的分配，帮助企业有效安排各种会议资源",imgsrc:"img/scene/01_02_04_01.png"},{name:"通过不同的时间维护查看会议室的预订情况",imgsrc:"img/scene/01_02_04_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"证照管理",id:"xzglsub5"};
    submapping["xzglsub5"]=submenu;
    //描述信息
    var subde = [{name:"证照信息的统一登记管理",imgsrc:"img/scene/01_02_05_01.png"},{name:"从借阅、续借到归还跟踪证照使用情况",imgsrc:"img/scene/01_02_05_02.png"},{name:"股权架构维护，且支持版本管理",imgsrc:"img/scene/01_02_05_03.png"},{name:"证照到期提醒",imgsrc:"img/scene/01_02_05_04.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);



    var category = {name:"合同管理",id:"htgl",submenus:[]};
    cmapping["htgl"] = category;
    categorys.push(category);

    //子菜单
	var submenu = {name:"合同管理场景",id:"htglsub0"};
    submapping["htglsub0"]=submenu;
    //首页
    submenu.indeximg = "img/scene/index1_3.png";
    category.submenus.push(submenu);

    var submenu = {name:"合同管理",id:"htglsub1"};
    submapping["htglsub1"]=submenu;
    //描述信息
    var subde = [{name:"在合同审批流程中，提供格式合同",imgsrc:"img/scene/01_03_01_01.png"},{name:"在合同审批流程中展现合同关键信息",imgsrc:"img/scene/01_03_01_02.png"},{name:"合同原始文档作为流程附件",imgsrc:"img/scene/01_03_01_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"应收管理",id:"htglsub2"};
    submapping["htglsub2"]=submenu;
    //描述信息
    var subde = [{name:"建立信用评价制度，从而保证应收账款的安全性，最大限度地降低应收账款的风险",imgsrc:"img/scene/01_03_02_01.png"},{name:"建立催收账款机制，加速资金周转，避免坏账造成损失",imgsrc:"img/scene/01_03_02_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	var submenu = {name:"应付管理",id:"htglsub3"};
    submapping["htglsub3"]=submenu;
    //描述信息
    var subde = [{name:"按照合同付款比例中的付款日期和付款金额执行",imgsrc:"img/scene/01_03_03_01.png"},{name:"提供对应的历史付款记录，记录已付金额，剩余未付金额等",imgsrc:"img/scene/01_03_03_02.png"},{name:"合同付款到期提醒，根据付款日期提前进行短信或流程提醒",imgsrc:"img/scene/01_03_03_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"合同台账",id:"htglsub4"};
    submapping["htglsub4"]=submenu;
    //描述信息
    var subde = [{name:"建立统一的合同台账，方便查询和修改",imgsrc:"img/scene/01_03_04_01.png"},{name:"与合同审批流程管理，审批后合同台账才生效",imgsrc:"img/scene/01_03_04_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);




var category = {name:"人事管理",id:"rsgl",submenus:[]};
    cmapping["rsgl"] = category;
    categorys.push(category);

    //子菜单
	var submenu = {name:"人事管理场景",id:"rsglsub0"};
    submapping["rsglsub0"]=submenu;
    //首页
    submenu.indeximg = "img/scene/index1_4.png";
    category.submenus.push(submenu);


    var submenu = {name:"请假管理",id:"rsglsub1"};
    submapping["rsglsub1"]=submenu;
    //描述信息
    var subde = [{name:"根据不同的请假类型显示当前可用年假数量",imgsrc:"img/scene/01_04_01_01.png"},{name:"显示详细的历史请假记录",imgsrc:"img/scene/01_04_01_02.png"},{name:"流程结束后系统会自动把这次请假天数从剩余天数中减除掉",imgsrc:"img/scene/01_04_01_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"考勤管理",id:"rsglsub2"};
    submapping["rsglsub2"]=submenu;
    //描述信息
    var subde = [{name:"通过PC和移动端进行系统签到，支持GPS定位功能，并记录IP地址",imgsrc:"img/scene/01_04_02_01.png"},{name:"外出流程满足了外勤人员的无法签到的需求",imgsrc:"img/scene/01_04_02_02.png"},{name:"人事考勤报表详细的记录了迟到、缺勤、旷工等信息",imgsrc:"img/scene/01_04_02_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);	
	
	var submenu = {name:"招聘管理",id:"rsglsub3"};
    submapping["rsglsub3"]=submenu;
    //描述信息
    var subde = [{name:"根据所缺职位发布用工需求，录用后的内部奖励机制",imgsrc:"img/scene/01_04_03_01.png"},{name:"面试的流程化管理，详细记录面试过程",imgsrc:"img/scene/01_04_03_02.png"},{name:"人才库的统一管理，为企业储备人才",imgsrc:"img/scene/01_04_03_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"新员工入职",id:"rsglsub4"};
    submapping["rsglsub4"]=submenu;
    //描述信息
    var subde = [{name:"根据岗位知识地图的引导，自助获取相关资料",imgsrc:"img/scene/01_04_04_01.png"},{name:"提供7×24小时在线培训中心，可建立培训计划",imgsrc:"img/scene/01_04_04_02.png"},{name:"考核结果自助查询",imgsrc:"img/scene/01_04_04_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"转正管理",id:"rsglsub5"};
    submapping["rsglsub5"]=submenu;
    //描述信息
    var subde = [{name:"记录新员工培训时的成长过程",imgsrc:"img/scene/01_04_05_01.png"},{name:"转正审批的时候上级可以知道该员工转正期间相关表现",imgsrc:"img/scene/01_04_05_02.png"},{name:"转正后系统将自动将新员工的试用状态改为正式状态",imgsrc:"img/scene/01_04_05_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"离职管理",id:"rsglsub6"};
    submapping["rsglsub6"]=submenu;
    //描述信息
    var subde = [{name:"离职人员的借款\待办\资产\任务\知识一目了然",imgsrc:"img/scene/01_04_06_01.png"},{name:"离职以后该人员在相关流程的设置能够自动提醒",imgsrc:"img/scene/01_04_06_02.png"},{name:"离职人员的数据可以进行转移",imgsrc:"img/scene/01_04_06_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	

var category = {name:"公文管理",id:"gwgl",submenus:[]};
    cmapping["gwgl"] = category;
    categorys.push(category);

    //子菜单
	var submenu = {name:"公文管理场景",id:"gwglsub0"};
    submapping["gwglsub0"]=submenu;
    //首页
    submenu.indeximg = "img/scene/index1_5.png";
    category.submenus.push(submenu);


    var submenu = {name:"收文管理",id:"gwglsub1"};
    submapping["gwglsub1"]=submenu;
    //描述信息
    var subde = [{name:"收文支持自由进行传阅",imgsrc:"img/scene/01_05_01_01.png"},{name:"支持接收来自外部的发文",imgsrc:"img/scene/01_05_01_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"发文管理",id:"gwglsub2"};
    submapping["gwglsub2"]=submenu;
    //描述信息
    var subde = [{name:"支持多人多部门的会签",imgsrc:"img/scene/01_05_02_01.png"},{name:"根据正文内容自动进行套红处理",imgsrc:"img/scene/01_05_02_02.png"},{name:"支持电子签章",imgsrc:"img/scene/01_05_02_03.png"},{name:"可随时进行督查督办",imgsrc:"img/scene/01_05_02_04.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);	
	
	var submenu = {name:"请示报告",id:"gwglsub3"};
    submapping["gwglsub3"]=submenu;
    //描述信息
    var subde = [{name:"消息催办满足了请示报告处理时间紧迫的特点",imgsrc:"img/scene/01_05_03_01.png"},{name:"实现了主送和抄送的单位控制",imgsrc:"img/scene/01_05_03_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	var category = {name:"会议管理",id:"hygl",submenus:[]};
    cmapping["hygl"] = category;
    categorys.push(category);

	var submenu = {name:"会议管理场景",id:"hyglsub0"};
    submapping["hyglsub0"]=submenu;
    //首页
    submenu.indeximg = "img/scene/index1_6.png";
    category.submenus.push(submenu);


    //子菜单
    var submenu = {name:"周期性会议管理",id:"hyglsub1"};
    submapping["hyglsub1"]=submenu;
    //描述信息
    var subde = [{name:"周期性会议实现定期消息提醒，会议室自动预订，满足企业周例会、月度例会的需求",imgsrc:"img/scene/01_06_01_01.png"},{name:"统一的会议模板管理，避免周期性重复创建会议的工作",imgsrc:"img/scene/01_06_01_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"专项会议管理",id:"hyglsub2"};
    submapping["hyglsub2"]=submenu;
    //描述信息
    var subde = [{name:"满足企业各种专题性的会议，如产品培训会议、项目总结会议等，可以实现此类会议决议的督办",imgsrc:"img/scene/01_06_02_01.png"},{name:"会议纪要便于领导对会议决议做全面的了解",imgsrc:"img/scene/01_06_02_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	var submenu = {name:"年度会议管理",id:"hyglsub3"};
    submapping["hyglsub3"]=submenu;
    //描述信息
    var subde = [{name:"满足企业各种年度会议，如年中总结会议、年终总结大会等，妥善安排好相关会务工作",imgsrc:"img/scene/01_06_03_01.png"},{name:"会前相关设备使用确认，确保会议顺利召开",imgsrc:"img/scene/01_06_03_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"临时会议管理",id:"hyglsub4"};
    submapping["hyglsub4"]=submenu;
    //描述信息
    var subde = [{name:"满足企业临时的会议要求，随时查看当前会议室占用情况",imgsrc:"img/scene/01_06_04_01.png"},{name:"当应参会人员时间的冲突时自动显示",imgsrc:"img/scene/01_06_04_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	
	var category = {name:"企业文化",id:"qywh",submenus:[]};
    cmapping["qywh"] = category;
    categorys.push(category);

	var submenu = {name:"企业文化场景",id:"qywhsub0"};
    submapping["qywhsub0"]=submenu;
    //首页
    submenu.indeximg = "img/scene/index1_7.png";
    category.submenus.push(submenu);

    //子菜单
    var submenu = {name:"企业文化门户",id:"qywhsub1"};
    submapping["qywhsub1"]=submenu;
    //描述信息
    var subde = [{name:"推送企业文化理念、品牌建设、社会责任等;而且可以知道员工是否在关注公司的企业文化",imgsrc:"img/scene/01_07_01_01.png"},{name:"打造个性化企业文化门户",imgsrc:"img/scene/01_07_01_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"员工生活门户",id:"qywhsub2"};
    submapping["qywhsub2"]=submenu;
    //描述信息
    var subde = [{name:"推送各类员工活动、公司旅游等信息，丰富员工的业余生活，加强团队建设",imgsrc:"img/scene/01_07_02_01.png"},{name:"可以让员工更快更深的融入公司文化、生活中",imgsrc:"img/scene/01_07_02_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);	
	
	var submenu = {name:"企业文化培养",id:"qywhsub3"};
    submapping["qywhsub3"]=submenu;
    //描述信息
    var subde = [{name:"文档\流程\邮件等各类模板,让企业文化能够渗透到工作中去",imgsrc:"img/scene/01_07_03_01.png"},{name:"企业有完整的招聘、培训、晋升体系",imgsrc:"img/scene/01_07_03_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"企业成长点滴",id:"qywhsub4"};
    submapping["qywhsub4"]=submenu;
    //描述信息
    var subde = [{name:"把整个企业从开始成立到发展的各个节点的真实数据和信息按照时间节点展现",imgsrc:"img/scene/01_07_04_01.png"},{name:"员工互助互联、团队的协作伴随企业的成长",imgsrc:"img/scene/01_07_04_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"优秀员工门户",id:"qywhsub5"};
    submapping["qywhsub5"]=submenu;
    //描述信息
    var subde = [{name:"公布优秀员工名单以及其特长，旨在激励内部员工及提供更优质的服务",imgsrc:"img/scene/01_07_05_01.png"},{name:"优秀员工成长点滴记录汇总",imgsrc:"img/scene/01_07_05_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	
	
	var category = {name:"外部资源库",id:"wbzy",submenus:[]};
    cmapping["wbzy"] = category;
    categorys.push(category);

	var submenu = {name:"外部资源场景",id:"wbzysub0"};
    submapping["wbzysub0"]=submenu;
    //首页
    submenu.indeximg = "img/scene/index1_8.png";
    category.submenus.push(submenu);

    //子菜单
    var submenu = {name:"供应商管理",id:"wbzysub1"};
    submapping["wbzysub1"]=submenu;
    //描述信息
    var subde = [{name:"建立统一的供应商信息库，可通过不同维度进行查询",imgsrc:"img/scene/01_08_01_01.png"},{name:"提供一个信息推送窗口，包含产品和采购相关信息，及时处理订单或者物流运输动态状况信息",imgsrc:"img/scene/01_08_01_02.png"},{name:"定期对供应商进行评价，筛选合格供方",imgsrc:"img/scene/01_08_01_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"专家管理",id:"wbzysub2"};
    submapping["wbzysub2"]=submenu;
    //描述信息
    var subde = [{name:"根据每个员工的知识贡献度，按不同领域进行划分，分享其观点文章，专家源于组织，服务于组织",imgsrc:"img/scene/01_08_02_01.png"},{name:"可直接与专家联系，建立快速通道，及时处理相关问题",imgsrc:"img/scene/01_08_02_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);	
	
	var submenu = {name:"合作伙伴管理",id:"wbzysub3"};
    submapping["wbzysub3"]=submenu;
    //描述信息
   var subde = [{name:"建立统一的可共享的外部客户资源库",imgsrc:"img/scene/01_08_03_01.png"},{name:"通过客户门户外部客户融入到企业的虚拟无边界组织",imgsrc:"img/scene/01_08_03_02.png"},{name:"及时共享销售过程推进销售隐性知识的转化",imgsrc:"img/scene/01_08_03_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	
	var category = {name:"法务审计",id:"fwsj",submenus:[]};
    cmapping["fwsj"] = category;
    categorys.push(category);

	var submenu = {name:"法务审计场景",id:"fwsjsub0"};
    submapping["fwsjsub0"]=submenu;
    //首页
    submenu.indeximg = "img/scene/index1_9.png";
    category.submenus.push(submenu);

    //子菜单
    var submenu = {name:"法务门户",id:"fwsjsub1"};
    submapping["fwsjsub1"]=submenu;
    //描述信息
    var subde = [{name:"推送相关法律法规、地方政策、内部合规管理制度",imgsrc:"img/scene/01_09_01_01.png"},{name:"相关法务合同报表分析",imgsrc:"img/scene/01_09_01_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"合同风险控制",id:"fwsjsub2"};
    submapping["fwsjsub2"]=submenu;
    //描述信息
    var subde = [{name:"建立完善的合规性评估，定义不同的风险级别，避免法务风险",imgsrc:"img/scene/01_09_02_01.png"},{name:"建立风险预警机制，对合同的合规性进行实时监控",imgsrc:"img/scene/01_09_02_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);	
	
	var submenu = {name:"流程关键节点控制",id:"fwsjsub3"};
    submapping["fwsjsub3"]=submenu;
    //描述信息
   var subde = [{name:"对各种流程的关键节点加以控制,让事情在法规规定的条件下运行,如:预算内、预算外的资金管理和使用情况进行审计",imgsrc:"img/scene/01_09_03_01.png"},{name:"对于风险事宜进行风险管控",imgsrc:"img/scene/01_09_03_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	
	var category = {name:"绩效管理",id:"jxgl",submenus:[]};
    cmapping["jxgl"] = category;
    categorys.push(category);

	var submenu = {name:"绩效管理场景",id:"jxglsub0"};
    submapping["jxglsub0"]=submenu;
    //首页
    submenu.indeximg = "img/scene/index1_10.png";
    category.submenus.push(submenu);

    //子菜单
    var submenu = {name:"工作报告管理",id:"jxglsub1"};
    submapping["jxglsub1"]=submenu;
    //描述信息
    var subde = [{name:"根据不同岗位制定个性化工作报告模板",imgsrc:"img/scene/01_10_01_01.png"},{name:"员工可在设定的时间范围内，提交对应的周期性计划报告",imgsrc:"img/scene/01_10_01_02.png"},{name:"计划执行过程中可对计划的执行情况进行反馈和实时督导",imgsrc:"img/scene/01_10_01_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"绩效评分管理",id:"jxglsub2"};
    submapping["jxglsub2"]=submenu;
    //描述信息
    var subde = [{name:"统一管理员工的考核方案，设定KPI指标及考核流程",imgsrc:"img/scene/01_10_02_01.png"},{name:"系统获取业务数据，通过计算公式自动进行定量考核",imgsrc:"img/scene/01_10_02_02.png"},{name:"通过组织维度、时间周期对公司绩效考核结果进行多维度的对比分析",imgsrc:"img/scene/01_10_02_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);	
	
	var submenu = {name:"绩效数据查询",id:"jxglsub3"};
    submapping["jxglsub3"]=submenu;
    //描述信息
   var subde = [{name:"绩效数据和绩效考核成绩按时间维度自助查询",imgsrc:"img/scene/01_10_03_01.png"},{name:"支持将考核数据导出作为工资核算依据",imgsrc:"img/scene/01_10_03_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	
	
	var category = {name:"通知公告",id:"tzgg",submenus:[]};
    cmapping["tzgg"] = category;
    categorys.push(category);

	var submenu = {name:"通知公告场景",id:"tzggsub0"};
    submapping["tzggsub0"]=submenu;
    //首页
    submenu.indeximg = "img/scene/index1_11.png";
    category.submenus.push(submenu);

    //子菜单
    var submenu = {name:"公司新闻",id:"tzggsub1"};
    submapping["tzggsub1"]=submenu;
    //描述信息
    var subde = [{name:"主动推送公司人事新闻、合作新闻等，可以方便知道相关阅览情况",imgsrc:"img/scene/01_11_01_01.png"},{name:"根据个性化模板样式显示新闻",imgsrc:"img/scene/01_11_01_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"公司通知",id:"tzggsub2"};
    submapping["tzggsub2"]=submenu;
    //描述信息
    var subde = [{name:"主动推送公司通知公告、部门通知、公文发布通知等，可以知道哪些人还没有阅览，同时起到督促阅览的作用",imgsrc:"img/scene/01_11_02_01.png"},{name:"推送公司通知公告、部门通知、公文发布通知到门户中",imgsrc:"img/scene/01_11_02_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	var category = {name:"制度管理",id:"zdgl",submenus:[]};
    cmapping["zdgl"] = category;
    categorys.push(category);

	var submenu = {name:"制度管理场景",id:"zdglsub0"};
    submapping["zdglsub0"]=submenu;
    //首页
    submenu.indeximg = "img/scene/index1_12.png";
    category.submenus.push(submenu);


    //子菜单
    var submenu = {name:"制度发布",id:"zdglsub1"};
    submapping["zdglsub1"]=submenu;
    //描述信息
    var subde = [{name:"文档中发布推送到相关门户元素中",imgsrc:"img/scene/01_12_01_01.png"},{name:"建立制度知识地图",imgsrc:"img/scene/01_12_01_02.png"},{name:"将制度推送到相关流程的协同区",imgsrc:"img/scene/01_12_01_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"制度更新",id:"zdglsub2"};
    submapping["zdglsub2"]=submenu;
    //描述信息
   var subde = [{name:"提供制度文档的版本管理，便于查看历史版本进行追溯管理",imgsrc:"img/scene/01_12_02_01.png"},{name:"支持制度文档审批流程，确保公司制度发布的有效性",imgsrc:"img/scene/01_12_02_02.png"},{name:"制度一旦发布和更新就提醒相关人员查阅，使公司员工及时了解相关制度调整",imgsrc:"img/scene/01_12_02_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);	
	
	var submenu = {name:"制度查询",id:"zdglsub3"};
    submapping["zdglsub3"]=submenu;
    //描述信息
   var subde = [{name:"根据不同制度分类在知识库中查询",imgsrc:"img/scene/01_12_03_01.png"},{name:"可在微搜中根据关键字进行搜索",imgsrc:"img/scene/01_12_03_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	

	
	
	
	
	
   



    return {
        initApp:function(){
           this.initCategory();
           this.bindEvents();
           $(".sceneone .weaver_scenemenu").eq(0).trigger('click');
        //初始化根菜单
        },initCategory:function(){
            var catehtmls = [];
            for(var i=0;i<categorys.length;i++){
                catehtmls.push(" <span class='weaver_scenemenu'  item-id='"+categorys[i].id+"'>"+categorys[i].name+"</span>");
            }
            $(".sceneone .weaver_scenemenusall").html(catehtmls.join(""));
        //初始化事件集合
        },bindEvents:function(){
           $(".sceneone .weaver_scenemenusall").delegate('.weaver_scenemenu','click',function(){
                var current = $(this);
                var itemid = current.attr("item-id");
                var subhtmls = [];
                var submenus = cmapping[itemid].submenus;
                for(var i=0;i<submenus.length;i++){
                    subhtmls.push("<span class='weaver_scenesubmenu' item-id='"+submenus[i].id+"'>"+submenus[i].name+"</span>");
                }
               current.parents(".weaver_scenemenusall").find(".weaver_scenemenu").removeClass("weaver_active"); 
			   current.addClass("weaver_active");
               $(".sceneone .weaver_scenesubmenus").html(subhtmls.join(""));
               $(".sceneone .weaver_scenesubmenu").eq(0).trigger('click');
           });

            $(".sceneone .weaver_scenesubmenus").delegate('.weaver_scenesubmenu','click',function(){
                var current = $(this);
                var itemid = current.attr("item-id");
                var subhtmls = [];
                var imgs = ["<div class='weaver_banner'>","<ul>"];
                 
                if(submapping[itemid].indeximg){
				     $(".sceneone .weaver_scenedescribe").append("<div class='imgoverlay' style='position:absolute;left:0;top:0;right:0;bottom:0;z-index:10;text-align: center;margin-top: 12px;  background: #fff;'><span style='display:inline-block;height:100%;vertical-align: middle;'></span><img src='"+submapping[itemid].indeximg+"'></div>");
                     $(".sceneone .weaver_scenesubmenu").removeClass("activemn");
					 current.addClass("activemn");
				}else{
					$(".sceneone .imgoverlay").remove();
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
					$(".sceneone .weaver_scenedeslists").html(subhtmls.join(""));
					$(".sceneone .weaver_scenesubmenu").removeClass("activemn");
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
        

            $(".sceneone .weaver_scenedeslists").delegate(".weaverdes",'click',function(){
                var index = $(this).attr("index");
                var weaver_deslists = $(this).parents(".weaver_deslists");
                weaver_deslists.find(".dot").eq(index).trigger("click");
            });

            $(".sceneone .weaver_scenemenusmore").click(function(){
                var el = $(".sceneone .weaver_scenemenusall"),moreel = $(".sceneone .weaver_scenemenusmore");
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