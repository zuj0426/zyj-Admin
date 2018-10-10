<?php

/**
 * @time: 2017/3/23 11:07
 */


function get_thumb_img($soure_img, $size = FALSE)
{
    if (!$soure_img) {//为空时直接返回，避免报错
        return '';
    }
    $CI = &get_instance();
    $CI->load->library('image');
    return $CI->image->getThumb($soure_img, $size);
}


function login_user()
{
    $ci = &get_instance();

    $uid = $ci->post('uid', '用户uid', 'var_trim|is_num|max_length[11]', 'uid', 1);
    $sign = $ci->post('sign', '登录签名', 'var_trim|xss_clean', 'sign', 1);
    if (!$uid || !$sign) {
        return false;
    }
    $client_type = $ci->post('client_type', '手机类型', 'var_trim|required', 'client_type', 1);
//        $unique_code = $ci->post('unique_code', '手机唯一码ID', 'var_trim|required', 1);
    $app_version = $ci->post('app_version', '手机版本号', 'var_trim|required', 'app_version', 1);
    $user_cache_name = "user_app_{$uid}";
    $user_online = cache($user_cache_name);

    // 内存变量
    if ($user_online) {
        // 在线有内存缓存比较
        if ($user_online['uid'] !== $uid) {
            json_error(110, "请使用您自己用户来访问数据，超时退出，请重新登录!", "uid", array());
        }
        if ($user_online['sign'] !== $sign) {
            json_error(110, "签名错误，超时退出，请重新登录!", "sign", array());
        }
        if ($user_online['client_type'] !== $client_type) {
            json_error(110, "您已在其它版本客户端登录，请重新登录!", "client_type", array());
        }
//            if ($user_online['unique_code'] !== $unique_code) {
//                json_error(110, "您已在其它手机设备，请重新登录!", "unique_code", array());
//            }
        // 以下是内存没有数数，读取数据库
    } else {
        $ci->load->model('user_model');
        $user_data = $ci->user_model->get_user_sign($uid);

        if ($user_data) {
            // 在线有内存缓存比较
            if ($user_data['uid'] !== $uid) {
                json_error(110, "请使用您自己用户来访问数据，超时退出，请重新登录!", "uid", array());
            }
            if ($user_data['sign'] !== $sign) {
                json_error(110, "签名错误，超时退出，请重新登录!", "sign", array());
            }
            if ($user_data['client_type'] !== $client_type) {
                json_error(110, "您已在其它版本客户端登录，请重新登录!", "client_type", array());
            }
//                if ($user_data['unique_code'] !== $unique_code) {
//                    json_error(110, "您已在其它手机设备，请重新登录!", "unique_code", array());
//                }
        } else {
            json_error(110, "找不到您的登录信息或被清空，请重新登录!", "uid", array());
        }
    }
    return $uid;
}


if (!function_exists('cache')) {

    /**
     * 全局缓存方法 - 使用Memcache缓存
     *
     * @param $key 缓存key值
     * @param $data 默认为NULL，表示读取；若为FALSE，表示删除；其它表示设置缓存
     * @param $expire 缓存时间。单位：秒，默认1800秒
     *
     */
    function cache($key, $data = NULL, $expire = 1800)
    {

        static $_cache = NULL;
        if ($_cache === NULL) {
          $ci = &get_instance();
          $ci->load->library('cache_memcached');
          $_cache = &$ci->cache_memcached;
        }

        if ($data === NULL) {
            return $_cache->get('bangbang' . $key);
        }

        if ($data === FALSE) {
            return $_cache->delete('bangbang' . $key);
        }
        return $_cache->save('bangbang' . $key, $data, $expire);
    }

}
if (!function_exists('random_min')) {

    //获取指定长度的随机字符串
    function random_min($len)
    {
        $srcstr = "1a2s3d4f5g6hj8k9qwertyupzxcvbnm3333";
        //$srcstr = "123456789012345678901234567890";
        mt_srand();
        $strs = "";
        for ($i = 0; $i < $len; $i++) {
            $strs .= $srcstr[mt_rand(0, 30)];
        }
        return $strs;
    }

}

function random_num_min($len)
{
//    $srcstr = "1a2s3d4f5g6hj8k9qwertyupzxcvbnm";
    $srcstr = "123456789012345678901234567890123";
    mt_srand();
    $strs = "";
    for ($i = 0; $i < $len; $i++) {
        $strs .= $srcstr[mt_rand(0, 30)];
    }
    return $strs;
}

