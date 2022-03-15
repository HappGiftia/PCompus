/**
 * @Author: Happ
 * @Date: 2021-11-30 22:35:23
 * @LastEditTime: 2021-12-01 13:56:28
 * @LastEditors: Happ
 * @Description:
 * @FilePath: \vscode_workspace\PCompus\static\Js\pages\Administrator.js
 * @阁下何不同风起，扶摇直上九万里。wink~~~~
 */
var jsonObj;
var role_admin;
var account_admin;
var echarts_admin;
var comment_admin;
var compus_practice_admin;
var user_practice_admin;
var sell_admin;
var news_admin;
var blog_admin;
var videos_admin;
var note_admin;
var tab_admin;
var btn_create;
var btn_refresh;
var menu_li_active;
var btn_delete_item;
var active_id;
var clickId = null;
var title = null;
var echartsCreateType = null;
var echartsLabelList = [];
var echartsXList = [];
var echartsXCount = null;
var echartsYCount = null;
var echartsSeriesStackList = [];
var echartsSeriesClickType = null;
var echartsSeriesList = [];
var echartsSeriesNameList = [];
var echartsSeriesDatas = [[]];
//x轴上每个值的分割
var split_x_symbol = "?#";
//y轴上每个值的分割
var split_y_symbol = "&_";
var precentWindow = [];
var dataEchart;

$(function () {
    role_admin = $('#role-admin');
    account_admin = $('#account-admin');
    echarts_admin = $('#echarts-admin');
    comment_admin = $('#comment-admin');
    compus_practice_admin = $('#compus-practice-admin');
    user_practice_admin = $('#user-practice-admin');
    sell_admin = $('#sell-admin');
    news_admin = $('#news-admin');
    blog_admin = $('#blog-admin');
    videos_admin = $('#videos-admin');
    note_admin = $('#note-admin');
    tab_admin = $('#tab-admin');
    btn_create = $('#btn-data-create');
    btn_refresh = $('#btn-data-refresh');
    menu_li_active = $('.active');

    btn_delete_item = $('.delete-item');


    let offset = 0;


    initHtml();


    $('#left').click(function () {
        offset += 96;
        if (offset >= 96) {
            offset = 0;
        }
        $('.menu-ul').css('marginLeft', offset);
    });
    $('#right').click(function () {
        offset += -96;
        if (offset <= -288) {
            offset = 0;
        }
        $('.menu-ul').css('marginLeft', offset);
    });
    role_admin.click(function () {
        menu_li_active = $('.active');
        menu_li_active.removeClass('active');
        role_admin.addClass('active')
        roleAdmin("18956130026")
        reloadListener();
        console.log('role_admin已点击');
    });
    account_admin.click(function () {
        menu_li_active = $('.active');
        menu_li_active.removeClass('active');
        account_admin.addClass('active');
        reloadListener();
    });
    echarts_admin.click(function () {
        menu_li_active = $('.active');
        menu_li_active.removeClass('active');
        echarts_admin.addClass('active');
        echartAdmin("18956130026", "GetRes");
        reloadListener();
    });
    comment_admin.click(function () {
        menu_li_active = $('.active');
        menu_li_active.removeClass('active');
        comment_admin.addClass('active');
        reloadListener();
    });
    user_practice_admin.click(function () {
        menu_li_active = $('.active');
        menu_li_active.removeClass('active');
        user_practice_admin.addClass('active');
        reloadListener();
    });
    compus_practice_admin.click(function () {
        menu_li_active = $('.active');
        menu_li_active.removeClass('active');
        compus_practice_admin.addClass('active');
        reloadListener();
    });
    sell_admin.click(function () {
        menu_li_active = $('.active');
        menu_li_active.removeClass('active');
        sell_admin.addClass('active');
        reloadListener();
    });
    news_admin.click(function () {
        menu_li_active = $('.active');
        menu_li_active.removeClass('active');
        news_admin.addClass('active');
        reloadListener();
    });
    blog_admin.click(function () {
        menu_li_active = $('.active');
        menu_li_active.removeClass('active');
        blog_admin.addClass('active');
        reloadListener();
    });
    videos_admin.click(function () {
        menu_li_active = $('.active');
        menu_li_active.removeClass('active');
        videos_admin.addClass('active');
        reloadListener();
    });

    note_admin.click(function () {
        menu_li_active = $('.active');
        menu_li_active.removeClass('active');
        note_admin.addClass('active');
        reloadListener();
    });
    tab_admin.click(function () {
        menu_li_active = $('.active');
        menu_li_active.removeClass('active');
        tab_admin.addClass('active');
        reloadListener();
    });
    btn_create.click(function () {
        create()
        after:$('#title-window').after('<br><label id="show-echarts-type"><span>当前图表类型：</span><span></span><br><span>选择图表类型：</span><select id="create-echarts-type" name="echarts_type"><option  class="selected">line</option><option>pie</option><option>bar</option><option>tree</option></select></label>')
        $('#echarts-modify-window').ready(function () {
            $('#save-modify-button-window').attr('id', 'save-create-button-window');
            $('#save-create-button-window').text('创建并提交');
        })
    });
    btn_refresh.click(function () {
        active_id = $('.active').attr("id");
        switch (active_id) {
            case role_admin.attr("id"): {
            }
                break;
            case account_admin.attr("id"): {
            }
                break;
            case echarts_admin.attr("id"): {
                echartAdmin("18956130026", "GetRes");
            }
                break;
            case comment_admin.attr("id"): {
            }
                break;
            case compus_practice_admin.attr("id"): {
            }
                break;
            case user_practice_admin.attr("id"): {
            }
                break;
            case sell_admin.attr("id"): {
            }
                break;
            case news_admin.attr("id"): {
            }
                break;
            case blog_admin.attr("id"): {
            }
                break;
            case videos_admin.attr("id"): {
            }
                break;
            case note_admin.attr("id"): {
            }
                break;
            case tab_admin.attr("id"): {
            }
                break;
        }
    });
    $(".icon-guanbi").click(function () {
        $(".msg").css('display', 'none');
    })

});


