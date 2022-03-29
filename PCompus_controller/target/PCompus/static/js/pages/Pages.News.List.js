let resultsNewsList;
let clickId


Vue.prototype.axios = axios
$(function () {
    getNews.getNewsList()
    $(".news-card").click(function () {
        clickId = $(this).children("div:first-child").text();
        console.log("点击ID:" + clickId);

        $(window).attr('location', 'http://localhost:8080/PCompus/PagesNewsList/JumpPagesById?newsId=' + clickId);
    })
})


var getNews = new Vue({
    el: "#news-div",
    data: {
        newsId: 1
    },
    methods: {
        getNewsList: function () {
            this.axios.get("http://localhost:8080/PCompus/PagesNewsList/getNewsList", {
                params: {
                    userId: 1
                }
            }).then(function (res) {
                for (let i in res.data) {
                    console.log("新闻标题和id:" + res.data[i].title + '==>' + res.data[i].news_id);
                }
                resultsNewsList = res.data;
            })
        }
    }
})

