<?php
class Admin extends CI_Controller
{
    public function admin_login_log()
    {
        $this->load->view('admin/admin_login_log');
    }

    public function admin_pwd_edit()
    {
        $this->load->view('admin/admin_pwd_edit');
    }

    public function admin_info()
    {
        $this->load->view('admin/admin_login_log');
    }

    public function admin_exit()
    {
        $this->load->view('admin/admin_exit');
    }

    public function admin_edit_passwd()
    {
        $this->load->view('admin/admin_edit_passwd');
    }

}