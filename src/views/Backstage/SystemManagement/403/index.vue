<template>
    <el-card>
        <div class="left">
            <img src="../../../../assets/images/403.png" alt="">
        </div>
        <div class="right">
            <div class="top">你没有访问权限</div>
            <div class="middle">
                请检查URL地址是否正确，或点击回到首页
            </div>
            <div class="btn">
                <el-button @click="turn()">回到首页</el-button>
            </div>
        </div>
        <div class="clear">
        </div>
    </el-card>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
let $router = useRouter()
const turn = () => {
    $router.push("/home")
}
</script>

<style lang="scss" scoped>
.el-card {
    height: 90vh;
}

.left {
    float: left;
    margin: 100px 0 0 300px;

    img {
        width: 600px;
        height: 600px;
    }
}

.right {
    float: left;
    margin: 300px 0 0 50px;

    .top {
        color: #1482f0;
        font-size: 32px;
        font-weight: 700;
        line-height: 40px;
        margin-bottom: 20px;
    }

    .middle {
        font-size: 13px;
        line-height: 21px;
        color: grey;
        margin: 10px 0;
    }

    .el-button {
        display: block;
        width: 110px;
        height: 36px;
        text-align: center;
        background-color: #1482f0;
        color: #fff;
        border-radius: 100px;
    }
}
</style>