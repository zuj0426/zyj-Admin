<?php
class Login extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('User_model');
    }

    public function login()
    {
        $save_data["phone"] = post('phone', '手机号码', 'var_trim|required|phone', 'alert', 1);
        $md5passwd = post('md5passwd', 'off', 'var_trim', 'alert', 1);
        if($md5passwd=="off"){
            $save_data["passwd"] = post('passwd', '登录密码', 'var_trim|required|min_length[6]|max_length[32]', 'alert', 1);
            $save_data["passwd"] = md5($save_data["passwd"]);
        }else{
            $save_data["passwd"] = post('passwd', '登录密码', 'var_trim|required|length[32]', 'alert', 1);
        }
        $save_data["client_type"] = post('client_type', '登录类型', 'var_trim|required|int', 'alert', 1);
        $save_data["unique_code"] = post('unique_code', '设备码', 'var_trim|required|max_length[64]', 'alert', 1);
        $save_data["app_version"] = post('app_version', '版本号', 'var_trim|required|max_length[10]', 'alert', 1);
        $user = $this->User_model->login($save_data);
        json_success(200,"登录成功",'',['user'=>$user]);
	}

}