if (!function_exists('ip')) {

    /**
     * 获取IP地址
     * @param string $format 返回IP格式
     *            string（默认）表示传统的127.0.0.1，int或其它表示转化为整型，便于存放到数据库字段
     * @param string $side IP来源
     *            client（默认）表示客户端，server或其它表示服务端
     * @return string or int
     */
    function ip($format = 'string', $side = 'client')
    {
        if ($side === 'client') {
            static $_client_ip = NULL;
            if ($_client_ip === NULL) {
                // 获取客户端IP地址
                $ci = &get_instance();
                $_client_ip = $ci->input->ip_address();
            }
            $ip = $_client_ip;
        } else {
            static $_server_ip = NULL;
            if ($_server_ip === NULL) {
                // 获取服务器IP地址
                if (isset($_SERVER)) {
                    if ($_SERVER ['SERVER_ADDR']) {
                        $_server_ip = $_SERVER ['SERVER_ADDR'];
                    } else {
                        $_server_ip = $_SERVER ['LOCAL_ADDR'];
                    }
                } else {
                    $_server_ip = getenv('SERVER_ADDR');
                }
            }
            $ip = $_server_ip;
        }

        return $format === 'string' ? $ip : bindec(decbin(ip2long($ip)));
    }

}
if (!function_exists('is_ajax')) {

    //判断是否为ajax请求，常用于判断请求类型，输出不同类型的结果
    function is_ajax()
    {
        static $_ret = NULL;
        if ($_ret === NULL) {
            $_ret = isset($_SERVER ['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER ['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
        }
        return $_ret;
    }

}


function timeFormat($time = 0, $format = '')
{
    if (!$time) {
        return '';
    }
    switch ($format) {
        case 1://完全
            $date_str = date('Y-m-d H:i:s', $time);
            break;
        case 2://不带秒数
            $date_str = date('Y-m-d H:i', $time);
            break;
        case 3: {//距今时间
            $differ = time() - $time;
            if ($differ <= 60) {
                $date_str = $differ . '秒前';
            } elseif ($differ <= 60 * 60) {
                $date_str = (int)($differ / 60) . '分钟前';
            } elseif ($differ <= 60 * 60 * 24) {
                $date_str = (int)($differ / (60 * 60)) . '小时前';
            } elseif ($differ <= 60 * 60 * 24 * 30) {
                $date_str = (int)($differ / (60 * 60 * 24)) . '天前';
            } elseif ($differ > 60 * 60 * 24 * 30 && $differ <= 60 * 60 * 24 * 365) {
                $date_str = (int)($differ / (60 * 60 * 24 * 30)) . '个月前';
            } elseif ($differ >= 60 * 60 * 24 * 365 && $differ <= 60 * 60 * 24 * 365 * 3) {
                $date_str = (int)($differ / (60 * 60 * 24 * 365)) . '年前';
            } else {
                $date_str = '时间过于久远';
            }
            break;
        }
        case 4: {//昨天今天明天
            $differ = time() - $time;
            if ($differ >= 0) {//今天之前
                if ($differ <= 60 * 60 * 24) {
                    $date_str = '今天';
                } elseif ($differ <= 60 * 60 * 24 * 2) {
                    $date_str = '昨天';
                } else {
                    $date_str = date('m-d ', $time);
                }
            } else {//今天之后
                $differ = abs($differ);
                if ($differ <= 60 * 60 * 24) {
                    $date_str = '今天';
                } elseif ($differ <= 60 * 60 * 24 * 2) {
                    $date_str = '明天';
                } else {
                    $date_str = date('m-d ', $time);
                }
            }
            $date_str = $date_str . date(' H:i', $time);
            break;
        }
        case 5: {//时分
            $date_str = date('H:i', $time);
        }
            break;
        default:
            $date_str = date('Y-m-d H:i:s', $time);
    }
    return $date_str;
}


/**
 * 浏览器友好的变量输出
 * @param mixed $var 变量
 * @param boolean $echo 是否输出 默认为true 如果为false 则返回输出字符串
 * @param string $label 标签 默认为空
 * @return void|string
 */
function dump($var, $echo = true, $label = null)
{
    $label = (null === $label) ? '' : rtrim($label) . ':';
    ob_start();
    var_dump($var);
    $output = ob_get_clean();
    $output = preg_replace('/\]\=\>\n(\s+)/m', '] => ', $output);
    $output = '<pre>' . $label . $output . '</pre>';
    if ($echo) {
        echo($output);
        return;
    } else {
        return $output;
    }
}


//一维数组转化为多维数组 （按照父级节点） (算法2 递归算法) 必须先用tree方法格式化为树状结构----------------------
function to_tree_array($list, $parentname, $idname, $_le, $_le_name = 'le')
{
    static $i = 2;
    $le = $i;
    if ($i == $_le) {         //判断是否最后一层
        foreach ($list as $key => $value) {
            if ($value[$_le_name] = $_le) {
                $sun_array[] = $value;
            }
        }
    } else {
        $i++;
        $sun_array = to_tree_array($list, $parentname, $idname, $_le, $_le_name);
    }

    //设置数组的父子级关系
    $n = 1;
    foreach ($list as $pk => $pv) {
        if ($pv[$_le_name] == $le - 1) {
            $array = $pv;
            foreach ($sun_array as $k => $v) {
                if ($array[$idname] == $v[$parentname]) {
                    $array['son_item_count'] = $n;  //统计有多少个子集
                    $array['son_item_list'][] = $v;
                    $n++;
                }
            }
            $data[] = $array;
        }
    }
    return $data;
}


function hide_star($str)
{ //用户名、邮箱、手机账号中间字符串以*隐藏
    if (strpos($str, '@')) {
        $email_array = explode("@", $str);
        $prevfix = (strlen($email_array[0]) < 4) ? "" : substr($str, 0, 3); //邮箱前缀
        $count = 0;
        $str = preg_replace('/([\d\w+_-]{0,100})@/', '***@', $str, -1, $count);
        $rs = $prevfix . $str;
    } else {
        $pattern = '/(1[3458]{1}[0-9])[0-9]{4}([0-9]{4})/i';
        if (preg_match($pattern, $str)) {
            $rs = preg_replace($pattern, '$1****$2', $str); // substr_replace($name,'****',3,4);
        } else {
            $rs = substr($str, 0, 3) . "***" . substr($str, -1);
        }
    }
    return $rs;
}


/*
 * 计算订单的价格,$type为计算类型，0表示计算购物车数据中的所有结果，1表示只计算选中的数据
 */

function caculate_cart_count($cart_list = null)
{

    $result['sale_amount'] = 0; //销售价综合
    $result['total_amount'] = 0; //市场价或者原价的综合
    $result['count'] = 0; //所有的商品总数
    $result['total_fee'] = 0; //原价总和 -销售价 = 优惠价或者差价
    $result['sum'] = 0; //商品的种类之和
    if (!$cart_list) {
        return $result;
    }

    foreach ($cart_list as $key => $val) {
        $result['sale_amount'] += $val['sale_price'] * $val['goods_num'];
        $result['total_amount'] += $val['market_price'] * $val['goods_num'];
        $result['count'] += $val['goods_num'];
        $result['total_fee'] += ($val['market_price'] - $val['sale_price']);
        $result['sum'] += 1;
    }
    return $result;
}


function json_error($code = 0, $error_str = "", $ui_name = "alert", $data = "")
{
    exit(json_encode(['code' => $code + 0, "success" => false, "msg" => $error_str, "ui_name" => $ui_name, "data" => $data], JSON_UNESCAPED_UNICODE));
}


function json_success($code = 0, $success_str = "", $ui_name = "alert", $data = "")
{
    exit(json_encode(['code' => $code + 0, "success" => true, "msg" => $success_str, "ui_name" => $ui_name, "data" => $data], JSON_UNESCAPED_UNICODE));
}


function post($id = '', $info = '', $rule = '', $name = '', $code = 0)
{
    $ci = &get_instance();
    return $ci->validate->check($ci->input->post($id), $info, $rule, $name, $code);
}

function admin_url($url = 'home/index')
{
    return config_item('domain_admin') . $url;
}

function redis_cache($key = '', $val = '', $timeout = 0)
{
    $ci = &get_instance();
    if ($ci->rediscache->get('mark_' . $key) === null) { //如果未设置
        $ci->rediscache->set('mark_' . $key, $val); //设置
        $ci->rediscache->EXPIRE('mark_' . $key, 30 * 60); //设置过期时间 （30 min）
        return true;
    } else {
        return $ci->rediscache->get('mark_' . $key);  //从缓存中直接读取对应的值
    }
}

function time_tran($the_time) {
    $now_time = date("Y-m-d H:i:s", time());
    //echo $now_time;
    $now_time = strtotime($now_time);
//    $show_time = strtotime($the_time);
    $show_time = $the_time;
    $dur = $now_time - $show_time;
    if ($dur < 0) {
        return $the_time;
    } else {
        if ($dur < 60) {
            return $dur . '秒前';
        } else {
            if ($dur < 3600) {
                return floor($dur / 60) . '分钟前';
            } else {
                if ($dur < 86400) {
                    return floor($dur / 3600) . '小时前'.date("i分", $the_time);
                } else {
                    if ($dur < 259200) {//3天内
                        return floor($dur / 86400) . '天前'.date("H时i分", $the_time);
                    } else {
                        return date("Y-m-d H:i:s",$the_time);
                    }
                }
            }
        }
    }
}

function trace($str)
{
    echo '<meta charset="utf-8">';
    echo $str;
    echo "&nbsp;<a href=\"javascript:history.go(-1)\">返回</a>";
    exit;
}

function user_info()
{
    $user = [];
    $ci = &get_instance();
    $ci->load->model('User_model');
    $user = $ci->User_model->get_user_info($ci->session->user_uid);
    return $user;
}
function is_moblie($str) {
    if (is_numeric($str) == FALSE) {
        return FALSE;
    }
    if (strlen($str) != 11) {
        return FALSE;
    }
    if (preg_match("/^13[0-9]{1}[0-9]{8}$|15[0234567189]{1}[0-9]{8}$|18[0-9]{1}[0-9]{8}$|17[0-9]{1}[0-9]{8}$|14[0-9]{1}[0-9]{8}$/", $str)) {
        //验证通过
        return TRUE;
    }
    return FALSE;

}

function table_field($t_name,$field=""){
    $data['tabel_name'] = $t_name;
    $data['field'] = "";
    if($field !== ""){
        $field_arr = explode(",",$field);
        foreach ($field_arr as $key => $var) {
            if($key === 0){
                $data['field'] .= $data['tabel_name'].".".$var;
            }else{
                $data['field'] .= ",{$data['tabel_name']}.".$var;
            }
        }
    }
    if($data['field'] ===""){
        $data['field'] = "*";
    }
    return $data['field'];
}
function diff_date($day1, $day2)
{
    $second1 = strtotime($day1);
    $second2 = strtotime($day2);

    if ($second1 < $second2) {
        $tmp = $second2;
        $second2 = $second1;
        $second1 = $tmp;
    }
    return ($second1 - $second2) / 86400;
}
function diff_time($int_time1, $int_time2)
{
    $second1 = $int_time1;
    $second2 = $int_time2;
    if ($second1 < $second2) {
        $tmp = $second2;
        $second2 = $second1;
        $second1 = $tmp;
    }
    return ($second1 - $second2) / 86400;
}
function time_diff_string($int_time1, $int_time2){
    $second = $int_time1-$int_time2;
    $day = floor($second/(3600*24));
    $second = $second%(3600*24);//除去整天之后剩余的时间
    $hour = floor($second/3600);
    $second = $second%3600;//除去整小时之后剩余的时间
    $minute = floor($second/60);
    $second = $second%60;//除去整分钟之后剩余的时间
    //返回字符串
//    return $day.'天'.$hour.'小时'.$minute.'分'.$second.'秒';
    $date_str = "";
    $hour_str = "";
    $minute_str = "";
    $second_str = "";
    if($day<0 || $hour<0 || $minute<0 || $second <0){
        if($day<0){
            $date_str = $day.'天';
        }
        if($hour<0){
            $hour_str = $hour.'小时';
        }
        if($minute<0){
            $minute_str = $minute.'分';
        }
        if($second<0){
            $second_str = $second.'秒';
        }
//        echo $day.'天'.$hour.'小时'.$minute.'分'.$second.'秒';
        return "超时：{$date_str}{$hour_str}{$minute_str}{$second_str}";
    }
    if($day>0){
        $date_str = $day.'天';
    }
    if($hour>0){
        $hour_str = $hour.'小时';
    }
    if($minute>0){
        $minute_str = $minute.'分';
    }
    if($second>0){
        $second_str = $second.'秒';
    }
    return "剩余：{$date_str}{$hour_str}{$minute_str}{$second_str}";
}

function time_diff_string2($int_time1, $int_time2){
    $second = $int_time1-$int_time2;
    $day = floor($second/(3600*24));
    $second = $second%(3600*24);//除去整天之后剩余的时间
    $hour = floor($second/3600);
    $second = $second%3600;//除去整小时之后剩余的时间
    $minute = floor($second/60);
    $second = $second%60;//除去整分钟之后剩余的时间
    //返回字符串
//    return $day.'天'.$hour.'小时'.$minute.'分'.$second.'秒';
    $date_str = "";
    $hour_str = "";
    $minute_str = "";
    $second_str = "";
    if($day<0 || $hour<0 || $minute<0 || $second <0){
        if($day<0){
            $date_str = $day.'天';
        }
        if($hour<0){
            $hour_str = $hour.'小时';
        }
        if($minute<0){
            $minute_str = $minute.'分';
        }
        if($second<0){
            $second_str = $second.'秒';
        }
//        echo $day.'天'.$hour.'小时'.$minute.'分'.$second.'秒';
        return "用时:{$date_str}{$hour_str}{$minute_str}{$second_str}";
    }
    if($day>0){
        $date_str = $day.'天';
    }
    if($hour>0){
        $hour_str = $hour.'小时';
    }
    if($minute>0){
        $minute_str = $minute.'分';
    }
    if($second>0){
        $second_str = $second.'秒';
    }
    return "用时:{$date_str}{$hour_str}{$minute_str}{$second_str}";
}