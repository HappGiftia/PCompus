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

$(function () {
    $(".nav-tabs li[role='tab']").click(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active')
    });
})

$(function () {
    //如果页面内容高度小于屏幕高度，div#footer将绝对定位到屏幕底部，否则div#footer保留它的正常静态定位
    $(window).bind("load", function () {
        var footerHeight = 0,
            footerTop = 0,
            $footer = $(".footer_db");
        positionFooter();

        //定义positionFooter function
        function positionFooter() {
            //取到div#footer高度
            footerHeight = $footer.height();
            //div#footer离屏幕顶部的距离
            footerTop = ($(window).scrollTop() + $(window).height() - footerHeight) + "px";

            //如果页面内容高度小于屏幕高度，div#footer将绝对定位到屏幕底部，否则div#footer保留它的正常静态定位
            if (($(document.body).height()) < $(window).height()) {
                $footer.css({
                    position: "absolute"
                }).stop().animate({
                    top: footerTop
                });
            } else {
                $footer.css({
                    position: "static"
                });
            }
        }

        $(window).scroll(positionFooter).resize(positionFooter);
    });

    window.addEventListener('resize', function () {
        weekDataEchart.resize();
        dayDataEchart.resize();
    })
    musicPlayer();
})


var CanvasAutoResize = {
    draw: function () {
        var ctx = $('canvas').getContext('2d');
        var canvasContainer = $('.canvas-container');
        ctx.canvas.width = canvasContainer.offsetWidth - 2;
        ctx.canvas.height = canvasContainer.offsetHeight - 2;
    },

    initialize: function () {
        var self = CanvasAutoResize;
        self.draw();
        $(window).on('resize', function (event) {
            self.draw();
        });
    }
}


function musicPlayer() {
    //底部显示区域总宽度
    var footerW = $('.myaudio').width();
    console.log("底部宽度" + footerW);
    //中央显示区域的宽度
    var audioW = $('.myaudio-center').width();
    var curtime = 0;//播放进度
    var durtime;//播放时间
    var str = '00:00';
    var time = formatSeconds(curtime);
    var time1 =
        str.substring(0, str.length - formatSeconds(durtime).length) +
        formatSeconds(durtime);
    var width;
    var music;
    var audio = document.getElementById('aud');

    audio.currentTime = 0;
    audio.addEventListener('ended', function () {
        aud_pause()
    }, false);
    //alert(footerW);
    //alert(audioW);
    $('.myaudio-center').css({left: (footerW - audioW) / 2});
    $('.aud-show').css({width: audioW - 70});
    $('#Progress').css({width: audioW - 170});

    var i = false;
    $('#play').click(function () {
        if (!i) {
            $(this).attr('src', '/PCompus/static/img/banner/pause.png');
            aud_play(curtime);
        } else {
            i = false;
            $(this).attr('src', '/PCompus/static/img/banner/play.png');
            aud_pause();
        }
    });

    function aud_play(pos) {
        progressBarScroll(pos)
        audio.play();
        i = true;

    }

    function aud_pause() {
        // clearInterval(music);
        audio.pause();
        i = false;
    }

    /**
     * @Description: 用来给音乐进度条增加滚动事件
     * @Param: pos:当前播放位置
     * @return: null
     * @Author: Happ
     * @Date: 2022/3/9
     */
    function progressBarScroll(pos) {
        audio.currentTime = pos;
        music = setInterval(function () {
            curtime = audio.currentTime.toFixed(2); //播放进度
            durtime = audio.duration.toFixed(2); //播放时间
            time = formatSeconds(curtime);
            time1 =
                str.substring(0, str.length - formatSeconds(durtime).length) +
                formatSeconds(durtime);
            width = (curtime / durtime) * (audioW - 181);
            $('#Progress-time').html(time);
            $('#Progress-end').html(time1);
            $('#jin').css({width: width});
            $('#yuan').css({left: width});
        }, 100);
    }

    function formatSeconds(value) {
        var theTime = parseInt(value); // 秒
        var theTime1 = 0; // 分
        var theTime2 = 0; // 小时
        if (theTime > 60) {
            theTime1 = parseInt(theTime / 60);
            theTime = parseInt(theTime % 60);
            if (theTime1 > 60) {
                theTime2 = parseInt(theTime1 / 60);
                theTime1 = parseInt(theTime1 % 60);
            }
        }
        var result = '' + theTime;
        result = result.length == 1 ? '0' + result : result;
        if (theTime1 > 0) {
            theTime1 = theTime1.length == 1 ? '0' + theTime1 : theTime1;

            result = '' + theTime1 + ':' + result;
        }
        if (theTime2 > 0) {
            theTime2 = theTime2.length == 1 ? '0' + theTime2 : theTime2;
            result = '' + theTime2 + ':' + result;
        }
        result = result.length == 2 ? '00:' + result : result;
        return result;
    }

    var cont = $('#yuan');
    var contW = $('#yuan').width();
    var startX, sX, moveX, disX;
    var winW = $('#Progress').width();
    let statu = false;
    // $('#yuan').on({
    //     //绑定事件
    //     touchstart: function (e) {
    //         startX = e.originalEvent.targetTouches[0].pageX; //获取点击点的X坐标
    //         sX = $(this).offset().left - 110; //相对于当前窗口X轴的偏移量
    //         leftX = startX - sX; //鼠标所能移动的最左端是当前鼠标距div左边距的位置
    //         rightX = winW - contW + leftX; //鼠标所能移动的最右端是当前窗口距离减去鼠标距div最右端位置
    //     },
    //     touchmove: function (e) {
    //         //aud_pause();
    //         e.preventDefault();
    //         moveX = e.originalEvent.targetTouches[0].pageX; //移动过程中X轴的坐标
    //
    //         if (moveX < leftX) {
    //             moveX = leftX;
    //         }
    //         if (moveX > rightX) {
    //             moveX = rightX;
    //         }
    //         $(this).css({
    //             left: moveX + sX - startX,
    //         });
    //         $('#jin').width($(this).width() + moveX + sX - startX);
    //         var w = audio.duration.toFixed(2) * ($('#jin').width() / winW);
    //         $('#play').attr('src', '/PCompus/static/img/banner/pause.png');
    //         aud_play(w);
    //     },
    //     mousedown: function (ev) {
    //
    //
    //
    //     },
    // });
    $('#yuan').mousedown(function (ev) {
        moveProgress(ev);
    })
    $('#yuan').mousemove(function (ev) {
        if (statu == true) {
            aud_play(moveProgress(ev));
        }

    });
    $(document).mouseup(function () {
        statu = false;
    });

    function moveProgress(ev) {
        var patch = parseInt($('#yuan').css('height')) / 2;
        var left1 = parseInt($('#yuan').parents('.myaudio-center').css('left'));
        var oEvent = ev || event;
        // console.log(oEvent);
        var oX = oEvent.clientX;
        console.log(oX);
        var l = oX - patch - left1 - 115; //115为$("#yuan")的起始位置到$('.myaudio-center')左边的距离
        console.log(l);
        var w = $(window).width() - $('#yuan').width();
        console.log(w);
        if (l < 0) {
            l = 0;
        }
        if (l > w) {
            l = w;
        }
        $(this).css({left: l});
        $('#jin').width($('#yuan').width() + l);
        let lastW = audio.duration.toFixed(2) * ($('#jin').width() / winW);
        statu = true;
        return lastW;
    }
}