function reloadListener() {
    let admin_tbody = $('#admin-tbody');
    let admin_thead = $('#admin-thead');
    admin_tbody.off('click', '#delete-item');
    admin_thead.off("click", '#delete-select');
    admin_thead.off('click', '.cb-select-all');
    admin_tbody.off("click", ".item");
    admin_tbody.off("click", '#modify-item');
    active_id = $('.active').attr("id");
    admin_thead.on('click', '.cb-select-all', function () {
        if ($(this).prop('checked')) {
            $('.td-select').attr("checked", true);
        } else {
            $('.td-select').attr("checked", false);
        }
    });
    admin_tbody.on("click", ".item", function () {
        // $(this)
        if ($(this).children("td:nth-child(1) ").children('.td-select').prop("checked")) {
            $(this).children("td:nth-child(1) ").children('.td-select').attr("checked", false);
        } else {
            $(this).children("td:nth-child(1) ").children('.td-select').attr("checked", true);

        }
    })
    admin_tbody.on("click", '#delete-item', function () {
        let click_id = $(this).parents().parents(".item").children("td:nth-child(2)").text();
        window.alert("当前删除行Id:" + click_id);
        switch (active_id) {
            case role_admin.attr("id"): {
            }
                break;
            case account_admin.attr("id"): {
            }
                break;
            case echarts_admin.attr("id"): {

                echartAdmin("18956130026", "Delete", click_id)
            }
                break;
            case comment_admin.attr("id"): {
            }
                break;
            case compus_practice_admin.attr("id"): {
            }
                break;
            case user_practice_admin.attr("id"): {
            }
                break;
            case sell_admin.attr("id"): {
            }
                break;
            case  news_admin.attr("id"): {
            }
                break;
            case blog_admin.attr("id"): {
            }
                break;
            case  videos_admin.attr("id"): {
            }
                break;
            case note_admin.attr("id"): {
            }
                break;
            case tab_admin.attr("id"): {
            }
                break;
        }
    });

    admin_tbody.on("click", '#modify-item', function () {
        switch (active_id) {
            case role_admin.attr("id"): {
            }
                break;
            case account_admin.attr("id"): {
            }
                break;
            case echarts_admin.attr("id"): {

                initData($(this));
                create();
                $('#echarts-show-window').ready(function () {
                    dataEchart = echarts.init(document.getElementById('echarts-show-window'));
                    switch (echartsSeriesClickType) {

                        case "line":
                            echartsSeriesList = constructLineSeriesArray('modify');
                            buildLineChart(title, echartsLabelList, echartsXList, echartsSeriesList, dataEchart);
                            break;
                        case "pie":
                            echartsSeriesList = constructPieSeriesArray();
                            buildPieChart(title, echartsSeriesList, dataEchart);
                            break;
                        case "bar":
                            buildBarChart(echartsXList, dataEchart)
                            break;
                        case "tree":
                            ;
                            break;
                    }

                })
            }
                break;
            case comment_admin.attr("id"): {
            }
                break;
            case compus_practice_admin.attr("id"): {
            }
                break;
            case user_practice_admin.attr("id"): {
            }
                break;
            case sell_admin.attr("id"): {
            }
                break;
            case  news_admin.attr("id"): {
            }
                break;
            case blog_admin.attr("id"): {
            }
                break;
            case  videos_admin.attr("id"): {
            }
                break;
            case note_admin.attr("id"): {
            }
                break;
            case tab_admin.attr("id"): {
            }
                break;
        }


    });


    admin_thead.on("click", '#delete-select', function () {
        console.log("当前页面Id:" + active_id);
        let countIds=[]
        let items = $(".td-select:checked").parents(".item");
        let len = items.length;
        console.log("选中的td：" + len);
        items.children("td:nth-child(2)").each(function () {
           countIds.push($(this).text()) ;
        })
        let countIdsArray = countIds.join('&');

        console.log("转换后："+countIdsArray);
        switch (active_id) {
            case role_admin.attr("id"): {
                ;
            }
                break;
            case account_admin.attr("id"): {
                ;
            }
                break;
            case echarts_admin.attr("id"): {
                echartAdmin("18956130026", "Delete", countIdsArray);

            }
                break;
            case comment_admin.attr("id"): {
                ;
            }
                break;
            case compus_practice_admin.attr("id"): {
                ;
            }
                break;
            case user_practice_admin.attr("id"): {
                ;
            }
                break;
            case sell_admin.attr("id"): {
                ;
            }
                break;
            case  news_admin.attr("id"): {
                ;
            }
                break;
            case blog_admin.attr("id"): {
                ;
            }
                break;
            case  videos_admin.attr("id"): {
                ;
            }
                break;
            case note_admin.attr("id"): {
                ;
            }
                break;
            case tab_admin.attr("id"): {
                ;
            }
                break;
        }


    })
}


function reloadWindowBlur() {
    switch (active_id) {
        case role_admin.attr("id"): {
            ;
        }
            break;
        case account_admin.attr("id"): {
            ;
        }
            break;
        case echarts_admin.attr("id"): {
            let title_input = $('#title-window > input');
            let label_input = $('#label-window > input')
            let echarts_x_name_input = $('#x-window > input');
            let echarts_stack_input = $('#stack-window > input');
            let echarts_x_input = $('#admin-x-datas-window input')
            let echarts_y_input = $('#admin-series-datas-window input');
            let type_select = $('#create-echarts-type')

            title_input.unbind();
            label_input.unbind();
            echarts_x_name_input.unbind();
            echarts_stack_input.unbind();
            echarts_x_input.unbind();
            echarts_y_input.unbind();
            type_select.unbind();

            title_input.blur(function () {
                title = title_input.val();
                dataEchart.clear();
                refreshShowDatas();
            });
            label_input.blur(function () {
                let temp = label_input.val().split(',');
                echartsLabelList = temp;
                echartsSeriesNameList = temp;
                echartsYCount = echartsLabelList.length;
                dataEchart.clear();
                refreshShowDatas();
            });
            echarts_x_name_input.blur(function () {
                let temp = echarts_x_name_input.val().split(',');
                echartsXList = temp;
                echartsXCount = echartsXList.length;
                dataEchart.clear();
                refreshShowDatas();
            });
            echarts_stack_input.blur(function () {
                let temp = echarts_stack_input.val().split(',');
                if (temp.length != echartsYCount) {
                    window.alert("格式不正确");
                } else {
                    echartsSeriesStackList = temp;
                    dataEchart.clear();
                    refreshShowDatas();
                }
            });

            echarts_y_input.blur(function () {
                let temp;
                let input_index = $(this).attr("id").match(/\d/gm);
                temp = $(this).val().split(',')
                for (let i = 0; i < temp.length; i++) {
                    temp[i] = Number(temp[i])
                    console.log("blur值" + temp[i]);
                }
                echartsSeriesDatas[input_index] = temp;
                dataEchart.clear();
                refreshShowDatas();
            });
            echarts_x_input.blur(function () {
                let temp;
                let input_index = $(this).attr('id').match(/\d/gm)
                temp = $(this).val().split(',');
                for (let i = 0; i < temp.length; i++) {
                    temp[i] = Number(temp[i]);
                }
                let temp2 = ArrayXYConversion(echartsSeriesDatas)
                temp2[input_index] = temp;
                echartsSeriesDatas = ArrayXYConversion(temp2);
                refreshShowDatas();
            })
            type_select.change(function () {
                echartsCreateType = $(this).val()
                refreshShowDatas()
            })

        }
            break;
        case comment_admin.attr("id"): {
            ;
        }
            break;
        case compus_practice_admin.attr("id"): {
            ;
        }
            break;
        case user_practice_admin.attr("id"): {
            ;
        }
            break;
        case sell_admin.attr("id"): {
            ;
        }
            break;
        case  news_admin.attr("id"): {
            ;
        }
            break;
        case blog_admin.attr("id"): {
            ;
        }
            break;
        case  videos_admin.attr("id"): {
            ;
        }
            break;
        case note_admin.attr("id"): {
            ;
        }
            break;
        case tab_admin.attr("id"): {
            ;
        }
            break;
    }


}


function initHtml() {
    roleAdmin("18956130026");
    reloadListener();
}

