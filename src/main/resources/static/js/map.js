//echarts图表

$.get('../static/data/china.json', function (chinaJson) {
        echarts.registerMap('china', chinaJson); // 注册地图
        var mapChart = echarts.init(document.getElementById('e-content'));

        var geoCoordMap = {
            "海门": [121.15, 31.89],
            "鄂尔多斯": [109.781327, 39.608266],
            "招远": [120.38, 37.35],
            "舟山": [122.207216, 29.985295],
            "齐齐哈尔": [123.97, 47.33],
            "盐城": [120.13, 33.38],
            "赤峰": [118.87, 42.28],
            "青岛": [120.33, 36.07],
            "乳山": [121.52, 36.89],
            "金昌": [102.188043, 38.520089],
            "泉州": [118.58, 24.93],
            "合肥": [117.27, 31.86],
            "武汉": [114.31, 30.52],
            "大庆": [125.03, 46.58]
        };
        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };
        var option = {

            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {					// 定义样式
                    normal: {					// 普通状态下的样式
                        areaColor: '#2a333d',
                        borderColor: '#404a59'
                    },
                    emphasis: {					// 高亮状态下的样式
                        areaColor: '#2a333d'
                    }
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    return params.name + ' : ' + params.value[2];
                }
            },
            legend: {
                orient: 'vertical',
                y: 'bottom',
                x: 'right',
                data: ['分布'],
                textStyle: {
                    color: '#CD0000'
                }
            },

            backgroundColor: '#404a59',	// 图表背景色
            series: [
                {
                    name: '销量', // series名称
                    type: 'scatter', // series图表类型
                    coordinateSystem: 'geo', // series坐标系类型
                    data: convertData([
                        {name: "海门", value: 9},
                        {name: "鄂尔多斯", value: 12},
                        {name: "招远", value: 12},
                        {name: "舟山", value: 12},
                        {name: "齐齐哈尔", value: 14},
                        {name: "盐城", value: 15},
                        {name: "赤峰", value: 16},
                        {name: "青岛", value: 18},
                        {name: "乳山", value: 18},
                        {name: "金昌", value: 19},
                        {name: "泉州", value: 21},
                        {name: "合肥", value: 229},
                        {name: "武汉", value: 273},
                        {name: "大庆", value: 279}
                    ])  // series数据内容
                }

            ],

            visualMap: {
                type: 'continuous', // 连续型
                min: 0,       		// 值域最小值，必须参数
                max: 400,			// 值域最大值，必须参数
                calculable: true,	// 是否启用值域漫游
                inRange: {
                    color: ['#C1FFC1', '#76EE00', '#228B22']
                    // 指定数值从低到高时的颜色变化
                },
                textStyle: {
                    color: '#fff'	// 值域控件的文本颜色
                }
            }
        };
        mapChart.setOption(option);
    }
);
/**
 * Created by 42143 on 2017/12/23.
 */
