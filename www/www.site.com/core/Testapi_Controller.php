<?php

class TestapiController extends CI_Controller
{
    public $unique_code = array();
    public $app_version = array();
    public $client_type = array();
    protected $uid;
    public function __construct()
    {
        parent::__construct();
        $this->unique_code = $this->set_var("FA95024A-EC83-46A3-AEE0-3D180795767E", "安卓IMEI_DeviceId，苹果NSUUID", "1");
        $this->app_version = $this->set_var("1.0", "app版本", "1");
        $this->client_type = $this->set_var("1", "客户端类型：1.android,2.ios", "1");
    }

    public function set_var($text_value='',$text_description='',$html5_set=0){
        return array('text_value'=>$text_value,'text_description'=>$text_description,'html5_set'=>$html5_set);
    }

}