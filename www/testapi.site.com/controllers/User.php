<?php
class User extends TestapiController
{
    public function __construct()
    {
        parent::__construct();
    }
    public function home()
    {
        $data ['prams'] = array(
            'uid' =>$this->set_var("","用户uid","1"),
            'token' =>$this->set_var("","签名,即token","1"),
            'client_type' => $this->client_type,
            'unique_code' => $this->unique_code,
            'app_version' =>$this->app_version
        );
        $data ['action'] = config_item('domain_api'). 'user/home';
        $data ['method'] = 'post';
        $this->load->view ( 'public', $data);
    }

    public function my_task()
    {
        $data ['prams'] = array(
            'uid' =>$this->set_var("","用户uid","1"),
            'token' =>$this->set_var("","签名,即token","1"),
            'task_state' =>$this->set_var("0","状态:0全部任务，10未开始，20进行中，100已完成，-10超出时间","1"),
            'create_name' =>$this->set_var("","创任务人姓名，搜索条件，无不值","1"),
            'assign_name' =>$this->set_var("","被指派人姓名，搜索条件，无不值","1"),
            'danger_value' =>$this->set_var("","状态:1普测，2加急，3严重","1"),
            'start_time' =>$this->set_var("","任务开始时间","1"),
            'end_time' =>$this->set_var("","任务结束时间","1"),            'page' =>$this->set_var("1","分页页数","1"),
            'size' =>$this->set_var("10","每页显示多少条数据、统一默认10条","1"),
            'client_type' => $this->client_type,
            'unique_code' => $this->unique_code,
            'app_version' =>$this->app_version
        );
        $data ['action'] = config_item('domain_api'). 'user/my_task';
        $data ['method'] = 'post';
        $this->load->view ( 'public', $data);
    }

    public function my_create_task()
    {
        $data ['prams'] = array(
            'uid' =>$this->set_var("","用户uid","1"),
            'token' =>$this->set_var("","签名,即token","1"),
            'task_state' =>$this->set_var("0","状态:0全部任务，10未开始，20进行中，100已完成，-10超出时间","1"),
            'create_name' =>$this->set_var("","创任务人姓名，搜索条件，无不值","1"),
            'assign_name' =>$this->set_var("","被指派人姓名，搜索条件，无不值","1"),
            'danger_value' =>$this->set_var("","状态:1普测，2加急，3严重","1"),
            'start_time' =>$this->set_var("","任务开始时间","1"),
            'end_time' =>$this->set_var("","任务结束时间","1"),
            'page' =>$this->set_var("1","分页页数","1"),
            'size' =>$this->set_var("10","每页显示多少条数据、统一默认10条","1"),
            'client_type' => $this->client_type,
            'unique_code' => $this->unique_code,
            'app_version' =>$this->app_version
        );
        $data ['action'] = config_item('domain_api'). 'user/my_create_task';
        $data ['method'] = 'post';
        $this->load->view ( 'public', $data);
    }

    public function create_read()
    {
        $data ['prams'] = array(
            'uid' =>$this->set_var("","用户uid","1"),
            'token' =>$this->set_var("","签名,即token","1"),
            'client_type' => $this->client_type,
            'unique_code' => $this->unique_code,
            'app_version' =>$this->app_version
        );
        $data ['action'] = config_item('domain_api'). 'user/create_read';
        $data ['method'] = 'post';
        $this->load->view ( 'public', $data);
    }

    public function create_save()
    {
        $data ['prams'] = array(
            'uid' =>$this->set_var("","用户uid","1"),
            'token' =>$this->set_var("","签名,即token","1"),
            'task_name' =>$this->set_var("","任务名称5~200字","1"),
            'lv' =>$this->set_var("1","1正常，2加急，3马上","1"),
            'assign_uid' =>$this->set_var("1","指派给某人uid","1"),
            'start_time' =>$this->set_var("","开始时间：2017-12-01 9:30","1"),
            'end_time' =>$this->set_var("","结束时间：2017-12-09 18:00","1"),
            'task_content' =>$this->set_var("","内容，1000字以内","1"),
            'client_type' => $this->client_type,
            'unique_code' => $this->unique_code,
            'app_version' =>$this->app_version
        );
        $data ['action'] = config_item('domain_api'). 'user/create_save';
        $data ['method'] = 'post';
        $this->load->view ( 'public', $data);
    }

