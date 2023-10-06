<template>
    <div class="all">
        <div class="main">
            <el-card>
                <el-form ref="form" :model="feedbackForm" label-width="120px" :rules="formRules">
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="feedbackForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="就诊科室" prop="department">
                        <el-input v-model="feedbackForm.department"> </el-input>
                    </el-form-item>
                    <el-form-item label=" 反馈内容" prop="content">
                        <el-input type="textarea" v-model="feedbackForm.content"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm">提交反馈</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const form = ref(null);

const feedbackForm = ref({
    name: '',
    department: '',
    content: '',
});
const formRules = ref({
    name: [
        { required: true, message: '请输入姓名', trigger: 'blur' },
    ],
    department: [
        { required: true, message: '请输入就诊科室', trigger: 'blur' }
    ],
    content: [
        { required: true, message: '请输入反馈内容', trigger: 'blur' }
    ]
})
const submitForm = () => {
    form.value.validate((valid) => {
        if (valid) {
            // 表单验证通过，可以执行提交操作
            // 在这里添加你的提交逻辑
            console.log('表单验证通过');
        } else {
            // 表单验证不通过，显示错误信息
            $message.error('请检查表单填写内容');
        }
    });
};
</script>

<style lang="scss" scoped>
.main {
    width: 700px;
    margin: 100px auto;

    .el-form {
        margin: 50px auto;
        max-width: 500px;
    }
}
</style>