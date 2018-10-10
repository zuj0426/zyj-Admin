<?php
class Department extends Admin_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('Department_model');
    }

    public function department_list()
    {
        $where['is_del'] = 0;
        $data['list'] = $this->Department_model->get_department_list($where,[],1,1000);
        $this->load->view('department/department_list',$data);
    }

    public function department_add($save="")
    {
        if($save=="save"){
            $save_data["dept_name"] = post('dept_name', '部门名字', 'var_trim|required|max_length[30]|xss_clean', 'alert', 1);
            $save_data["dept_content"] = post('dept_content', '说明', 'var_trim|max_length[300]|xss_clean', 'alert', 1);
            $save_data["is_login"] = post('is_login', '是否登录', 'var_trim|int01', 'is_show', 1);
            $result = $this->Department_model->department_add($save_data);
            json_success(200,"添加成功!","alert",['back_url'=>"/department/department_list"]);
            return false;
        }
        $this->load->view('department/department_add');
    }

    public function department_edit($save="",$id=0)
    {
        $id = intval($id);
        $item = $this->Department_model->get_department_info($id);
        $data['item'] = $item;
        if($save=="save"){
            $where = ['id'=>$item['id']];
            $save_data["dept_name"] = post('dept_name', '部门名字', 'var_trim|required|max_length[30]|xss_clean', 'alert', 1);
            $save_data["dept_content"] = post('dept_content', '说明', 'var_trim|max_length[300]|xss_clean', 'alert', 1);
            $save_data["is_login"] = post('is_login', '是否登录', 'var_trim|int01', 'is_show', 1);
            $result = $this->Department_model->department_edit($save_data,$where);
            json_success(200,"修改成功!","alert",['back_url'=>"/department/department_list"]);
            return false;
        }

        $this->load->view('department/department_edit',$data);
    }

    public function department_change_state()
    {
        $state_value = 0;
        $id = post('id', '编号', 'var_trim|required|int|neq[0]', 'id', 1);
        $feild_name = post('feild_name', '操作', 'var_trim|required|xss_clean', 'feild_name', 1);
        $item = $this->Department_model->get_department_info($id);
        $data['item'] = $item;
        if($item["$feild_name"] == "0"){
            $state_value = 1;
        }
        $save_data["$feild_name"] = $state_value;
        $result = $this->Department_model->department_edit($save_data,['id'=>$id]);
        json_success(200,"修改成功!","alert",['state_value'=>$state_value]);

    }

    public function department_remove()
    {
        $state_value = 0;
        $id = post('id', '编号', 'var_trim|required|int|neq[0]', 'id', 1);
        $item = $this->Department_model->get_department_info($id);
        $data['item'] = $item;
        $save_data["is_del"] = 1;
        $result = $this->Department_model->department_edit($save_data,['id'=>$id]);
        json_success(200,"删除成功!","alert",['is_del'=>1]);

    }}