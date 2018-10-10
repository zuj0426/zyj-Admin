<?php
require_once 'AComm_model.php';

class Admin_user_model extends AComm_model
{
    //管理员登录
    public function admin_login($post_data,$where){
        $admin_user = $this->db->select("*")->where($where)->get('admin_user')->row_array();
//        echo $this->db->last_query();
        if (!$admin_user) {
            json_error(99, "管理员不存在!", "result_show", []);
        }
        if (md5($post_data['passwd'] .$admin_user['salt']) !== $admin_user['passwd']) {
            json_error(99, "密码错误!", "result_show", []);
        }
        return $admin_user;
    }





}