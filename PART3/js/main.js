// http://wthrcdn.etouch.cn/weather_mini
var app = new Vue({

    el: '#app',
    data: {
        city: "",
        weatherList: [
            { date: "星期天", low: "低温20°C", high: "高温 29°C", weather: "晴", temperature: "25°C" },
            { date: "星期一", low: "低温20°C", high: "高温 28°C", weather: "晴", temperature: "25°C" },
            { date: "星期二", low: "低温20°C", high: "高温 27°C", weather: "晴", temperature: "25°C" },
            { date: "星期三", low: "低温20°C", high: "高温 27°C", weather: "晴", temperature: "25°C" },
        ]
    },

    methods: {
        searchWeather: function () {
            var that = this;
            axios.get("https://iweather.market.alicloudapi.com/address?msg=" + this.city)
                .then(function (response) {
                    console.log(this.city);
                    that.weatherList = [
                        { date: "星期天", low: "低温20°C", high: "高温 29°C", weather: "晴", temperature: "25°C" },
                        { date: "星期一", low: "低温20°C", high: "高温 28°C", weather: "晴", temperature: "25°C" },
                        { date: "星期二", low: "低温20°C", high: "高温 27°C", weather: "晴", temperature: "25°C" },
                        { date: "星期三", low: "低温20°C", high: "高温 27°C", weather: "晴", temperature: "25°C" },
                    ];
                }, function (err) {
                    console.log("请求失败", err.message);
                })
        },
        changeCity: function (city) {
            this.city = city;

        }
    }

})