<?php
class Task extends Admin_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('Task_model');
    }
    public function task_doing_list($task_state=0)
    {
        $task_state = intval($task_state);
        if($task_state == 10){
            $where['task.task_state'] = 10;
        }elseif($task_state == 20){
            $where['task.task_state'] = 20;
            $where['task.end_time >'] = time();
        }elseif($task_state == 30){
            $where['task.task_state'] = 20;
            $where['task.end_time <'] = time();
        }elseif($task_state == 100){
            $where['task.task_state'] = 100;
        }elseif($task_state == -100){
            $where['task.task_state'] = -100;
        }else{
            $where['task.task_state'] = 20;
        }




        $where['task.is_del'] = 0;
        $data['list'] = $this->Task_model->get_task_list($where,[],1,1000);
        $this->load->view('task/task_list',$data);
    }
    public function task_list()
    {

    }

    public function task_set_config()
    {

    }
}