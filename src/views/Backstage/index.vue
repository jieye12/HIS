<template>
    <div>
        <div class="left">
            <h2>HIS后台管理系统</h2>
            <el-menu active-text-color="#9acd32" background-color="#001529" class="el-menu-vertical-demo" default-active="1"
                text-color="#fff">
                <!-- //首页 -->
                <el-menu-item>
                    <el-icon>
                        <HomeFilled />
                    </el-icon>
                    <span>
                        <router-link to="/home">首页</router-link>
                    </span>
                </el-menu-item>
                <!-- //科室管理 -->
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <Histogram />
                        </el-icon>
                        <span>科室管理</span>
                    </template>
                    <el-menu-item>
                        <el-icon>
                            <List />
                        </el-icon>
                        <router-link to="/department_details">科室详情</router-link>
                    </el-menu-item>
                    <el-menu-item>
                        <el-icon>
                            <InfoFilled />
                        </el-icon>
                        <router-link to="/shift_information">排班信息</router-link>
                    </el-menu-item>
                    <el-menu-item>
                        <el-icon>
                            <Promotion />
                        </el-icon>
                        <router-link to="/appointment_management">预约管理</router-link>
                    </el-menu-item>
                    <el-menu-item>
                        <el-icon>
                            <Promotion />
                        </el-icon>
                        <router-link to="/department_statistics">科室统计</router-link>
                    </el-menu-item>
                </el-sub-menu>
                <!-- 人员管理 -->
                <el-sub-menu index="2">
                    <template #title>
                        <el-icon>
                            <UserFilled />
                        </el-icon>
                        <span>人员管理</span>
                    </template>
                    <el-menu-item>
                        <el-icon>
                            <User />
                        </el-icon>
                        <router-link to="/patient_management">患者管理</router-link>
                    </el-menu-item>
                    <el-menu-item>
                        <el-icon>
                            <Avatar />
                        </el-icon>
                        <router-link to="/doctor_management">医生管理</router-link>
                    </el-menu-item>
                    <el-menu-item>
                        <el-icon>
                            <Lock />
                        </el-icon>
                        <router-link to="/authority_management">权限管理</router-link>
                    </el-menu-item>
                </el-sub-menu>
                <!-- 医药管理 -->
                <el-sub-menu index="3">
                    <template #title>
                        <el-icon>
                            <Management />
                        </el-icon>
                        <span>医药管理</span>
                    </template>
                    <el-menu-item>
                        <el-icon>
                            <Ticket />
                        </el-icon>
                        <router-link to="/purchase_management">进货管理</router-link>
                    </el-menu-item>
                    <el-menu-item>
                        <el-icon>
                            <TrendCharts />
                        </el-icon>
                        <router-link to="/inventory_management">库存管理</router-link>
                    </el-menu-item>
                    <el-menu-item>
                        <el-icon>
                            <TrendCharts />
                        </el-icon>
                        <router-link to="/sales_management">销售管理</router-link>
                    </el-menu-item>
                    <el-menu-item>
                        <el-icon>
                            <TrendCharts />
                        </el-icon>
                        <router-link to="/sales_statistics">销售统计</router-link>
                    </el-menu-item>
                </el-sub-menu>
                <!-- 财务管理 -->
                <!-- <el-menu-item>
                    <el-icon>
                        <Shop />
                    </el-icon>
                    <router-link to="/financial_management">财务统计</router-link>
                </el-menu-item> -->
                <!-- 系统管理 -->
                <el-sub-menu index="5">
                    <template #title>
                        <el-icon>
                            <Tools />
                        </el-icon>
                        <span>系统管理</span>
                    </template>
                    <el-menu-item>
                        <el-icon>
                            <LocationFilled />
                        </el-icon>
                        <span>
                            <a href="https://github.com/un-pany/v3-admin-vite" target="_blank">Github地址</a>
                        </span>
                    </el-menu-item>
                    <el-menu-item>
                        <el-icon>
                            <LocationFilled />
                        </el-icon>
                        <span>
                            <a href="https://github.com/un-pany/v3-admin-vite" target="_blank">Gitee地址</a>
                        </span>
                    </el-menu-item>
                    <el-menu-item>
                        <el-icon>
                            <LocationFilled />
                        </el-icon>
                        <span>
                            <router-link to="/404">404</router-link>
                        </span>
                    </el-menu-item>
                    <el-menu-item>
                        <el-icon>
                            <LocationFilled />
                        </el-icon>
                        <span>
                            <router-link to="/403">403</router-link>
                        </span>
                    </el-menu-item>
                </el-sub-menu>
            </el-menu>
        </div>
        <div class="right">
            <div class="top">
                <div class="banner">
                    <el-icon>
                        <HomeFilled />
                    </el-icon>
                    <span>首页</span>
                </div>
                <div class="tools">
                    <span>
                        <el-button size="small" icon="Refresh" circle @click="updateRefsh"></el-button>
                    </span>
                    <span>
                        <el-button size="small" icon="FullScreen" circle @click="fullScreen"></el-button>
                    </span>
                    <span>
                        <img src="../../assets/images/avatar.jpg" alt="">
                    </span>
                    <span>
                        jieye
                    </span>
                    <span>
                        <el-button style="width:80px;" type="danger" @click="logout()">退出登录</el-button>
                    </span>
                </div>
                <div class="clear"></div>
            </div>
            <div class="main">
                <router-view></router-view>
            </div>
        </div>
        <div class="clear"></div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
let $router = useRouter()
const updateRefsh = () => {

}
const fullScreen = () => {
    let full = document.fullscreenElement;
    if (!full) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}
const logout = () => {
    $router.push("/main")
}
</script>

<style lang="scss" scoped>
.left {
    width: 300px;
    float: left;
    height: 100vh;
    background-color: #001529;

    h2 {
        width: 100%;
        height: 70px;
        color: #ffffff;
        line-height: 70px;
        padding-left: 50px;
    }

    .el-menu {
        width: 100%;
        height: calc(100vh - 70px);
        padding: 20px;
        box-sizing: border-box;
    }

    a {
        color: #ffffff;
    }
}

.right {
    width: calc(100vw - 300px);
    float: right;

    .top {
        height: 50px;
        line-height: 50px;

        .banner {
            float: left;
            margin-left: 80px;
        }

        .tools {
            float: right;
            margin-right: 40px;

            span {
                width: 30px;
                height: 30px;
                line-height: 0;
                vertical-align: middle;
                margin: 0 5px;

            }

            .el-button {
                width: 30px;
                height: 30px;
            }

            img {
                display: inline-block;
                width: 30px;
                height: 30px;
                border-radius: 50%;
            }
        }
    }

    .main {
        padding: 20px;
        box-sizing: border-box;
    }
}
</style>