<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>修改行政人员</title>
    <link rel="stylesheet" href="<?=config_item("domain_static")?>admin/layui/css/layui.css?version=<?=config_item("css_version")?>" media="all">
    <link rel="stylesheet" href="<?=config_item("domain_static")?>admin/comm.css?version=<?=config_item("css_version")?>" media="all">
    <script language="javascript" src="<?=config_item("domain_static")?>jquery/jquery.min.js?version=<?=config_item("js_version")?>"></script>
    <style>
        .layui-upload-img{width: 92px; height: 92px; margin: 0 10px 10px 0;}
        hr{margin: 30px 0;}
        .input{width: 400px;}
        .input-number{width: 100px;}
    </style>
</head>
<body>
<fieldset class="layui-elem-field layui-field-title" style="margin-top:40px;">
    <legend>修改行政人员</legend>
</fieldset>
<div class="add_top">
    <a href="javascript:history.go(-1)">
        返回
        <span class="layui-icon">&#xe65a;</span>
    </a>
</div>
<div class="reload_top">
    <a href="javascript:location.reload()">
        <span class="layui-icon layui-anim layui-anim-rotate layui-anim-loop">&#x1002;</span>
        刷新
    </a>
</div>


<form action="" class="layui-form layui-form-pane1" id="form1">

    <div class="layui-form-item" style="width:800px;">
        <label class="layui-form-label">真实姓名</label>
        <div class="layui-input-inline" style="width:400px;">
            <input type="text" name="ture_name" lay-verify="required|title"  placeholder="请输入行政人员名字" autocomplete="off" class="layui-input" id="ture_name" value="<?=$item['ture_name']?>">
        </div>
        <div class="layui-form-mid layui-word-aux">如：黄晓明</div>
    </div>


    <div class="layui-form-item" style="width:800px;">
        <label class="layui-form-label">手机号码</label>
        <div class="layui-input-inline" style="width:400px;">
            <input type="text" name="phone"  placeholder="请输入手机号码" autocomplete="off" class="layui-input" id="phone" value="<?=$item['phone']?>">
        </div>
        <div class="layui-form-mid layui-word-aux">如：13800000000</div>
    </div>

    <div class="layui-form-item" style="width:800px;">
        <label class="layui-form-label">OA登录密码</label>
        <div class="layui-input-inline" style="width:400px;">
            <input type="text" name="passwd"  placeholder="不修改请留空" autocomplete="off" class="layui-input" id="passwd" value="">
        </div>
        <div class="layui-form-mid layui-word-aux">注意:留空为不修改密码！</div>
    </div>



    <div class="layui-form-item">
        <label class="layui-form-label">部门</label>
        <div class="layui-input-inline">
            <select name="dept_id" lay-filter="cate_01" lay-search  id="dl1">
                <option value=""></option>
                <?php
                foreach ($dept_list as $key => $val) {
                    ?>
                    <option value="<?=$val['id']?>" <?php if($val['id']==$item['dept_id']){echo "selected";};?>><?=$val['dept_name']?></option>
                    <?php
                }
                ?>
            </select>
        </div>
        <div class="layui-form-mid layui-word-aux"><p class="layui-btn layui-btn-small">必选</p></div>
    </div>


    <div class="layui-form-item">
        <label class="layui-form-label">职务</label>
        <div class="layui-input-inline">
            <select name="job_id" lay-filter="cate_02" lay-search  id="dl1">
                <option value=""></option>
                <?php
                foreach ($job_list as $key => $val) {
                    ?>
                    <option value="<?=$val['id']?>" <?php if($val['id']==$item['job_id']){echo "selected";};?>><?=$val['job_name']?></option>
                    <?php
                }
                ?>
            </select>
        </div>
        <div class="layui-form-mid layui-word-aux"><p class="layui-btn layui-btn-small">必选</p></div>
    </div>



    <div class="layui-form-item" style="width:800px;">
        <label class="layui-form-label">试用时间</label>
        <div class="layui-input-inline" style="width:400px;">
            <input type="text" name="try_work_time"  placeholder="请选择时间" autocomplete="off" class="layui-input" id="try_work_time"  value="<?=date("Y-m-d",$item['try_work_time'])?>">
        </div>
        <div class="layui-form-mid layui-word-aux">如：2017-08-08</div>
    </div>


    <div class="layui-form-item" style="width:800px;">
        <label class="layui-form-label">转正时间</label>
        <div class="layui-input-inline" style="width:400px;">
            <input type="text" name="company_time"  placeholder="请选择时间" autocomplete="off" class="layui-input" id="company_time"  value="<?=date("Y-m-d",$item['company_time'])?>">
        </div>
        <div class="layui-form-mid layui-word-aux">如：2017-10-08</div>
    </div>

    <div class="layui-form-item" pane>
        <label class="layui-form-label">开启登录</label>
        <div class="layui-input-block">
            <input type="checkbox" <?php if($item['is_login']=="1"){echo "checked";}; ?> name="is_login" lay-skin="switch" lay-filter="switchTest" lay-text="ON|OFF" id="is_login" value="1">
        </div>
    </div>


    <div class="layui-form-item">
        <div class="layui-input-block">
            <button class="layui-btn" lay-submit lay-filter="*">保存</button>
        </div>
    </div>
</form>


<?php $this->load->view('luoui');?>
<script language="javascript" src="<?=config_item("domain_static")?>admin/layui/layui.js?version=<?=config_item("cjs_version")?>"></script>
<script language="javascript" src="<?=config_item("domain_static")?>admin/comm.js?version=<?=config_item("js_version")?>"></script>
<script>
    layui.use('upload', function(){
        var $ = layui.jquery
            ,upload = layui.upload;

    });

    layui.use('form', function(){
        var form = layui.form;
        //自定义验证规则
        form.verify({
            title: function(value){
                if(value.length < 2){
                    return '标题也太短了吧';
                }
            }
            ,pass: [/(.+){6,12}$/, '密码必须6到12位']
        });



        form.on('checkbox', function(data){
            console.log(this.checked, data.elem.checked);
        });

        form.on('switch', function(data){
            console.log(data);
        });

        form.on('radio', function(data){
            console.log(data);
        });

        //监听提交
        form.on('submit(*)', function(data){
            // console.log(data)
            save_data_func()
            return false;
        });

    });
    layui.use('layedit', function(){
        var layedit = layui.layedit;
        var index = layedit.build('edit_text', {
            //hideTool: ['image']
            uploadImage: {
                url: 'json/upload/demoLayEdit.json'
                ,type: 'get'
            }
            //,tool: []
            //,height: 100
        });



    });

    //数据保存
    function save_data_func(){
        var cate_name = $("#cate_name").val();
        // ajax
        $.ajax({
            type:"POST",
            dataType: 'json',
            timeout: 15000,
            beforeSend:function(){$("#luoui_mark").fadeIn(450);$("#luoui_loading").fadeIn(450);},
            error: function(){setTimeout(close_luoui,500);error_tip(99, "请求网络出错！");},
            url: "/personnel/personnel_edit/save/<?=$item['id']?>",
            data: $("#form1").serializeArray(),
            success:function(json){
                setTimeout(close_luoui,500);
                if(json.code != 200){
                    error_tip(json.code,json.msg);
                }else{
                    success_goto(json.code,json.msg,json.data.back_url);
                }

            }
        });
        // ajax end
        return false;
    }
    //数据保存end

</script>

</body>
</html>
