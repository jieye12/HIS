<template>
    <div class="main">
        <el-card>
            <el-form :model="formDate" ref="form" label-width="100px" class="health-questionnaire">
                <el-form-item label="姓名" prop="name" :rules="nameRules">
                    <el-input v-model="formDate.name"></el-input>
                </el-form-item>
                <el-form-item label="年龄" prop="age" :rules="ageRules">
                    <el-input-number v-model="formDate.age" :min="0"></el-input-number>
                </el-form-item>
                <el-form-item label="身高" prop="height" :rules="heightRules">
                    <el-input-number v-model="formDate.height" :min="0"></el-input-number>
                </el-form-item>
                <el-form-item label="体重" prop="weight" :rules="weightRules">
                    <el-input-number v-model="formDate.weight" :min="0"></el-input-number>
                </el-form-item>
                <el-form-item label="是否吸烟" prop="smoking" :rules="smokingRules">
                    <el-radio-group v-model="formDate.smoking">
                        <el-radio label="yes">是</el-radio>
                        <el-radio label="no">否</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm">提交</el-button>
                    <el-button @click="resetForm">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const form = ref(null)
const formDate = ref({
    name: '',
    age: null,
    height: null,
    weight: null,
    smoking: ''
});

const nameRules = [
    { required: true, message: '请输入姓名', trigger: 'blur' }
];

const ageRules = [
    { required: true, message: '请输入年龄', trigger: 'blur' },
    { type: 'number', min: 0, message: '年龄必须为非负数', trigger: 'blur' }
];

const heightRules = [
    { required: true, message: '请输入身高', trigger: 'blur' },
    { type: 'number', min: 0, message: '身高必须为非负数', trigger: 'blur' }
];

const weightRules = [
    { required: true, message: '请输入体重', trigger: 'blur' },
    { type: 'number', min: 0, message: '体重必须为非负数', trigger: 'blur' }
];

const smokingRules = [
    { required: true, message: '请选择是否吸烟', trigger: 'change' }
];

const submitForm = () => {
    form.value.validate((valid) => {
        if (valid) {
            // 表单验证通过，执行提交逻辑
            console.log('提交表单', form.value);
        } else {
            // 表单验证不通过，进行错误处理
            console.log('表单验证不通过');
        }
    });
};

const resetForm = () => {
    const formRef = $refs.formDate;
    if (formRef) {
        formRef.resetFields();
    }
};
</script>

<style lang="scss" scoped>
.main {
    width: 500px;
    margin: 10px auto;

    .health-questionnaire {
        max-width: 400px;
        margin: 0 auto;
    }
}
</style>