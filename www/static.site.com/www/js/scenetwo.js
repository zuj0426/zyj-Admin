/**
 * Created by Administrator on 2015/3/23.
 */

var scenetwo = (function(){

    var categorys = [],sub,cmapping={},submapping={};
    //����
    var category = {name:"Э����ͨ",id:"rule",submenus:[]};
    cmapping["rule"] = category;
    categorys.push(category);

	var submenu = {name:"Э����ͨ����",id:"rulesub0"};
    submapping["rulesub0"]=submenu;
    //��ҳ
    submenu.indeximg = "img/scene/index2_1.png";
    category.submenus.push(submenu);

    //�Ӳ˵�
    var submenu = {name:"��ҵ΢��",id:"rulesub1"};
    submapping["rulesub1"]=submenu;
    //������Ϣ
    var subde = [{name:"��ҵ΢����ϵͳ�Խӣ��Զ��������š����̡��ճ̡��������Ϣ����֧��ֱ�Ӵ���",imgsrc:"img/scene/02_01_01_01.png"},{name:"����ҵ΢���п�����ҵͨѶ¼�е�������Ա����΢����Ϣ",imgsrc:"img/scene/02_01_01_02.png"},{name:"֧��΢��ǩ������Ƭɨ��ȸ��Ի���ҵ��Ӧ��",imgsrc:"img/scene/02_01_01_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
    //�Ӳ˵�
    var submenu = {name:"��ʱͨѶ",id:"rulesub5"};
    submapping["rulesub5"]=submenu;
    //������Ϣ
    var subde = [{name:"����QQ�ļ�ʱ���죬֧�ֵ�����Ⱥ�ģ���ϵͳ����֯�ܹ�ͬ��",imgsrc:"img/scene/02_01_02_01.png"},{name:"���з��͵ĸ���������֪ʶ��������������ǿ��֪ʶ������",imgsrc:"img/scene/02_01_02_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);

    submenu = {name:"�ڲ��ʼ�",id:"rulesub2"};
    submapping["rulesub2"]=submenu;
    //������Ϣ
    subde =[{name:"֧����ϵͳ�ڵ��û������ʼ�����",imgsrc:"img/scene/02_01_03_01.png"},{name:"�������ڻ��������ʼ���Ӧ�̻�����ҵ�Լ����ʼ������������ⲿ�û��������շ��ʼ��Ĳ���",imgsrc:"img/scene/02_01_03_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
    submenu = {name:"����Э��",id:"rulesub3"};
    submapping["rulesub3"]=submenu;
    //������Ϣ
    subde = [{name:"֧����ҵ������粿�ŵĶ�̬�Ŷ���Э������",imgsrc:"img/scene/02_01_04_01.png"},{name:"�ɶ��������ʵʱ������������������Э���е���Ϣ����֪ʶ",imgsrc:"img/scene/02_01_04_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
    submenu = {name:"����΢��",id:"rulesub4"};
    submapping["rulesub4"]=submenu;
    //������Ϣ
    subde = [{name:"��¼ÿ��Ĺ������ݣ������ĵã���΢���ķ�ʽ���������ϼ�����Χ��ͬ��",imgsrc:"img/scene/02_01_05_01.png"},{name:"����ͨ����ע�˽�����ͬ�µĹ��������������ֻ�����¼��Ļ㱨��ϵ���ù�������͸��",imgsrc:"img/scene/02_01_05_02.png"},{name:"������΢������ʱ���з����͹�������",imgsrc:"img/scene/02_01_05_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);


    category = {name:"�ƻ�����",id:"manager",submenus:[]};
    cmapping["manager"] = category;
    categorys.push(category);

    var submenu = {name:"�ƻ����񳡾�",id:"managersub0"};
    submapping["managersub0"]=submenu;
    //��ҳ
    submenu.indeximg = "img/scene/index2_2.png";
    category.submenus.push(submenu);


    submenu = {name:"�������",id:"managersub1"};
    submapping["managersub1"]=submenu;
    //������Ϣ
    subde = [{name:"��ʱ��¼���˹����뷨",imgsrc:"img/scene/02_02_01_01.png"},{name:"�ֽ�����Ϊ��������",imgsrc:"img/scene/02_02_01_02.png"},{name:"�������������γ�TodoList",imgsrc:"img/scene/02_02_01_03.png"},{name:"���������ʵʱ����",imgsrc:"img/scene/02_02_01_04.png"},{name:"͸����������ִ�����",imgsrc:"img/scene/02_02_01_05.png"},{name:"��������зֽ�㼶�鿴",imgsrc:"img/scene/02_02_01_06.png"},{name:"��ʱ����࣬����ʱ��ڵ�",imgsrc:"img/scene/02_02_01_07.png"},{name:" ��������ж�ά�Աȷ���",imgsrc:"img/scene/02_02_01_08.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
    submenu = {name:"�ƻ�����",id:"managersub2"};
    submapping["managersub2"]=submenu;
    //������Ϣ
    subde = [{name:"�����ԵĽ��мƻ����ܽ�",imgsrc:"img/scene/02_02_02_01.png"},{name:"�趨���Ի��ļƻ�����ģ��",imgsrc:"img/scene/02_02_02_02.png"},{name:"�ƻ�����ģ�����趨������Ա",imgsrc:"img/scene/02_02_02_04.png"},{name:"�����ύ�ļƻ�������в���",imgsrc:"img/scene/02_02_02_05.png"},{name:"�ɶԼƻ���ִ��������з���",imgsrc:"img/scene/02_02_02_06.png"},{name:"�����������㱨���ж����뻥��",imgsrc:"img/scene/02_02_02_07.png"},{name:"�ƻ�����֧�ֶ�ά��ͳ�Ʒ���",imgsrc:"img/scene/02_02_02_08.png"},{name:"���뼨Ч���ˡ��������Эͬ����",imgsrc:"img/scene/02_02_02_09.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
    

    category = {name:"ͨѶ¼����",id:"final",submenus:[]};
    cmapping["final"] = category;

    categorys.push(category);
    
	 var submenu = {name:"ͨѶ¼����",id:"finalsub0"};
    submapping["finalsub0"]=submenu;
    //��ҳ
    submenu.indeximg = "img/scene/index2_3.png";
    category.submenus.push(submenu);

    submenu = {name:"ͳһͨѶ",id:"finalsub1"};
    submapping["finalsub1"]=submenu;
    //������Ϣ
    subde = [{name:"���ٽ������ĺ�Ⱥ�ĵĹ�ͨ����",imgsrc:"img/scene/02_03_01_01.png"},{name:"���ٽ�������Э��",imgsrc:"img/scene/02_03_01_02.png"},{name:"����ͨ�����Ž�����ϵ",imgsrc:"img/scene/02_03_01_03.png"},{name:"����ͨ���ʼ�������ϵ",imgsrc:"img/scene/02_03_01_04.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	submenu = {name:"ͨѶ¼����",id:"finalsub2"};
    submapping["finalsub2"]=submenu;
    //������Ϣ
    subde = [{name:"ͨ��PC�˲鿴ͨѶ¼",imgsrc:"img/scene/02_03_02_01.png"},{name:"ͨ���ֻ��ͻ��˲鿴ͨѶ¼",imgsrc:"img/scene/02_03_02_02.png"},{name:"ͨ��΢�Ų鿴ͨѶ¼",imgsrc:"img/scene/02_03_02_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);

	
	
	category = {name:"Ա������",id:"ygzz",submenus:[]};
    cmapping["ygzz"] = category;
    categorys.push(category);

	 var submenu = {name:"Ա����������",id:"ygzzsub0"};
    submapping["ygzzsub0"]=submenu;
    //��ҳ
    submenu.indeximg = "img/scene/index2_4.png";
    category.submenus.push(submenu);
	
    submenu = {name:"���ڲ�ѯ",id:"ygzzsub1"};
    submapping["ygzzsub1"]=submenu;
    //������Ϣ
    subde = [{name:"���������ʱ���Բ鿴��ٵ�ʣ���������Լ���ٵ���ʷ��¼",imgsrc:"img/scene/02_04_01_01.png"},{name:"������ģ���пɲ�ѯ�����ʣ���������Լ������ʷ��¼",imgsrc:"img/scene/02_04_01_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"��������",id:"ygzzsub2"};
    submapping["ygzzsub2"]=submenu;
    //������Ϣ
    subde = [{name:"ѡ����Ŀ�Զ��������óе���",imgsrc:"img/scene/02_04_02_01.png"},{name:"ѡ����ñ�����Ŀ�Զ��������Ԥ��",imgsrc:"img/scene/02_04_02_02.png"},{name:"��д�����Զ����м���ʹ�Сдת��",imgsrc:"img/scene/02_04_02_03.png"},{name:"�����������Զ����ɲ���ƾ֤",imgsrc:"img/scene/02_04_02_04.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"��ѯ����",id:"ygzzsub3"};
    submapping["ygzzsub3"]=submenu;
    //������Ϣ
    subde = [{name:"�����Լ��Ĺ����˺ź͹������˻�������ϵͳ�в鿴���ʵ����鼰��ʷ���ʵ�",imgsrc:"img/scene/02_04_03_01.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"ҵ����ѯ",id:"ygzzsub4"};
    submapping["ygzzsub4"]=submenu;
    //������Ϣ
    subde = [{name:"��������Ա��λ�Ż���ͨ����ͬά�Ƚ���ҵ����ѯ",imgsrc:"img/scene/02_04_04_01.png"},{name:"��������Ա�ڱ����Ż���ѯҵ������",imgsrc:"img/scene/02_04_04_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"�칫��Ʒ����",id:"ygzzsub5"};
    submapping["ygzzsub5"]=submenu;
    //������Ϣ
    subde = [{name:"ѡ��칫��Ʒ�Զ���ʾ��ǰ�������",imgsrc:"img/scene/02_04_05_01.png"},{name:"���ú��Զ���¼������Դ��Ƭ�е��ʲ���Ϣ",imgsrc:"img/scene/02_04_05_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"��λ֪ʶ����",id:"ygzzsub6"};
    submapping["ygzzsub6"]=submenu;
    //������Ϣ
    subde = [{name:"���ݸ�λ֪ʶ��ͼ�������������л�ȡ���λ��ص�����",imgsrc:"img/scene/02_04_06_01.png"},{name:"���ݲ�ͬ��λ������֪ʶ���в�ѯ",imgsrc:"img/scene/02_04_06_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"��������",id:"ygzzsub7"};
    submapping["ygzzsub7"]=submenu;
    //������Ϣ
    subde = [{name:"ϵͳ��ͨ�����������š��ʼ��ȷ�ʽ������������",imgsrc:"img/scene/02_04_07_01.png"},{name:"ϵͳ���Զ������������̽�������",imgsrc:"img/scene/02_04_07_02.png"},{name:"ϵͳ��ͨ���ճ̷�ʽ������������",imgsrc:"img/scene/02_04_07_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"Ѱ�����",id:"ygzzsub8"};
    submapping["ygzzsub8"]=submenu;
    //������Ϣ
    subde = [{name:"����Э���������˽�����ѯ����",imgsrc:"img/scene/02_04_08_01.png"},{name:"ͨ���ڲ����Խ���ת��Ѱ�����",imgsrc:"img/scene/02_04_08_02.png"},{name:"��ר�ҿ����ҵ���Ӧ����Ա�������ٹ�ͨ����ֱ��ѯ��",imgsrc:"img/scene/02_04_08_03.png"},{name:"���ڲ���ͨ�ٲ����ҵ���ظ����˽���ѯ��",imgsrc:"img/scene/02_04_08_04.png"}],{name:"���ʴ�ٿ���ֱ�����ʵȴ����˻ش�",imgsrc:"img/scene/02_04_08_05.png"};
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	category = {name:"�罻Ӧ��",id:"sjyy",submenus:[]};
    cmapping["sjyy"] = category;
    categorys.push(category);
	
	var submenu = {name:"�罻Ӧ�ó���",id:"sjyysub0"};
    submapping["sjyysub0"]=submenu;
    //��ҳ
    submenu.indeximg = "img/scene/index2_5.png";
    category.submenus.push(submenu);

    submenu = {name:"����΢��",id:"sjyysub1"};
    submapping["sjyysub1"]=submenu;
    //������Ϣ
    subde = [{name:"��΢������ʽ��¼ÿ��Ĺ��������˳ɳ������ջ����������Χ��ͬ��",imgsrc:"img/scene/02_05_01_01.png"},{name:"��ע�����˵�΢�����������ۻ�������",imgsrc:"img/scene/02_05_01_02.png"},{name:"��������΢��Ȩ�ޣ����ҵ�΢�����������ͬ��",imgsrc:"img/scene/02_05_01_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"Ȧ�ӷ���",id:"sjyysub2"};
    submapping["sjyysub2"]=submenu;
    //������Ϣ
    subde = [{name:"���Դ����Լ��Ĺ���Ȧ�������Ҽ��룬��Ȧ���н��й��������ͷ���",imgsrc:"img/scene/02_05_02_01.png"},{name:"������ҳ��ά�������Դ��ϱ�ǩ���γ�ר�ҿ�Ƭ",imgsrc:"img/scene/02_05_02_02.png"},{name:"��Ȧ���п���ͨ��@�ķ�ʽ��ʱ�����˽��й�ͨ����",imgsrc:"img/scene/02_05_02_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"��ҵ΢��",id:"sjyysub3"};
    submapping["sjyysub3"]=submenu;
    //������Ϣ
    subde = [{name:"��ҵ΢����ϵͳ�Խӣ��������š����̡��ճ̡��������Ϣ������ֱ�Ӵ���",imgsrc:"img/scene/02_05_03_01.png"},{name:"����ҵ΢���пɸ���ҵͨѶ¼�е�������Ա����΢����Ϣ",imgsrc:"img/scene/02_05_03_02.png"},{name:"֧��΢��ǩ����΢����������Ӧ��",imgsrc:"img/scene/02_05_03_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"��ʱͨѶ",id:"sjyysub4"};
    submapping["sjyysub4"]=submenu;
    //������Ϣ
    subde = [{name:"����QQ�ļ�ʱ���죬֧�ֵ�����Ⱥ��",imgsrc:"img/scene/02_05_04_01.png"},{name:"������΢�ŵļ�ʱ���죬���Ը���֯�д��ڵ�������Ա������Ϣ",imgsrc:"img/scene/02_05_04_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"�ʴ�ٿ�",id:"sjyysub5"};
    submapping["sjyysub5"]=submenu;
    //������Ϣ
    subde = [{name:"�ռ��˳��������⼯��Ӧ�𣬷��������������������",imgsrc:"img/scene/02_05_05_01.png"},{name:"�������߽������ʣ��ȴ����˻ش�",imgsrc:"img/scene/02_05_05_02.png"},{name:"������΢������ʱ���з����͹�������",imgsrc:"img/scene/02_05_05_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	category = {name:"֪ʶ����",id:"zsgl",submenus:[]};
    cmapping["zsgl"] = category;
    categorys.push(category);

	var submenu = {name:"֪ʶ����",id:"zsglsub0"};
    submapping["zsglsub0"]=submenu;
    //��ҳ
    submenu.indeximg = "img/scene/index2_6.png";
    category.submenus.push(submenu);
	
    submenu = {name:"֪ʶ����",id:"zsglsub1"};
    submapping["zsglsub1"]=submenu;
    //������Ϣ
    subde = [{name:"��ΪԱ�������ǻ�����ÿ��������ļ���ͨ���½��ĵ�����������֪ʶ����",imgsrc:"img/scene/02_06_01_01.png"},{name:"�ܶ���ĵ����������̣�ͨ�������д����ĵ�Ȼ���Զ��鵵��֪ʶ����",imgsrc:"img/scene/02_06_01_02.png"},{name:"���ǵ��ʼ����ƻ�������Ŀ���ͻ������ĵ�����Ҫ��Դ",imgsrc:"img/scene/02_06_01_03.png"},{name:"Э����ͨ��������ʱͨѶ���ʼ��е��ĵ����������Ϊ֪ʶ����Դ",imgsrc:"img/scene/02_06_01_04.png"},{name:"ͨ������Ŀ¼�ķ�ʽ������һ�������ͻ��ַ�ʽ�й��ɵ����ͳ�ȥ������ʷ���м�ֵ��֪ʶ�ĵ��ٴγ��ֳ���",imgsrc:"img/scene/02_06_01_05.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"֪ʶ����",id:"zsglsub2"};
    submapping["zsglsub2"]=submenu;
    //������Ϣ
    subde = [{name:"�ĵ����Զ����͵�����Ż���",imgsrc:"img/scene/02_06_02_01.png"},{name:"ͨ�����̽��ĵ������ԭ�����߱��鿴Ȩ�޵���Ա",imgsrc:"img/scene/02_06_02_02.png"},{name:"֧�ֵ�ƪ�����������ĵ�����",imgsrc:"img/scene/02_06_02_03.png"},{name:"ͨ������Ŀ¼�ķ�ʽ������һ�������ͻ��ַ�ʽ�й��ɵ����ͳ�ȥ������ʷ���м�ֵ��֪ʶ�ĵ��ٴγ��ֳ���",imgsrc:"img/scene/02_06_02_04.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"֪ʶ����",id:"zsglsub3"};
    submapping["zsglsub3"]=submenu;
    //������Ϣ
    subde = [{name:"��֪ʶ���мӹ���������������Ż���",imgsrc:"img/scene/02_06_03_01.png"},{name:"����ר�����磬ר�ҵĹ۵����¿�������������𵽺ܴ�������",imgsrc:"img/scene/02_06_03_02.png"},{name:"���ݲ�ͬ��ҵ�����Ժ͸�λְ�𽫷�ɢ���ĵ��γ�֪ʶ��ͼ",imgsrc:"img/scene/02_06_03_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"֪ʶ����",id:"zsglsub4"};
    submapping["zsglsub4"]=submenu;
    //������Ϣ
    subde = [{name:"�ṩ��һ���������֪ʶ�໥���ۡ����������۵Ļ��������������ܹ�������Ա���ܸ������Ĺ���֪ʶ�ʹ���",imgsrc:"img/scene/02_06_04_01.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"֪ʶ��ͼ",id:"zsglsub5"};
    submapping["zsglsub5"]=submenu;
    //������Ϣ
    subde = [{name:"�����λ��ص�֪ʶ�ۺ���һ���γɸ�λ֪ʶ��ͼ������ÿ��Ա�������˽��λְ�����ؼ���",imgsrc:"img/scene/02_06_05_01.png"},{name:"����ѵ��ؿμ��������γ���ѵָ����ͼ��������Ա����������ѧϰ��������ҵ����ѵ�ɱ�",imgsrc:"img/scene/02_06_05_02.png"},{name:"����˾����ƶȽ��������γ��ƶ�֪ʶ��ͼ������ÿһλԱ�����˽���ҵ�ƶ�",imgsrc:"img/scene/02_06_05_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"֪ʶ�Ż�",id:"zsglsub6"};
    submapping["zsglsub6"]=submenu;
    //������Ϣ
    subde = [{name:"�ĵ����Զ����͵�����Ż��У�ͨ��֪ʶ�Ż��ܹ����ٻ�ȡ��Ӧ��֪ʶ�Լ��������",imgsrc:"img/scene/02_06_06_01.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"ȫ������",id:"zsglsub7"};
    submapping["zsglsub7"]=submenu;
    //������Ϣ
    subde = [{name:"������ϵͳͳһ��֪ʶ���н���������������ҵ�ڲ���baidu",imgsrc:"img/scene/02_06_07_01.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	category = {name:"�˲ŷ���",id:"rcfw",submenus:[]};
    cmapping["rcfw"] = category;
    categorys.push(category);

	var submenu = {name:"�˲ŷ��񳡾�",id:"rcfwsub0"};
    submapping["rcfwsub0"]=submenu;
    //��ҳ
    submenu.indeximg = "img/scene/index2_7.png";
    category.submenus.push(submenu);
	
    submenu = {name:"������Դ��Ƭ",id:"rcfwsub1"};
    submapping["rcfwsub1"]=submenu;
    //������Ϣ
    subde = [{name:"ͨ���������Ͽ�Ƭ�ܹ���������Ա��صĸ�����Ϣ��֧��ֱ�ӷ����ʼ���������֮��ͨ",imgsrc:"img/scene/02_07_01_01.png"},{name:"�����쵼��͸�˽������Ĺ����켣�ͳɳ�����",imgsrc:"img/scene/02_07_01_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"ר��֪ʶ��ͼ",id:"rcfwsub2"};
    submapping["rcfwsub2"]=submenu;
    //������Ϣ
    subde = [{name:"����ר�����磬ר�ҵĹ۵����¿�������������𵽺ܴ�������",imgsrc:"img/scene/02_07_02_01.png"},{name:"ͨ������ר�ҿ��Խ������ٹ�ͨͨ���������������ѯ�ͽ���",imgsrc:"img/scene/02_07_02_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"����Ա���Ż�",id:"rcfwsub3"};
    submapping["rcfwsub3"]=submenu;
    //������Ϣ
    subde = [{name:"��������Ա�������Լ����س���ּ�ڼ����ڲ�Ա�����ṩ�����ʵķ���",imgsrc:"img/scene/02_07_03_01.png"},{name:"����Ա���ľ��������",imgsrc:"img/scene/02_07_03_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	
	
	category = {name:"���÷���",id:"clfw",submenus:[]};
    cmapping["clfw"] = category;
    categorys.push(category);

	var submenu = {name:"���÷��񳡾�",id:"clfwsub0"};
    submapping["clfwsub0"]=submenu;
    //��ҳ
    submenu.indeximg = "img/scene/index2_8.png";
    category.submenus.push(submenu);
	
	 submenu = {name:"�������",id:"clfwsub1"};
    submapping["clfwsub1"]=submenu;
    //������Ϣ
    subde = [{name:"������������еĿ�ʼʱ��ͽ���ʱ�䣬ϵͳ���Զ����µ�����ģ����",imgsrc:"img/scene/02_08_01_01.png"},{name:"�Զ���ʾ��ʷ�����¼",imgsrc:"img/scene/02_08_01_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
    submenu = {name:"��������",id:"clfwsub4"};
    submapping["clfwsub4"]=submenu;
    //������Ϣ
    subde = [{name:"���������Ŀ�Ϳͻ���Ϣ������Ϊ���ñ����Ĳο�����",imgsrc:"img/scene/02_08_02_01.png"},{name:"����������Զ������������",imgsrc:"img/scene/02_08_02_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"���Ʊ",id:"clfwsub2"};
    submapping["clfwsub2"]=submenu;
    //������Ϣ
    subde = [{name:"���ݳ���ص�����ڣ��Զ�����Я�̶�Ʊ������鿴��غ�����Ϣ",imgsrc:"img/scene/02_08_03_01.png"},{name:"����������Զ��������ö�Ʊ����",imgsrc:"img/scene/02_08_03_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"�����",id:"clfwsub3"};
    submapping["clfwsub3"]=submenu;
    //����
    subde = [{name:"���ڶ�ά�ȡ����������Ƕȡ���㼶���෽�����ñ���ʵ��",imgsrc:"img/scene/02_08_04_01.png"},{name:"���ݷ��óе���λ���е��ˣ����������Զ�����Ԥ����Ϣ",imgsrc:"img/scene/02_08_04_02.png"},{name:"�������й��������ϸ������Խ��ĳ���",imgsrc:"img/scene/02_08_04_03.png"},{name:"��Ŀ���ñ���ѡ�������Ŀ������Ŀ���з��õĹ鼯",imgsrc:"img/scene/02_08_04_04.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	
	category = {name:"ʱ�����",id:"sjgl",submenus:[]};
    cmapping["sjgl"] = category;
    categorys.push(category);
	
	var submenu = {name:"ʱ�������",id:"sjglsub0"};
    submapping["sjglsub0"]=submenu;
    //��ҳ
    submenu.indeximg = "img/scene/index2_9.png";
    category.submenus.push(submenu);

	 submenu = {name:"�ճ̹���",id:"sjglsub1"};
    submapping["sjglsub1"]=submenu;
    //������Ϣ
    subde = [{name:"������ʱ�����ճ̣�ͬʱ���Կ������˹�����ҵ��ճ�",imgsrc:"img/scene/02_09_01_01.png"},{name:"ͨ�����̡���Ŀ���ͻ��������е������Ϣ���Զ�ת�����ճ�",imgsrc:"img/scene/02_09_01_02.png"},{name:"֧���������ճ̣������ܱ���ÿ�ܶ�Ҫ�ύ������ÿ���Զ�����һ����д�ܱ����������",imgsrc:"img/scene/02_09_01_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
    submenu = {name:"�ճ����",id:"sjglsub4"};
    submapping["sjglsub4"]=submenu;
    //������Ϣ
    subde = [{name:"����ͨ���ա��ܡ��µĲ�ͬ��ͼչ��ȫ�����ճ̰���",imgsrc:"img/scene/02_09_02_01.png"},{name:"����ͨ������ͼ�˽�ȫ����Ȩ�޲鿴���ճ̰���",imgsrc:"img/scene/02_09_02_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"ʱ���ͻ",id:"sjglsub2"};
    submapping["sjglsub2"]=submenu;
    //������Ϣ
    subde = [{name:"ͨ���ճ���ͼ���Կ����������Լ���ʱ���ͻ���",imgsrc:"img/scene/02_09_03_01.png"},{name:"ͨ���˵�ά�Ȳ鿴���˵��ճ��Ƿ����Լ���ͻ",imgsrc:"img/scene/02_09_03_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	submenu = {name:"��Ա��̬����",id:"sjglsub3"};
    submapping["sjglsub3"]=submenu;
    //������Ϣ
    subde = [{name:"����Ա����١��������������ͨ�����Ż��е���Ա��̬�������������Ϣ�����������˽ⲢЭ������",imgsrc:"img/scene/02_09_04_01.png"},{name:"ͨ����ѯ�ճ��˽����˰��Ų�Э������",imgsrc:"img/scene/02_09_04_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	
	
	category = {name:"����Ч��",id:"gzxl",submenus:[]};
    cmapping["gzxl"] = category;
    categorys.push(category);

	var submenu = {name:"����Ч�ʳ���",id:"gzxlsub0"};
    submapping["gzxlsub0"]=submenu;
    //��ҳ
    submenu.indeximg = "img/scene/index2_10.png";
    category.submenus.push(submenu);
	
	 submenu = {name:"��ʱ����",id:"gzxlsub1"};
    submapping["gzxlsub1"]=submenu;
    //������Ϣ
    subde = [{name:"�ɸ������̽ڵ����ô���ʱ�ޣ�ϵͳ���Զ�ͨ�����š��ʼ��ȷ�ʽ���г�ʱ���ѣ��ߴ������Ա���촦���ṩ����Ч��",imgsrc:"img/scene/02_10_01_01.png"},{name:"���̼�����ʱ���������ѵ�ǰ������",imgsrc:"img/scene/02_10_01_02.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
    submenu = {name:"����Ч��",id:"gzxlsub4"};
    submapping["gzxlsub4"]=submenu;
    //������Ϣ
    subde = [{name:"ͨ��������������ͳ�ƣ���������ʹ�����",imgsrc:"img/scene/02_10_02_01.png"},{name:"ͨ�����̴�������ͳ�ƣ��˽����̴���Ч��",imgsrc:"img/scene/02_10_02_02.png"},{name:"ͨ������Ч�ʷ��������Կ������̡��ڵ㡢��Ա�Ĵ���Ч�ʣ���Ϊ�����Ż�����߹���Ч�ʵ�����",imgsrc:"img/scene/02_10_02_03.png"}];
    submenu.subdes = subde;
    category.submenus.push(submenu);
	
	
	
	
	
	
	
	
    


    return {
        initApp:function(){
           this.initCategory();
           this.bindEvents();
           $(".scenetwo .weaver_scenemenu").eq(0).trigger('click');
        //��ʼ�����˵�
        },initCategory:function(){
            var catehtmls = [];
            for(var i=0;i<categorys.length;i++){
                catehtmls.push(" <span class='weaver_scenemenu'  item-id='"+categorys[i].id+"'>"+categorys[i].name+"</span>");
            }
            $(".scenetwo .weaver_scenemenusall").html(catehtmls.join(""));
        //��ʼ���¼�����
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