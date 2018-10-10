<?php
require_once 'AComm_model.php';

class Personnel_model extends AComm_model
{
    public function personnel_add($post_data){
        $result = $this->db->insert('personnel',$post_data);
        if (!$result){
            json_error(21,'添加失败！','alert',[]);
        }
        return true;
    }
    public function get_personnel_list($where,$like,$page,$size){
        $f1 = table_field("personnel","id,ture_name,phone,company_time,try_work_time,task_doing_count,task_timeout_count,task_complete_count,is_login,task_create_count,dept_id,job_id");
        $f2 = ",job.job_name,job.is_del jobdel";
        $f3 = ",dept.dept_name,dept.is_del deptdel";
        $join = [
            'department dept' => ['personnel.dept_id = dept.id', "left"],
            'job' => ['personnel.job_id = job.id', "left"],
        ];

        $list = $this->get_list('personnel',"{$f1}{$f2}{$f3}",$where,$join,$like,'personnel.id DESC',$page,$size);
//        echo $this->db->last_query();
        return $list;
    }

    public function get_personnel_count($where = [], $like = [])
    {
        return $this->get_count('personnel',$where,[],$like);
    }

    public function get_personnel_info($id = 0)
    {
        return $this->get_info('personnel','*',['id'=>$id],[]);
    }

    public function personnel_edit($post_data,$where){
        $this->db->set($post_data)->where($where)->update('personnel');
        return true;
    }
    public function personnel_remove($id){
        $this->db->where(["id" => $id])->delete('personnel');
        return true;
    }

    public function personnel_list_json($where,$like,$page,$size){
        $list = $this->get_list('personnel','id,cate_name',$where,[],$like,'sort_order ASC,id DESC',$page,$size);
        return $list;
    }
}