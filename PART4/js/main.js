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
        musicUrl: ""
    },
    methods: {
        searchMusic: function () {

            if (!this.query.trim()) {
                alert('请输入查询内容');
                return;
            }

            // 调用接口获取数据
            var that = this
            axios.get('https://www.hhlqilongzhu.cn/api/dg_kgmusic.php?gm=' + this.query + "&type=json")
                .then(function (response) {
                    that.musicList = response.data.data;
                    // console.log(this.musicList)
                }, function (err) {
                    alert(err.message);
                })

            console.log(this.musicList)
        },


        playMusic: function (musicName) {
            var that = this
            axios.get('https://dataiqs.com/api/netease/music/?type=random&msg=' + musicName)
                .then(function (response) {
                    console.log(musicName, response.data.data.song_url)
                    that.musicUrl = response.data.data.song_url
                }, function (err) {
                    alert(err.message);
                })
        }
    }
})