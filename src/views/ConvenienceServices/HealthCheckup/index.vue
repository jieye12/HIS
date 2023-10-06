<template>
    <div class="all">
        <div class="main">
            <div class="container">
                <div class="row">
                    <span>
                        <router-link to="/check_up_reserve">预约体检</router-link>
                    </span>
                    <span>
                        <router-link to="/check_up_q">健康问卷</router-link>
                    </span>
                </div>
                <div class="row">
                    <span>
                        <router-link to="/check_up_i">体检项目介绍</router-link>
                    </span>
                    <span>
                        <router-link to="/check_up_query">体检结果查询</router-link>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.main {
    width: 80%;
    margin: 100px auto;


    .container {
        width: 400px;
        height: 400px;
        margin: 50px auto;

        .row {
            span {
                display: inline-block;
                width: 200px;
                height: 200px;
                text-align: center;
                border: 1px solid rgba(0, 0, 0, 0.829);
                border-radius: 20px;
                line-height: 200px;
                box-sizing: border-box;
            }
        }
    }
}
</style>