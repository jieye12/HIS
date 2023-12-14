<template>
    <header>
        <h2>医信网系统</h2>
        <div class="context">
            <img src="../../assets//images/avatar.jpg" alt="">
            <span v-if="isAdmin" title="记得完善个人信息">13525164584</span>
            <span v-else>jieye</span>
            <span><el-button @click="logout()">退出登录</el-button></span>
        </div>
        <div class="clear"></div>
    </header>
    <div class="main">
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
let $router = useRouter()
const isAdmin = ref(true)
const logout = () => {
    localStorage.removeItem("cookie")
    localStorage.removeItem("userId")
    localStorage.removeItem("username")
    $router.push("/")
}
</script>

<style lang="scss" scoped>
header {
    width: 100%;
    height: $nav_height;
    line-height: $nav_height;
    box-sizing: border-box;
    padding: 0 100px;
    background-color: #000000;
    color: #ffffff;

    h2 {
        float: left;
        width: 200px;
        height: 100%;
        font-size: 20px;
        font-style: italic;
        letter-spacing: 0.1em;
    }

    .context {
        float: right;
        width: 300px;
        height: 70px;
        line-height: 0;

        img {
            display: inline-block;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin: 10px;
            vertical-align: middle;
        }

        span {
            display: inline-block;
            width: 100px;
            height: 70px;
            margin-right: 10px;
        }

        .el-button {
            color: red;
            background-color: aqua;
        }
    }
}
</style>