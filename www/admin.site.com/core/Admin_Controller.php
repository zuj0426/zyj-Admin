<?php

class Admin_Controller extends CI_Controller
{
    public $admin_uid;
    public function __construct()
    {
        parent::__construct();
        $this->admin_uid = $this->session->admin_uid;
        $this->session_online();
    }

    public function session_online()
    {
        $uid = intval($this->admin_uid);
        if($uid>0){

        }else{
            header("content-type:text/html; charset=utf-8");
            echo '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />';
            echo '<a href="/home/index">登陆超时,请重新登陆!</a>';
            echo '<script type="text/javascript">parent.location.href="/home/index"</script>';
            exit();
        }
    }

}