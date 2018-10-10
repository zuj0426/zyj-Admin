<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>一站网集团工作进度管理系统</title>
    <link rel="stylesheet" href="<?=config_item("domain_static")?>admin/login/css/font-awesome.min.css">
    <link rel="stylesheet" href="<?=config_item("domain_static")?>bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="<?=config_item("domain_static")?>admin/login/css/login.css">
    <link rel="stylesheet" href="<?=config_item("domain_static")?>layer/layer/mobile/need/layer.css">
    <link rel="stylesheet" href="<?=config_item("domain_static")?>luoui/css/ui.css">
</head>
<body>
<div class="login_ui">
    <div class="container">
        <div class="row">
            <div class="col-md-offset-3 col-md-6">
                <form class="form-horizontal" onsubmit="return false;" name="post_form1">
                    <span class="heading">超管员登录</span>
                    <div class="form-group">
                        <input type="text" class="form-control" id="input_account" placeholder="登录手机/单位名称" name="account">
                        <i class="fa fa-user"></i>
                    </div>
                    <div class="form-group help">
                        <input type="password" class="form-control" id="input_password" placeholder="密　码" name="passwd">
                        <i class="fa fa-lock"></i>
                        <a href="#" class="fa fa-question-circle"></a>
                    </div>
                    <div class="form-group">
                        <div class="main-checkbox">
                            <input name="checkbox1" type="checkbox" id="checkbox1" value="1" checked="checked"  />
                            <label for="checkbox1" ></label>
                        </div>
                        <label class="text"  for="checkbox1">记住密码</label>
                        <button type="submit" class="btn btn-default"  id="login_submit">登录</button>
                    </div>
                </form>
            </div>
        </div>

    </div>
</div>

<div class="luoui_mark" id="luoui_mark"></div>
<div class="luoui_loading" id="luoui_loading">
    <div class="luoui_loading_logo"></div>
    <div class="luoui_loading_title" >
        <span id="luoui_loading_title" class="luoui_loading_title_span">正在登录...</span>
    </div>
</div>
</body>
<script language="javascript" src="<?=config_item("domain_static")?>jquery/jquery.min.js"></script>
<script language="javascript" src="<?=config_item("domain_static")?>layer/layer/mobile/layer.js"></script>
<script language="javascript" src="<?=config_item("domain_static")?>admin/login/js/login.js"></script>
<script type="text/javascript">
    $(function(){
        $("#luoui_mark").fadeOut(1000);
        $("#luoui_loading").fadeOut(1000);
    });
</script>
</html>
