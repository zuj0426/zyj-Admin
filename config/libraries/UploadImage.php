<?php

class UploadImage
{
    public $error;

    public function __construct()
    {

    }

    public function save($type = '',$field = '',$max_size = '20480')
    {
        $ci = &get_instance();

        //文件名，路径
        $file_name = date('Ymd') . '/' . md5(microtime(true));
        $folder =  $type.date('/Y/m/d');
        $upload_path = config_item('upload_path').$folder;

        //文件配置
        $config['upload_path']      = $upload_path;
        $config['allowed_types']    = 'jpeg|jpg|png';
        $config['max_size']         = $max_size;
        $config['file_name']        = $file_name;

        //目录不存在创建目录
        if (!file_exists($upload_path)){
            mkdir($upload_path,0777,true);
        }

        $ci->load->library('upload', $config);

        //执行上传
        if ( ! $ci->upload->do_upload($field))
        {
            $this->error = $ci->upload->display_errors();
        }
        else
        {
            return $folder.'/'.$ci->upload->data('file_name');
        }
    }

    public function delete($path = '')
    {
        if (strpos($path, config_item('upload_path')) !== 0) {
            $file = config_item('upload_path') . $path;
        }else{
            $file = $path;
        }
        foreach (glob($file.'*') as $filename) {
            unlink($filename);
        }
    }
}