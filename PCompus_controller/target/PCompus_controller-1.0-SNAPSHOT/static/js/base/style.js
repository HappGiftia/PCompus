/**
 * @Author: Happ
 * @Date: 2021-11-25 16:29:26
 * @LastEditTime: 2021-11-26 13:26:02
 * @LastEditors: Happ
 * @Description:所有页面都要引入的js文件，但该文件只包括样式中的功能
 * @FilePath: \vscode_workspace\PCompus\static\Js\base\style.js
 * @阁下何不同风起，扶摇直上九万里。wink~~~~
 */

/**
 * 导航栏用户头像鼠标悬浮事件监听
 */
$(function () {
    $('#login-user').hover(
        function () {
            $(this).css({ 'z-index': '1000', border: '2px solid #696969' });
            $('.login-user-dropdown').css('visibility', 'visible');
        },
        function () {
            $(this).css({ 'z-index': '0', border: '2px solid black' });
            $('.login-user-dropdown').css('visibility', 'collapse');
        }
    );
    $('.login-user-dropdown').hover(
        function () {
            $('#login-user').css({ 'z-index': '1000', border: '2px solid #696969' });
            $(this).css('visibility', 'visible');
        },
        function () {
            $('#login-user').css({ 'z-index': '0', border: '2px solid black' });
            $(this).css('visibility', 'collapse');
        }
    );
});
