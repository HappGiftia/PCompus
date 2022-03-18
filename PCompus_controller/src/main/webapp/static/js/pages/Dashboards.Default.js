/**
 * @Author: Happ
 * @Date: 2021-11-26 12:53:24
 * @LastEditTime: 2021-11-26 20:44:46
 * @LastEditors: Happ
 * @Description:用于首页的js文件
 * @FilePath: \vscode_workspace\PCompus\static\Js\pages\Dashboards.Default.js
 * @阁下何不同风起，扶摇直上九万里。wink~~~~
 */

//x轴上每个值的分割
var split_x_symbol = "?#";
//y轴上每个值的分割
var split_y_symbol = "&_";

//图表标题
var title;
// 图表legend列表
var echartsLabelList = [];
//图表X轴的值
var echartsXList = [];
//图表X的数量
var echartsXCount;
// 图标legend数量
var echartsYCount;
// 图表Series的name值
var echartsSeriesNameList = [];
//图表类型
var echartsSeriesType;
//图表数据堆叠项
var echartsSeriesStackList = [];
//图表Series对象列表
var echartsSeriesList = [];
//图表Series的data
var echartsSeriesDatas = [];

var btn_refreshEcharts;

var echartsJsonObj;

let weekDataEchart = echarts.init(document.getElementById('week-practice-data'));

let dayDataEchart = echarts.init(document.getElementById('day-practice-data'));

let weekLi = $('#week-li');

let dayLi = $('#day-li');

let dayTab = $('#day-tab');

let weekTab = $('#week-tab');

let inSchool = $('#in-school-li');

let outSchool = $('#out-school-li');

let recentPractice = $('#recent-li');

let mostPractice = $('#most-li');

$(function () {

    btn_refreshEcharts = $('#refresh-echarts');
    btn_refreshEcharts.click(function () {
        let week_echarts_id = $('#week-echarts-select').val();
        let day_echarts_id = $('#day-echarts-select').val();
        clearDatas(weekDataEchart);
        clearDatas(dayDataEchart);
        console.log("当前选择select:" + week_echarts_id);
        console.log("当前选择select:" + day_echarts_id);

        refreshEchart(week_echarts_id, weekDataEchart);
        refreshEchart(day_echarts_id, dayDataEchart);

    })
    weekLi.trigger('click');
    musicPlayer()
});

function refreshEchart(echarts_id, echartsID) {

    $.getJSON('http://localhost:8080/PCompus/auto_echarts', {
        echarts_id: echarts_id,
    }, function (echarts_json) {
        console.log(echarts_json)
        if ((typeof echarts_json == 'object') && echarts_json.constructor == Object) {
            echartsJsonObj = echarts_json;
        } else {
            echartsJsonObj = eval("(" + echarts_json + ")");
        }
        echartsSeriesType = echartsJsonObj.echarts_series_type;
        switch (echartsSeriesType) {
            case "line":
                initLineChart(echartsJsonObj);
                echartsSeriesList = constructLineSeriesArray();
                buildLineChart(title, echartsLabelList, echartsXList, echartsSeriesList, echartsID);
                break;
            case "pie":
                initPieChart(echartsJsonObj);
                echartsSeriesList = constructPieSeriesArray();
                buildPieChart(title, echartsSeriesList, echartsID);
                break;
            case "bar":
                initBarChart(echartsJsonObj);
                buildBarChart(echartsXList, echartsID)
                break;
            case "tree":
                ;
                break;
        }

    })
}


/**
 * @Description: 初始化折线表各项参数
 * @Param: echartsJsonObj,参数是json对象
 * @return:
 * @Author: Happ
 * @Date: 2021/11/29
 */
function initLineChart(echartsJsonObj) {
    title = echartsJsonObj.title;
    echartsXList = echartsJsonObj.echarts_x.split(split_x_symbol);
    echartsLabelList = echartsJsonObj.echarts_label.split(split_y_symbol);
    echartsXCount = echartsXList.length;
    echartsYCount = echartsLabelList.length;
    echartsSeriesNameList = echartsJsonObj.echarts_series_name.split(split_y_symbol);
    echartsSeriesStackList = echartsJsonObj.echarts_series_stack.split(split_y_symbol);
    console.log("X轴的值为：" + echartsXList)
    console.log("X轴值的数量为：" + echartsXCount);
    console.log("Y轴值的数量为：" + echartsYCount);
    console.log("Y轴的标签值为：" + echartsLabelList)
    console.log("Y轴的name值为：" + echartsSeriesNameList)
    console.log("series的Stack：" + echartsSeriesStackList)
    echartsSeriesDatas = splitEchartsSeriesListJson(echartsJsonObj);
    for (let i = 0; i < echartsSeriesDatas.length; i++) {
        console.log("Y轴的name值为：" + echartsSeriesNameList[i])
    }
}

