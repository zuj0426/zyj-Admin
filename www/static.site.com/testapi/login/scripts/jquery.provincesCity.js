﻿/**
 * jQuery :  城市联动插件
 * @author   XiaoDong <cssrain@gmail.com>
 * modify by   chenwj 
 *			 http://www.cssrain.cn
 * @example  $("#test").ProvinceCity();
 * @params   e 为生成省市两个字的标签
 */
$.fn.ProvinceCity = function(e){
	var _self = this;
	//定义3个默认值
	_self.data("province",["请选择省份", "请选择省份"]);
	_self.data("city1",["请选择城市", "请选择城市"]);
	//插入3个空的下拉框
	_self.append("<select id='province' style='width:100px;'></select><"+e+" id='displayProvince'>省</"+e+">");
	_self.append("<select id='city' style='width:100px;'></select><"+e+" id='displayCity'>市</"+e+">");
	//分别获取3个下拉框
	var $sel1 = _self.find("select").eq(0);
	var $sel2 = _self.find("select").eq(1);
	//默认省级下拉
	if(_self.data("province")){
		$sel1.append("<option value='"+_self.data("province")[1]+"'>"+_self.data("province")[0]+"</option>");
	}
	$.each( GP , function(index,data){
		$sel1.append("<option value='"+data+"'>"+data+"</option>");
	});
	//默认的1级城市下拉
	if(_self.data("city1")){
		$sel2.append("<option value='"+_self.data("city1")[1]+"'>"+_self.data("city1")[0]+"</option>");
	}
	//省级联动 控制
	var index1 = "" ;
	$sel1.change(function(){
		//清空其它2个下拉框
		$sel2[0].options.length=0;
		index1 = this.selectedIndex;
		if(index1==0){	//当选择的为 “请选择” 时
			if(_self.data("city1")){
				$sel2.append("<option value='"+_self.data("city1")[1]+"'>"+_self.data("city1")[0]+"</option>");
			}
		}else{
			$.each( GT[index1-1] , function(index,data){
				$sel2.append("<option value='"+data+"'>"+data+"</option>");
			});
		}
		if($("#province").val()=="北京" || $("#province").val()=="上海" || $("#province").val()=="重庆" 
			|| $("#province").val()=="天津" || $("#province").val()=="香港" || $("#province").val()=="澳门" ){
			//$("#displayProvince").hide();
			$("#displayProvince").html("市");
			$("#displayCity").html("区");
		} else if ($("#province").val() == "海外") {
		    $("#displayProvince").html("");
		    $("#displayCity").html("");
		}else {
		    $("#displayProvince").html("省");
		    $("#displayCity").html("市");
		}
	}).change();
	//1级城市联动 控制
	var index2 = "" ;
	$sel2.change(function(){
		//$sel3[0].options.length=0;
		index2 = this.selectedIndex;
	});
	return _self;
};