<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>测试接口</title>
<script type="text/javascript" src="<?= config_item('domain_static')?>testapi/common/jqueryH5.min.js"></script>
<script type="text/javascript" src="<?php echo config_item('domain_static')?>testapi/common/md5.js"></script>
<!-- ui_tips_01 -->
<link rel="stylesheet" type="text/css" href="<?php echo config_item('domain_static')?>testapi/common/tips_01/css/default.css">
<link rel="stylesheet" type="text/css" href="<?php echo config_item('domain_static')?>testapi/common/tips_01/css/jquery.notify.css">
<script type="text/javascript" src="<?php echo config_item('domain_static')?>testapi/common/tips_01/js/jquery.notify.js"></script>
<!-- ui_tips_01 end -->
<script type="text/javascript">
//脚本创建人：罗立照 luwiso@QQ.com
function ajax_post(){
	set_html5_storage();
	ajaxPost("/post.php","#formdata");
	$id("pwd_show").innerHTML = hex_md5($("#passwd").val());
	show_loading();
	return false;
}
function ajaxPost(url, form) {
	$.ajax({
		type: "POST",
		url: url,
		dataType: 'html',
		timeout: ajax_time_over,
		error: function(){tips_01("网络请求失败，超时中断，请捡查代码.",'error');hidden_loading();},
		data: $(form).serializeArray(),
		success: function(dataJson) {
			$id("RawJson").value = dataJson;
			Process();
			hidden_loading();
			try{
				var data =JSON.parse(dataJson);
				tips_01("服务器api数据接口解释成功.","success");
				if(data.success == true){
					localStorage["token"] = data.data.user.token;
					localStorage["uid"] = data.data.user.uid;
					tips_01(data.msg,"success");
				}else{
					tips_01(data.msg,'error');;
				}
			}catch(e){
				tips_01("接口参数异常，复制-[<font class='tip_o1_btn' onclick=\"hidden_code();\">查看源码</font>]-交给服务端开发人员处理.",'error');
			}
		}
	})
}
</script>
</head>
<body>
	<form action="<?php echo $action;?>" method="get" id="formdata"
		name="formdata" onSubmit="return ajax_post();" style="padding:0px;">
		<table width="100%">
			<tr>
				<td width="35" height="32" nowrap="nowrap" bgcolor="#f5fafe">请求:</td>
			  <td width="1302" height="32" bgcolor="#f5fafe"><input type="text" name="ajax_post_url"
					value="<?php echo $action;?>" style="width: 500px; font-weight:bold; font-size:16px;" /></td>
		  </tr>
			<?php if (is_array($prams)): foreach ($prams as $k=>$v) :?>
				<tr>
				<td height="32" nowrap="nowrap" class="api_laber_td"><?php echo $k;?></td>
				<td height="32" nowrap="nowrap" class="api_input_td"><input type="text" name="<?php echo $k;?>" id="<?php echo $k;?>" value="<?php echo $v['text_value'];?>" class="api_txt"/><span><?php echo $v['text_description'];?></span></td>
			</tr>
			<?php endforeach; endif;?>
			<tr>
			  <td height="28" nowrap="nowrap">密码JSmd5加密</td>
			  <td height="28"><div id="pwd_show"></div></td>
		  </tr>
			<tr>
				<td width="35" height="28" nowrap="nowrap">&nbsp;</td>
				<td width="1302" height="28"><input type="submit" value="提交" class="api_submit_btn" />
			    <span style="display:inline-block; height:30px; width:200px;"></span>
			    <input type="button" value="说明文档" class="api_doc_btn" />
			    <input type="hidden" name="md5passwd" id="md5passwd" value="off" alt="H5为网页，不用md5(),其它全要md5(pwd)">
                
                </td>
			</tr>
		</table>
