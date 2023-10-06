<template>
    <div class="all">
        <div class="main">
            <el-card>
                <el-form :model="form" ref="form" label-width="100px" class="appointment-form" :rules="formRules">
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="性别" prop="gender">
                        <el-radio-group v-model="form.gender">
                            <el-radio label="male">男</el-radio>
                            <el-radio label="female">女</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="手机号码" prop="phone">
                        <el-input v-model="form.phone"></el-input>
                    </el-form-item>
                    <el-form-item label="体检项目" prop="examination">
                        <el-checkbox-group v-model="form.examination">
                            <el-checkbox label="视力"></el-checkbox>
                            <el-checkbox label="听力"></el-checkbox>
                            <el-checkbox label="心肺功能"></el-checkbox>
                            <el-checkbox label="血常规"></el-checkbox>
                            <el-checkbox label="尿常规"></el-checkbox>
                            <el-checkbox label="肝功能"></el-checkbox>
                            <el-checkbox label="心电图"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm">提交</el-button>
                        <el-button @click="resetForm">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const form = ref({
    name: '',
    gender: '',
    phone: '',
    examination: []
});
const formRules = {
    name: [
        { required: true, message: '请输入姓名', trigger: 'blur' },
    ],
    gender: [
        { required: true, message: '请选择性别', trigger: 'blur' },
    ],
    phone: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        { pattern: /^1\d{10}$/, message: '手机号格式不正确', trigger: 'blur' }
    ],
    examination: [
        { required: true, message: '请选择体检项目', trigger: 'blur' }
    ]
};
const submitForm = () => {
    form.value.validate((valid) => {
        if (valid) {
            console.log(loginForm.value);
        }
    });
};

const resetForm = () => {
    // 重置表单
    const formRef = ref.value;
    if (formRef) {
        formRef.resetFields();
    }
}
</script>

<style lang="scss" scoped>
.main {
    width: 50%;
    margin: 50px auto;

    .el-card {
        width: 500px;
        margin: 0 auto;
        padding: 50px 0;
    }

    .appointment-form {
        max-width: 400px;
        margin: 0 auto;
    }
}
</style>