function roleAdmin(administrator_id) {
    // var str = ["{\"echarts_id\":1,\"title\":\"内卷\",\"echarts_label\":\"看书&_睡觉&_吃饭&_玩游戏\",\"echarts_x\":\"中午?#早上?#晚上\",\"echarts_series_name\":\"看书&_睡觉&_吃饭&_玩游戏\",\"echarts_series_type\":\"line\",\"echarts_series_stack\":\"total&_total&_total&_total\",\"echarts_series_data\":\"100?#200?#300&_400?#200?#100&_100?#600?#666&_100?#600?#1000\",\"updata_echarts\":null}", "{\"echarts_id\":2,\"title\":\"内卷\",\"echarts_label\":\"看书&_睡觉&_吃饭&_玩游戏\",\"echarts_x\":\"\",\"echarts_series_name\":\"看书&_睡觉&_吃饭&_玩游戏\",\"echarts_series_type\":\"pie\",\"echarts_series_stack\":\"null\",\"echarts_series_data\":\"300&_400&_232&_378\",\"updata_echarts\":null}", "{\"echarts_id\":3,\"title\":\"内卷\",\"echarts_label\":\"看书&_睡觉&_吃饭&_玩游戏\",\"echarts_x\":\"中午?#早上?#晚上\",\"echarts_series_name\":\"看书&_睡觉&_吃饭&_玩游戏\",\"echarts_series_type\":\"bar\",\"echarts_series_stack\":\"null\",\"echarts_series_data\":\"100?#200?#300&_400?#200?#100&_100?#600?#666&_100?#600?#1000\",\"updata_echarts\":null}"];

    tableConstructor(null, "role");
}


function echartAdmin(administrator_id, event_type, data) {
    console.log("success");
    switch (event_type) {
        case "GetRes": {
            $.getJSON(
                'http://localhost:8080/PCompus/echarts_admin',
                {
                    administrator_id: administrator_id,
                    event_type: event_type,
                    data: data
                }, function (resultJson) {
                    jsonObj = constractorJsonObj(resultJson);
                    tableConstructor(jsonObj, "echart");
                }
            )
        }
            break;
        case "Delete": {
            $.getJSON(
                'http://localhost:8080/PCompus/echarts_admin',
                {
                    administrator_id: administrator_id,
                    event_type: event_type,
                    data: data
                }, function (deleteResult) {
                    $('.msg').css('display', 'block')
                    echartAdmin("18956130026", "GetRes");
                    window.alert(deleteResult);
                }
            )
        }
            break;
        case"Modify": {
            $.getJSON(
                'http://localhost:8080/PCompus/echarts_admin', {
                    administrator_id: administrator_id,
                    event_type: event_type,
                    data: data
                }, function (modifyResult) {
                    $('.msg').css('display', 'block')
                    echartAdmin("18956130026", "GetRes");
                    window.alert(modifyResult);
                }
            )
        }
        case"Create": {
            $.getJSON(
                'http://localhost:8080/PCompus/echarts_admin', {
                    administrator_id: administrator_id,
                    event_type: event_type,
                    data: data
                }, function (modifyResult) {
                    $('.msg').css('display', 'block')
                    echartAdmin("18956130026", "GetRes");
                    window.alert(modifyResult);
                }
            )
        }
    }

}

function tableConstructor(dataJsonObjs, adminType) {
    let column_length
    if (dataJsonObjs != null) {
        column_length = dataJsonObjs.length;
    } else column_length = 0;
    console.log("表格行数：" + column_length);
    let thead_Str = "";
    $("#admin-thead").html("");
    $("#admin-tbody").html("");
    switch (adminType) {
        case "echart": {
            let echarts_id;
            let title;
            let echartsLabelList;
            let echartsXList;
            let echartsSeriesName;
            let echartsSeriesType;
            let echartsSeriesStack;
            let echartsSeriesData;
            let updateEchartsTime;
            thead_Str = "<tr>\n" +
                "                                <td><input type=\"checkbox\" class=\"cb-select-all\"/>全选</td>\n" +
                "                                <td>echarts_id</td>\n" +
                "                                <td>title</td>\n" +
                "                                <td>echarts_label</td>\n" +
                "                                <td>echarts_x</td>\n" +
                "                                <td>echarts_series_name</td>\n" +
                "                                <td>echarts_series_type</td>\n" +
                "                                <td>echarts_series_stack</td>\n" +
                "                                <td>echarts_series_data</td>\n" +
                "<td>update_echarts_time</td>\n" +
                "\n" +
                "                                <td>\n" +
                "                                    <label htmlfor=\"delete-select\">\n" +
                "                                        <i class=\"iconfont icon-shanchu\"></i>\n" +
                "                                        <input type=\"button\" value=\"删除已选\" id=\"delete-select\" />\n" +
                "                                    </label>\n" +
                "                                </td>\n" +
                "                            </tr>";
            $("#admin-thead").append(thead_Str);
            for (let i = 0; i < column_length; i++) {
                let dataJsonObj = constractorJsonObj(dataJsonObjs[i])
                echarts_id = dataJsonObj.echarts_id;
                title = dataJsonObj.title;
                echartsLabelList = dataJsonObj.echarts_label;
                echartsXList = dataJsonObj.echarts_x;
                echartsSeriesName = dataJsonObj.echarts_series_name;
                echartsSeriesType = dataJsonObj.echarts_series_type;
                echartsSeriesStack = dataJsonObj.echarts_series_stack;
                echartsSeriesData = dataJsonObj.echarts_series_data;
                updateEchartsTime = dataJsonObj.update_echarts_time;
                console.log("图表管理:\n");
                console.log(dataJsonObj)
                console.log("echarts_id:" + echarts_id);
                console.log("title:" + title);
                console.log("echartsLabelList:" + echartsLabelList);
                console.log("echartsXList:" + echartsXList);
                console.log("echartsSeriesName:" + echartsSeriesName);
                console.log("echartsSeriesType:" + echartsSeriesType);
                console.log("echartsSeriesStack:" + echartsSeriesStack);
                console.log("echartsSeriesData:" + echartsSeriesData);
                console.log("updateEchartsTime:" + updateEchartsTime);
                let tbody_Str = "<tr class=\"item\">\n" +
                    "    <td><input type=\"checkbox\"  class=\"td-select\"></td>\n" +
                    "        <td>" +
                    echarts_id +
                    "</td>\n" +
                    "        <td>" + title + "</td>\n" +
                    "        <td>" + echartsLabelList + "</td>\n" +
                    "        <td>" + echartsXList + "</td>\n" +
                    "        <td>" + echartsSeriesName + "</td>\n" +
                    "        <td>" + echartsSeriesType + "</td>\n" +
                    "        <td>" + echartsSeriesStack + "</td>\n" +
                    "        <td>" + echartsSeriesData + "</td>\n" +
                    "<td>" + updateEchartsTime + "</td>\n" +

                    "<td>\n" +
                    "         <label htmlfor=\"modify-item\">\n" +
                    "<i class=\"iconfont icon-icon_edit\"></i>\n" +
                    "             <input type=\"button\" value=\"修改\" id=\"modify-item\">\n" +
                    "         </label>\n" +
                    "         <label htmlfor=\"delete-item\">\n" +
                    "<i class=\"iconfont icon-shanchu\"></i>\n" +
                    "             <input type=\"button\" value=\"删除\" id=\"delete-item\">\n" +
                    "         </label>\n" +
                    "     </td>" +
                    "    </tr>";
                $("#admin-tbody").append(tbody_Str);
            }
        }
            break;
        case "role": {
            thead_Str = "<tr>\n" +
                "                    <td>\n" +
                "                        <input type=\"checkbox\" class=\"cb-select-all\"/>\n" +
                "                        全选\n" +
                "                    </td>\n" +
                "                    <td>管理员ID</td>\n" +
                "                    <td>姓名</td>\n" +
                "                    <td>拥有角色</td>\n" +
                "                    <td><label for=\"delete-select\">\n" +
                "                        <i class=\"iconfont icon-icon_edit\"></i>\n" +
                "\n" +
                "                        <input type=\"button\" value=\"删除已选\" id=\"delete-select\"/>\n" +
                "                    </label></td>\n" +
                "                </tr>";
            $("#admin-thead").append(thead_Str);
            for (let i = 0; i < column_length; i++) {
                let tbody_Str = "<tr class=\"item\">" +
                    "<td><input type=\"checkbox\"  class=\"td-select\"/></td><td>" +
                    i + "</td><td>" + "沙僧" + "</td><td>" + "大将，三师弟" + "</td>\n" +
                    "     <td>\n" +
                    "         <label htmlFor=\"modify-item\">\n" +
                    "<i class=\"iconfont icon-icon_edit\"></i>" +
                    "\n" +
                    "             <input type=\"button\" value=\"修改\" id=\"modify-item\"/>\n" +
                    "         </label>\n" +
                    "         <label htmlFor=\"delete-item\">\n" +
                    "<i class=\"iconfont icon-shanchu\"></i>" +
                    "\n" +
                    "             <input type=\"button\" value=\"删除\" id=\"delete-item\"/>\n" +
                    "         </label>\n" +
                    "     </td>\n" +
                    " </tr>";

                $("#admin-tbody").append(tbody_Str);
            }
        }
            break;
        case "account": {
        }
            break;
    }
}

