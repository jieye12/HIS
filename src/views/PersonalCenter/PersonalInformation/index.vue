<template>
    <div class="all">
        <el-card>
            <div class="main">
                <h2>个人信息</h2>
                <el-form :model="profileForm" :rules="formRules" ref="form" label-width="120px">
                    <el-form-item label="姓名" prop="realName">
                        <el-input v-model="profileForm.realName" :disabled="!isEditing"></el-input>
                    </el-form-item>
                    <el-form-item label="性别" prop="gender">
                        <el-radio-group v-model="profileForm.sex" :disabled="!isEditing">
                            <el-radio label="男">男</el-radio>
                            <el-radio label="女">女</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="年龄" prop="age">
                        <el-input-number v-model="profileForm.age" :min="0" :disabled="!isEditing"></el-input-number>
                    </el-form-item>
                    <el-form-item label="电话号码" prop="phone">
                        <el-input v-model="profileForm.phone" :disabled="!isEditing"></el-input>
                    </el-form-item>
                    <el-form-item label="地址" prop="address">
                        <el-input v-model="profileForm.address" :disabled="!isEditing"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <template v-if="isEditing">
                            <el-button type="primary" @click="saveForm">保存</el-button>
                            <el-button @click="cancelEdit">取消</el-button>
                        </template>
                        <template v-else>
                            <el-button type="primary" @click="startEdit">修改</el-button>
                        </template>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { reqGetPersonInfo, reqUpdatePersonInfo } from '../../../api/user/index'
import { ElMessage } from 'element-plus';
onMounted(async () => {
    const res = await reqGetPersonInfo(window.localStorage.getItem("userId"))
    console.log(res);
    profileForm.value = res.data
})
const form = ref(null);
const isEditing = ref(false);

const profileForm = ref({
    // userId: window.localStorage.getItem("userId"),
    // realName: '张三',
    // sex: '男',
    // age: 30,
    // phone: '1234567890',
    // address: '北京市',
});

const formRules = {
    name: [
        { required: true, message: '请填写姓名', trigger: 'blur' },
    ],
    sex: [
        { required: true, message: '请选择性别', trigger: 'change' },
    ],
    age: [
        { required: true, message: '请填写年龄', trigger: 'blur' },
        { type: 'number', message: '年龄必须为数字', trigger: 'blur' },
    ],
    phone: [
        { required: true, message: '请填写电话号码', trigger: 'blur' },
    ],
    address: [
        { required: true, message: '请填写地址', trigger: 'blur' },
    ],
};

const startEdit = () => {
    isEditing.value = true;

};

const cancelEdit = async () => {
    isEditing.value = false;
    const res = await reqGetPersonInfo(window.localStorage.getItem("userId"))
    console.log(res);
    profileForm.value = res.data
    form.value.resetFields();
};

const saveForm = () => {
    form.value.validate(async (valid) => {
        if (valid) {
            const res = await reqUpdatePersonInfo(profileForm.value)
            console.log(res);
            if (res.code === '0') {
                ElMessage({
                    message: "保存成功",
                    type: "success"
                })
            }
            else {
                ElMessage({
                    message: "保存失败",
                    type: "error"
                })
            }
            isEditing.value = false;
        }
    });
};
</script>

<style lang="scss" scoped>
.el-card {
    width: 50%;
    margin: 10px auto;
}

.main {

    h2 {
        text-align: center;
        margin-bottom: 20px;
    }

    .el-form {
        max-width: 600px;
        margin: auto;
    }
}
</style>