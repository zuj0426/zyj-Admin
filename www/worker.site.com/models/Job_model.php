<?php
require_once 'AComm_model.php';

class job_model extends AComm_model
{
    public function job_add($post_data){
        $result = $this->db->insert('job',$post_data);
        if (!$result){
            json_error(21,'添加失败！','alert',[]);
        }
        return true;
    }
    public function get_job_list($where,$like,$page,$size){
        $list = $this->get_list('job','*',$where,[],$like,'job_authority DESC,id DESC',$page,$size);
        return $list;
    }

    public function get_job_count($where = [], $like = [])
    {
        return $this->get_count('job',$where,[],$like);
    }

    public function get_job_info($id = 0)
    {
        return $this->get_info('job','*',['id'=>$id],[]);
    }

    public function job_edit($post_data,$where){
        $this->db->set($post_data)->where($where)->update('job');
        return true;
    }
    public function job_remove($id){
        $this->db->where(["id" => $id])->delete('job');
        return true;
    }

    public function job_list_json($where,$like,$page,$size){
        $list = $this->get_list('job','id,cate_name',$where,[],$like,'sort_order ASC,id DESC',$page,$size);
        return $list;
    }
}