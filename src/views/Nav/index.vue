<template>
    <div class="cards">
        <el-card>
            <h1>医疗服务</h1>
            <hr>
            <div class="main">
                <div class="top">
                    <ul>
                        <li>
                            <router-link to="/pharmacy">药房</router-link>
                        </li>
                        <li>
                            <router-link to="/clinic">门诊报告单</router-link>
                        </li>
                    </ul>
                </div>
                <div class="middle">
                    <ul>
                        <li>
                            <router-link to="/reserve">预约挂号</router-link>
                        </li>
                    </ul>
                </div>
                <div class="bottom">
                    <ul>
                        <li>
                            <router-link to="/hospitalized">住院</router-link>
                        </li>
                        <li>
                            <router-link to="/payment">缴费</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </el-card>
        <el-card>
            <h1>便民服务</h1>
            <hr>
            <div class="main pyramid">
                <div class="row">
                    <ul>
                        <li>
                            <router-link to="/department_introduction">科室简介</router-link>
                        </li>
                    </ul>
                </div>
                <div class="row">
                    <ul>
                        <li>
                            <router-link to="/nucleic_acid_amplification_testing">核酸检测</router-link>
                        </li>
                        <li>
                            <router-link to="/health_education">健康宣教</router-link>
                        </li>
                    </ul>
                </div>
                <div class="row">
                    <ul>
                        <li>
                            <router-link to="/medical_guide">就医指南</router-link>
                        </li>
                        <li>
                            <router-link to="/medical_feedback">就医反馈</router-link>
                        </li>
                        <li>
                            <router-link to="/health_check_up">健康体检</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </el-card>
        <el-card>
            <h1>个人中心</h1>
            <hr>
            <div class="main">
                <div class="top">
                    <ul>
                        <li>
                            <router-link to="/my_hospitalization">我的住院</router-link>
                        </li>
                    </ul>
                </div>
                <div class="middle">
                    <ul>
                        <li>
                            <router-link to="/my_bill">我的账单</router-link>
                        </li>
                        <li>
                            <router-link to="/personal_information">个人信息</router-link>
                        </li>
                    </ul>
                </div>
                <div class="bottom">
                    <ul>
                        <li>
                            <router-link to="/backstage">后台</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.cards {
    background-image: url(../../assets/images/bgi.jpg);
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: space-between;
    vertical-align: middle;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
    height: calc(100vh - $nav_height);

    .el-card {
        width: 30%;
        height: 400px;
        background-color: rgb(0, 191, 255);

        h1 {
            text-align: center;
        }

        hr {
            margin: 2px 0;
        }

        .pyramid {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 200px;
            margin: 0 auto;
        }

        .row {
            display: flex;
            justify-content: center;
        }

        ul {
            display: flex;
            align-items: center;
            justify-content: space-around;
            vertical-align: auto;

            li {
                width: 100px;
                height: 100px;
                line-height: 100px;
                border-radius: 50%;
                // background-color: rgb(0, 255, 238);
                border: 1px solid black;
                color: #ffffff;
                font-weight: 700;
            }
        }

    }
}
</style>