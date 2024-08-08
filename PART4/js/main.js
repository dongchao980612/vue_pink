// https://dataiqs.com/api/netease/music/?type=random&msg=%22%E6%99%B4%E5%A4%A9%22
// https://dataiqs.com/api/kgmusic/?msg=晴天&type=mv&n=0
// https://api.wer.plus/api/wytop?t=1
// https://www.hhlqilongzhu.cn/api/dg_kgmusic.php?gm=%E7%88%B1%E4%BD%A0
// https://www.hhlqilongzhu.cn/api/dg_kgmusic.php?gm=%E7%88%B1%E4%BD%A0&type=json

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        query: '',
        musicList: [],
        musicUrl: "",
        musicCover: "",
        isPlaying: false,
        mvUrl: "",
        isShowMv: false,
    },
    methods: {
        // 搜索音乐
        searchMusic: function () {
            console.log("searchMusic");
            if (!this.query.trim()) {
                alert('请输入查询内容');
                return;
            }

            // 调用接口获取数据
            var that = this;
            axios.get('https://www.hhlqilongzhu.cn/api/dg_kgmusic.php?gm=' + this.query + "&type=json")
                .then(function (response) {
                    that.musicList = response.data.data;
                }, function (err) {
                    alert(err.message);
                });
        },

        // 获取音乐和封面
        playMusic: function (musicName) {
            var that = this;
            axios.get('https://dataiqs.com/api/kgmusic/?msg=' + musicName + '&type=mv&n=0')
                .then(function (response) {
                    const data = response.data.data;
                    that.musicUrl = data.mv_url;
                    that.musicCover = data.cover_url;
                }, function (err) {
                    alert(err.message);
                });
        },

        // 播放音乐
        play: function () {
            this.isPlaying = true;
        },

        // 暂停音乐
        pause: function () {
            this.isPlaying = false;
        },

        // 播放MV
        playMv: function (musicName) {
            var that = this;
            axios.get('https://dataiqs.com/api/kgmusic/?msg=' + musicName + '&type=mv&n=0')
                .then(function (response) {
                    const data = response.data.data;
                    that.mvUrl = data.mv_url;
                    that.isShowMv = true;
                    that.pause();  // 暂停音乐
                }, function (err) {
                    alert(err.message);
                });
        },

        // 隐藏mv
        hide: function () {
            this.isShowMv = false;
        }
    }
});