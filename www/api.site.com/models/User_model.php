<?php
require_once 'AComm_model.php';

class User_model extends AComm_model
{

    public function login($post)
    {
        $phone = $post['phone'];
        $passwd = $post['passwd'];
        $f1 = table_field("personnel","id uid,ture_name,phone,passwd,salt");
        $f2 = ",job.job_name";
        $f3 = ",dept.dept_name";
        $join = [
            'department dept' => ['personnel.dept_id = dept.id', "left"],
            'job' => ['personnel.job_id = job.id', "left"],
        ];
        $user = $this->get_info('personnel',"{$f1}{$f2}{$f3}",['personnel.phone'=>$phone,'personnel.is_del'=>0,'personnel.is_login'=>1],$join);
        if(!$user){
            json_error(99,"用户不存在！",'',[]);
        }
        if($user['passwd'] != md5($passwd.$user['salt'])){
            json_error(99,"密码错误！",'',[]);
        }
        //生成token
        $user['token'] = md5(time() . "uid".$user['uid']);
        $save['uid'] = $user['uid'];
        $save['token'] = $user['token'];
        $save['login_ip'] =  ip('string');
        $save['login_time'] = time();
        $save['client_type'] = $post['client_type'];
        $save['unique_code'] = $post['unique_code'];
        $save['app_version'] = $post['app_version'];
        $app_login = $this->get_info('app_login','uid',['uid'=>$user['uid']],[]);
        if($app_login){
            $this->db->set($save)->where(['uid'=>$user['uid']])->update('app_login');
        }else{
            $this->db->insert('app_login',$save);
        }
        //去掉安全
        unset($user['passwd']);
        unset($user['salt']);




       return $user;
    }

    public function get_app_login_toke($uid)
    {
        $app_login = $this->get_info('app_login','uid,token',['uid'=>$uid],[]);
        return $app_login;
    }


    public function app_exit($uid)
    {
        $this->db->where(["uid" => $uid])->delete('app_login');
        return true;
    }
    public function user_info($uid)
    {
        $user =  $this->get_info('personnel','*',['id'=>$uid],[]);
        return $user;
    }

    public function user_edit($post_data,$where){
        $this->db->set($post_data)->where($where)->update('personnel');
        return true;
    }

    public function get_user_task_count($uid){
        $where1['assign_uid'] = $uid;
        $where1['task_state'] = 20;
        $data["task_doing_count"] = $this->get_count('task',$where1,[],[]);
        $where2['create_uid'] = $uid;
        $data["task_create_count"] = $this->get_count('task',$where2,[],[]);
        $where3['assign_uid'] = $uid;
        $data["to_my_task_count"] = $this->get_count('task',$where3,[],[]);
        $where4['assign_uid'] = $uid;
        $where4['task_state'] = -10;
        $task_timeout_count = $this->get_count('task',$where4,[],[]);
        $where5['assign_uid'] = $uid;
        $where5['task_state'] = -10;
        $data["task_complete_count"] = $this->get_count('task',$where5,[],[]);
        $where_user['id'] = $uid;
        $save['task_create_count'] = $data["to_my_task_count"];
        $save['task_doing_count'] = $data["task_doing_count"];
        $save['task_timeout_count'] = $task_timeout_count;
        $save['task_complete_count'] = $data["task_complete_count"];
        $this->db->set($save)->where($where_user)->update('personnel');
        return $data;
    }


}