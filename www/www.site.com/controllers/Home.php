<?php
class Home extends CI_Controller {
	public function index()
	{
		$this->load->view('home');
	}



	public function weixin()
    {
        $this->load->view('weixin');
    }

    public function exit_page()
    {
       //退出系统页面
    }


}
