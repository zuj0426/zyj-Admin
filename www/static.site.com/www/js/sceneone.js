/**
 * Created by Administrator on 2015/3/23.
 */

var sceneone = (function(){

    var categorys = [],sub,cmapping={},submapping={};
    //����
    var category = {name:"�ʽ����",id:"rule",submenus:[]};
    cmapping["rule"] = category;
    categorys.push(category);


    var submenu = {name:"�ʽ������",id:"rulesub0"};
    submapping["rulesub0"]=submenu;
    //��ҳ
    submenu.indeximg = "img/scene/index1_1.png";
    category.submenus.push(submenu);

 
    //�Ӳ˵�
    var submenu = {name:"��������",id:"rulesub1"};
    submapping["rulesub1"]=submenu;
    //������Ϣ
    var subde = [{name:"���ڶ�ά�ȡ����������Ƕȡ���㼶���෽�����ñ���ʵ��",imgsrc:"img/scene/01_01_01_01.png"},{name:"���ݷ��óе���λ���е��ˣ����������Զ�����Ԥ����Ϣ",imgsrc:"img/scene/01_01_01_02.png"},{name:"�������й��������ϸ������Խ��ĳ���",imgsrc:"img/scene/01_01_01_03.png"},{name:"��Ŀ���ñ���ѡ�������Ŀ������Ŀ���з��õĹ鼯",imgsrc:"img/scene/01_01_01_04.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"Ԥ�����",id:"rulesub2"};
    submapping["rulesub2"]=submenu;
    //������Ϣ
    var subde = [{name:"���������淶�������̻�Ԥ�����ʵ��",imgsrc:"img/scene/01_01_02_01.png"},{name:"�����Է��óɱ�����Ϊ���������Ԥ����������",imgsrc:"img/scene/01_01_02_02.png"},{name:"���ڹ淶���̡���ʷ���ݡ��汾������Ԥ��ľ�׼����Ԥ������ϵ",imgsrc:"img/scene/01_01_02_03.png"},{name:"������Ŀ���ڼ䡢ǿ�ȡ���֯�����̽ڵ�ȶ෽��ִ�йܿ���ϵ",imgsrc:"img/scene/01_01_02_04.png"},{name:"�������ơ�ִ�С���ء�����ȫ��λԤ��Ԥ����ϵ",imgsrc:"img/scene/01_01_02_05.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	var submenu = {name:"�ʽ����",id:"rulesub3"};
    submapping["rulesub3"]=submenu;
    //������Ϣ
    var subde = [{name:"��ݡ��淶����Ч���ʽ���㡢֧������֧��������������",imgsrc:"img/scene/01_01_03_01.png"},{name:"�����ʽ�ƻ���ȷ���ʽ�֧������ĺ�����Ч������ʽ���ת�ٶȺ�ʹ��Ч��",imgsrc:"img/scene/01_01_03_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	
	var category = {name:"��������",id:"xzgl",submenus:[]};
    cmapping["xzgl"] = category;
    categorys.push(category);


    //�Ӳ˵�
	var submenu = {name:"����������",id:"xzglsub0"};
    submapping["xzglsub0"]=submenu;
    //��ҳ
    submenu.indeximg = "img/scene/index1_2.png";
    category.submenus.push(submenu);


    var submenu = {name:"��������",id:"xzglsub1"};
    submapping["xzglsub1"]=submenu;
    //������Ϣ
    var subde = [{name:"��ҵ��������Ϣ�����롢ά������ͳһ����",imgsrc:"img/scene/01_02_01_01.png"},{name:"ͨ�����̶Գ���ʹ�ý�������",imgsrc:"img/scene/01_02_01_02.png"},{name:"ͨ������ͼ������ͼ������ͼ���鿴����ʹ�����",imgsrc:"img/scene/01_02_01_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"�ʲ�����",id:"xzglsub2"};
    submapping["xzglsub2"]=submenu;
    //������Ϣ
    var subde = [{name:"����ͳһ���ʲ���Ƭ����¼�ʲ��Ļ�����Ϣ",imgsrc:"img/scene/01_02_02_01.png"},{name:"�Ӳɹ�����⡢���ã���������ά�ޡ����ϣ�ȫ������ʲ���״��",imgsrc:"img/scene/01_02_02_02.png"},{name:"Ԥ�㡢Ԥ��ͼ�أ����ٿ�������������ʲ��Ŀ�ʹ����",imgsrc:"img/scene/01_02_02_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	var submenu = {name:"�칫��Ʒ����",id:"xzglsub3"};
    submapping["xzglsub3"]=submenu;
    //������Ϣ
    var subde = [{name:"����ͳһ�İ칫��Ʒ�⣬��¼�칫��Ʒ�Ļ�����Ϣ",imgsrc:"img/scene/01_02_03_01.png"},{name:"�ӳ��⡢��⡢���á��黹���ٰ칫��Ʒ��ʹ��״��",imgsrc:"img/scene/01_02_03_02.png"},{name:"�칫��Ʒ�����ƶȵ��������",imgsrc:"img/scene/01_02_03_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"�����ҹ���",id:"xzglsub4"};
    submapping["xzglsub4"]=submenu;
    //������Ϣ
    var subde = [{name:"����ʲ�����Ի����ҽ��к���ķ��䣬������ҵ��Ч���Ÿ��ֻ�����Դ",imgsrc:"img/scene/01_02_04_01.png"},{name:"ͨ����ͬ��ʱ��ά���鿴�����ҵ�Ԥ�����",imgsrc:"img/scene/01_02_04_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"֤�չ���",id:"xzglsub5"};
    submapping["xzglsub5"]=submenu;
    //������Ϣ
    var subde = [{name:"֤����Ϣ��ͳһ�Ǽǹ���",imgsrc:"img/scene/01_02_05_01.png"},{name:"�ӽ��ġ����赽�黹����֤��ʹ�����",imgsrc:"img/scene/01_02_05_02.png"},{name:"��Ȩ�ܹ�ά������֧�ְ汾����",imgsrc:"img/scene/01_02_05_03.png"},{name:"֤�յ�������",imgsrc:"img/scene/01_02_05_04.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);



    var category = {name:"��ͬ����",id:"htgl",submenus:[]};
    cmapping["htgl"] = category;
    categorys.push(category);

    //�Ӳ˵�
	var submenu = {name:"��ͬ������",id:"htglsub0"};
    submapping["htglsub0"]=submenu;
    //��ҳ
    submenu.indeximg = "img/scene/index1_3.png";
    category.submenus.push(submenu);

    var submenu = {name:"��ͬ����",id:"htglsub1"};
    submapping["htglsub1"]=submenu;
    //������Ϣ
    var subde = [{name:"�ں�ͬ���������У��ṩ��ʽ��ͬ",imgsrc:"img/scene/01_03_01_01.png"},{name:"�ں�ͬ����������չ�ֺ�ͬ�ؼ���Ϣ",imgsrc:"img/scene/01_03_01_02.png"},{name:"��ͬԭʼ�ĵ���Ϊ���̸���",imgsrc:"img/scene/01_03_01_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"Ӧ�չ���",id:"htglsub2"};
    submapping["htglsub2"]=submenu;
    //������Ϣ
    var subde = [{name:"�������������ƶȣ��Ӷ���֤Ӧ���˿�İ�ȫ�ԣ�����޶ȵؽ���Ӧ���˿�ķ���",imgsrc:"img/scene/01_03_02_01.png"},{name:"���������˿���ƣ������ʽ���ת�����⻵�������ʧ",imgsrc:"img/scene/01_03_02_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	var submenu = {name:"Ӧ������",id:"htglsub3"};
    submapping["htglsub3"]=submenu;
    //������Ϣ
    var subde = [{name:"���պ�ͬ��������еĸ������ں͸�����ִ��",imgsrc:"img/scene/01_03_03_01.png"},{name:"�ṩ��Ӧ����ʷ�����¼����¼�Ѹ���ʣ��δ������",imgsrc:"img/scene/01_03_03_02.png"},{name:"��ͬ��������ѣ����ݸ���������ǰ���ж��Ż���������",imgsrc:"img/scene/01_03_03_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"��̨ͬ��",id:"htglsub4"};
    submapping["htglsub4"]=submenu;
    //������Ϣ
    var subde = [{name:"����ͳһ�ĺ�̨ͬ�ˣ������ѯ���޸�",imgsrc:"img/scene/01_03_04_01.png"},{name:"���ͬ�������̹����������̨ͬ�˲���Ч",imgsrc:"img/scene/01_03_04_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);




var category = {name:"���¹���",id:"rsgl",submenus:[]};
    cmapping["rsgl"] = category;
    categorys.push(category);

    //�Ӳ˵�
	var submenu = {name:"���¹�����",id:"rsglsub0"};
    submapping["rsglsub0"]=submenu;
    //��ҳ
    submenu.indeximg = "img/scene/index1_4.png";
    category.submenus.push(submenu);


    var submenu = {name:"��ٹ���",id:"rsglsub1"};
    submapping["rsglsub1"]=submenu;
    //������Ϣ
    var subde = [{name:"���ݲ�ͬ�����������ʾ��ǰ�����������",imgsrc:"img/scene/01_04_01_01.png"},{name:"��ʾ��ϸ����ʷ��ټ�¼",imgsrc:"img/scene/01_04_01_02.png"},{name:"���̽�����ϵͳ���Զ���������������ʣ�������м�����",imgsrc:"img/scene/01_04_01_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"���ڹ���",id:"rsglsub2"};
    submapping["rsglsub2"]=submenu;
    //������Ϣ
    var subde = [{name:"ͨ��PC���ƶ��˽���ϵͳǩ����֧��GPS��λ���ܣ�����¼IP��ַ",imgsrc:"img/scene/01_04_02_01.png"},{name:"�������������������Ա���޷�ǩ��������",imgsrc:"img/scene/01_04_02_02.png"},{name:"���¿��ڱ�����ϸ�ļ�¼�˳ٵ���ȱ�ڡ���������Ϣ",imgsrc:"img/scene/01_04_02_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);	
	
	var submenu = {name:"��Ƹ����",id:"rsglsub3"};
    submapping["rsglsub3"]=submenu;
    //������Ϣ
    var subde = [{name:"������ȱְλ�����ù�����¼�ú���ڲ���������",imgsrc:"img/scene/01_04_03_01.png"},{name:"���Ե����̻�������ϸ��¼���Թ���",imgsrc:"img/scene/01_04_03_02.png"},{name:"�˲ſ��ͳһ����Ϊ��ҵ�����˲�",imgsrc:"img/scene/01_04_03_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"��Ա����ְ",id:"rsglsub4"};
    submapping["rsglsub4"]=submenu;
    //������Ϣ
    var subde = [{name:"���ݸ�λ֪ʶ��ͼ��������������ȡ�������",imgsrc:"img/scene/01_04_04_01.png"},{name:"�ṩ7��24Сʱ������ѵ���ģ��ɽ�����ѵ�ƻ�",imgsrc:"img/scene/01_04_04_02.png"},{name:"���˽��������ѯ",imgsrc:"img/scene/01_04_04_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"ת������",id:"rsglsub5"};
    submapping["rsglsub5"]=submenu;
    //������Ϣ
    var subde = [{name:"��¼��Ա����ѵʱ�ĳɳ�����",imgsrc:"img/scene/01_04_05_01.png"},{name:"ת��������ʱ���ϼ�����֪����Ա��ת���ڼ���ر���",imgsrc:"img/scene/01_04_05_02.png"},{name:"ת����ϵͳ���Զ�����Ա��������״̬��Ϊ��ʽ״̬",imgsrc:"img/scene/01_04_05_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"��ְ����",id:"rsglsub6"};
    submapping["rsglsub6"]=submenu;
    //������Ϣ
    var subde = [{name:"��ְ��Ա�Ľ��\����\�ʲ�\����\֪ʶһĿ��Ȼ",imgsrc:"img/scene/01_04_06_01.png"},{name:"��ְ�Ժ����Ա��������̵������ܹ��Զ�����",imgsrc:"img/scene/01_04_06_02.png"},{name:"��ְ��Ա�����ݿ��Խ���ת��",imgsrc:"img/scene/01_04_06_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	

var category = {name:"���Ĺ���",id:"gwgl",submenus:[]};
    cmapping["gwgl"] = category;
    categorys.push(category);

    //�Ӳ˵�
	var submenu = {name:"���Ĺ�����",id:"gwglsub0"};
    submapping["gwglsub0"]=submenu;
    //��ҳ
    submenu.indeximg = "img/scene/index1_5.png";
    category.submenus.push(submenu);


    var submenu = {name:"���Ĺ���",id:"gwglsub1"};
    submapping["gwglsub1"]=submenu;
    //������Ϣ
    var subde = [{name:"����֧�����ɽ��д���",imgsrc:"img/scene/01_05_01_01.png"},{name:"֧�ֽ��������ⲿ�ķ���",imgsrc:"img/scene/01_05_01_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"���Ĺ���",id:"gwglsub2"};
    submapping["gwglsub2"]=submenu;
    //������Ϣ
    var subde = [{name:"֧�ֶ��˶ಿ�ŵĻ�ǩ",imgsrc:"img/scene/01_05_02_01.png"},{name:"�������������Զ������׺촦��",imgsrc:"img/scene/01_05_02_02.png"},{name:"֧�ֵ���ǩ��",imgsrc:"img/scene/01_05_02_03.png"},{name:"����ʱ���ж��鶽��",imgsrc:"img/scene/01_05_02_04.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);	
	
	var submenu = {name:"��ʾ����",id:"gwglsub3"};
    submapping["gwglsub3"]=submenu;
    //������Ϣ
    var subde = [{name:"��Ϣ�߰���������ʾ���洦��ʱ����ȵ��ص�",imgsrc:"img/scene/01_05_03_01.png"},{name:"ʵ�������ͺͳ��͵ĵ�λ����",imgsrc:"img/scene/01_05_03_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	var category = {name:"�������",id:"hygl",submenus:[]};
    cmapping["hygl"] = category;
    categorys.push(category);

	var submenu = {name:"���������",id:"hyglsub0"};
    submapping["hyglsub0"]=submenu;
    //��ҳ
    submenu.indeximg = "img/scene/index1_6.png";
    category.submenus.push(submenu);


    //�Ӳ˵�
    var submenu = {name:"�����Ի������",id:"hyglsub1"};
    submapping["hyglsub1"]=submenu;
    //������Ϣ
    var subde = [{name:"�����Ի���ʵ�ֶ�����Ϣ���ѣ��������Զ�Ԥ����������ҵ�����ᡢ�¶����������",imgsrc:"img/scene/01_06_01_01.png"},{name:"ͳһ�Ļ���ģ����������������ظ���������Ĺ���",imgsrc:"img/scene/01_06_01_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"ר��������",id:"hyglsub2"};
    submapping["hyglsub2"]=submenu;
    //������Ϣ
    var subde = [{name:"������ҵ����ר���ԵĻ��飬���Ʒ��ѵ���顢��Ŀ�ܽ����ȣ�����ʵ�ִ���������Ķ���",imgsrc:"img/scene/01_06_02_01.png"},{name:"�����Ҫ�����쵼�Ի��������ȫ����˽�",imgsrc:"img/scene/01_06_02_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	var submenu = {name:"��Ȼ������",id:"hyglsub3"};
    submapping["hyglsub3"]=submenu;
    //������Ϣ
    var subde = [{name:"������ҵ������Ȼ��飬�������ܽ���顢�����ܽ���ȣ����ư��ź���ػ�����",imgsrc:"img/scene/01_06_03_01.png"},{name:"��ǰ����豸ʹ��ȷ�ϣ�ȷ������˳���ٿ�",imgsrc:"img/scene/01_06_03_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"��ʱ�������",id:"hyglsub4"};
    submapping["hyglsub4"]=submenu;
    //������Ϣ
    var subde = [{name:"������ҵ��ʱ�Ļ���Ҫ����ʱ�鿴��ǰ������ռ�����",imgsrc:"img/scene/01_06_04_01.png"},{name:"��Ӧ�λ���Աʱ��ĳ�ͻʱ�Զ���ʾ",imgsrc:"img/scene/01_06_04_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	
	var category = {name:"��ҵ�Ļ�",id:"qywh",submenus:[]};
    cmapping["qywh"] = category;
    categorys.push(category);

	var submenu = {name:"��ҵ�Ļ�����",id:"qywhsub0"};
    submapping["qywhsub0"]=submenu;
    //��ҳ
    submenu.indeximg = "img/scene/index1_7.png";
    category.submenus.push(submenu);

    //�Ӳ˵�
    var submenu = {name:"��ҵ�Ļ��Ż�",id:"qywhsub1"};
    submapping["qywhsub1"]=submenu;
    //������Ϣ
    var subde = [{name:"������ҵ�Ļ����Ʒ�ƽ��衢������ε�;���ҿ���֪��Ա���Ƿ��ڹ�ע��˾����ҵ�Ļ�",imgsrc:"img/scene/01_07_01_01.png"},{name:"������Ի���ҵ�Ļ��Ż�",imgsrc:"img/scene/01_07_01_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"Ա�������Ż�",id:"qywhsub2"};
    submapping["qywhsub2"]=submenu;
    //������Ϣ
    var subde = [{name:"���͸���Ա�������˾���ε���Ϣ���ḻԱ����ҵ�������ǿ�Ŷӽ���",imgsrc:"img/scene/01_07_02_01.png"},{name:"������Ա�������������빫˾�Ļ���������",imgsrc:"img/scene/01_07_02_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);	
	
	var submenu = {name:"��ҵ�Ļ�����",id:"qywhsub3"};
    submapping["qywhsub3"]=submenu;
    //������Ϣ
    var subde = [{name:"�ĵ�\����\�ʼ��ȸ���ģ��,����ҵ�Ļ��ܹ���͸��������ȥ",imgsrc:"img/scene/01_07_03_01.png"},{name:"��ҵ����������Ƹ����ѵ��������ϵ",imgsrc:"img/scene/01_07_03_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"��ҵ�ɳ����",id:"qywhsub4"};
    submapping["qywhsub4"]=submenu;
    //������Ϣ
    var subde = [{name:"��������ҵ�ӿ�ʼ��������չ�ĸ����ڵ����ʵ���ݺ���Ϣ����ʱ��ڵ�չ��",imgsrc:"img/scene/01_07_04_01.png"},{name:"Ա�������������Ŷӵ�Э��������ҵ�ĳɳ�",imgsrc:"img/scene/01_07_04_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"����Ա���Ż�",id:"qywhsub5"};
    submapping["qywhsub5"]=submenu;
    //������Ϣ
    var subde = [{name:"��������Ա�������Լ����س���ּ�ڼ����ڲ�Ա�����ṩ�����ʵķ���",imgsrc:"img/scene/01_07_05_01.png"},{name:"����Ա���ɳ���μ�¼����",imgsrc:"img/scene/01_07_05_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	
	
	var category = {name:"�ⲿ��Դ��",id:"wbzy",submenus:[]};
    cmapping["wbzy"] = category;
    categorys.push(category);

	var submenu = {name:"�ⲿ��Դ����",id:"wbzysub0"};
    submapping["wbzysub0"]=submenu;
    //��ҳ
    submenu.indeximg = "img/scene/index1_8.png";
    category.submenus.push(submenu);

    //�Ӳ˵�
    var submenu = {name:"��Ӧ�̹���",id:"wbzysub1"};
    submapping["wbzysub1"]=submenu;
    //������Ϣ
    var subde = [{name:"����ͳһ�Ĺ�Ӧ����Ϣ�⣬��ͨ����ͬά�Ƚ��в�ѯ",imgsrc:"img/scene/01_08_01_01.png"},{name:"�ṩһ����Ϣ���ʹ��ڣ�������Ʒ�Ͳɹ������Ϣ����ʱ�����������������䶯̬״����Ϣ",imgsrc:"img/scene/01_08_01_02.png"},{name:"���ڶԹ�Ӧ�̽������ۣ�ɸѡ�ϸ񹩷�",imgsrc:"img/scene/01_08_01_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"ר�ҹ���",id:"wbzysub2"};
    submapping["wbzysub2"]=submenu;
    //������Ϣ
    var subde = [{name:"����ÿ��Ա����֪ʶ���׶ȣ�����ͬ������л��֣�������۵����£�ר��Դ����֯����������֯",imgsrc:"img/scene/01_08_02_01.png"},{name:"��ֱ����ר����ϵ����������ͨ������ʱ�����������",imgsrc:"img/scene/01_08_02_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);	
	
	var submenu = {name:"����������",id:"wbzysub3"};
    submapping["wbzysub3"]=submenu;
    //������Ϣ
   var subde = [{name:"����ͳһ�Ŀɹ�����ⲿ�ͻ���Դ��",imgsrc:"img/scene/01_08_03_01.png"},{name:"ͨ���ͻ��Ż��ⲿ�ͻ����뵽��ҵ�������ޱ߽���֯",imgsrc:"img/scene/01_08_03_02.png"},{name:"��ʱ�������۹����ƽ���������֪ʶ��ת��",imgsrc:"img/scene/01_08_03_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	
	var category = {name:"�������",id:"fwsj",submenus:[]};
    cmapping["fwsj"] = category;
    categorys.push(category);

	var submenu = {name:"������Ƴ���",id:"fwsjsub0"};
    submapping["fwsjsub0"]=submenu;
    //��ҳ
    submenu.indeximg = "img/scene/index1_9.png";
    category.submenus.push(submenu);

    //�Ӳ˵�
    var submenu = {name:"�����Ż�",id:"fwsjsub1"};
    submapping["fwsjsub1"]=submenu;
    //������Ϣ
    var subde = [{name:"������ط��ɷ��桢�ط����ߡ��ڲ��Ϲ�����ƶ�",imgsrc:"img/scene/01_09_01_01.png"},{name:"��ط����ͬ�������",imgsrc:"img/scene/01_09_01_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"��ͬ���տ���",id:"fwsjsub2"};
    submapping["fwsjsub2"]=submenu;
    //������Ϣ
    var subde = [{name:"�������ƵĺϹ������������岻ͬ�ķ��ռ��𣬱��ⷨ�����",imgsrc:"img/scene/01_09_02_01.png"},{name:"��������Ԥ�����ƣ��Ժ�ͬ�ĺϹ��Խ���ʵʱ���",imgsrc:"img/scene/01_09_02_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);	
	
	var submenu = {name:"���̹ؼ��ڵ����",id:"fwsjsub3"};
    submapping["fwsjsub3"]=submenu;
    //������Ϣ
   var subde = [{name:"�Ը������̵Ĺؼ��ڵ���Կ���,�������ڷ���涨������������,��:Ԥ���ڡ�Ԥ������ʽ�����ʹ������������",imgsrc:"img/scene/01_09_03_01.png"},{name:"���ڷ������˽��з��չܿ�",imgsrc:"img/scene/01_09_03_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	
	var category = {name:"��Ч����",id:"jxgl",submenus:[]};
    cmapping["jxgl"] = category;
    categorys.push(category);

	var submenu = {name:"��Ч������",id:"jxglsub0"};
    submapping["jxglsub0"]=submenu;
    //��ҳ
    submenu.indeximg = "img/scene/index1_10.png";
    category.submenus.push(submenu);

    //�Ӳ˵�
    var submenu = {name:"�����������",id:"jxglsub1"};
    submapping["jxglsub1"]=submenu;
    //������Ϣ
    var subde = [{name:"���ݲ�ͬ��λ�ƶ����Ի���������ģ��",imgsrc:"img/scene/01_10_01_01.png"},{name:"Ա�������趨��ʱ�䷶Χ�ڣ��ύ��Ӧ�������Լƻ�����",imgsrc:"img/scene/01_10_01_02.png"},{name:"�ƻ�ִ�й����пɶԼƻ���ִ��������з�����ʵʱ����",imgsrc:"img/scene/01_10_01_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"��Ч���ֹ���",id:"jxglsub2"};
    submapping["jxglsub2"]=submenu;
    //������Ϣ
    var subde = [{name:"ͳһ����Ա���Ŀ��˷������趨KPIָ�꼰��������",imgsrc:"img/scene/01_10_02_01.png"},{name:"ϵͳ��ȡҵ�����ݣ�ͨ�����㹫ʽ�Զ����ж�������",imgsrc:"img/scene/01_10_02_02.png"},{name:"ͨ����֯ά�ȡ�ʱ�����ڶԹ�˾��Ч���˽�����ж�ά�ȵĶԱȷ���",imgsrc:"img/scene/01_10_02_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);	
	
	var submenu = {name:"��Ч���ݲ�ѯ",id:"jxglsub3"};
    submapping["jxglsub3"]=submenu;
    //������Ϣ
   var subde = [{name:"��Ч���ݺͼ�Ч���˳ɼ���ʱ��ά��������ѯ",imgsrc:"img/scene/01_10_03_01.png"},{name:"֧�ֽ��������ݵ�����Ϊ���ʺ�������",imgsrc:"img/scene/01_10_03_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	
	
	var category = {name:"֪ͨ����",id:"tzgg",submenus:[]};
    cmapping["tzgg"] = category;
    categorys.push(category);

	var submenu = {name:"֪ͨ���泡��",id:"tzggsub0"};
    submapping["tzggsub0"]=submenu;
    //��ҳ
    submenu.indeximg = "img/scene/index1_11.png";
    category.submenus.push(submenu);

    //�Ӳ˵�
    var submenu = {name:"��˾����",id:"tzggsub1"};
    submapping["tzggsub1"]=submenu;
    //������Ϣ
    var subde = [{name:"�������͹�˾�������š��������ŵȣ����Է���֪������������",imgsrc:"img/scene/01_11_01_01.png"},{name:"���ݸ��Ի�ģ����ʽ��ʾ����",imgsrc:"img/scene/01_11_01_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"��˾֪ͨ",id:"tzggsub2"};
    submapping["tzggsub2"]=submenu;
    //������Ϣ
    var subde = [{name:"�������͹�˾֪ͨ���桢����֪ͨ�����ķ���֪ͨ�ȣ�����֪����Щ�˻�û��������ͬʱ�𵽶�������������",imgsrc:"img/scene/01_11_02_01.png"},{name:"���͹�˾֪ͨ���桢����֪ͨ�����ķ���֪ͨ���Ż���",imgsrc:"img/scene/01_11_02_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	var category = {name:"�ƶȹ���",id:"zdgl",submenus:[]};
    cmapping["zdgl"] = category;
    categorys.push(category);

	var submenu = {name:"�ƶȹ�����",id:"zdglsub0"};
    submapping["zdglsub0"]=submenu;
    //��ҳ
    submenu.indeximg = "img/scene/index1_12.png";
    category.submenus.push(submenu);


    //�Ӳ˵�
    var submenu = {name:"�ƶȷ���",id:"zdglsub1"};
    submapping["zdglsub1"]=submenu;
    //������Ϣ
    var subde = [{name:"�ĵ��з������͵�����Ż�Ԫ����",imgsrc:"img/scene/01_12_01_01.png"},{name:"�����ƶ�֪ʶ��ͼ",imgsrc:"img/scene/01_12_01_02.png"},{name:"���ƶ����͵�������̵�Эͬ��",imgsrc:"img/scene/01_12_01_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	var submenu = {name:"�ƶȸ���",id:"zdglsub2"};
    submapping["zdglsub2"]=submenu;
    //������Ϣ
   var subde = [{name:"�ṩ�ƶ��ĵ��İ汾�������ڲ鿴��ʷ�汾����׷�ݹ���",imgsrc:"img/scene/01_12_02_01.png"},{name:"֧���ƶ��ĵ��������̣�ȷ����˾�ƶȷ�������Ч��",imgsrc:"img/scene/01_12_02_02.png"},{name:"�ƶ�һ�������͸��¾����������Ա���ģ�ʹ��˾Ա����ʱ�˽�����ƶȵ���",imgsrc:"img/scene/01_12_02_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);	
	
	var submenu = {name:"�ƶȲ�ѯ",id:"zdglsub3"};
    submapping["zdglsub3"]=submenu;
    //������Ϣ
   var subde = [{name:"���ݲ�ͬ�ƶȷ�����֪ʶ���в�ѯ",imgsrc:"img/scene/01_12_03_01.png"},{name:"����΢���и��ݹؼ��ֽ�������",imgsrc:"img/scene/01_12_03_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	

	
	
	
	
	
   



    return {
        initApp:function(){
           this.initCategory();
           this.bindEvents();
           $(".sceneone .weaver_scenemenu").eq(0).trigger('click');
        //��ʼ�����˵�
        },initCategory:function(){
            var catehtmls = [];
            for(var i=0;i<categorys.length;i++){
                catehtmls.push(" <span class='weaver_scenemenu'  item-id='"+categorys[i].id+"'>"+categorys[i].name+"</span>");
            }
            $(".sceneone .weaver_scenemenusall").html(catehtmls.join(""));
        //��ʼ���¼�����
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