/**
 * Created by Administrator on 2015/3/23.
 */

var scenethree = (function(){

    var categorys = [],sub,cmapping={},submapping={};
    //����
    var category = {name:"���ݱ���",id:"sjbb",submenus:[]};
    cmapping["sjbb"] = category;
    categorys.push(category);

 var submenu = {name:"���ݱ�����",id:"sjbbsub0"};
    submapping["sjbbsub0"]=submenu;
    //��ҳ
    submenu.indeximg = "img/scene/index3_1.png";
    category.submenus.push(submenu);


    //�Ӳ˵�
    var submenu = {name:"����ָ���Ż�",id:"sjbbsub1"};
    submapping["sjbbsub1"]=submenu;
    //������Ϣ
    var subde = [{name:"ͨ�������Ż���ȡ�������ָ�꣬���а�����ծ����ָ�ꡢ��Ӫ����ָ���Լ�ӯ������ָ��ȣ��������߲����չ�˾������Ӫ״��",imgsrc:"img/scene/03_01_01_01.png"},{name:"ͨ�������Ż���ȡ��������ָ�꣬���а����������ָ�ꡢ�¿ͻ�������������ͬ��Լ�ʵȣ�������������չ�˾��Ʒ�������",imgsrc:"img/scene/03_01_01_02.png"},{name:"ͨ����Ŀ�Ż���ȡ������Ŀָ�꣬���а�����Ŀ�����ʡ��ͻ�����ȵȣ�����������˽⹫˾��Ŀ��չ���",imgsrc:"img/scene/03_01_01_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"ҵ����Ӫ��",id:"sjbbsub2"};
    submapping["sjbbsub2"]=submenu;
    //������Ϣ
    var subde = [{name:"ͨ����Ӫҵ���������ҵ������˽⹫˾��Ӫ���������ҵ�������",imgsrc:"img/scene/03_01_02_01.png"},{name:"ͨ�������Ż�����ҵ�߲���Ա�����˽⹫˾����Ŀͳ�ơ���ͬ�����ܵ���Ϣ",imgsrc:"img/scene/03_01_02_02.png"},];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	var category = {name:"�ͻ�����",id:"khgl",submenus:[]};
    cmapping["khgl"] = category;
    categorys.push(category);

	 var submenu = {name:"�ͻ�������",id:"khglsub0"};
    submapping["khglsub0"]=submenu;
    //��ҳ
    submenu.indeximg = "img/scene/index3_2.png";
    category.submenus.push(submenu);

    //�Ӳ˵�
    var submenu = {name:"�ͻ���ѯ",id:"khglsub1"};
    submapping["khglsub1"]=submenu;
    //������Ϣ
    var subde = [{name:"ͨ���ͻ����ơ��ͻ����͡��ͻ�״̬�ȶ�ά�Ƚ�������",imgsrc:"img/scene/03_02_01_01.png"},{name:"�ڿͻ��б��п�ֱ�Ӹ��ͻ���ϵ�˷����ʼ���������˿ͻ��йص����̡�Э�����ճ�",imgsrc:"img/scene/03_02_01_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"�ͻ���ϵ",id:"khglsub2"};
    submapping["khglsub2"]=submenu;
    //������Ϣ
    var subde = [{name:"ͨ���ͻ����ơ��ͻ����͡��ͻ�״̬�ȶ�ά�Ƚ�������",imgsrc:"img/scene/03_02_02_01.png"},{name:"�ϼ�������ʱ�����������ٿͻ�����������й�ͨ����",imgsrc:"img/scene/03_02_02_02.png"},{name:"֧���������ڣ��Կͻ�����������ѣ�������ͻ��Ķ��ڽ�������ϵ",imgsrc:"img/scene/03_02_02_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"�̻�����",id:"khglsub3"};
    submapping["khglsub3"]=submenu;
    //������Ϣ
    var subde = [{name:"�����ļ�¼�̻���Դ��Ԥ�����۽���Լ���ǰ�̻������Ľ׶�",imgsrc:"img/scene/03_02_03_01.png"},{name:"���̻����Խ���ʵʱ������֧���̻������䣬�̻��ϲ��ȹ���",imgsrc:"img/scene/03_02_03_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	var category = {name:"��Ŀ����",id:"xmgl",submenus:[]};
    cmapping["xmgl"] = category;
    categorys.push(category);

	 var submenu = {name:"��Ŀ������",id:"xmglsub0"};
    submapping["xmglsub0"]=submenu;
    //��ҳ
    submenu.indeximg = "img/scene/index3_3.png";
    category.submenus.push(submenu);


    //�Ӳ˵�
    var submenu = {name:"�������",id:"xmglsub1"};
    submapping["xmglsub1"]=submenu;
    //������Ϣ
    var subde = [{name:"���ݲ�ͬ��Ŀ�����ƶ���ͬ����Ŀģ��",imgsrc:"img/scene/03_03_01_01.png"},{name:"��Ŀ�½���ͨ��������˼�����ɹ�",imgsrc:"img/scene/03_03_01_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"��ĿЭ��",id:"xmglsub2"};
    submapping["xmglsub2"]=submenu;
    //������Ϣ
    var subde = [{name:"�ɸ��ݵ�ǰ��Ŀ����Э��������ʱ�������Ա���й�ͨ����",imgsrc:"img/scene/03_03_02_01.png"},{name:"����Ŀ���񻯣���������ִ�з�������",imgsrc:"img/scene/03_03_02_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
    var submenu = {name:"��Ŀ̨��",id:"xmglsub3"};
    submapping["xmglsub3"]=submenu;
    //������Ϣ
    var subde = [{name:"��Ŀ��Ϣ��ͳһ����֧�ֹؼ�������",imgsrc:"img/scene/03_03_03_01.png"},{name:"��Ŀ��Ϣ��Ȩ�޿��ƣ���Ŀ���Ա����Ŀά����Ա����Ŀ�鿴Ȩ��",imgsrc:"img/scene/03_03_03_02.png"},{name:"ͨ����Ŀ̨�˿��Բ鿴��Ŀ��Ƭ����ϸ�˽���Ŀ�Ľ�չ���",imgsrc:"img/scene/03_03_03_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);	
	
	
	var category = {name:"�з�����",id:"yfgl",submenus:[]};
    cmapping["yfgl"] = category;
    categorys.push(category);

	 var submenu = {name:"�з�������",id:"yfglsub0"};
    submapping["yfglsub0"]=submenu;
    //��ҳ
    submenu.indeximg = "img/scene/index3_4.png";
    category.submenus.push(submenu);

    //�Ӳ˵�
    var submenu = {name:"�����ռ�",id:"yfglsub1"};
    submapping["yfglsub1"]=submenu;
    //������Ϣ
    var subde = [{name:"ͨ���ճ�����Ŀ�������̣����������ĵ��γ�ͳһ�������",imgsrc:"img/scene/03_04_01_01.png"},{name:"�����Э������ʱʱ�ռ����Թ�˾�ڲ�Ա���Բ�Ʒ���Ż�����",imgsrc:"img/scene/03_04_01_02.png"},{name:"�ͷ���Ա�������Կͻ������ⷴ��������������ܽ���ɺ󲿷�ת�����",imgsrc:"img/scene/03_04_01_03.png"},{name:"����֪ʶ������Ծ��幦�ܵ�������������",imgsrc:"img/scene/03_04_01_04.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"��������",id:"yfglsub2"};
    submapping["yfglsub2"]=submenu;
    //������Ϣ
    var subde = [{name:"������ؼ�������Э�����ھ����������̽��",imgsrc:"img/scene/03_04_02_01.png"},{name:"��֪ʶ���п��Ծ��з��л�滮�еľ��幦�ܽ�������",imgsrc:"img/scene/03_04_02_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"�з�����",id:"yfglsub3"};
    submapping["yfglsub3"]=submenu;
    //������Ϣ
    var subde = [{name:"���з���������пɸ��ݲ�Ʒ�ߡ���Ʒ���ܡ�ϵͳ�汾����ÿһ���з�����Ľ���",imgsrc:"img/scene/03_04_03_01.png"},{name:"���з������еĸ������汾��������ͨ�������ͳһ����",imgsrc:"img/scene/03_04_03_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	var category = {name:"�ͷ�����",id:"kfgl",submenus:[]};
    cmapping["kfgl"] = category;
    categorys.push(category);

	 var submenu = {name:"�ͷ�������",id:"kfglsub0"};
    submapping["kfglsub0"]=submenu;
    //��ҳ
    submenu.indeximg = "img/scene/index3_5.png";
    category.submenus.push(submenu);


    //�Ӳ˵�
    var submenu = {name:"�ͻ��������",id:"kfglsub1"};
    submapping["kfglsub1"]=submenu;
    //������Ϣ
    var subde = [{name:"�ɸ��ٿͻ����⵱ǰ����״̬����ظ����ˣ��Լ��ͻ�������ĳ�������",imgsrc:"img/scene/03_05_01_01.png"},{name:"����΢�����ύ����ѯ���⴦�����",imgsrc:"img/scene/03_05_01_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"�ͻ���������",id:"kfglsub2"};
    submapping["kfglsub2"]=submenu;
    //������Ϣ
    var subde = [{name:"���ÿͻ���ϵ�˵����գ��ͻ���ϵ�˵������յ�ʱ����Ը�����Ӧ��ף��",imgsrc:"img/scene/03_05_02_01.png"},{name:"���ݿͻ�����ϵͳ�Զ��������ѹ�����",imgsrc:"img/scene/03_05_02_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);

	var submenu = {name:"�ͻ���������",id:"kfglsub3"};
    submapping["kfglsub3"]=submenu;
    //������Ϣ
    var subde = [{name:"���ڿͻ��Ż��и���������⴦����̣�������ز�Ʒ�ֲ�",imgsrc:"img/scene/03_05_03_01.png"},{name:"�����Ʒ�����������ҳ�������Ľ���Լ��Ķ������Ŀ�",imgsrc:"img/scene/03_05_03_02.png"},{name:"�������̵����������Ӧ�ü�ģ��",imgsrc:"img/scene/03_05_03_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	var category = {name:"�г��",id:"schd",submenus:[]};
    cmapping["schd"] = category;
    categorys.push(category);

	 var submenu = {name:"�г������",id:"schdsub0"};
    submapping["schdsub0"]=submenu;
    //��ҳ
    submenu.indeximg = "img/scene/index3_6.png";
    category.submenus.push(submenu);


    //�Ӳ˵�
    var submenu = {name:"idea�ռ�����",id:"schdsub1"};
    submapping["schdsub1"]=submenu;
    //������Ϣ
    var subde = [{name:"��Э�������ռ��г����ؽ����뷨",imgsrc:"img/scene/03_06_01_01.png"},{name:"���������ռ����صĽ�����뷨",imgsrc:"img/scene/03_06_01_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
    var submenu = {name:"�г��������",id:"schdsub2"};
    submapping["schdsub2"]=submenu;
    //������Ϣ
    var subde = [{name:"�����г�������߽����񣬶���Ҫ������зֽ⣬ȷ��ÿ������ĸ����˺�������ڣ�ִ�й����п���ʱ���з���",imgsrc:"img/scene/03_06_02_01.png"},{name:"�����г���Ļ��飬�γɻ�������",imgsrc:"img/scene/03_06_02_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
    var submenu = {name:"�г��֪ʶ����",id:"schdsub3"};
    submapping["schdsub3"]=submenu;
    //������Ϣ
    var subde = [{name:"���г���еķ������������ϡ���������֪ʶ���н���ͳһ����ͷ���",imgsrc:"img/scene/03_06_03_01.png"},{name:"�г����������š���Ƭ����Ƶ���ϵȵ�һʱ�����Ż������ͳ���",imgsrc:"img/scene/03_06_03_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);	
	
	
	var category = {name:"��������",id:"zlgl",submenus:[]};
    cmapping["zlgl"] = category;
    categorys.push(category);

	 var submenu = {name:"����������",id:"zlglsub0"};
    submapping["zlglsub0"]=submenu;
    //��ҳ
    submenu.indeximg = "img/scene/index3_7.png";
    category.submenus.push(submenu);


    //�Ӳ˵�
    var submenu = {name:"ISO�ļ�����",id:"zlglsub1"};
    submapping["zlglsub1"]=submenu;
    //������Ϣ
    var subde = [{name:"�ṩ�ĵ���ʾ�ͱ༭ģ�壬ȷ���ĵ����ո�ʽҪ�󷢲�",imgsrc:"img/scene/03_07_01_01.png"},{name:"���ĵ��İ汾��״̬�����������ϸ�Ŀ��ƣ�������ҵ����������ϵ�е��Ŀ���ϵ",imgsrc:"img/scene/03_07_01_02.png"},{name:"ISO�����ļ�����Ч��ʵЧ�Լ��ܿض�����ͨ����̨���������",imgsrc:"img/scene/03_07_01_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);

	 var submenu = {name:"���̰�ȫ����",id:"zlglsub2"};
    submapping["zlglsub2"]=submenu;
    //������Ϣ
    var subde = [{name:"ʵ�����̵İ汾ͳһ����",imgsrc:"img/scene/03_07_02_01.png"},{name:"��¼�����ֶ������޸���־����Ϊ��Ƶ�����",imgsrc:"img/scene/03_07_02_02.png"},{name:"ϵͳ�Զ���¼����ά����־����̨��ȫ����",imgsrc:"img/scene/03_07_02_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	var category = {name:"��Ӧ�̹���",id:"gysgl",submenus:[]};
    cmapping["gysgl"] = category;
    categorys.push(category);

	 var submenu = {name:"��Ӧ�̳���",id:"gysglsub0"};
    submapping["gysglsub0"]=submenu;
    //��ҳ
    submenu.indeximg = "img/scene/index3_8.png";
    category.submenus.push(submenu);


    //�Ӳ˵�
    var submenu = {name:"��Ӧ�̲�ѯ",id:"gysglsub1"};
    submapping["gysglsub1"]=submenu;
    //������Ϣ
    var subde = [{name:"����ͨ����Ӧ�̵Ĺؼ��֡��������Ϣ���в�ѯ",imgsrc:"img/scene/03_08_01_01.png"},{name:"��ͨ����Ӧ�̵ĵ�����Ϣ���в�ѯͳ��",imgsrc:"img/scene/03_08_01_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
    var submenu = {name:"��Ӧ��̨��",id:"gysglsub2"};
    submapping["gysglsub2"]=submenu;
    //������Ϣ
    var subde = [{name:"����ͳһ�Ĺ�Ӧ��̨�ˣ�ά��̨�˵Ĺ���Ȩ�ޣ�ͨ��̨�˿��Բ鿴��Ӧ�̿�Ƭ�е���ϸ��Ϣ�Լ�ҵ������",imgsrc:"img/scene/03_08_02_01.png"},{name:"ͨ������ת���ݣ���������ϢתΪ̨����Ϣ���繩Ӧ��̨�����ּ�¼���Թ�Ӧ����������",imgsrc:"img/scene/03_08_02_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"��Ӧ�̹���",id:"gysglsub3"};
    submapping["gysglsub3"]=submenu;
    //������Ϣ
    var subde = [{name:"ͨ����Ӧ��Ӧ�̵Ŀ�Ƭ��������ȫ��λ�ļ�¼��Ӧ����ϵ�����е�������Ϣ",imgsrc:"img/scene/03_08_03_01.png"},{name:"�칹ϵͳ�Ĺ�Ӧ����Ϣͬ��",imgsrc:"img/scene/03_08_03_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);	
	
	var submenu = {name:"��Ӧ���Ż�",id:"gysglsub4"};
    submapping["gysglsub4"]=submenu;
    //������Ϣ
    var subde = [{name:"ͨ����Ӧ���Ż�����ʱ���ٶ�������������ṩ���±���",imgsrc:"img/scene/03_08_04_01.png"},{name:"ͨ����Ӧ��ͳ�Ʊ����Ż��˽⹩Ӧ����Ӫ���",imgsrc:"img/scene/03_08_04_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	

	var category = {name:"�����̹���",id:"dlsgl",submenus:[]};
    cmapping["dlsgl"] = category;
    categorys.push(category);

	 var submenu = {name:"�����̳���",id:"dlsglsub0"};
    submapping["dlsglsub0"]=submenu;
    //��ҳ
    submenu.indeximg = "img/scene/index3_9.png";
    category.submenus.push(submenu);


    //�Ӳ˵�
    var submenu = {name:"�������Ż�",id:"dlsglsub1"};
    submapping["dlsglsub1"]=submenu;
    //������Ϣ
    var subde = [{name:"ͨ���������Ż�����ʱ��֪���´������ߡ��������ԡ������Ʒ��Ѷ��",imgsrc:"img/scene/03_09_01_01.png"},{name:"���ݴ�������ҵ��ͬ�����첻ͬ���Ĵ������Ż�",imgsrc:"img/scene/03_09_01_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);	
	
    var submenu = {name:"�����̲�ѯ",id:"dlsglsub2"};
    submapping["dlsglsub2"]=submenu;
    //������Ϣ
    var subde = [{name:"ͨ�������̹ؼ��֡������Ʒϵ�С������������Ϣ���в�ѯ",imgsrc:"img/scene/03_09_02_01.png"},{name:"�����̷�չ����ͼָ����η�չ������",imgsrc:"img/scene/03_09_02_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);	
	
    var submenu = {name:"������̨��",id:"dlsglsub3"};
    submapping["dlsglsub3"]=submenu;
    //������Ϣ
    var subde = [{name:"����ͳһ�Ĵ�����̨�ˣ�ά��̨�˵Ĺ���Ȩ�ޣ�ͨ��̨�˿��Բ鿴�����̿�Ƭ�е���ϸ��Ϣ�Լ�ҵ������",imgsrc:"img/scene/03_09_03_02.png"},{name:"��������ѵ��ʽ֪ͨ�Լ����ע������",imgsrc:"img/scene/03_09_03_02.png"},];
    submenu.subdes = subde;
    category.submenus.push(submenu);	
	
	


    return {
        initApp:function(){
           this.initCategory();
           this.bindEvents();
           $(".scenethree .weaver_scenemenu").eq(0).trigger('click');
        //��ʼ�����˵�
        },initCategory:function(){
            var catehtmls = [];
            for(var i=0;i<categorys.length;i++){
                catehtmls.push(" <span class='weaver_scenemenu'  item-id='"+categorys[i].id+"'>"+categorys[i].name+"</span>");
            }
            $(".scenethree .weaver_scenemenusall").html(catehtmls.join(""));
        //��ʼ���¼�����
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
                   //��ͷ����
                   moreel.find("img").attr("src","imgs/jt.png");
               }else {
                   el.css("white-space","nowrap");
                   //��ͷ����
                   moreel.find("img").attr("src","imgs/jt2.png");
               }

            });



        }


    }

})();