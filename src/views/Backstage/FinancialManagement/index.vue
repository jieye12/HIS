<template>
    <div class="container">
        <div class="top">
            <div class="left">
                <span class="lbtn" @click="goHome">首页</span>
            </div>
            <div class="center">
                <div class="title">HIS可视化大数据平台</div>
            </div>
            <div class="right">
                <span class="rbtn">统计报告</span>
                <!-- <span class="time">当前时间:{{ time }}</span> -->
                <span class="time">2023:10-01 04:24:21</span>
            </div>
        </div>
        <div class="main">
            <div class="m">
                <div class="echarts" ref="echarts1"></div>
                <div class="echarts" ref="echarts2"></div>
            </div>
            <div class="m">
                <div class="echarts" ref="echarts3"></div>
            </div>
            <div class="m">
                <div class="echarts" ref="echarts4"></div>
                <div class="echarts" ref="echarts5"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue';
import { useRouter } from 'vue-router'
import * as echarts from 'echarts';
let charts1 = ref();
let charts2 = ref();
let charts3 = ref();
let charts4 = ref();
let charts5 = ref()
let datas = [
    ////////////////////////////////////////
    [
        { name: '圣彼得堡来客', value: 5.6 },
        { name: '陀思妥耶夫斯基全集', value: 1 },
        { name: '史记精注全译（全6册）', value: 0.8 },
        { name: '加德纳艺术通史', value: 0.5 },
        { name: '表象与本质', value: 0.5 },
        { name: '其它', value: 3.8 }
    ],
    // ////////////////////////////////////////
    [
        { name: '银河帝国5：迈向基地', value: 3.8 },
        { name: '俞军产品方法论', value: 2.3 },
        { name: '艺术的逃难', value: 2.2 },
        { name: '第一次世界大战回忆录（全五卷）', value: 1.3 },
        { name: 'Scrum 精髓', value: 1.2 },
        { name: '其它', value: 5.7 }
    ],

    ////////////////////////////////////////
    [
        { name: '克莱因壶', value: 3.5 },
        { name: '投资最重要的事', value: 2.8 },
        { name: '简读中国史', value: 1.7 },
        { name: '你当像鸟飞往你的山', value: 1.4 },
        { name: '表象与本质', value: 0.5 },
        { name: '其它', value: 3.8 }
    ]
];
const initE = () => {
    let newPromise = new Promise((resolve) => {
        resolve()
    })
    newPromise.then(() => {
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
                text: '阅读书籍分布',
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
    })
}
//组件挂载完毕初始化图形图标
// onMounted(() => {
// });
const $router = useRouter()
const goHome = () => {
    $router.push("/home")
}
</script>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;
    background: url(../../../assets/images/bg3.png);
    background-size: cover;

    .top {
        width: 90%;
        height: 40px;
        margin: auto;
        display: flex;

        .left {
            flex: 1.5;
            background: url(../../../assets/images/dataScreen-header-left-bg.png) no-repeat;
            background-size: cover;

            .lbtn {
                width: 150px;
                height: 40px;
                float: right;
                background: url(../../../assets/images/dataScreen-header-btn-bg-l.png) no-repeat;
                background-size: 100% 100%;
                text-align: center;
                line-height: 40px;
                color: #29fcff;
                font-size: 20px;
            }
        }

        .center {
            flex: 2;

            .title {
                width: 100%;
                height: 74px;
                background: url(../../../assets/images/dataScreen-header-center-bg.png) no-repeat;
                background-size: 100% 100%;
                text-align: center;
                line-height: 74px;
                color: #29fcff;
                font-size: 30px;
            }
        }

        .right {
            flex: 1.5;
            background: url(../../../assets/images/dataScreen-header-left-bg.png) no-repeat;
            background-size: cover;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .rbtn {
                width: 150px;
                height: 40px;
                background: url(../../../assets/images/dataScreen-header-btn-bg-r.png) no-repeat;
                background-size: 100% 100%;
                text-align: center;
                line-height: 40px;
                color: #29fcff;
            }

            .time {
                text-align: center;
                color: #29fcff;
                font-size: 20px;
            }
        }
    }
}

.m {
    display: flex;
    align-items: center;
    justify-content: space-around;
    vertical-align: auto;

    .echarts {
        width: 300px;
        height: 300px;
        // width: 400px;
        // height: 400px;
        line-height: 100px;
        // background-color: rgb(0, 255, 238);
        border: 1px solid black;
        color: #ffffff;
        font-weight: 700;
    }
}
</style>