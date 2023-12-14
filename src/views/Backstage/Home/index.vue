<template>
    <div>
        <el-card>
            <div class="box">
                <img src="../../../assets/images/avatar.jpg" alt="" class="avatar">
                <div class="bottom">
                    <h3 class="title">上午好，{{ realName }}</h3>
                    <p class="subtitle">医信网后台管理平台</p>
                </div>
            </div>
        </el-card>
        <div class="bottoms">
            <svg-icon name="welcome" width="600px" height="300px"></svg-icon>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const realName = ref(localStorage.getItem("realName"))
</script>

<style lang="scss" scoped>
.box {
    display: flex;

    .avatar {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    .bottom {
        margin-left: 20px;

        .title {
            font-size: 30px;
            font-weight: 900;
            margin-bottom: 30px;
        }

        .subtitle {
            font-style: italic;
            color: skyblue;
        }
    }
}

.bottoms {
    margin-top: 10px;
    display: flex;
    justify-content: center;
}
</style>