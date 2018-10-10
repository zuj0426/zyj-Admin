<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>管理列表</title>
    <link rel="stylesheet" href="<?=config_item("domain_static")?>admin/layui/css/layui.css?version=<?=config_item("css_version")?>" media="all">
    <link rel="stylesheet" href="<?=config_item("domain_static")?>admin/comm.css?version=<?=config_item("css_version")?>" media="all">
    <script language="javascript" src="<?=config_item("domain_static")?>jquery/jquery.min.js?version=<?=config_item("js_version")?>"></script>

</head>
<body>
<fieldset class="layui-elem-field layui-field-title" style="margin-top:40px;">
    <legend>进行中任务管理</legend>
</fieldset>

<div class="reload_top">
    <a href="javascript:location.reload()">
        <span class="layui-icon layui-anim layui-anim-rotate layui-anim-loop">&#x1002;</span>
        刷新
    </a>
</div>
<table class="layui-table" lay-size="lg">
    <colgroup>
        <col width="150">
        <col width="200">
        <col>
    </colgroup>
    <thead>
    <tr>
        <th nowrap="nowrap">序号</th>
        <th nowrap="nowrap">任务名</th>
        <th nowrap="nowrap">创建人</th>
        <th nowrap="nowrap">开始时间</th>
        <th nowrap="nowrap">指派给谁</th>
        <th nowrap="nowrap">完成时间</th>
        <th nowrap="nowrap">耗时时间</th>
        <th nowrap="nowrap">进度状态</th>
        <th nowrap="nowrap">管理员操作</th>
    </tr>
    </thead>
    <tbody>
    <?php
    foreach ($list as $key => $val) {
        ?>
        <tr>
            <td><?=$key+1?></td>
            <td><?=$val['task_name']?></td>
            <td>
                <b style="color: #aaa;font-weight:normal;"><?=$val['dept_name']?></b>
                <br><font style="color: #333;font-weight: bold;"><?=$val['create_name']?></font><font style="color: #aaa;">-<?=$val['job_name']?></font>
                <br><font style="color: #ff6600;"><?=$val['create_phone']?></font>
            </td>
            <td><?=date("Y-m-d H:i",$val['start_time'])?></td>
            <td>
                <b style="color: #aaa;font-weight:normal;">[<?=$val['dept_name2']?>]</b>
                <br><font style="color: #333;font-weight: bold;"><?=$val['assign_name']?></font><font style="color: #aaa;">-<?=$val['job_name2']?></font>
                <br><font style="color: #ff6600;"><?=$val['assign_phone']?></font>
            </td>
            <td><?=date("Y-m-d H:i",$val['end_time'])?></td>
            <td>0</td>
            <td><?=$val['task_doing_state']?></td>
            <td>
                <button class="layui-btn layui-btn-small"><i class="layui-icon">&#xe642;</i>催进度</button>
                <div style="height: 8px; line-height: 8px;"></div>
                <button class="layui-btn layui-btn-small" style="background: #f00"><i class="layui-icon">&#xe640;</i>发警告</button>

            </td>
        </tr>
        <?php
    }
    ?>
    </tbody>
</table>



<?php $this->load->view('luoui');?>
<script src="<?=config_item("domain_static")?>admin/layui/layui.js?version=<?=config_item("js_version")?>"></script>
<script src="<?=config_item("domain_static")?>admin/comm.js?version=<?=config_item("js_version")?>"></script>

<script>
    layui.use(['laydate', 'laypage', 'layer', 'table'], function(){
        var laydate = layui.laydate //日期
            ,laypage = layui.laypage //分页
        layer = layui.layer //弹层
            ,table = layui.table //表格


    });
    function remove_data($str1,del_id,del_url){
        layer.confirm('是否删除'+$str1, function(index){
            // ajax
            $.ajax({
                type:"POST",
                dataType: 'json',
                timeout: 15000,
                beforeSend:function(){$("#luoui_mark").fadeIn(450);$("#luoui_loading").fadeIn(450);},
                error: function(){setTimeout(close_luoui,500);error_tip(99, "请求网络出错！");},
                url:del_url ,
                data: {id:del_id},
                success:function(json){
                    setTimeout(close_luoui,500);
                    if(json.code != 200){
                        error_tip(json.code,json.msg);
                    }else{
                        success_tip(json.code,json.msg);
                        setTimeout(function(){location.reload();},200);

                    }

                }
            });
            // ajax end
            layer.close(index);
        });
    }

    function change_state(cate_id,feild_name,that,_url){
        // ajax
        var obj =  $(that);
        $.ajax({
            type:"POST",
            dataType: 'json',
            timeout: 15000,
            beforeSend:function(){$("#luoui_mark").fadeIn(450);$("#luoui_loading").fadeIn(450);},
            error: function(){setTimeout(close_luoui,500);error_tip(99, "请求网络出错！");},
            url:_url,
            data: {id:cate_id,feild_name:feild_name},
            success:function(json){
                setTimeout(close_luoui,500);
                if(json.code != 200){
                    error_tip(json.code,json.msg);
                }else{
                    obj.removeClass("state_icon");
                    obj.removeClass("no_state_icon");
                    if(json.data.state_value == 1){
                        obj.addClass("state_icon");
                        obj.html("&#xe616;");
                    }else{
                        obj.addClass("no_state_icon");
                        obj.html("&#x1007;");
                    }
                }
            }
        });
        // ajax end
    }
</script>
</body>
</html>
