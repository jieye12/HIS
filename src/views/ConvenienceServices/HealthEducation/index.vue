<template>
    <div class="all">
        <el-card>
            <div class="middle">
                <div class="top">
                    <el-input v-model="searchContent" placeholder="请输入搜索关键词"></el-input>
                </div>
                <div class="main">
                    <ul>
                        <li v-for="(item, index) in  date ">
                            <router-link to="/article">
                                <div class="title">
                                    {{ item.title }}
                                </div>
                                <div class="content">
                                    <div class="pinToTop" v-if="item.pinToTop === true">
                                        <el-button> 置顶 </el-button>
                                    </div>
                                    <div class=" type">
                                        {{ item.type }}
                                    </div>
                                    <div class="time">
                                        {{ item.time }}
                                    </div>
                                    <div class="clear"></div>
                                </div>
                            </router-link>
                            <hr>
                        </li>
                    </ul>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { reqgetPromotionalAreaInformation } from '../../../api/service/index'
onMounted(async () => {
    const res = await reqgetPromotionalAreaInformation()
    console.log(res);
    date.value = res.data
})
const searchContent = ref("")
const date = ref([{
    title: "医保患者住院须知",
    pinToTop: true,
    type: "医保咨询",
    time: "2023-06-09",
}, {
    title: "医保患者就医温馨提示",
    pinToTop: true,
    type: "医保咨询",
    time: "2023-06-09",
}, {
    title: "西安市医保特殊药品审批要求及流程",
    pinToTop: true,
    type: "医保咨询",
    time: "2023-06-09",
}, {
    title: "西安市医保门诊慢性病报销政策",
    pinToTop: true,
    type: "医保咨询",
    time: "2023-06-09",
}, {
    title: "西安市职工医保患者门诊报销政策及流程",
    pinToTop: true,
    type: "医保咨询",
    time: "2023-06-09",
}, {
    title: "持社保卡军队相关人员不对减免政策及就医流程",
    pinToTop: true,
    type: "医保咨询",
    time: "2023-06-09",
}, {
    title: "急诊报销说明",
    pinToTop: true,
    type: "医保咨询",
    time: "2023-06-09",
}, {
    title: "医保药品限制条件报销政策",
    pinToTop: true,
    type: "医保咨询",
    time: "2023-06-09",
},
{
    title: "胚胎宝宝的“前世今生",
    pinToTop: false,
    type: "妇女保健",
    time: "2023-06-09",
},
{
    title: "器官捐献",
    pinToTop: false,
    type: "医保咨询",
    time: "2023-06-09",
}])
</script>

<style lang="scss" scoped>
.el-card {
    width: 50%;
    margin: 10px auto;
}

.middle {

    .top {
        .el-input {
            width: 80%;
            margin: 20px auto;
            border-radius: 5px;
        }
    }

    a {
        color: black;
    }

    .main {
        li {
            .title {
                font-weight: 700;
                margin: 5px;
                font-size: 20px;
            }

            .content {
                padding: 5px;
                font-size: 15px;
                height: 50px;
                line-height: 50px;

                .pinToTop {
                    float: left;
                    margin-right: 20px;

                    .el-button {
                        background-color: #f8f8f8;
                    }
                }

                .type {
                    float: left;
                    margin-right: 20px;
                }

                .time {
                    float: left;
                }
            }
        }
    }
}
</style>