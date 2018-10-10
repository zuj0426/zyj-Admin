<?php
require_once 'AComm_model.php';

class Task_model extends AComm_model
{

    public function get_task_list($where, $like, $page, $size)
    {
        $f1 = table_field("task", "tid id,task_name,lv,create_uid,assign_uid,create_time,start_time,end_time,complete_time,over_time,task_content,task_state");
        $f4 = table_field("user","ture_name create_name,phone create_phone");
        $f5 = table_field("user2","ture_name assign_name,phone assign_phone");
        $f2 = ",job.job_name,job.is_del jobdel";
        $f3 = ",dept.dept_name,dept.is_del deptdel";
        $f2_2 = ",job2.job_name job_name2,job2.is_del jobdel2";
        $f3_2 = ",dept2.dept_name dept_name2,dept2.is_del deptdel2";


        $join = [
            'personnel user' => ['task.create_uid = user.id', "left"],
            'personnel user2' => ['task.assign_uid = user2.id', "left"],
            'department dept' => ['user.dept_id = dept.id', "left"],
            'job' => ['user.job_id = job.id', "left"],
            'department dept2' => ['user2.dept_id = dept2.id', "left"],
            'job job2' => ['user2.job_id = job2.id', "left"],

        ];

        $list = $this->get_list('task', "{$f1}{$f2}{$f3}{$f2_2}{$f3_2},{$f4},{$f5}", $where, $join, $like, 'task.tid DESC', $page, $size);
        $this_time = time();
        foreach ($list as $key => $val) {
            $list[$key]['danger_value'] = "";
            $list[$key]['remaining_time'] = "";
            $list[$key]['task_doing_state'] = "进行中";
//            $list[$key]['remaining_time'] = time_diff_string($val['end_time'], $val['start_time']);
            if ($val["task_state"] == "20") {
                $list[$key]['remaining_time'] = time_diff_string($val['end_time'], $val['start_time']);
                if ($val['end_time'] < $this_time) {
                    $list[$key]['task_doing_state'] = "已超时仍进行中";
                    $list[$key]['remaining_time'] = time_diff_string( $val['end_time'],$this_time);
                }
            }
            if ($val["task_state"] == "10") {
                $list[$key]['task_doing_state'] = "未开启";
                if ($val['end_time'] < $this_time) {
                    $list[$key]['remaining_time'] = time_diff_string($val['end_time'], $this_time);
                }
            }
            if ($val["task_state"] == "100") {
                $list[$key]['task_doing_state'] = "已完成";
                if ($val['end_time'] < $val['complete_time']) {
                    $list[$key]['remaining_time'] = time_diff_string2( $val['complete_time'], $val['end_time']);
                }
            }
            if ($val["task_state"] == "-100") {
                $list[$key]['task_doing_state'] = "已关闭";
            }
        }
        return $list;
    }

}