    public function edit_passwd()
    {
        $data ['prams'] = array(
            'uid' =>$this->set_var("","用户uid","1"),
            'token' =>$this->set_var("","签名,即token","1"),
            'old_passwd' =>$this->set_var("","旧密码","1"),
            'new_passwd' =>$this->set_var("","新密码","1"),
            'confirm_passwd' =>$this->set_var("","确密码","1"),
            'client_type' => $this->client_type,
            'unique_code' => $this->unique_code,
            'app_version' =>$this->app_version
        );
        $data ['action'] = config_item('domain_api'). 'user/edit_passwd';
        $data ['method'] = 'post';
        $this->load->view ( 'public', $data);
    }

    public function get_create_task_info()
    {
        $data ['prams'] = array(
            'uid' =>$this->set_var("","用户uid","1"),
            'token' =>$this->set_var("","签名,即token","1"),
            'tid' =>$this->set_var("","我创的任务tid，大于0正整数","1"),
            'client_type' => $this->client_type,
            'unique_code' => $this->unique_code,
            'app_version' =>$this->app_version
        );
        $data ['action'] = config_item('domain_api'). 'user/get_create_task_info';
        $data ['method'] = 'post';
        $this->load->view ( 'public', $data);
    }

    public function get_my_task_info()
    {
        $data ['prams'] = array(
            'uid' =>$this->set_var("","用户uid","1"),
            'token' =>$this->set_var("","签名,即token","1"),
            'tid' =>$this->set_var("","指派我的任务tid，大于0正整数","1"),
            'client_type' => $this->client_type,
            'unique_code' => $this->unique_code,
            'app_version' =>$this->app_version
        );
        $data ['action'] = config_item('domain_api'). 'user/get_my_task_info';
        $data ['method'] = 'post';
        $this->load->view ( 'public', $data);
    }

    public function task_create_user_change()
    {
        $data ['prams'] = array(
            'uid' =>$this->set_var("","用户uid","1"),
            'token' =>$this->set_var("","签名,即token","1"),
            'tid' =>$this->set_var("","指派我的任务tid，大于0正整数","1"),
            'task_state' =>$this->set_var("","20开启任务，100完成任务,-100关闭任务","1"),
            'client_type' => $this->client_type,
            'unique_code' => $this->unique_code,
            'app_version' =>$this->app_version
        );
        $data ['action'] = config_item('domain_api'). 'user/task_create_user_change';
        $data ['method'] = 'post';
        $this->load->view ( 'public', $data);
    }





    public function app_exit()
    {
        $data ['prams'] = array(
            'uid' =>$this->set_var("","用户uid","1"),
            'token' =>$this->set_var("","签名,即token","1"),
            'client_type' => $this->client_type,
            'unique_code' => $this->unique_code,
            'app_version' =>$this->app_version
        );
        $data ['action'] = config_item('domain_api'). 'user/app_eixt';
        $data ['method'] = 'post';
        $this->load->view ( 'public', $data);
    }

    public function test()
    {
        $data ['prams'] = array(
            'uid' =>$this->set_var("111","用户uid","1"),
            'token' =>$this->set_var("c4b4bab41538f0a865af9f0c73fab797","签名,即token","1"),
            'client_type' => $this->client_type,
            'unique_code' => $this->unique_code,
            'app_version' =>$this->app_version
        );
        $data ['action'] = 'https://user.aiyujiavip.com/api/daili/get_daili_info';
        $data ['method'] = 'post';
        $this->load->view ( 'public', $data);
    }



}
