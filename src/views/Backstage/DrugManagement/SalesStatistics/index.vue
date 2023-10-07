<template>
    <div class="container">
        <div class="top">
            <div class="echarts" ref="charts1"></div>
            <div class="text">
                药品销售统计
            </div>
            <div class="echarts" ref="charts2"></div>
            <div class="clear"></div>
        </div>
        <div class="bottom">
            <div class="echarts" ref="charts3"></div>
            <div class="echarts" ref="charts4"></div>
            <div class="echarts" ref="charts5"></div>
            <div class="clear"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
//引入echarts
import * as echarts from 'echarts';
let charts1 = ref();
let charts2 = ref();
let charts3 = ref();
let charts4 = ref();
let charts5 = ref()
let datas = [
    ////////////////////////////////////////
    [
        { name: '皮肤科', value: 5.6 },
        { name: '骨科', value: 1 },
        { name: '儿科', value: 0.8 },
        { name: '妇科', value: 0.5 },
        { name: '外科', value: 0.5 },
        { name: '其它', value: 3.8 }
    ],
    // ////////////////////////////////////////
    [
        { name: '1月', value: 3.8 },
        { name: '2月', value: 2.3 },
        { name: '3月', value: 2.2 },
        { name: '4月', value: 1.3 },
        { name: '5月', value: 1.2 },
        { name: '6月', value: 5.7 }
    ],

    ////////////////////////////////////////
    [
        { name: '周一', value: 3.5 },
        { name: '周二', value: 2.8 },
        { name: '周三', value: 1.7 },
        { name: '周四', value: 1.4 },
        { name: '周五', value: 0.5 },
        { name: '周末', value: 3.8 }
    ]
];
//组件挂载完毕初始化图形图标
onMounted(() => {
    let mychart1 = echarts.init(charts1.value);
    let mychart2 = echarts.init(charts2.value);
    let mychart3 = echarts.init(charts3.value);
    let mychart4 = echarts.init(charts4.value);
    let mychart5 = echarts.init(charts5.value);
    //设置配置项
    let option1 = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            right: 30,
            top: 40,
            orient: 'vertical',
            textStyle: {
                color: 'white',
                fontSize: 14
            }
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: true,
                    position: 'inside',
                    color: 'white'
                },

                labelLine: {
                    show: false
                },
                data: [
                    { value: 1048, name: '手术' },
                    { value: 735, name: '病房' },
                    { value: 580, name: '药品' },
                    { value: 484, name: '检查' },
                    { value: 300, name: '运输' }
                ]
            }
        ],
        grid: {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }
    };
    let option2 = {
        title: {
            text: 'Referer of a Website',
            subtext: 'Fake Data',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 1048, name: '外科' },
                    { value: 735, name: '皮肤科' },
                    { value: 580, name: '内科' },
                    { value: 484, name: '骨科' },
                    { value: 300, name: '儿科' }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    let option3 = {
        xAxis: {
            type: 'category',
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }
        ]
    };
    let option4 = {
        title: {
            text: '患者分布',
            left: 'center',
            textStyle: {
                color: '#999',
                fontWeight: 'normal',
                fontSize: 14
            }
        },
        series: datas.map(function (data, idx) {
            var top = idx * 33.3;
            return {
                type: 'pie',
                radius: [20, 60],
                top: top + '%',
                height: '33.33%',
                left: 'center',
                width: 400,
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 1
                },
                label: {
                    alignTo: 'edge',
                    formatter: '{name|{b}}\n{time|{c} 小时}',
                    minMargin: 5,
                    edgeDistance: 10,
                    lineHeight: 15,
                    rich: {
                        time: {
                            fontSize: 10,
                            color: '#999'
                        }
                    }
                },
                labelLine: {
                    length: 15,
                    length2: 0,
                    maxSurfaceAngle: 80
                },
                labelLayout: function (params) {
                    const isLeft = params.labelRect.x < mychart1.getWidth() / 2;
                    const points = params.labelLinePoints as number[][];
                    // Update the end point.
                    points[2][0] = isLeft
                        ? params.labelRect.x
                        : params.labelRect.x + params.labelRect.width;

                    return {
                        labelLinePoints: points
                    };
                },
                data: data
            };
        })
    };
    let option5 = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                areaStyle: {}
            }
        ]
    };
    mychart1.setOption(option1);
    mychart2.setOption(option2);
    mychart3.setOption(option3);
    mychart4.setOption(option4);
    mychart5.setOption(option5);
});
</script>

<style lang="scss" scoped>
.container {
    // background: url(../../../../assets/images/bg3.png) no-repeat;
    // background-size: cover;

    .echarts {
        width: 33%;
        // height: 400px;
        // height: 350px;
        // height: 45%;
        height: 40vh;
        float: left;
    }

    .text {
        float: left;
        width: 33%;
        // height: 45%;
        // height: 400px;
        // height: 350px;
        height: 45vh;
        text-align: center;
        font-size: 50px;
        line-height: 400px;
    }

}
</style>