/**
 * @Author: Happ
 * @Date: 2021-11-24 16:39:01
 * @LastEditTime: 2021-11-26 13:00:51
 * @LastEditors: Happ
 * @Description:所有页面都要引入的js文件,但该文件只包括数据请求的功能
 * @FilePath: \vscode_workspace\PCompus\static\Js\base\common.js
 * @阁下何不同风起，扶摇直上九万里。wink~~~~
 */
jQuery.support.cors = true;
// 导航栏搜索框
function search_nav() {
    var nav_search = $('#search-input').val();
    if (nav_search == '') {
        alert('搜索内容不能为空');
    } else {
        window.alert('搜索内容：' + nav_search);
        $.ajax({
            url: 'http://localhost:8080/PCompus/nav_search',
            type: 'get',
            dataType: 'text',
            data: {
                nav_search: nav_search,
            },
            success: function (msg) {
                alert('返回信息:' + msg);
            },
            error: function () {
                alert('返回错误');
            },
        });
    }
}