function constractorJsonObj(jsonStr) {
    let jsonObj;
    if ((typeof jsonStr == 'object') && jsonStr.constructor == Object) {
        jsonObj = jsonStr;
    } else {
        jsonObj = eval("(" + jsonStr + ")");
    }
    return jsonObj;
}


var adminEchartsWindow = function () {
    $('#add-X-window').off('click', '#add-X-button-window');
    $('#add-Y-window').off('click', '#add-Y-button-window');
    $('#feat-window').append('<div id="echarts-show-window"></div>');

    $('#feat-window').append('<div id="echarts-modify-window"></div>');


    $('#echarts-modify-window').append(
        '<label id="title-window"><span>当前标题的值为：</span><span></span><br><span>修改标题值：</span><input type="text"></label><br>' +
        '<label id="show-echarts-tabs-window"><span>当前图表标签：</span><span></span><br><span>选择图表标签：</span><select id="select-echarts-tabs" name="echarts_tab"><option></option></select></label><br>'+
        '<label id="label-window"><span>当前纵坐标各值的名字为：</span><span></span><br><span>修改纵坐标值的名字：</span><input type="text"></label><br>' +
        '<label id="x-window"><span>当前横坐标轴的值为：</span><span></span><br><span>修改横坐标轴的值：</span><input type="text"></label><br>' +
        '<label id="stack-window"><span>当前纵坐标值展示名称合集为：</span><span></span><br><span>修改横坐标轴值展示名称合集：</span><input type="text"></label><br>'
    )
    $('#echarts-modify-window').append('<div><label id="echarts-x-window"><span>当前横坐标坐标轴的值为：</span><div id="show-x-datas-window"><span></span></div><br><span>输入横坐标轴的值：</span><br><div id="admin-x-datas-window"></div></label><br>')
    $('#echarts-modify-window').append('<div><label id="series-datas-window"><span>当前纵坐标坐标轴的值为：</span><div id="show-series-datas-window"><span></span></div><br><span>输入纵坐标轴的值：</span><div id="admin-series-datas-window"></div></label><br>')
    $('#echarts-modify-window').append('<button id="add-X-button">添加横坐标</button>');
    refreshShowDatas();
    $('#echarts-modify-window').append('<button id="add-Y-button">添加纵坐标</button>&nbsp&nbsp<button id="save-modify-button-window">保存修改并提交</button>')

    $('#feat-window').on('click', '#add-X-button', function () {
        alertWin("添加横坐标", null, 405, 300, 'add-X-window', 'add-X-window')
        $('#add-X-window').append('<div></div>')
        $('#add-X-window >div').append('<div>\n' +
            '    <span>请输入要添加横坐标的名称：</span><br>\n' +
            '    <span><input id="label-input" placeholder="请输入要添加横坐标的名称"></span>\n' +
            '</div>');
        for (let i = 0; i < echartsYCount; i++) {
            $('#add-X-window >div').append('<div>\n' +
                '    <span>请输入要添加' + echartsLabelList[i] + '的值：</span><br>\n' +
                '    <span><input id ="add-X-' + i + '-input" placeholder="请输入要添加' + echartsLabelList[i] + '的值"></span>\n' +
                '</div>');
        }
        $('#add-X-window > div').append('<button id="add-X-button-window" >保存</button>');
        $('#add-X-window').on('click', '#add-X-button-window', function () {
            echartsXList.push($('#label-input').val());
            echartsXCount = echartsXList.length;
            let temp = [];
            for (let i = 0; i < echartsYCount; i++) {
                temp.push($('#add-X-' + i + '-input').val());
            }
            let temp2 = ArrayXYConversion(echartsSeriesDatas);
            temp2.push(temp);
            echartsSeriesDatas = ArrayXYConversion(temp2);
            refreshShowDatas()
            $('#add-X-window #closeBtn').trigger("click");
        });
    });

    $('#feat-window').on('click', '#add-Y-button', function () {
        alertWin('添加纵坐标', reloadYWindowBlurListener, 405, 300, 'add-Y-window', 'add-Y-window');
        $('#add-Y-window').append('<div></div>')
        $('#add-Y-window >div').append('<div>\n' +
            '    <span>请输入要添加纵坐标的名称：</span><br>\n' +
            '    <span><input id="label-input" placeholder="请输入要添加纵坐标的名称"></span>\n' +
            '</div>');
        $('#add-Y-window > div').append('<div><span>请选择要添加纵坐标展示的名称合集：</span><br>\n' +
            '    <span><select id="stack-select">\n' +
            '</select>\n' +
            ' </span>\n' +
            '</div>')


        let temp = [];
        for (let i = 0; i < echartsSeriesStackList.length; i++) {
            if ($.inArray(echartsSeriesStackList[i], temp) == -1) {
                temp.push(echartsSeriesStackList[i]);
            }

        }
        for (let tempKey in temp) {
            $("#stack-select").append("<option value='Value'>" + temp[tempKey] + "</option>");

        }
        for (let i = 0; i < echartsXCount; i++) {
            $('#add-Y-window >div').append('<div>\n' +
                '    <span>请输入要添加' + echartsXList[i] + '的值：</span><br>\n' +
                '    <span><input id ="add-' + i + '-input" placeholder="请输入要添加' + echartsXList[i] + '的值"></span>\n' +
                '</div>');
        }
        $('#add-Y-window > div').append('<button id="add-Y-button-window" >保存</button>');


        $('#add-Y-window').on('click', '#add-Y-button-window', function () {
            echartsLabelList.push($('#label-input').val());
            echartsSeriesNameList.push($('#label-input').val());
            echartsSeriesStackList.push($('#stack-select option:selected').text());

            echartsYCount = echartsLabelList.length;
            let temp = [];
            console.log("X轴的数量:" + echartsXCount);
            for (let i = 0; i < echartsXCount; i++) {
                temp.push($('#add-' + i + '-input').val());
                console.log("值[" + i + "]：" + $('add-' + i + '-input').val());
            }
            console.log("原先的Y:" + echartsSeriesDatas);
            echartsSeriesDatas.push(temp)
            console.log("添加的Y:" + echartsSeriesDatas);

            dataEchart.clear();

            refreshShowDatas()
            $('#add-Y-window #closeBtn').trigger("click");
        })
    })


    $('#feat-window').on('click', '#save-modify-button-window', function () {
        reConstructData('Modify')
    })

    $('#feat-window').on('click', '#save-create-button-window', function () {
        reConstructData('Create')
    })

    $('#echarts-modify-window').ready(function () {
        reloadWindowBlur()
    });
}