function initPieChart(echartsJsonObj) {
    title = echartsJsonObj.title;
    echartsLabelList = echartsJsonObj.echarts_label.split(split_y_symbol);
    echartsXCount = echartsXList.length;
    echartsYCount = echartsLabelList.length;
    echartsSeriesNameList = echartsJsonObj.echarts_series_name.split(split_y_symbol);
    echartsSeriesDatas = splitEchartsSeriesListJson(echartsJsonObj);

}

function initBarChart(echartsJsonObj) {
    title = echartsJsonObj.title;
    echartsXList = echartsJsonObj.echarts_x.split(split_x_symbol);
    echartsLabelList = echartsJsonObj.echarts_label.split(split_y_symbol);
    echartsXCount = echartsXList.length;
    echartsYCount = echartsLabelList.length;
    echartsSeriesNameList = echartsJsonObj.echarts_series_name.split(split_y_symbol);
    console.log("X轴的值为：" + echartsXList)
    console.log("X轴值的数量为：" + echartsXCount);
    console.log("Y轴值的数量为：" + echartsYCount);
    console.log("Y轴的标签值为：" + echartsLabelList)
    console.log("Y轴的name值为：" + echartsSeriesNameList);
    echartsSeriesDatas = splitEchartsSeriesListJson(echartsJsonObj);
    for (let i = 0; i < echartsSeriesDatas.length; i++) {
        console.log("Y轴的name值为：" + echartsSeriesNameList[i])
    }
}

function initTreeChart(echartsJsonObj) {

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
            top: '5%',
            data: echartsLabel,
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
        },
        yAxis: {
            type: 'value',
        },
        series: series,
    };

    echart.setOption(option);
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
    echart.setOption(option);

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
    echart.setOption(option);

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
function splitEchartsSeriesListJson(echartsJsonObj) {
    let echartsSeriesDataList;
    let echartsSeriesDatas = [];
    switch (echartsSeriesType) {
        //折线图
        case "line": {
            for (let i = 0; i < echartsLabelList.length; i++) {
                echartsSeriesDataList = echartsJsonObj.echarts_series_data.split(split_y_symbol)
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
                echartsSeriesDataList = echartsJsonObj.echarts_series_data.split(split_y_symbol)
                console.log("列表数值" + echartsSeriesDataList);
            }
            echartsSeriesDatas = echartsSeriesDataList;
        }
            break;
        //柱形图
        case "bar": {
            for (let i = 0; i < echartsLabelList.length; i++) {
                echartsSeriesDataList = echartsJsonObj.echarts_series_data.split(split_y_symbol)
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


/**
 * @Description: 构造折线表Series
 * @Param: Null
 * @return: 返回的是一个已经构造好的series数组对象
 * @Author: Happ
 * @Date: 2021/11/29
 */
function constructLineSeriesArray() {
    let seriesList = [];

    for (let i = 0; i < echartsYCount; i++) {
        var series = {name: null, type: null, stack: null, data: []}
        series.name = echartsSeriesNameList[i];
        series.type = echartsSeriesType;
        series.stack = echartsSeriesStackList[i];
        series.data = echartsSeriesDatas[i];
        console.log("data[" + i + "]的数据为:" + echartsSeriesDatas[i])
        console.log("[" + i + "]" + JSON.stringify(series))
        seriesList.push(series);

    }

    return seriesList;
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
    let seriesList = [];
    for (let i = 0; i < echartsYCount; i++) {
        var series = {
            name: null,
            type: echartsSeriesType,
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

function clearDatas(echartsId) {
    title = null;
    echartsLabelList = [];
    echartsXList = [];
    echartsXCount = null;
    echartsYCount = null;
    echartsSeriesStackList = [];
    echartsSeriesType = null;
    echartsSeriesList = [];
    echartsSeriesNameList = [];
    echartsSeriesDatas = [];

    if (echartsId != null) {
        echartsId.clear()
    }
}


weekLi.click(function () {
    weekLi.addClass('active');
    weekTab.addClass('active');
    dayLi.removeClass('active')
    dayTab.removeClass('active');
    refreshEchart(2022031401, weekDataEchart);
    clearDatas(dayDataEchart);

})
dayLi.click(function () {
    dayLi.addClass('active');
    dayTab.addClass('active');
    weekLi.removeClass('active')
    weekTab.removeClass('active');
    refreshEchart(2022031401, dayDataEchart);
    clearDatas(weekDataEchart);
})
