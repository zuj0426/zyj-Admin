<?php
class Login extends TestapiController
{
    public function __construct()
    {
        parent::__construct();
    }
    public function login()
    {
        $data ['prams'] = array(
            'phone' =>$this->set_var("13768818000","帐号11位手机号码（登录接口）","1"),
            'passwd' => $this->set_var("yz123456","大于6位密码，app端md5小写后再交回服务器二次加密","1"),
            'client_type' => $this->client_type,
            'unique_code' => $this->unique_code,
            'app_version' =>$this->app_version
        );
        $data ['action'] = config_item('domain_api'). 'login/login';
        $data ['method'] = 'post';
        $this->load->view ( 'login/login', $data);
    }
}