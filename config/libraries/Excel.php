<?php
/*
 * 2017年6月9日 16:06:45 莫林杰
 * PHP导出数据到excel
 */
class Excel
{
    private $data = [];

    //写入数据
    public function init()
    {
        
    }
    
    //导出到excel
    public function export($header = [],$data = [],$file_name = '')
    {
        header("Content-type:text/html;charset=utf-8");

        $strTable = [];
        $strTable[] ='<table width="500" border="1">';
        $strTable[] = '<tr>';
        foreach ($header as $k => $v) {
            $strTable[] = "<th style=\"text-align:center;".($k ? 'width:'.$k.'px;' : '')." \">{$v}</th>";
        }
        $strTable[] = '</tr>';

        foreach ($data as $k => $v) {
            $strTable[] = '<tr>';
            foreach ($v as $key => $val) {
                $strTable[] = '<td style="text-align:center;">&nbsp;'.$val.'</td>';
            }
//            $strTable[] = '<td style="text-align:left;vnd.ms-excel.numberformat:@">'.$v['card_num'].' </td>';
            $strTable[] = '</tr>';
        }
        $strTable[] ='</table>';
        $file_name = $file_name.'.xls';
        $this->downloadExcel(implode('',$strTable),$file_name);
        exit();
    }

    public function downloadExcel($strTable,$filename){
        header("Content-type: application/vnd.ms-excel");
        header("Content-Type: application/force-download");
        header("Content-Disposition: attachment; filename=".$filename);
        header('Expires:0');
        header('Pragma:public');
        echo '<html><meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'.$strTable.'</html>';
    }
}