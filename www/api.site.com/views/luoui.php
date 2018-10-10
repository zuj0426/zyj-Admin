
<link rel="stylesheet" href="<?=config_item("domain_static")?>luoui/css/ui.css?version=<?=config_item("css_version")?>">
<div class="luoui_mark" id="luoui_mark"></div>
<div class="luoui_loading" id="luoui_loading">
    <div class="luoui_loading_logo"></div>
    <div class="luoui_loading_title" >
        <span id="luoui_loading_title" class="luoui_loading_title_span">正在保存...</span>
    </div>
</div>
<script type="text/javascript">
    $(function(){
        $("#luoui_mark").fadeOut(1000);
        $("#luoui_loading").fadeOut(1000);
    });
</script>
