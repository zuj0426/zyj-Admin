<?php

function sms_send($phone, $sms_content="")
{
    //ci接口
    $CI = &get_instance();
    $CI->config->load('sms');
    $loginName = $CI->config->item('sms_account') or show_error('请先配置短信帐号！');
    $password = $CI->config->item('sms_password') or show_error('请先配置短信密码！');
    $enterpriseID = $CI->config->item('sms_ID') or show_error('请先配置短信企业ID！');
    $post_url = $CI->config->item('sms_url') or show_error('请先配置短信请求地址！');
    //短信方要求的数据
    $smsId = uniqid();
    $post_data = array(
        'loginName' => $loginName,
        'enterpriseID' => $enterpriseID,
        'password' => $password,
        'smsId' =>$smsId,
        'subPort' => '',
        'content' =>$sms_content,
        'mobiles' => $phone,
        'sendTime' => '',
    );
    //curl请求
    $o="";
    foreach ($post_data as $k=>$v)
    {
            $o.= "$k=".urlencode($v)."&";
    }
    $curlPost=substr($o,0,-1);
    $ch = curl_init();//初始化curl
    curl_setopt($ch,CURLOPT_URL, $post_url);//提交到指定网页
    curl_setopt($ch, CURLOPT_HEADER, 0);//设置header
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);//要求结果为字符串且输出到屏幕上
    curl_setopt($ch, CURLOPT_POST, 1);//post提交方式
    curl_setopt($ch, CURLOPT_POSTFIELDS, $curlPost);
    $result_xml = curl_exec($ch);//运行curl
    curl_close($ch);
    //处理返回结查，可能有网络问题造成的错误，所有用try
    try {
        $sms_xml = simplexml_load_string($result_xml);
        $sms_result = (string) $sms_xml->Result;
        $sms_ID = (string) $sms_xml->SmsId;
        if($sms_result==='0'){
            return true;
        }
        return  false;
    }catch (Exception $e){
        return  false;
    }
    return false;
}
