<?php

class Git extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        header("content-type:text/html; charset=utf-8");
        echo '<meta charset="utf-8" />' ;
        echo '<style type="text/css">
a{ float:left; width:100px; height:32px; background:#00C6F8; margin:0px 10px; text-align:center; line-height:32px; color:#ffffff; font-size:16px; font-weight:bold; text-decoration:none; border-radius: 20px;-webkit-border-radius: 20px; -moz-border-radius: 20px;}
a:hover{ float:left; width:100px; height:32px; background:#00921E; margin:0px 10px; text-align:center; line-height:32px; color:#F8FF00; font-size:16px; font-weight:bold; text-decoration:none; border-radius: 20px;-webkit-border-radius: 20px; -moz-border-radius: 20px;}
.clear{clear:both;}
</style><a href="/">首页</a><a href="/git">拉取</a><a href="/git/log">日志</a><a href="/git/diff">对比</a><div style="height:30px;" class="clear"></div>';
    }
    
    public function index()
    {
        exec('/usr/bin/git pull', $output);
        foreach ($output as $line) {
            echo $line . '<br />';
        }
       
    }

    public function log()
    {
        exec('/usr/bin/git log', $output);
        foreach ($output as $line) {
            echo $line . '<br />';
        }
      
    }

    public function diff()
    {
        exec('/usr/bin/git diff', $output);
        foreach ($output as $line) {
            echo $line . '<br />';
        }
       
    }
    
    public function phpinfo()
    {
       echo phpinfo();
    }
}
