Vue.prototype.$axios = axios
$(function () {
    getNews.getNewsList();
})
let jumpNewsDetail = new Vue({
    el: "#news-div",
    data: {
        newsId: 1
    }
    , methods: {
        jump() {
            let that = this;
            this.$axios.get("http://localhost:8080/PCompus/Pages.News.Detail", {
                params: {
                    newsId: that.newsId
                }
            })
        }
    }
})

// var login_id=document.cookie.getkey(login_id)
let getNews = new Vue({
    el: '#card-box-div',
    data: {
        newsIds: [],
        userId: 1,
        resultsNewsList: []
    }
    , methods: {
        getNewsList() {
            let that = this;
            this.$axios.get("http://localhost:8080/PCompus/Pages.News.Detail/getNewsList", {
                params: {
                    userId: that.userId
                }
            }).then(function (res) {
                for (let i in res.data) {
                    console.log("新闻标题和id:" + res.data[i].title + '==>' + res.data[i].news_id);
                }
                that.resultsNewsList = res.data;
            })
        }
    }
})