function reloadYWindowBlurListener() {
    window.alert("已调用");
}


function refreshShowDatas() {

    let title_span = $('#title-window > span:nth-child(2)');
    let title_input = $('#title-window > input');
    let label_span = $('#label-window > span:nth-child(2)')
    let label_input = $('#label-window > input')
    let type_span = $('#show-echarts-type >span:nth-child(2)');
    let echarts_x_span = $('#x-window > span:nth-child(2)')
    let echarts_x_input = $('#x-window > input').val(echartsXList);
    let echarts_stack_span = $('#stack-window > span:nth-child(2)').text(echartsSeriesStackList);
    let echarts_stack_input = $('#stack-window > input').val(echartsSeriesStackList);
    $('#create-echarts-type').val(echartsCreateType);
    if (isEmpty(echartsLabelList) || isEmpty(echarts_x_input) || isEmpty(echartsSeriesNameList)) {
        echarts_x_input.attr('disabled', 'disabled');
        label_input.attr('disabled', 'disabled');
        echarts_stack_input.attr('disabled', 'disabled');
    } else {
        echarts_x_input.removeAttr('disabled')
        label_input.removeAttr('disabled')
        echarts_stack_input.removeAttr('disabled')
    }
    ;


    type_span.text(echartsCreateType);

    $('#show-x-datas-window > span').empty();
    $('#admin-x-datas-window').empty();
    $('#show-series-datas-window > span').empty();
    $('#admin-series-datas-window').empty();
    if (echartsLabelList != null || typeof (echartsSeriesDatas) != "undefined" || typeof (echartsSeriesNameList) != "undefined") {
        title_span.text(title);
        console.log("展示title" + title);
        title_input.val(title);
        label_span.text(echartsLabelList);
        label_input.val(echartsLabelList);
        echarts_x_span.text(echartsXList);
        echarts_x_input.val(echartsXList);
        echarts_stack_span.text(echartsSeriesStackList);
        echarts_stack_input.val(echartsSeriesStackList);
        //echartsSeriesDatas行列互换后的新数组
        let echartsSeriesDatasY2X = [];
        if (!isEmpty(echartsSeriesDatas)) {
            echartsSeriesDatasY2X = ArrayXYConversion(echartsSeriesDatas);
        }
        for (let i = 0; i < echartsXCount; i++) {
            $('#show-x-datas-window > span').append('<span>' + echartsXList[i] + ':' + '</span>\n' + '<span>' + echartsSeriesDatasY2X[i] + '</span><br>')
        }
        for (let i = 0; i < echartsXCount; i++) {
            $('#admin-x-datas-window').append('<span>' + echartsXList[i] + ':' + '</span><input type="text" id="X-input-' + i + '-window" value="' + echartsSeriesDatasY2X[i] + '"><br>')

        }
        for (let i = 0; i < echartsYCount; i++) {
            $('#show-series-datas-window > span').append('<span>' + echartsLabelList[i] + ':' + '</span>\n' +
                '    <span>\n' +
                echartsSeriesDatas[i] +
                '    </span><br>')
        }
        for (let i = 0; i < echartsYCount; i++) {
            $('#admin-series-datas-window').append('<span>' + echartsLabelList[i] + ':' + '</span><input type="text" id="datas-input-' + i + '-window" value="' + echartsSeriesDatas[i] + '"><br>')
        }


        $('#echarts-show-window').ready(function () {
            dataEchart = echarts.init(document.getElementById('echarts-show-window'));
            if (echartsSeriesClickType != null) {
                switch (echartsSeriesClickType) {

                    case "line":
                        echartsSeriesList = constructLineSeriesArray('modify');
                        buildLineChart(title, echartsLabelList, echartsXList, echartsSeriesList, dataEchart);
                        break;
                    case "pie":
                        echartsSeriesList = constructPieSeriesArray();
                        buildPieChart(title, echartsSeriesList, dataEchart);
                        break;
                    case "bar":
                        buildBarChart(echartsXList, dataEchart)
                        break;
                    case "tree":
                        ;
                        break;
                }
            }
            if (echartsCreateType != null) {
                switch (echartsCreateType) {
                    case "line":
                        echartsSeriesList = constructLineSeriesArray('create');
                        buildLineChart(title, echartsLabelList, echartsXList, echartsSeriesList, dataEchart);
                        break;
                    case "pie":
                        echartsSeriesList = constructPieSeriesArray();
                        buildPieChart(title, echartsSeriesList, dataEchart);
                        break;
                    case "bar":
                        buildBarChart(echartsXList, dataEchart)
                        break;
                    case "tree":
                        ;
                        break;
                }
            }
            reloadWindowBlur();
        })
    }

}

function ArrayXYConversion(arr) {
    let newArray = arr[0].map(function (col, i) {
        return arr.map(function (row) {
            return row[i];
        })
    });
    return newArray;
}

function create() {
    let active_page = $('#' + active_id).parent('div').children('label').text();
    alertWin(active_page, adminEchartsWindow, 1200, 500, 'feat-window', 'feat-window');
    reloadWindowBlur()
}

