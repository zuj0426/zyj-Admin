<?php
class Download extends CI_Controller {

    public function index(){
        
        $this->load->view('download');
    }
    
    
    
 public function app(){
     if($this->is_weixin()){
         header('Location: '."/home/weixin");
         exit;
     }
     
    $agent = strtolower($_SERVER['HTTP_USER_AGENT']);
    $is_android = (stripos($agent, 'android')) ? true : false;
    $url = config_item('domain_static')."app/guanjia.apk";
    if($is_android){
        header('Location: '.$url);
        exit;
    }
    
    $is_iphone = (stripos($agent, 'iphone')) ? true : false;
    if($is_iphone){
        $url_ios = "https://itunes.apple.com/cn/app/%E4%B8%80%E7%AB%99%E7%AE%A1%E5%AE%B6/id1325920581?mt=8";
        header('Location: '.$url_ios);
        exit;
    }else{
     header('Location: '.$url);
    }
    
}
public function is_weixin(){
    if ( strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger') !== false ) {
        return true;
    }
    return false;
}

}