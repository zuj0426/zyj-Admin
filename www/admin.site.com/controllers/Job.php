<?php
class Job extends Admin_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('Job_model');
    }

    public function job_list()
    {
        $where['is_del'] = 0;
        $data['list'] = $this->Job_model->get_job_list($where,[],1,1000);
        $this->load->view('job/job_list',$data);
    }

    public function job_add($save="")
    {
        if($save=="save"){
            $save_data["job_name"] = post('job_name', '部门名字', 'var_trim|required|max_length[30]|xss_clean', 'alert', 1);
            $save_data["job_content"] = post('job_content', '说明', 'var_trim|max_length[300]|xss_clean', 'alert', 1);
            $save_data["job_authority"] = post('job_authority', '权限值', 'var_trim|required|int', 'alert', 1);
            $save_data["is_login"] = post('is_login', '是否登录', 'var_trim|int01', 'is_show', 1);
            $result = $this->Job_model->job_add($save_data);
            json_success(200,"添加成功!","alert",['back_url'=>"/job/job_list"]);
            return false;
        }
        $this->load->view('job/job_add');
    }

    public function job_edit($save="",$id=0)
    {
        $id = intval($id);
        $item = $this->Job_model->get_job_info($id);
        $data['item'] = $item;
        if($save=="save"){
            $where = ['id'=>$item['id']];
            $save_data["job_name"] = post('job_name', '部门名字', 'var_trim|required|max_length[30]|xss_clean', 'alert', 1);
            $save_data["job_content"] = post('job_content', '说明', 'var_trim|max_length[300]|xss_clean', 'alert', 1);
            $save_data["job_authority"] = post('job_authority', '权限值', 'var_trim|required|max_length[30]|xss_clean', 'alert', 1);
            $save_data["is_login"] = post('is_login', '是否登录', 'var_trim|int01', 'is_show', 1);
            $result = $this->Job_model->job_edit($save_data,$where);
            json_success(200,"修改成功!","alert",['back_url'=>"/job/job_list"]);
            return false;
        }

        $this->load->view('job/job_edit',$data);
    }

    public function job_change_state()
    {
        $state_value = 0;
        $id = post('id', '编号', 'var_trim|required|int|neq[0]', 'id', 1);
        $feild_name = post('feild_name', '操作', 'var_trim|required|xss_clean', 'feild_name', 1);
        $item = $this->Job_model->get_job_info($id);
        $data['item'] = $item;
        if($item["$feild_name"] == "0"){
            $state_value = 1;
        }
        $save_data["$feild_name"] = $state_value;
        $result = $this->Job_model->job_edit($save_data,['id'=>$id]);
        json_success(200,"修改成功!","alert",['state_value'=>$state_value]);

    }

    public function job_remove()
    {
        $state_value = 0;
        $id = post('id', '编号', 'var_trim|required|int|neq[0]', 'id', 1);
        $item = $this->Job_model->get_job_info($id);
        $data['item'] = $item;
        $save_data["is_del"] = 1;
        $result = $this->Job_model->job_edit($save_data,['id'=>$id]);
        json_success(200,"删除成功!","alert",['is_del'=>1]);

    }}