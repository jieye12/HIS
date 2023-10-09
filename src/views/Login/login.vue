<template>
    <div class="container">
        <el-card shadow="always">
            <div class="login_form">
                <h1>医信网系统登录</h1>
                <div class="form">
                    <el-form :model="loginForm" :rules="formRules" ref="form" label-width="100px">
                        <el-form-item label="手机号" prop="phone">
                            <el-input v-model="loginForm.phone" placeholder="请输入手机号"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input v-model="loginForm.password" show-password placeholder="请输入密码"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm" style="margin-left: 20px;">登录</el-button>
                            <el-button @click="register()" style="margin-left: 80px;">前往注册</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'
let $router = useRouter();
const form = ref(null);

const loginForm = ref({
    phone: '',
    password: '',
});

const formRules = {
    phone: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        { pattern: /^1\d{10}$/, message: '手机号格式不正确', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, message: '密码长度不能少于6位', trigger: 'blur' },
        { max: 10, message: '密码长度不能多于10位', trigger: 'blur' }
    ],
};

const submitForm = () => {
    form.value.validate((valid) => {
        if (valid) {
            console.log(loginForm.value);
            alert('登录成功！');
            $router.push("/main")
        }
    });
};
const register = () => {
    $router.push("/register")
}
</script>

<style lang="scss" scoped>
.container {
    position: relative;
    width: 100%;
    height: 100vh;
    background: url(../../assets/images/bg.png);
    background-size: cover;

    .el-card {
        position: absolute;
        top: 25%;
        right: 10%;
        width: 25%;
        height: 35vh;
        min-width: 500px;
        min-height: 300px;

        h1 {
            text-align: center;
            margin: 10px auto 5px;
            letter-spacing: 0.2em;
        }

        .el-form-item {
            margin: 30px 0;
        }

        .el-input {
            width: 90%;
        }
    }
}
</style>