</form>
	<!-- json 格式 begin -->
	<div id="mainContent" class="tool_content wrapper"
		style="margin: 0px; width: 100%; ">
		<div class="toolUsing clearfix" style="background:#f1f1f1;padding-top:4px;">
			<form id="codeformat_form" action="/format/json" method="POST">
				<div class="operateTB form-inline" style="display:;">
					<label for="TabSize">缩进量：</label> <select id="TabSize"
						onchange="TabSizeChanged()" class="span1">
						<option value="1">1</option>
						<option value="2" selected="true">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
					</select> <label for="QuoteKeys" class="checkbox"> <input
						type="checkbox" id="QuoteKeys" onclick="QuoteKeysClicked()"
						checked="true">引号
					</label> <span id="CollapsibleViewHolder"> <label
						for="CollapsibleView" class="checkbox"> <input type="checkbox"
							id="CollapsibleView" onclick="CollapsibleViewClicked()"
							checked="true">显示控制
					</label>
					</span> <span id="CollapsibleViewDetail"
						style="visibility: visible; margin-right: 10px;"> <a
						href="javascript:void(0);" onclick="ExpandAllClicked()">展开</a> <a
						href="javascript:void(0);" onclick="CollapseAllClicked()">叠起</a> <a
						href="javascript:void(0);" onclick="CollapseLevel(3)">2级</a> <a
						href="javascript:void(0);" onclick="CollapseLevel(4)">3级</a> <a
						href="javascript:void(0);" onclick="CollapseLevel(5)">4级</a> <a
						href="javascript:void(0);" onclick="CollapseLevel(6)">5级</a> <a
						href="javascript:void(0);" onclick="CollapseLevel(7)">6级</a> <a
						href="javascript:void(0);" onclick="CollapseLevel(8)">7级</a> <a
						href="javascript:void(0);" onclick="CollapseLevel(9)">8级</a>
					</span> <input id="format" type="button" onclick="Process();show_code();"
						value="格式化" style="border:0px solid #09F;">
				</div>
				<div class="bottomBar">
                    <div class="topBar" style="display:; width: 100%;">
                        <div class="title" style="height:36px; line-height:36px;">
                        <a href="javascript:show_code();" class="format_luo_view_josn_btn">查看已格式json</a> 
                        <a href="javascript:hidden_code();" class="format_luo_view_code_btn">查看源码</a>
                        </div>
                        <div class="resizable-textarea" style="width: 100%; display: none; overflow:hidden;" id="code_output">
                            <textarea name="json" id="RawJson" class="resizable processed"
                                style="resize: none; width: 100%; height:600px;"></textarea>
                        </div>
                    </div>
                    
					<div class="resizable-textarea">
						<span><div id="Canvas" class="Canvas well resizable processed"
								style="height: auto; width: 100%; overflow: auto; margin-bottom: 0px;"></div>
							<div class="grippie" style="margin-right: 0px;"></div>
                        </span>
					</div>
                    
				</div>
			</form>
		</div>
	</div>
	<!-- json 格式 end -->


	<!-- 代码部分begin -->
	<div class="loading" id="h5_3d_load" style="display:none;">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
	<!-- 代码部分end -->



</body>
<script type="text/javascript">
window.ImgCollapsed = "<?= config_item('domain_static')?>testapi/common/api/json_format/Collapsed.gif";
window.ImgExpanded = "<?= config_item('domain_static')?>testapi/common/api/json_format/Expanded.gif";
//html5变量
function set_html5_storage(){
<?php if (is_array($prams)): foreach ($prams as $k=>$v) :?>
<?php
	if($v['html5_set']=="1"){
		echo "	localStorage[\"{$k}\"] = $(\"#{$k}\").val();\n";
	}
?>
<?php endforeach; endif;?>	
}

function get_html5_storage(){
if($("#unique_code").val()  !== null && $("#unique_code").val()  !== undefined  && $("#unique_code").val()  !== "" &&$("#app_version").val()  !== null && $("#app_version").val()  !== undefined  && $("#app_version").val()  !== ""  && $("#client_type").val()  !== null && $("#client_type").val()  !== undefined  && $("#client_type").val()  !== ""){
<?php if (is_array($prams)): foreach ($prams as $k=>$v) :?>
<?php
//$("#text_id").attr("value",'test');
	if($v['html5_set']=="1"){
		echo "	$(\"#{$k}\").attr(\"value\",localStorage[\"{$k}\"]);\n";
	}
?>
<?php endforeach; endif;?>	
 }
}
get_html5_storage();
$.notifySetup({sound: 'audio/notify.wav'});
</script>
<link rel="stylesheet"  href="<?= config_item('domain_static')?>testapi/common/api/json_format/luo_api_basic.css"	type="text/css">
<link href="<?= config_item('domain_static')?>testapi/common/api/json_format/luo_personal.css"	type="text/css" rel="stylesheet">
<script type="text/javascript" 	src="<?= config_item('domain_static')?>testapi/common/api/json_format/luo_json_content.js"></script>

</html>