function alertWin(title, msg, w, h, idName, pWindowId) {
    //当前最上层的窗口
    precentWindow.push(pWindowId);
    let titleheight = '22px'; // 提示窗口标题高度
    let bordercolor = '#666699'; // 提示窗口的边框颜色
    let titlecolor = '#FFFFFF'; // 提示窗口的标题颜色
    let titlebgcolor = '#666699'; // 提示窗口的标题背景色
    let bgcolor = '#e8f3f8'; // 提示内容的背景色

    let iWidth = window.innerWidth;
    let iHeight = document.documentElement.clientHeight;
    let bgObj;
    if ($("div[id='bgObj']").length === 0) {
        bgObj = document.createElement('div');
        bgObj.setAttribute('id', 'bgObj')

        $('body').css("overflow", "hidden");
        bgObj.style.cssText =
            'position:absolute;left:0px;top:0px;width:' +
            iWidth +
            'px;height:' +
            Math.max(document.body.clientHeight, iHeight) +
            'px;filter:Alpha(Opacity=30);opacity:0.3;background-color:#000000;z-index:101;';
        document.body.appendChild(bgObj);
    }
    var msgObj = document.createElement('div');
    msgObj.setAttribute("id", idName)
    msgObj.style.cssText =
        "position:absolute;font:11px '宋体';top:" +
        (iHeight - h) / 2 +
        'px;left:165px;width:' +
        w +
        'px;height:' +
        h +
        'px;border:1px solid ' +
        bordercolor +
        ';background-color:' +
        bgcolor +
        ';line-height:22px;z-index:102;border-radius: 10px 10px 10px 10px';
    document.body.appendChild(msgObj);

    var table = document.createElement('table');
    msgObj.appendChild(table);
    table.style.cssText = 'margin:0px;border:0px;padding:0px;';
    table.cellSpacing = 0;
    var tr = table.insertRow(-1);
    var titleBar = tr.insertCell(-1);
    titleBar.style.cssText =
        'width:100%;border-radius:10px 0 0 0;1height:' +
        titleheight +
        "px;text-align:left;padding:3px;margin:0px;font:bold 13px '宋体';color:" +
        titlecolor +
        ';border:1px solid ' +
        bordercolor +
        ';cursor:move;background-color:' +
        titlebgcolor;
    titleBar.style.paddingLeft = '10px';
    titleBar.innerHTML = title;
    var closeBtn = tr.insertCell(-1);
    closeBtn.setAttribute('id', 'closeBtn');
    closeBtn.style.cssText =
        'cursor:pointer; border-radius:0 10px 0 0;padding:2px;background-color:' + titlebgcolor;
    closeBtn.innerHTML =
        " <span style='font-size:15pt; color:" + titlecolor + ";'>× </span>";
    closeBtn.onclick = function () {
        if (bgObj != null) {
            document.body.removeChild(bgObj);
        }
        document.body.removeChild(msgObj);
        $('body').css("overflow", "auto");
        console.log("数值==》" + precentWindow.length);
        if (precentWindow[precentWindow.length - 1] === 'feat-window' && precentWindow.length - 1 === 0) {
            console.log("已执行");
            clearWindowDatas();
        }
        precentWindow.pop();
    };
    if (typeof msg == "function") {
        msg()
    } else {
        var msgBox = table.insertRow(-1).insertCell(-1);
        msgBox.style.cssText = "font:10pt '宋体';";
        msgBox.colSpan = 2;
        msgBox.innerHTML = msg;
    }

    var moveX = 0;
    var moveY = 0;
    var moveTop = 0;
    var moveLeft = 0;
    var moveable = false;
    var docMouseMoveEvent = document.onmousemove;
    var docMouseUpEvent = document.onmouseup;
    // 鼠标按下事件
    titleBar.onmousedown = function () {
        var evt = getEvent();
        moveable = true;
        //按下时x的值
        moveX = evt.clientX;
        moveY = evt.clientY;
        // 弹窗左上角y坐标
        moveTop = parseInt(msgObj.style.top);
        moveLeft = parseInt(msgObj.style.left);
        // 鼠标移动事件
        document.onmousemove = function () {
            if (moveable) {
                var evt = getEvent();
                var x = moveLeft + evt.clientX - moveX;
                var y = moveTop + evt.clientY - moveY;
                if (x > 0 && x + w < iWidth && y > 0 && y + h < iHeight) {
                    msgObj.style.left = x + 'px';
                    msgObj.style.top = y + 'px';
                }
            }
        };
        // 鼠标抬起事件
        document.onmouseup = function () {
            if (moveable) {
                document.onmousemove = docMouseMoveEvent;
                document.onmouseup = docMouseUpEvent;
                moveable = false;
                moveX = 0;
                moveY = 0;
                moveTop = 0;
                moveLeft = 0;
            }
        };
    };

    // 获得事件Event对象，用于兼容IE和FireFox
    function getEvent() {
        return window.event || arguments.callee.caller.arguments[0];
    }

}

function constructLineSeriesArray(type) {
    let seriesList = [];

    for (let i = 0; i < echartsYCount; i++) {
        var series = {name: null, type: null, stack: null, data: []}
        series.name = echartsSeriesNameList[i];
        switch (type) {
            case 'create':
                series.type = echartsCreateType;
                break
            case 'modify':
                series.type = echartsSeriesClickType;
                break
            default :
                series.type = null;
        }
        series.stack = echartsSeriesStackList[i];
        series.data = echartsSeriesDatas[i];
        console.log("data[" + i + "]的数据为:" + echartsSeriesDatas[i])
        console.log("[" + i + "]" + JSON.stringify(series))
        seriesList.push(series);

    }

    return seriesList;
}

function reConstructData(type) {

    let echarts_id;
    let title;
    let echarts_label = '';
    let echarts_x;
    let echarts_series_name;
    let echarts_series_type;
    let echarts_series_stack;
    let echarts_series_date;

    echarts_id = clickId;
    title = this.title;
    echarts_label = echartsLabelList.join(split_y_symbol);
    echarts_x = echartsXList.join(split_x_symbol);
    echarts_series_name = echartsSeriesNameList.join(split_y_symbol);
    if (!isEmpty(echartsSeriesClickType)) {
        echarts_series_type = echartsSeriesClickType;
    } else if (!isEmpty(echartsCreateType)) {
        echarts_series_type = echartsCreateType;
    }
    if (!isEmpty(echartsSeriesStackList)) {
        echarts_series_stack = echartsSeriesStackList.join(split_y_symbol);
    }
    switch (echarts_series_type) {
        case "line":
        case "bar": {
            for (let i = 0; i < echartsYCount; i++) {
                echartsSeriesList[i] = echartsSeriesDatas[i].join(split_x_symbol);
            }
            echarts_series_date = echartsSeriesList.join(split_y_symbol);
        }
            break;
        case "pie": {
            console.log("饼图Series==>" + echartsSeriesDatas);
            echarts_series_date = echartsSeriesDatas.join(split_y_symbol)
        }
            break;

    }
    console.log("echarts_id:" + echarts_id);
    console.log("title:" + title);
    console.log("echartsLabelList:" + echarts_label);
    console.log("echartsXList:" + echarts_x);
    console.log("echartsSeriesName:" + echarts_series_name);
    console.log("echartsSeriesType:" + echarts_series_type);
    console.log("echartsSeriesStack:" + echarts_series_stack);
    console.log("echartsSeriesDate:" + echarts_series_date);

    let echartsModifyItem = {};
    echartsModifyItem.echarts_id = echarts_id;
    echartsModifyItem.title = title;
    echartsModifyItem.echarts_label = echarts_label;
    echartsModifyItem.echarts_x = echarts_x;
    echartsModifyItem.echarts_series_name = echarts_series_name;
    echartsModifyItem.echarts_series_type = echarts_series_type;
    echartsModifyItem.echarts_series_stack = echarts_series_stack;
    echartsModifyItem.echarts_series_data = echarts_series_date;
    echartsModifyItem.update_echarts_time = new Date().format("yyyy-MM-dd hh:mm:ss");
    switch (type) {
        case'Modify':
            echartAdmin("18956130026", "Modify", JSON.stringify(echartsModifyItem))
            break;
        case'Create':
            echartAdmin("18956130026", "Create", JSON.stringify(echartsModifyItem))
            break;
    }
    $('#closeBtn').trigger("click");
    clearWindowDatas(null)
}

Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(), //day
        "h+": this.getHours(), //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
        "S": this.getMilliseconds() //millisecond
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
        (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1,
            RegExp.$1.length == 1 ? o[k] :
                ("00" + o[k]).substr(("" + o[k]).length));
    return format;
}

