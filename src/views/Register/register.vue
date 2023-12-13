<template>
    <div class="container">
        <el-card shadow="always">
            <div class="login_form">
                <h1>医信网系统注册</h1>
                <div class="form">
                    <el-form :model="registerForm" :rules="formRules" ref="form" label-width="100px">
                        <el-form-item label="昵称" prop="username">
                            <el-input v-model="registerForm.username" placeholder="请输入昵称"></el-input>
                        </el-form-item>
                        <el-form-item label="真实姓名" prop="realName">
                            <el-input v-model="registerForm.realName" placeholder="请输入真实姓名"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input v-model="registerForm.password" show-password placeholder="请输入密码"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="confirmPassword">
                            <el-input v-model="registerForm.confirmPassword" show-password placeholder="请确认密码"></el-input>
                        </el-form-item>
                        <el-form-item label="身份证号" prop="idNo">
                            <el-input v-model="registerForm.idNo" placeholder="请输身份证号"></el-input>
                        </el-form-item>
                        <el-form-item label="年龄" prop="age">
                            <el-input v-model="registerForm.age" placeholder="请输入年龄"></el-input>
                        </el-form-item>
                        <el-form-item label="手机号" prop="phone">
                            <el-input v-model="registerForm.phone" placeholder="请输入要注册的手机号"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm"
                                style="margin-left:80px;width:100px;height:40px ">注册</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { reqRegister } from '../../api/user/index'
let $router = useRouter();
const form = ref(null);

const registerForm = ref({
    username: "",
    realName: "",
    password: '',
    confirmPassword: '',
    idNo: "",
    age: "",
    phone: '',
});
const validateConfirmPassword = (rule: any, value: any, callback: any) => {
    if (value !== registerForm.value.password) {
        callback(new Error('两次输入的密码不一致'));
    } else {
        callback();
    }
};
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
    confirmPassword: [
        { required: true, message: '请再次输入密码', trigger: 'blur' },
        { validator: validateConfirmPassword, trigger: 'blur' },
    ],
};


const submitForm = () => {
    form.value.validate(async (valid: any) => {
        if (valid) {
            let res = await reqRegister(registerForm.value)
            console.log(res.value);

            // console.log(registerForm.value);
            alert('注册成功！');
            $router.push("/")
        }
    });
};
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
        top: 15%;
        right: 10%;
        width: 25%;
        height: 55vh;
        min-width: 500px;
        min-height: 300px;

        h1 {
            text-align: center;
            margin: 10px auto 5px;
            letter-spacing: 0.2em;
        }

        .el-form-item {
            margin: 20px 0;
        }

        .el-input {
            width: 90%;
        }
    }
}
</style>