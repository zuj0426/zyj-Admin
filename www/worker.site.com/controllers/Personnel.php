<?php

class Personnel extends Admin_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('Personnel_model');
        $this->load->model('Job_model');
        $this->load->model('Department_model');
    }

    public function personnel_list()
    {
        $where['personnel.is_del'] = 0;
        $data['list'] = $this->Personnel_model->get_personnel_list($where, [], 1, 1000);
        $this->load->view('personnel/personnel_list', $data);
    }

    public function personnel_add($save = "")
    {
        if ($save == "save") {
            $save_data["ture_name"] = post('ture_name', '真实姓名', 'var_trim|required|max_length[20]|xss_clean', 'alert', 1);
            $save_data["phone"] = post('phone', '手机号码', 'var_trim|required|phone', 'alert', 1);
            $save_data["passwd"] = post('passwd', '密码', 'var_trim|required|max_length[32]|xss_clean', 'alert', 1);
            $save_data["dept_id"] = post('dept_id', '部门', 'var_trim|required|int', 'alert', 1);
            $save_data["job_id"] = post('job_id', '职位', 'var_trim|required|int', 'alert', 1);
            $save_data["company_time"] = post('company_time', '转正时间', 'var_trim|required|date|strto_time', 'alert', 1);
            $save_data["try_work_time"] = post('try_work_time', '试用时间', 'var_trim|required|date|strto_time', 'alert', 1);
            $save_data["is_login"] = post('is_login', '是否登录', 'var_trim|int01', 'is_show', 1);
            $save_data["salt"] = "yzyzyz";
            $save_data["passwd"] = md5(md5($save_data["passwd"]) . $save_data["salt"]);
            $result = $this->Personnel_model->personnel_add($save_data);
            json_success(200, "添加成功!", "alert", ['back_url' => "/personnel/personnel_list"]);
            return false;
        }
        $data['dept_list'] = $this->Department_model->get_department_list(['is_del' => 0], [], 1, 10000);
        $data['job_list'] = $this->Job_model->get_job_list(['is_del' => 0], [], 1, 10000);
        $this->load->view('personnel/personnel_add', $data);
    }

    public function personnel_edit($save = "", $id = 0)
    {
        $id = intval($id);
        $item = $this->Personnel_model->get_personnel_info($id);
        $data['item'] = $item;
        if ($save == "save") {
            $where = ['id' => $item['id']];
            $save_data["ture_name"] = post('ture_name', '真实姓名', 'var_trim|required|max_length[20]|xss_clean', 'alert', 1);
            $save_data["phone"] = post('phone', '手机号码', 'var_trim|required|phone', 'alert', 1);
            $save_data["passwd"] = post('passwd', '密码', 'var_trim|xss_clean', 'alert', 1);
            $save_data["dept_id"] = post('dept_id', '部门', 'var_trim|required|int', 'alert', 1);
            $save_data["job_id"] = post('job_id', '职位', 'var_trim|required|int', 'alert', 1);
            $save_data["company_time"] = post('company_time', '转正时间', 'var_trim|required|date|strto_time', 'alert', 1);
            $save_data["try_work_time"] = post('try_work_time', '试用时间', 'var_trim|required|date|strto_time', 'alert', 1);
            $save_data["is_login"] = post('is_login', '是否登录', 'var_trim|int01', 'is_show', 1);
            if ($save_data["passwd"]) {
                $save_data["salt"] = "yzyzyz";
                $save_data["passwd"] = md5(md5($save_data["passwd"]) . $save_data["salt"]);
            }
            $result = $this->Personnel_model->personnel_edit($save_data, $where);
            json_success(200, "修改成功!", "alert", ['back_url' => "/personnel/personnel_list"]);
            return false;
        }
        $data['dept_list'] = $this->Department_model->get_department_list(['is_del' => 0], [], 1, 10000);
        $data['job_list'] = $this->Job_model->get_job_list(['is_del' => 0], [], 1, 10000);
        $this->load->view('personnel/personnel_edit', $data);
    }

    public function personnel_change_state()
    {
        $state_value = 0;
        $id = post('id', '编号', 'var_trim|required|int|neq[0]', 'id', 1);
        $feild_name = post('feild_name', '操作', 'var_trim|required|xss_clean', 'feild_name', 1);
        $item = $this->Personnel_model->get_personnel_info($id);
        $data['item'] = $item;
        if ($item["$feild_name"] == "0") {
            $state_value = 1;
        }
        $save_data["$feild_name"] = $state_value;
        $result = $this->Personnel_model->personnel_edit($save_data, ['id' => $id]);
        json_success(200, "修改成功!", "alert", ['state_value' => $state_value]);

    }

    public function personnel_remove()
    {
        $state_value = 0;
        $id = post('id', '编号', 'var_trim|required|int|neq[0]', 'id', 1);
        $item = $this->Personnel_model->get_personnel_info($id);
        $data['item'] = $item;
        $save_data["is_del"] = 1;
        $result = $this->Personnel_model->personnel_edit($save_data, ['id' => $id]);
        json_success(200, "删除成功!", "alert", ['is_del' => 1]);

    }
}