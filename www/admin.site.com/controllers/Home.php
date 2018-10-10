<?php
class Home extends CI_Controller {
	public function index()
	{
		$this->load->view('login');
	}

	public function login_check()
	{
//		json_error(99,"出错了!<br>","alert",[]);
        $account = post("account", "用户帐号", "var_trim|required|xss_clean|length[3,24]", "account", 12);
        if(!is_moblie($account)){
            $post_data['admin_name'] = $account;
            $where["admin_name"] = $account;
        }else{
            $post_data['admin_phone'] = $account;
            $where["admin_phone"] = $account;
        }
        $passwd = post("passwd", "登录密码", "var_trim|required|xss_clean|length[6,24]", "passwd", 12);
        $post_data['passwd'] = md5($passwd);
        $this->load->model('Admin_user_model');
        $admin_user = $this->Admin_user_model->admin_login($post_data,$where);
        $this->session->set_userdata('admin_uid',$admin_user['admin_uid']);
		json_success(200,"登录成功,","alert",[]);
	}

    public function exit_admin()
    {
        //退出系统session清理
    }

    public function exit_page()
    {
       //退出系统页面
    }


}
