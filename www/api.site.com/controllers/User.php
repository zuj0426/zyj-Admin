<?php

class User extends Api_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('User_model');
    }

    public function home()
    {
        $this->load->model('Task_model');
        $where['task.assign_uid'] = $this->uid;
        $data['task_count'] = $this->User_model->get_user_task_count($this->uid);;
        $data['task_near_time_list'] = $this->Task_model->get_task_list($where, [], 1, 15);
        //超时程度
        $data['task_danger_count'] = ["low" => 0, "middle" => 0, "hight" => 0,];
        json_success(200, "首页读取成功!", '', $data);
    }
    public function my_task()
    {
        $this->load->model('Task_model');
        $save_data["task_state"] = post('task_state', 'task_state', 'var_trim|required|int|in[0,10,20,100,-10]', 'alert', 1);
        $save_data["page"] = post('page', 'page分页页数', 'var_trim|required|int|length[1,1000000]', 'alert', 1);
        $save_data["size"] = post('size', 'size每页显示', 'var_trim|required|int|eq[100]|neq[1]', 'alert', 1);
        $save_data["task_state"] = post('task_state', 'task_state', 'var_trim|required|int|in[0,10,20,100,-10]', 'alert', 1);
        $save_data["page"] = post('page', 'page分页页数', 'var_trim|required|int|page|length[1,1000000]', 'alert', 1);
        $save_data["size"] = post('size', 'size每页显示', 'var_trim|required|int|eq[100]|neq[1]', 'alert', 1);
        $where['task.assign_uid'] = $this->uid;
        $data['list_count'] = $this->Task_model->get_task_count($where, []);;
        $data['my_create_task_list'] = $this->Task_model->get_task_list($where, [], $save_data["page"], $save_data["size"]);
        json_success(200, "指派给我的任务列表", '', $data);
    }

    public function my_create_task()
    {
        $this->load->model('Task_model');
        $save_data["task_state"] = post('task_state', 'task_state', 'var_trim|required|int|in[0,10,20,100,-10]', 'alert', 1);
        $save_data["page"] = post('page', 'page分页页数', 'var_trim|required|int|page|length[1,1000000]', 'alert', 1);
        $save_data["size"] = post('size', 'size每页显示', 'var_trim|required|int|eq[100]|neq[1]', 'alert', 1);
        $where['task.create_uid'] = $this->uid;
        $data['list_count'] = $this->Task_model->get_task_count($where, []);;
        $data['my_create_task_list'] = $this->Task_model->get_task_list($where, [], $save_data["page"], $save_data["size"]);
        json_success(200, "我创建任务开表", '', $data);
    }


    public function create_read()
    {
        $this->load->model('Personnel_model');
        $where['personnel.is_del'] = 0;
        $where['personnel.is_login'] = 1;
        $data['personnel_list'] = $this->Personnel_model->get_personnel_list($where, [], 1, 1000);
        $data['lv'][] = ["id" => 1, "lv_name" => "正常"];
        $data['lv'][] = ["id" => 2, "lv_name" => "加急"];
        $data['lv'][] = ["id" => 3, "lv_name" => "马上"];
        json_success(200, "创任务界面时读出指派人列表", '', $data);
    }

    public function create_save()
    {
        $this->load->model('Personnel_model');
        $save_data["task_name"] = post('task_name', '任务名称', 'var_trim|required|min_length[1]|max_length[300]|xss_clean', 'alert', 1);
        $save_data["lv"] = post('lv', 'lv', 'var_trim|required|int|in[1,2,3]', 'alert', 1);
        $save_data["assign_uid"] = post('assign_uid', '被指派人assign_uid', 'var_trim|required|int', 'alert', 1);
        $item = $this->Personnel_model->get_personnel_info($save_data["assign_uid"]);
        if (!$item) {
            json_error(99, "被指派人assign_uid不存在", '', []);
        }
        $save_data["start_time"] = post('start_time', '开始时间', 'var_trim|required|date|strto_time', 'alert', 1);
        $save_data["end_time"] = post('end_time', '结束时间', 'var_trim|required|date|strto_time', 'alert', 1);
        $save_data["create_uid"] = $this->uid;
        $save_data["task_content"] = post('task_content', '任务名称', 'var_trim|max_length[1000]|xss_clean', 'alert', 1);
        if($save_data["create_uid"] == $save_data["assign_uid"]){
            json_error(99, "自己不能指派任务自己", '', []);
        }
        //权限指派10->9->8...->1

        $save_data["create_time"] = time();
        $save_data["task_state"] = 10;
        $this->load->model('Task_model');
        $result2 = $this->Task_model->get_task_info(['task_name'=>$save_data["task_name"],'assign_uid'=>$save_data["assign_uid"],'create_uid'=>$save_data["create_uid"]]);
        if($result2){
            json_error(99, "任务已发布成功，请不要重复发布！", '', []);
        }

        $result = $this->Task_model->task_add($save_data);
        json_success(200, "增加保存成功", '',[]);
    }

    public function edit_passwd()
    {
        $post_data["old_passwd"] = post('old_passwd', '登录密码,明文修改吧', 'var_trim|required|min_length[6]|max_length[32]', 'alert', 1);
        $post_data["new_passwd"] = post('new_passwd', '登录密码,明文修改吧', 'var_trim|required|min_length[6]|max_length[32]', 'alert', 1);
        $post_data["confirm_passwd"] = post('confirm_passwd', '登录密码,明文修改吧', 'var_trim|required|min_length[6]|max_length[32]', 'alert', 1);
        $user = $this->User_model->user_info($this->uid);
        if($user["passwd"] !== md5(md5($post_data["old_passwd"]).$user["salt"])){
            json_error(99, "旧密码不对！", '', []);
        }
        if($post_data["old_passwd"]==$post_data["new_passwd"]){
            json_error(99, "新旧密码一样，无须修改！", '', []);
        }
        if($post_data["confirm_passwd"]!==$post_data["new_passwd"]){
            json_error(99, "新密码与确认密码不同！", '', []);
        }
        $save['salt'] = random_min(6);
        $save['passwd'] = md5(md5($post_data["new_passwd"]).$save["salt"]);

        $this->User_model->user_edit($save,['id'=>$this->uid]);
        $result = $this->User_model->app_exit($this->uid);
        json_success(200, " 密码修改成功,请退出重新登录！", '',[]);
    }

    public function get_create_task_info()
    {
        $this->load->model('Task_model');
        $save_data["tid"] = post('tid', '编号', 'var_trim|required|int|neq[1]', 'alert', 1);
        $where['task.create_uid'] = $this->uid;
        $where['task.tid'] = $save_data["tid"];
        $data['task_info'] = $this->Task_model->get_task_info($where, []);
        if(!$data['task_info']){
            json_error(99, "任务不存在！", '', []);
        }
        json_success(200, "我创建任务开表", '', $data);
    }

    public function get_my_task_info()
    {
        $this->load->model('Task_model');
        $save_data["tid"] = post('tid', '编号', 'var_trim|required|int|neq[1]', 'alert', 1);
        $where['task.assign_uid'] = $this->uid;
        $where['task.tid'] = $save_data["tid"];
        $data['task_info'] = $this->Task_model->get_task_info($where, []);
        if(!$data['task_info']){
            json_error(99, "任务不存在！", '', []);
        }
        json_success(200, "我创建任务开表", '', $data);
    }


    public function task_create_user_change()
    {
        $this->load->model('Task_model');
        $tid = post('tid', '编号', 'var_trim|required|int|neq[1]', 'alert', 1);
        $task_state = post('task_state', '任务状态', 'var_trim|required|int|in[20,100,-100]', 'alert', 1);
        if($task_state == 100 ||$task_state == -100){
            $where['task.create_uid'] = $this->uid;
        }else{
            $where['task.assign_uid'] = $this->uid;
        }
        $where['task.tid'] = $tid;
        $task_info = $this->Task_model->get_task_info($where, []);
        if(!$task_info){
            json_error(99, "任务不存在或状态已被改变！", '', []);
        }

        $task_state_str = "";
        if($task_state==20){
            if($task_info['task_state']!="10"){
                json_success(200, "任务不在合法操作之内，状态已被改变", '', []);
            }
            $task_state_str = "任务开启成功";
        }elseif($task_state==100){
            if($task_info['task_state'] !="20"){
                json_success(200, "任务不在合法操作之内，状态已被改变", '', []);
            }
            $task_state_str = "任务开启成功";
        }elseif($task_state==-100){
            if($task_info['task_state'] =="100"){
                json_success(200, "任务不在合法操作之内，状态已被改变", '', [] );
            }
            $task_state_str = "任务开启成功";
        }else{
            $task_state_str = "未知操作";
        }
        $save['task_state'] = $task_state;
        if($task_state == 100){
            $save['complete_time'] = time();
            if($save['complete_time']>$task_info['end_time']){
                $save['over_time'] = $task_info['end_time']-$save['complete_time'];
            }
        }
        $task_info = $this->Task_model->task_state_edit($save,$where);
        json_success(200, "修改成功", '', []);
    }

    public function app_eixt()
    {
        $result = $this->User_model->app_exit($this->uid);
        json_success(200, "退出成功", '',[]);
    }

}