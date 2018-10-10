<?php

class Image
{
    const QUALITY = 100;
    private $ci;

    public function __construct()
    {
        $this->ci = &get_instance();
    }


    public function getThumb($path = '',$size = '')
    {
        $server = $this->ci->config->item('image_servers') or show_error('请先配置图片服务器！');
        $image_404 = $this->ci->config->item('image_404') or show_error('未配置默认图片');
        if (count($server) > 1) {
            //负载均衡,随机一台图片服务器
            $num = array_rand(range(0, count($server)));
            $server_url = $server[$num];
        } else {
            $server_url = $server[0];
        }
        //服务器保存路径
        $server_path = $this->ci->config->item('upload_path');
        //原图
        $img_path = $server_path . trim($path);
        $img_url = $server_url . trim($path);
        //判断图片是否存在
        if (!file_exists($img_path)){
            return $image_404;
        }
        //获取文件扩展名
        $image_type = exif_imagetype($img_path);
        $ext = image_type_to_extension($image_type);
        if ($size){
            //需要截取大小
            list($width, $height) = explode("x", $size);
        }else{
            //不需要截取
            return $img_url;
        }
        //缩略图
        $img_thumb = $path . "_" . $width . "x" . $height . $ext;
        $img_thumb_url = $server_url . $img_thumb;
        $img_thumb_path = $server_path . $img_thumb;
        if (file_exists($img_thumb_path)){
            //已存在缩略图直接返回
            return $img_thumb_url;
        }elseif (file_exists($img_path)){
            // 计算按比例缩小的图片尺寸
            list($image_width, $image_height) = getimagesize($img_path);
            $target_width = $width;
            $target_height = $height;
            if ($width > 0 && $height > 0) {
                //等比裁剪图像
                $target_width = $width;
                $target_height = intval($target_width * $image_height / $image_width);
                if ($target_height > $height) {
                    $target_height = $height;
                    $target_width = intval($target_height * $image_width / $image_height);
                }
            } else if ($height === 0) {
                // 只限宽度
                $target_height = intval($target_width * $image_height / $image_width);
            } else {
                // 只限高度
                $target_width = intval($target_height * $target_width / $image_height);
            }
            //图片裁剪
            if ($ext == ".png") {
                //生成png缩略图，自动生成并带透明度
                $output = imagecreatetruecolor($target_width, $target_height);
                $input = imagecreatefrompng($img_path);
                imagesavealpha($input, true);
                $thumb = imagecreatetruecolor($target_width, $target_height);
                imagealphablending($thumb, false);
                imagesavealpha($thumb, true);
                if (imagecopyresampled($thumb, $input, 0, 0, 0, 0, $target_width, $target_height, $image_width, $image_height)) {
                    imagepng($thumb, $img_thumb_path);
                    imagedestroy($output);
                }
            } else {
                //jpg,gif,bmp缩略图,一律以jpg格式输出
                $input = imagecreatefromjpeg($img_path);
                $output = imagecreatetruecolor($target_width, $target_height);
                imagecopyresampled($output, $input, 0, 0, 0, 0, $target_width, $target_height, $image_width, $image_height);
                imagejpeg($output, $img_thumb_path, self::QUALITY);
                imagedestroy($output);
            }
            return $img_thumb_url;
        }else{
            //图片不存在时，返回一张空图片
            if (ENVIRONMENT == 'development'){
                //本地环境返回原图差错
                return $img_url;
            }else{
                //线上环境返回一张默认图片
                return $image_404;
            }
        }

    }

    /**
     * 下载远程图片
     * @param string $img_url 图片地址
     * @param string $save_path 本地相对路径
     * @param string $file_name 文件名
     * @return bool
     */
    public function down_server_img($server_img_url="", $save_img_path="")
    {
        $save_path = $save_img_path;
        $curl = curl_init();
        curl_setopt_array($curl, [
            CURLOPT_URL => $server_img_url,
            CURLOPT_USERAGENT => $_SERVER['HTTP_USER_AGENT'],
            CURLOPT_FOLLOWLOCATION => 0,
            CURLOPT_HTTPGET => 1,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HEADER => 0,
            CURLOPT_RETURNTRANSFER => true,
        ]);

        $image = curl_exec($curl);
        curl_close($curl);
        $fop = fopen($save_path, 'w');
        fwrite($fop, $image);
        fclose($fop);
        unset($image);
        return true;
    }
}