<template>
    <div class="all">
        <div class="description">
            <div class="top">
                此处仅进行住院申请
            </div>
            <div class="buttom">
                如需查看所有账单，请前往
                <router-link to="/my_hospitalization">我的住院</router-link>
            </div>
        </div>
        <el-card>
            <div class="main">
                <h1>住院申请</h1>
                <div class="context">
                    <el-form label-width="100px" :model="formDate" ref="form" :rules="formRules">
                        <el-form-item label="姓名" prop="name">
                            <el-input placeholder=" 请输入住院者姓名" v-model="formDate.name"></el-input>
                        </el-form-item>
                        <el-form-item label="性别" prop="gender">
                            <el-radio-group v-model="formDate.gender" class="ml-4">
                                <el-radio label="1" size="large">男</el-radio>
                                <el-radio label="2" size="large">女</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="病房类型" prop="type">
                            <el-cascader :options="options" clearable v-model="formDate.type" />
                        </el-form-item>
                        <el-form-item label="住院日期" prop="time">
                            <div class="block">
                                <el-date-picker v-model="formDate.time" type="daterange" range-separator="To"
                                    start-placeholder="Start date" end-placeholder="End date" />
                            </div>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="danger" @click="submitForm">提交住院申请</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { reqGetHospitalApplication } from '../../../api/medicalservice/index'
const form = ref(null)
const formDate = ref({
    name: "",
    gender: "",
    type: [],
    time: null,
})
const options = [
    {
        value: 'guide',
        label: 'Guide',
    },
    {
        value: 'resource',
        label: 'Resource',
    },
]
const formRules = {
    name: [
        { required: true, message: '请输入姓名', trigger: 'blur' },
    ],
    gender: [
        { required: true, message: '请选择性别', trigger: 'blur' },
    ],
    type: [{ required: true, message: '请选择病房类型', trigger: 'blur' },],
    time: [{ required: true, message: '请选择住院时间', trigger: 'blur' },]
};
const submitForm = () => {
    form.value.validate(async (valid) => {
        if (valid) {
            const res = await reqGetHospitalApplication({
                userId: localStorage.getItem("userId"),
                department: "皮肤科",
                doctorId: 1,
                admissionTime: "2023-12-13",
                dischargeTime: "2023-12-20",
                hospitalizationDetails: "该患者患皮肤科疾病，请求住院",
            })
            console.log(res);
            if (res.code === '0') {
                alert("预约成功")
            }
        }
    })
}
</script>

<style lang="scss" scoped>
.description {
    width: 40%;
    margin: 10px auto;
    height: 80px;

    .top {
        text-align: center;
        font-size: 20px;
        font-weight: 700;
    }

    .buttom {
        text-align: right;
        font-size: 15px;
        // color: red;
    }
}

a {
    color: red;
}

.el-card {
    width: 40%;
    margin: 10px auto;

    .main {
        width: 40vw;
        margin: 10px auto;

        h1 {
            text-align: center;
            margin: 20px;
        }

        .el-input {
            width: 400px;
        }

        .el-button {
            margin: 20px 0 20px 400px;
        }
    }
}
</style>