/**
 * @Description: 构造饼图的Series
 * @Param: Null
 * @return: 返回的是一个已经构造好的series数组对象
 * @Author: Happ
 * @Date: 2021/11/29
 */
function constructPieSeriesArray() {
    let seriesDatasList = [];
    for (let i = 0; i < echartsYCount; i++) {
        var series = {value: null, name: null}
        series.value = echartsSeriesDatas[i];
        series.name = echartsSeriesNameList[i];
        seriesDatasList.push(series);
        console.log("构造的饼图series的data[" + i + "]" + JSON.stringify(series.value));
    }
    console.log("最终饼图data:" + JSON.stringify(seriesDatasList))
    return seriesDatasList;
}

/**
 * @Description: 构造树形图的Series
 * @Param: Null
 * @return: 返回的是一个已经构造好的series数组对象
 * @Author: Happ
 * @Date: 2021/11/29
 */
function constructBarSeriesArray(labelOption) {
    console.log("echartsSeriesType" + echartsCreateType);
    let tempType = null;
    if (!isEmpty(echartsSeriesClickType)) {
        tempType = echartsSeriesClickType;
    } else if (!isEmpty(echartsCreateType)) {
        tempType = echartsCreateType;
    }
    let seriesList = [];
    for (let i = 0; i < echartsYCount; i++) {
        var series = {
            name: null,
            type: tempType,
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: null,
        }
        series.name = echartsSeriesNameList[i];
        series.data = echartsSeriesDatas[i];
        seriesList.push(series);
    }
    console.log("最终柱形图的Series:" + JSON.stringify(seriesList));
    return seriesList;
}

/**
 * @Description: 构造树形图的Series
 * @Param: NULL
 * @return: 返回的是一个已经构造好的series数组对象
 * @Author: Happ
 * @Date: 2021/11/29
 */
function constructTreeSeriesArray() {

}


/**
 * @Description: 生成echarts折线图表
 * @Param: title,图表标题；echartsLabel，图表图例；series，X轴上的值；
 * @return:
 * @Author: Happ
 * @Date: 2021/11/29
 */
function buildLineChart(title, echartsLabel, xName, series, echart) {
    let option = {
        title: {
            left: 'center',
            top: '0%',
            text: title,
        },
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: 20,
            bottom: 20,
            data: echartsLabel,

            // selected: data.selected   // 这是默认选中与否的图例
        },
        grid: {
            top: '20%',
            bottom: "0%",
            containLabel: true,

        },
        toolbox: {
            feature: {
                saveAsImage: {},
            },
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: xName,
            axisLabel: {
                fontSize: 8,
                interval: 0,
                formatter: function (params) {
                    var newParamsName = []; // 最终拼接成的字符串
                    var paramsNameNumber = params.length; // 实际标签的个数
                    var provideNumber = 2; // 每行能显示的字的个数
                    var rowNumber = Math.ceil(paramsNameNumber / provideNumber); // 换行的话，需要显示几行，向上取整
                    /**
                     * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                     */
                    // 条件等同于rowNumber>1
                    if (paramsNameNumber > provideNumber) {
                        /** 循环每一行,p表示行 */
                        for (var p = 0; p < rowNumber; p++) {
                            var tempStr = ""; // 表示每一次截取的字符串
                            var start = p * provideNumber; // 开始截取的位置
                            var end = start + provideNumber; // 结束截取的位置
                            // 此处特殊处理最后一行的索引值
                            if (p == rowNumber - 1) {
                                tempStr = params.substring(start, paramsNameNumber); // 最后一次不换行
                            } else {
                                tempStr = params.substring(start, end);  // 每一次拼接字符串并换行
                            }
                            newParamsName.push(`{p|${tempStr}}`); // 最终拼成的字符串
                        }
                    } else {
                        newParamsName.push(params); // 将旧标签的值赋给新标签
                    }
                    return newParamsName.join("\n"); //将最终的字符串返回
                },
                rich: {
                    p: {
                        align: 'right'
                    }
                }
            },
        },

        yAxis: {
            type: 'value',
        },
        series: series,
    };
    console.log("option" + option.toString());
    echart.setOption(option, true);
}

/**
 * @Description: 生成echarts饼型图表
 * @Param: title,图表标题；echartsLabel，图表图例；series_data，X轴上的值；
 * @return:
 * @Author: Happ
 * @Date: 2021/11/29
 */
function buildPieChart(title, series_data, echart) {
    let option = {
        title: {
            text: title,
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '0%',
            left: 'center'
        },
        series: [
            {
                name: title,
                type: 'pie',
                radius: ['40%', '70%'],
                center: ["50%", "50%"],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },

                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                },
                labelLine: {
                    show: true
                },
                data: series_data
            }

        ]
    };
    echart.setOption(option, true);

}

/**
 * @Description: 生成echarts柱状图表
 * @Param: title,图表标题；echartsLabel，图表图例；series，X轴上的值；
 * @return:
 * @Author: Happ
 * @Date: 2021/11/29
 */
