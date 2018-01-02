$.get('../static/data/china.json', function (chinaJson) {
    echarts.registerMap('china', chinaJson); // 注册地图
    var mapChart = echarts.init(document.getElementById('e-content'));
    var res = [];
    var location_info = [
        {"name":"海门","longitude":121.15,"latitude":31.89,"number":87},
        {"name":"鄂尔多斯","longitude":109.781327,"latitude":39.608266,"number":47}
        ];

    for (var i = 0; i < location_info.length; i++) {
        res.push({
            name: location_info[i].name,
            value: [].concat(location_info[i].longitude).concat(location_info[i].latitude).concat(location_info[i].number)
        });
    }
    // $.get('data_url', function (location_info) {
    //     // 元素格式： name（地名）， longitude（经度）， latitude（纬度）， number（人数权值）。
    //     for (var i = 0; i < location_info.length; i++) {
    //         res.push({
    //             name: location_info[i].name,
    //             value: [].concat(location_info[i].longitude).concat(location_info[i].latitude).concat(location_info[i].number)
    //         });
    //     }
    // });

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
            data: ['pm2.5'],
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
                data:res
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


});
/**
 * Created by 42143 on 2017/12/23.
 */
