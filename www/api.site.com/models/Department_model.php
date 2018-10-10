<?php
require_once 'AComm_model.php';

class Department_model extends AComm_model
{
    public function department_add($post_data){
        $result = $this->db->insert('department',$post_data);
        if (!$result){
            json_error(21,'添加失败！','alert',[]);
        }
        return true;
    }
    public function get_department_list($where,$like,$page,$size){
        $list = $this->get_list('department','*',$where,[],$like,'id DESC',$page,$size);
        return $list;
    }

    public function get_department_count($where = [], $like = [])
    {
        return $this->get_count('department',$where,[],$like);
    }

    public function get_department_info($id = 0)
    {
        return $this->get_info('department','*',['id'=>$id],[]);
    }

    public function department_edit($post_data,$where){
        $this->db->set($post_data)->where($where)->update('department');
        return true;
    }
    public function department_remove($id){
        $this->db->where(["id" => $id])->delete('department');
        return true;
    }

    public function department_list_json($where,$like,$page,$size){
        $list = $this->get_list('department','id,cate_name',$where,[],$like,'sort_order ASC,id DESC',$page,$size);
        return $list;
    }
}