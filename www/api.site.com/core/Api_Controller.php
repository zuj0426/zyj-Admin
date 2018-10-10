<?php
class Api_Controller extends CI_Controller
{
    public $uid;
    public function __construct()
    {
        parent::__construct();
        $this->load->model('User_model');
        $uid = post('uid', '用户uid', 'var_trim|required|int', 'uid', 1);
        $token = post('token', '登录签名', 'var_trim|required', 'token', 1);
        $this->uid = $uid;
        $user_data = $this->User_model->get_app_login_toke($uid);
        if ($user_data) {
            // 在线有内存缓存比较
            if ($user_data['uid'] != $uid) {
                json_error(110, "请使用您自己用户来访问数据，超时退出，请重新登录!1", "uid", array());
            }
            if ($user_data['token'] !== $token) {
                json_error(110, "签名错误，超时退出，请重新登录!2", "sign", array());
            }
        } else {
            json_error(110, "找不到您的登录信息或被清空，请重新登录!3", "uid", array());
        }
        // 结束if
    }
}