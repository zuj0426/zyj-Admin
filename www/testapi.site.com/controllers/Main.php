<?php
class Main extends TestapiController {
	public function index()
	{
		$this->load->view('main');
	}

	public function my_home()
	{
		$this->load->view('admin/welcome');
	}

    public function my_desk()
    {
        $this->load->view('admin/welcome');
    }

    public function admin_exit()
    {
        $this->session->set_userdata('admin_uid', null);
        $url = "/home";
        echo "<script language='javascript' type='text/javascript'>";
        echo "parent.location.href='$url'";
        //echo "window.location.href='$url'";
        echo "</script>";
    }

}
