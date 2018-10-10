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
    <legend>职务管理</legend>
</fieldset>
<div class="add_top">
    <a href="/job/job_add">
        增加职务
    </a>
</div>
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
        <th>序号</th>
        <th>ID</th>
        <th>职务</th>
        <th>权限（大到小）</th>
        <th>说明</th>
        <th>是否登录</th>
        <th>功能操作</th>
    </tr>
    </thead>
    <tbody>
    <?php
    foreach ($list as $key => $val) {
        ?>
        <tr>
            <td><?=$key+1?></td>
            <td><?=$val['id']?></td>
            <td><?=$val['job_name']?></td>
            <td><?=$val['job_authority']?></td>
            <td><?=$val['job_content']?></td>
            <td>
                <?php
                if($val['is_login'] =="1"){
                    ?>
                    <i class="layui-icon state_icon" onclick="change_state(<?=$val['id']?>,'is_login',this,'/job/job_change_state')">&#xe616;</i>
                    <?php
                }else{
                    ?>
                    <i class="layui-icon no_state_icon" onclick="change_state(<?=$val['id']?>,'is_login',this,'/job/job_change_state')">&#x1007;</i>
                    <?php
                }
                ?>
            </td>
            <td style="white-space: nowrap;">
                <button class="layui-btn layui-btn-small" onclick="gotoUrl('/job/job_edit/nosave/<?=$val['id']?>')"><i class="layui-icon">&#xe642;</i>修改</button>
                <button class="layui-btn layui-btn-small" onclick="remove_data('<?=$val['id']?>',<?=$val['id']?>,'/job/job_remove')"><i class="layui-icon">&#xe640;</i>删除</button>
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
