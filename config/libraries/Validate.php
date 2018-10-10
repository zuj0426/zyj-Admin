<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Validate
{
    private $var_str = '';//需要验证的数据
    private $var_info = '';//获取的数据描述
    private $length_array;//指定验证长度
    private $data = [];//携带的参数

    /**
     * 过滤验证开始方法
     * @param string $data 需要验证的字段
     * @param string $field 验证字段描述
     * @param string|array $rule 验证规则
     * @param string $uiname 数据描述
     * @param int $code 数据代号
     * @return string 过滤的结果
     */
    public function check($data = '', $field = '', $rule = '', $uiname = '', $code = 0)
    {
        $this->var_str = $data;
        $this->var_info = $field;
//        $this->ui_name = $ui_name;
        if (is_array($code)){
            $this->data = $code;
            $code = -1;
        }

        if (is_array($rule)){
            $rule_array = $rule;
        }else{
            $rule_array = explode('|', $rule);
        }
        // 字段验证
//        if ($rule instanceof \Closure) {
//            // 匿名函数验证 支持传入当前字段和所有字段两个数据
//            $result = call_user_func_array($rule, [$value, $data]);
//        }
        foreach ($rule_array as $key => $val) {
            $func = $val;
            preg_match("/([\w_]+)\[(\d+|.+?)\]/", $val, $rull_parm_arr);
            if(count($rull_parm_arr)==3){
                $func = $rull_parm_arr[1];
                $this -> length_array = $rull_parm_arr[2];
            }
            $result = $this->$func();
            if ($result['success'] === false) {
                header("Content-type: text/html; charset=utf-8");
                json_error($code, $this->var_info . $result['data'], $uiname, $this->data);
            }
            $this->var_str = $result['data'];
        }
        return $this->var_str;
    }

    //过滤空格
    private function var_trim()
    {
        return ['success' => true, 'data' => trim($this->var_str)];
    }

    //必须字段
    private function required()
    {
        if (is_array($this->var_str)){
            foreach ($this->var_str as $k=>$v){
                trim($this->var_str[$k]);
            }
            if (count($this->var_str) == 0) {
                return ['success' => false, 'data' => '不能为空！'];
            }
        }else{
            $this->var_str = trim($this->var_str);
            if (mb_strlen($this->var_str) == 0) {
                return ['success' => false, 'data' => '不能为空！'];
            }
        }
        
        return ['success' => true, 'data' => $this->var_str];

    }

    //验证邮箱
    private function email()
    {
        if (!preg_match('/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix', $this->var_str)) {
            return ['success' => false, 'data' => '格式不正确！'];
        }
        return ['success' => true, 'data' => $this->var_str];
    }

    //最小长度
    private function min_length()
    {
        if (mb_strlen($this->var_str) < $this->length_array) {
            return ['success' => false, 'data' => '不能少于' . $this->length_array . '位'];
        }
        return ['success' => true, 'data' => $this->var_str];
    }

    //最大长度
    private function max_length()
    {
        if (mb_strlen($this->var_str) > $this->length_array) {
            return ['success' => false, 'data' => '不能超过' . $this->length_array . '位'];
        }
        return ['success' => true, 'data' => $this->var_str];
    }

    //长度区间，length[1,9]，指定长度length[10]
    private function length()
    {
        $this -> length_array = explode(',',$this -> length_array);
        $length = mb_strlen($this->var_str);
        if (count($this->length_array) == 2 && ($length < $this->length_array[0] || $length > $this->length_array[1])) {
            return ['success' => false, 'data' => '长度不能超出' . $this->length_array[0] . '~' . $this->length_array[1] . '位范围'];
        } else if (count($this->length_array)==1 && $length != $this->length_array[0]) {
            return ['success' => false, 'data' => '必须为' . $this->length_array[0]."位"];
        }
        return ['success' => true, 'data' => $this->var_str];
    }

    //规定值
    private function in()
    {
        $this -> length_array = explode(',',$this -> length_array);
        if (!in_array($this->var_str, $this->length_array)) {
            return ['success' => false, 'data' => '非指定值'];
        }
        return ['success' => true, 'data' => $this->var_str];
    }

    //范围验证
    private function between()
    {
        $this -> length_array = explode(',',$this -> length_array);
        if ($this->var_str < $this->length_array[0] || $this->var_str > $this->length_array[1]){
            return ['success' => false, 'data' => '大小应在' . $this->length_array[0] . '到' . $this->length_array[1] . '之间'];
        }
        return ['success' => true, 'data' => $this->var_str];
    }


    //是否数字,空值不判断
    private function is_num()
    {
        if (!empty($this->var_str) && !is_numeric($this->var_str)) {
            return ['success' => false, 'data' => '不是纯数字'];
        }
        return ['success' => true, 'data' => $this->var_str];
    }

    //检测手机号
    private function phone()
    {
        $this->is_num();//检测纯数字
        if (mb_strlen($this->var_str) !== 11) {
            return $data = ['success' => false, 'data' => '格式不对，请输入11位手机号码!'];
        }
        if (preg_match("/^1[1-9]{1}[0-9]{9}$/", $this->var_str)) {
            return $data = ['success' => true, 'data' => $this->var_str];
        }
        return $data = ['success' => false, 'data' => '不是正确的手机号码!'];
    }

    //XSS过滤
    private function xss_clean()
    {
        $this->var_str = preg_replace('/([\x00-\x08,\x0b-\x0c,\x0e-\x19])/', '', $this->var_str);
        // straight replacements, the user should never need these since they're normal characters
        // this prevents like <IMG SRC=@avascript:alert('XSS')>
        $search = 'abcdefghijklmnopqrstuvwxyz';
        $search .= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $search .= '1234567890!@#$%^&*()';
        $search .= '~`";:?+/={}[]-_|\'\\';
        for ($i = 0; $i < strlen($search); $i++) {
            // ;? matches the ;, which is optional
            // 0{0,7} matches any padded zeros, which are optional and go up to 8 chars

            // @ @ search for the hex values
            $this->var_str = preg_replace('/(&#[xX]0{0,8}' . dechex(ord($search[$i])) . ';?)/i', $search[$i], $this->var_str); // with a ;
            // @ @ 0{0,7} matches '0' zero to seven times
            $this->var_str = preg_replace('/(�{0,8}' . ord($search[$i]) . ';?)/', $search[$i], $this->var_str); // with a ;
        }

        // now the only remaining whitespace attacks are \t, \n, and \r
        $ra1 = Array('javascript', 'vbscript', 'expression', 'applet', 'meta', 'xml', 'blink', 'link', 'style', 'script', 'embed', 'object', 'iframe', 'frame', 'frameset', 'ilayer', 'layer', 'bgsound', 'title', 'base');
        $ra2 = Array('onabort', 'onactivate', 'onafterprint', 'onafterupdate', 'onbeforeactivate', 'onbeforecopy', 'onbeforecut', 'onbeforedeactivate', 'onbeforeeditfocus', 'onbeforepaste', 'onbeforeprint', 'onbeforeunload', 'onbeforeupdate', 'onblur', 'onbounce', 'oncellchange', 'onchange', 'onclick', 'oncontextmenu', 'oncontrolselect', 'oncopy', 'oncut', 'ondataavailable', 'ondatasetchanged', 'ondatasetcomplete', 'ondblclick', 'ondeactivate', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'onerror', 'onerrorupdate', 'onfilterchange', 'onfinish', 'onfocus', 'onfocusin', 'onfocusout', 'onhelp', 'onkeydown', 'onkeypress', 'onkeyup', 'onlayoutcomplete', 'onload', 'onlosecapture', 'onmousedown', 'onmouseenter', 'onmouseleave', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onmousewheel', 'onmove', 'onmoveend', 'onmovestart', 'onpaste', 'onpropertychange', 'onreadystatechange', 'onreset', 'onresize', 'onresizeend', 'onresizestart', 'onrowenter', 'onrowexit', 'onrowsdelete', 'onrowsinserted', 'onscroll', 'onselect', 'onselectionchange', 'onselectstart', 'onstart', 'onstop', 'onsubmit', 'onunload');
        $ra = array_merge($ra1, $ra2);

        $found = true; // keep replacing as long as the previous round replaced something
        while ($found == true) {
            $val_before = $this->var_str;
            for ($i = 0; $i < sizeof($ra); $i++) {
                $pattern = '/';
                for ($j = 0; $j < strlen($ra[$i]); $j++) {
                    if ($j > 0) {
                        $pattern .= '(';
                        $pattern .= '(&#[xX]0{0,8}([9ab]);)';
                        $pattern .= '|';
                        $pattern .= '|(�{0,8}([9|10|13]);)';
                        $pattern .= ')*';
                    }
                    $pattern .= $ra[$i][$j];
                }
                $pattern .= '/i';
                $replacement = substr($ra[$i], 0, 2) . '<x>' . substr($ra[$i], 2); // add in <> to nerf the tag
                $this->var_str = preg_replace($pattern, $replacement, $this->var_str); // filter out the hex tags
                if ($val_before == $this->var_str) {
                    // no replacements were made, so exit the loop
                    $found = false;
                }
            }
        }
        return $data = ['success' => true, 'data' => $this->var_str];
    }

    //强制转换为整型
    private function int()
    {
        return $data = array('success' => true, 'data' => intval($this->var_str));
    }

    //转成0,1输出
    private function int01()
    {
        $num =  intval($this->var_str);
        if($num == 1 ){
            $num =1;
        }else{
            $num =0;
        }
        return $data = array('success' => true, 'data' =>$num);
    }

    //转成绝对值
    private function _abs()
    {
        $num =  abs(intval($this->var_str));
        return $data = array('success' => true, 'data' =>$num);
    }

    //大于
    private function neq()
    {
        $num = $this->var_str+0;
        if ($num < $this->length_array) {
            return ['success' => false, 'data' => '必须大于或等于' . $this->length_array];
        }
        return ['success' => true, 'data' =>$num];
    }

    private function eq()
    {
        $num = $this->var_str+0;
        if ($num > $this->length_array) {
            return ['success' => false, 'data' => '必须少于或等于' . $this->length_array];
        }
        return ['success' => true, 'data' =>$num];
    }



    // 用户不存在输出json
    private function is_user_phone()
    {
        $ci = &get_instance();
        $ci->load->database();
        $user = $ci->db->select('uid')
            ->get_where('user', ['phone'=>$this->var_str], 1)
            ->row_array();
        if (!$user) {
            return $data = ['success'=>false,'data'=>'尚未注册，请您先注册!'];
        }
        return $data = ['success' => true, 'data' => $this -> var_str];
    }

    //用户已输在输出json
    private function no_user_phone() {
        $ci = &get_instance();
        $ci->load->database();
        $user = $ci->db->select('uid')
            ->get_where('user', ['phone'=>$this->var_str], 1)
            ->row_array();
        if ($user) {
            return $data = ['success'=>false,'data'=>'已经存在，请直接登录!'];
        }
        return $data = ['success' => true, 'data' => $this -> var_str];
    }

    //日期验证规则
    private function date()
    {
        if ($this->var_str){
            if (!strtotime($this->var_str)) {
                return ['success' => false, 'data' => '不是一个正确的日期格式！'];
            }
        }
        return ['success' => true, 'data' => $this->var_str];
    }

    //时间验证规则
    private function time()
    {
        if ($this->var_str){
            if (!preg_match('/^\d{1,2}:\d{1,2}$/', $this->var_str)) {
                return ['success' => false, 'data' => '不是一个正确的时间格式！'];
            }
        }
        return ['success' => true, 'data' => $this->var_str];
    }

    //转为绝对值
    private function absolute(){
        return ['success' => true, 'data' => abs($this->var_str)];
    }
    private function strto_time(){
        return ['success' => true, 'data' => strtotime($this->var_str)];
    }

    /**
     * 分页页码
     */
    private function page(){
        $data = $this->var_str;
        $page = intval($data);
        if (!is_numeric($data) || $page<0){
            return $data = array('success' => false, 'data' => $this -> var_str . '不是正确分页数!');
        }
        if($page<1){
            $page = 1;
        }
        return $data = array('success' => true, 'data' => $page);
    }

    private function urlde()
    {
        return $data = array('success' => true, 'data' => urldecode($this->var_str));
    }


}