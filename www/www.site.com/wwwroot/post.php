<?php
$o="";
foreach ($_POST as $k=>$v)
{
    if($k!="ajax_post_url"){
        
       $o.= "$k=".urlencode($v)."&"; 
    }
   
}
$curlPost=substr($o,0,-1);
$url=$_POST['ajax_post_url']; 
$ch = curl_init();//初始化curl  
curl_setopt($ch,CURLOPT_URL, $url);//提交到指定网页  
curl_setopt($ch, CURLOPT_HEADER, 0);//设置header  
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);//要求结果为字符串且输出到屏幕上  
curl_setopt($ch, CURLOPT_POST, 1);//post提交方式  
curl_setopt($ch, CURLOPT_POSTFIELDS, $curlPost);  
$data = curl_exec($ch);//运行curl  
curl_close($ch);  
echo($data);

?>