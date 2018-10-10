/**
 * 2017年5月12日 更新
 * 将刷新机制改为动画结束后刷新，且返回失败不刷新，网络错误提示
 * 2017年6月3日 异步成功后都执行callback()
 * 2017年6月9日 新增提示框选项
 * 异步post提交
 * 适用于只提示结果的表单提交和登录提交
 * 自动跳转data内的url,自动根据uiname弹出提示框
 * 依赖Layer,jquery
 * @param data 携带的数据
 * @param url 提交地址，空时提交到当前地址
 * @param callback 完成回调
 */
function post(data,url,callback,confirm) {
    var func = function (data) {
        if (typeof(callback) === 'function'){
            callback(data);
        }else if(callback === true){
            window.location.reload();
        }
    };
    var toSend = function () {
        var load = layer.load(2);
        $.ajax({
            url: url,
            type: 'post',
            dataType: 'json',
            data: data,
            error: function () {
                layer.closeAll();
                layer.alert('网络错误，请稍候再试',{icon: 5});
            },
            success: function (data) {
                var icon = '';
                if (data.success == true){
                    icon = 1;
                    if (data.data.url != undefined){
                        window.location.href = data.data.url;
                    }
                    else if (data.ui_name == 'msg'){
                        layer.msg(data.msg,{icon: icon,time: 800,end: function(){func(data)}});
                    }else if (data.ui_name == 'alert'){
                        layer.alert(data.msg,{icon: icon,end: function(){func(data)}});
                    }else{
                        func(data);
                    }
                }else{
                    icon = 5;
                    if (data.ui_name == 'msg'){
                        layer.msg(data.msg,{icon: icon});
                    }else if (data.ui_name == 'alert'){
                        layer.alert(data.msg,{icon: icon});
                    }
                }
                layer.close(load);
            }
        })
    }
    if (confirm != undefined && confirm != ''){
        layer.confirm(confirm,{icon: 3,title: '提示'},function (index) {
            toSend();
            layer.close(index);
        })
    }else {
        toSend();
    }
}

/**
 * 表单验证方法
 * 内置验证方法回调函数参数依次为，提示标题，控件值，控件的id
 * @param $from_id form表单ID
 * @param $rule 表单验证规则
 * @returns {*} 验证失败返回false，验证通过返回表单内容
 */
function check_form($from_id,$rule) {
    var result = new Object();
    var form = $($from_id).serializeArray();

    //内置验证方法
    check_func = {
        required: function (msg, value, elem_id) {
            if (value === null || value === undefined || value === '') {
                return msg + '不能为空';
            }
        },
        date: function (msg, value, elem_id) {
            if (value.match(/^(?:(?!0000)[0-9]{4}[-/](?:(?:0[1-9]|1[0-2])[-/](?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])[-/](?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)[-/]02[-/]29)$/) === null) {
                return msg + '不是一个正确的日期格式';
            }
        },
        number: function (msg, value, elem_id) {
            if (isNaN(value)) {
                return msg + '应为数字';
            }
        },
        positive: function (msg, value, elem_id) {
            if (value.match(/^[0-9]*[1-9][0-9]*$|/) === null) {
                return msg + '应为正整数';
            }
        },
        money: function (msg, value, elem_id) {
            if (value.match(/^[0-9]{1,6}\.?[0-9]{0,2}$/) === null || value <= 0) {
                return msg + '不是一个正确的金额';
            }
        },
        img: function (msg, value, elem_id) {
            if ($('#' + elem_id).val() === '') {
                return '请上传一张' + msg;
            }
        },
        md5: function (msg, value, elem_id) {
            
        }
    };

    //弹框提示
    laymsg = function (msg) {
        layer.msg(msg, {icon: 2, anim: 6}, function () {
        })
    };


    //整理表单数据
    var data = [];
    $.each(form, function ($k, $v) {
        data[$v['name']] = $v['value'];
    });

    //开始遍历执行
    $.each($rule, function ($key, $val) {
        if (typeof($val[1]) === "function") {//闭包函数
            msg = $val[1](data[$key], $key);
            if ((!(msg === undefined || msg === false || msg === null))) {
                laymsg(msg);
                return result = false;
            }
        } else if (typeof($val[1]) === "object") {//多重内置验证对象
            for (var i in $val[1]) {
                msg = check_func[$val[1][i]]($val[0], data[$key], $key);
                if ((!(msg === undefined || msg === false || msg === null))) {
                    break;
                }
            }
            if ((!(msg === undefined || msg === false || msg === null))) {
                laymsg(msg);
                return result = false;
            }
        } else if (typeof($val[1]) === "string") {//内置验证对象
            msg = check_func[$val[1]]($val[0], data[$key], $key);
            if ((!(msg === undefined || msg === false || msg === null))) {
                laymsg(msg);
                return result = false;
            }
        }
    });

    if (result === false) {
        return false;
    } else {
        return form;
    }
}