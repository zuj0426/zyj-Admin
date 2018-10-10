<?php
/**
 * layui,jquery的异步分页方法
 * @param int $page 页码
 * @param int $size 每页显示数量
 * @param int $count 数据总数
 * @param string $url 获取到内容的控制器方法url
 * @param array $data 异步POST携带数据
 * @param string $div_name 指定用于异步填充内容的容器
 * @return string HTML格式
 */
function pages($page=1, $size = 10, $count = 0, $url='', $data = [], $div_name='#content_list')
{
    $all_page = ceil($count / $size);//页数
    $static = config_item('domain_static');
    $html = [];//Html内容
    //数据容器
    $html[] = '<div id="layui-page"></div>';
    //分页异步处理方法
    $html[] = "
<script>
window.onload = function() {
    layui.config({
    base: '{$static}admin/iframe/',
    version: new Date().getTime()
}).use(['laypage','layer'], function() {
        var laypage = layui.laypage
        ,layer = layui.layer;
       
        laypage({
            cont: 'layui-page'
            ,pages: {$all_page}
            ,curr: {$page}
            ,skip: true
            ,jump: function(obj, first) {
                var load = layer.load(1,{time: 6*1000});
                var url = '{$url}'+'/'+obj.curr;
                $('{$div_name}').load(url,".json_encode($data).",function() {
                    layer.close(load);
                });
            }
        });
    })
}
</script>";
    return implode($html);
}