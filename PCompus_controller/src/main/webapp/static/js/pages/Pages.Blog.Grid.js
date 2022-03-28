$(document).ready(function () {
    $("#zhankai").click(function () {
        if ($(this).text() == "展开") {
            $(".hidecon").show();
            $(this).text("收起");
        } else {
            $(".hidecon").hide();
            $(this).text("展开");
        }
    });
});

$(function () {
    initSpiritPagination(10, 20, 10)
})


function updateViewInfo(pages, limit) {

    let param = {
        //每一页列表展示的博客数
        "offset": 10,
        "limit": 20,
        //搜索框关键字
        "keyWords": keyWords
    };

    updateDeclareTemp(param)
}

function updateDeclareTemp(param) {
// $.ajax();

}