function buildBarChart(xName, echart) {
    const posList = [
        'left',
        'right',
        'top',
        'bottom',
        'inside',
        'insideTop',
        'insideLeft',
        'insideRight',
        'insideBottom',
        'insideTopLeft',
        'insideTopRight',
        'insideBottomLeft',
        'insideBottomRight'
    ];
    echart.configParameters = {
        rotate: {
            min: -90,
            max: 90
        },
        align: {
            options: {
                left: 'left',
                center: 'center',
                right: 'right'
            }
        },
        verticalAlign: {
            options: {
                top: 'top',
                middle: 'middle',
                bottom: 'bottom'
            }
        },
        position: {
            options: posList.reduce(function (map, pos) {
                map[pos] = pos;
                return map;
            }, {})
        },
        distance: {
            min: 0,
            max: 100
        }
    };
    echart.config = {
        rotate: 90,
        align: 'left',
        verticalAlign: 'middle',
        position: 'insideBottom',
        distance: 15,
        onChange: function () {
            const labelOption = {
                rotate: echart.config.rotate,
                align: echart.config.align,
                verticalAlign: echart.config.verticalAlign,
                position: echart.config.position,
                distance: echart.config.distance
            };
            echart.setOption({
                series: [
                    {
                        label: labelOption
                    },
                    {
                        label: labelOption
                    },
                    {
                        label: labelOption
                    },
                    {
                        label: labelOption
                    }
                ]
            });
        }
    };
    const labelOption = {
        show: true,
        position: echart.config.position,
        distance: echart.config.distance,
        align: echart.config.align,
        verticalAlign: echart.config.verticalAlign,
        rotate: echart.config.rotate,
        formatter: '{c}  {name|{a}}',
        fontSize: 16,
        rich: {
            name: {}
        }
    };
    echartsSeriesList = constructBarSeriesArray(labelOption)

    let option = {
        title: {
            text: title,
            laft: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: echartsLabelList
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar', 'stack']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {show: false},
                data: xName
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: echartsSeriesList
    };
    echart.setOption(option, true);

}

/**
 * @Description: 生成echarts树型图表
 * @Param: title,图标标题；echartsLabel，图标图例；series，X轴上的值；
 * @return:
 * @Author: Happ
 * @Date: 2021/11/29
 */
function buildTreeChart() {

}

/**
 * @Description: 取出Series的data值
 * @Param: echartsJsonObj,参数是json对象
 * @return:
 * @Author: Happ
 * @Date: 2021/11/29
 */
function splitEchartsSeriesLists(echartsSeriesDataLists) {
    let echartsSeriesDataList = [];
    let echartsSeriesDatas = [];
    switch (echartsSeriesClickType) {
        //折线图
        case "line": {
            for (let i = 0; i < echartsLabelList.length; i++) {
                echartsSeriesDataList = echartsSeriesDataLists.split(split_y_symbol)
                console.log("列表数值" + echartsSeriesDataList);
            }
            for (let j = 0; j < echartsSeriesDataList.length; j++) {
                echartsSeriesDatas = echartsSeriesDatas.concat(echartsSeriesDataList[j].split(split_x_symbol))

            }
            echartsSeriesDatas = tran2Array(echartsSeriesDatas, echartsXCount)
            console.log("最终列表数值属性：" + echartsSeriesDatas);
        }
            break;
        // 饼图
        case "pie": {
            for (let i = 0; i < echartsLabelList.length; i++) {
                echartsSeriesDataList = echartsSeriesDataLists.split(split_y_symbol)
                console.log("列表数值" + echartsSeriesDataList);
            }
            echartsSeriesDatas = echartsSeriesDataList;
        }
            break;
        //柱形图
        case "bar": {
            for (let i = 0; i < echartsLabelList.length; i++) {
                echartsSeriesDataList = echartsSeriesDataLists.split(split_y_symbol)
                console.log("列表数值" + echartsSeriesDataList);
            }
            for (let j = 0; j < echartsSeriesDataList.length; j++) {
                echartsSeriesDatas = echartsSeriesDatas.concat(echartsSeriesDataList[j].split(split_x_symbol))

            }
            echartsSeriesDatas = tran2Array(echartsSeriesDatas, echartsXCount)
            console.log("最终柱形图列表数值属性：" + echartsSeriesDatas);
        }
            break;
        //树形图
        case "tree": {
        }
            break;
    }

    return echartsSeriesDatas;


}

/**
 * @Description: 用于将一维数组转化为二维数组
 * @Param:arry,要转换的数组;subGroupLength,每行的长度
 * @return: 转换后的二维数组
 * @Author: Happ
 * @Date: 2021/11/28
 */
function tran2Array(array, subGroupLength) {
    let index = 0;
    let newArray = [];
    while (index < array.length) {
        newArray.push(array.slice(index, index += subGroupLength));
    }
    console.log("转换后数组" + newArray[1])
    return newArray;
}


function initData(click_item) {

    switch (active_id) {
        case role_admin.attr("id"): {
            ;
        }
            break;
        case account_admin.attr("id"): {
            ;
        }
            break;
        case echarts_admin.attr("id"): {
            let click_id = click_item.parents().parents(".item").children("td:nth-child(2)").text();
            clickId = click_id;
            window.alert("当前点击行Id:" + click_id);
            title = click_item.parents().parents(".item").children("td:nth-child(3)").text();
            echartsXList = click_item.parents().parents(".item").children("td:nth-child(5)").text().split(split_x_symbol);
            echartsLabelList = click_item.parents().parents(".item").children("td:nth-child(4)").text().split(split_y_symbol);
            echartsXCount = echartsXList.length;
            echartsYCount = echartsLabelList.length;
            echartsSeriesNameList = click_item.parents().parents(".item").children("td:nth-child(6)").text().split(split_y_symbol);
            echartsSeriesClickType = click_item.parents().parents(".item").children("td:nth-child(7)").text();

            echartsSeriesStackList = click_item.parents().parents(".item").children("td:nth-child(8)").text().split(split_y_symbol);
            let echartsSeriesDataList = click_item.parents().parents(".item").children("td:nth-child(9)").text();
            echartsSeriesDatas = splitEchartsSeriesLists(echartsSeriesDataList);
            console.log("点击的X轴的值为：" + echartsXList)
            console.log("点击的X轴值的数量为：" + echartsXCount);
            console.log("点击的Y轴值的数量为：" + echartsYCount);
            console.log("点击的Y轴的标签值为：" + echartsLabelList)
            console.log("点击的Y轴的name值为：" + echartsSeriesNameList)
            console.log("点击的series的Stack：" + echartsSeriesStackList);
            for (let i = 0; i < echartsSeriesDatas.length; i++) {
                console.log("点击的Y轴的name值为：" + echartsSeriesNameList[i])
            }

        }
            break;
        case comment_admin.attr("id"): {
            ;
        }
            break;
        case compus_practice_admin.attr("id"): {
            ;
        }
            break;
        case user_practice_admin.attr("id"): {
            ;
        }
            break;
        case sell_admin.attr("id"): {
            ;
        }
            break;
        case  news_admin.attr("id"): {
            ;
        }
            break;
        case blog_admin.attr("id"): {
            ;
        }
            break;
        case  videos_admin.attr("id"): {
            ;
        }
            break;
        case note_admin.attr("id"): {
            ;
        }
            break;
        case tab_admin.attr("id"): {
            ;
        }
            break;
    }
}

function clearWindowDatas(echartsId) {
    title = null;
    clickId = null;
    echartsSeriesType = null;
    echartsCreateType = null;
    echartsSeriesClickType = null
    echartsLabelList = [];
    echartsXList = [];
    echartsSeriesStackList = [];
    echartsXCount = 0;
    echartsYCount = 0;
    echartsSeriesList = [];
    echartsSeriesNameList = [];
    echartsSeriesDatas = [[]];
    if (echartsId != null)
        echartsId.clear();
    $('#show-series-datas-window > span ').empty();
    $('#admin-series-datas-window').empty();
}

/**
 * @Description: 判断JS变量是否空值，如果是undefined， null， ''， NaN，false，0，[]，{} ，空白字符串，都返回true，否则返回false
 * @Param: 变量
 * @return: true则为空,false为不空
 * @Author: Happ
 * @Date: 2022/2/10
 */
function isEmpty(v) {
    switch (typeof v) {
        case 'undefined':
            return true;
        case 'string':
            if (v.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
            break;
        case 'boolean':
            if (!v) return true;
            break;
        case 'number':
            if (0 === v || isNaN(v)) return true;
            break;
        case 'object':
            if (null === v || v.length === 0) return true;
            for (var i in v) {
                return false;
            }
            return true;
    }
    return false;
}