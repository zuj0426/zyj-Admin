<?php
class Home extends CI_Controller {
	public function index()
	{
		$this->load->view('main');
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
