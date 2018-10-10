<?php
class AComm_model extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * 获取数据组
     * @param string $table 主表名
     * @param array $fields 字段数组
     * @param array $where 条件组
     * @param array $joins 关联表名
     * @param array $like 模糊查询数组
     * @param int $page 当前页，默认1
     * @param int $size 每页显示数量，默认10
     * @return mixed 数据数组，空时为空数组
     */
    public function get_list($table = '',$fields = [],$where = [], $joins = [],$like = ['AND' => [], 'OR' => []],$order_by = '', $page = 1, $size = 10)
    {
        foreach ($joins as $k => $v) {
            $this->db->join($k,is_array($v) ? $v[0] : $v,$v[1]);
        }
        if (is_array($fields)){
            foreach ($fields as $k => $v) {
                $this->db->select($v);
            }
        }else{
            $this->db->select($fields);
        }

        $this->db->where($where);
        if (!empty($like['AND']) || !empty($like['OR'])){
            $this->db
                ->group_start()
                ->like($like['AND'])
                ->or_like($like['OR'])
                ->group_end();
        }

        $list = $this->db
            ->order_by($order_by)
            ->limit($size, ($page - 1) * $size)
            ->get($table)
            ->result_array();
//        dump($this->db->last_query());
//        exit;
        return $list;
    }

    /**
     * 获取数据条数，常用于分页
     * @param string $table 主表名
     * @param array $where 条件组
     * @param array $joins 关联表名
     * @param array $like 模糊查询数组
     * @return mixed 数据条数
     */
    public function get_count($table = '', $where = [], $joins = [], $like = ['AND' => [], 'OR' => []])
    {
        foreach ($joins as $k => $v) {
            $this->db->join($k,is_array($v) ? $v[0] : $v,$v[1]);
        }
        $this->db->where($where);
        if (!empty($like['AND']) || !empty($like['OR'])){
            $this->db
                ->group_start()
                ->like($like['AND'])
                ->or_like($like['OR'])
                ->group_end();
        }

        $count = $this->db->count_all_results($table);
        return $count;
    }

    /**
     * 查询单条数据
     * @param string $table 主表名
     * @param array $fields 字段数组
     * @param array $where 条件组
     * @param array $joins 关联表名
     * @return mixed 数据数组
     */
    public function get_info($table = '',$fields = [],$where = [], $joins = [])
    {
        $field = '';
        if (is_array($fields)){
            foreach ($fields as $k => $v) {
                $this->db->select($v);
            }
        }else{
            $this->db->select($fields);
        }
        foreach ($joins as $k => $v) {
            $this->db->join($k,is_array($v) ? $v[0] : $v,$v[1]);
        }
        $info = $this->db
            ->select($field)
            ->where($where)
            ->get($table)
            ->row_array();
        return $info;
    }

}