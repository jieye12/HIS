<template>
    <div style="max-height: 100vh;">
        <el-card style=" height: 80px;margin-bottom:20px;">
            <el-form :inline="true" class="form">
                <el-form-item label="用户名:">
                    <el-input placeholder="请你输入搜索用户名" v-model="keyword"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" size="default" :disabled="keyword ? false : true"
                        @click="search">搜索</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card style="max-width: calc(100vw - 320px);">
            <h2 style="text-align: center;">患者管理</h2>
            <el-table :data="patientList" border>
                <el-table-column prop="id" label="id" align="center"></el-table-column>
                <el-table-column prop="name" label="姓名" align="center"></el-table-column>
                <el-table-column prop="age" label="年龄" align="center"></el-table-column>
                <el-table-column prop="gender" label="性别" align="center"></el-table-column>
                <el-table-column prop="description" label="病情" align="center"></el-table-column>
                <el-table-column prop="doctor" label="主治医师" align="center"></el-table-column>
                <el-table-column prop="date" label="诊断时间" align="center"></el-table-column>
                <el-table-column prop="state" label="当前状态" align="center"></el-table-column>
                <el-table-column prop="contact" label="联系方式" align="center"></el-table-column>
                <el-table-column prop="details" label="详情" align="center"></el-table-column>

                <el-table-column label="操作" align="center">
                    <template #default="{ row }">
                        <el-button type="primary" size="small" @click="editSchedule(row)">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination :pager-count="9" v-model:current-page="pageNo" v-model:page-size="limit"
                :page-sizes="[3, 5, 7, 9]" :background="true" layout="prev, pager, next, jumper,->,sizes,total"
                :total="total" style="margin:10px 0;" />

            <el-dialog title="患者详情" v-model="dialogVisible">
                <el-form :model="form" label-width="80px" ref="formRef" :rules="rules">
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="form.name" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="年龄" prop="age">
                        <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
                    </el-form-item>
                    <el-form-item label="性别" prop="gender">
                        <el-input v-model="form.gender" placeholder="请输入性别"></el-input>
                    </el-form-item>
                    <el-form-item label="病情" prop="description">
                        <el-input v-model="form.description" placeholder="请输入病情"></el-input>
                    </el-form-item>
                    <el-form-item label="主治医师" prop="doctor">
                        <el-input v-model="form.doctor" placeholder="请输入主治医师"></el-input>
                    </el-form-item>
                    <el-form-item label="诊断时间" prop="time">
                        <el-date-picker v-model="form.date" type="date" placeholder="请选择日期"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="状态" prop="state">
                        <el-input v-model="form.state" placeholder="请输入患者当前状态"></el-input>
                    </el-form-item>
                    <el-form-item label="联系方式" prop="contact">
                        <el-input v-model="form.contact" placeholder="请输入联系方式"></el-input>
                    </el-form-item>
                    <el-form-item label="详情" prop="description">
                        <el-input v-model="form.details" placeholder="请输入其它信息"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="saveSchedule">保存</el-button>
                </div>
            </el-dialog>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, nextTick } from 'vue';
import { ElMessageBox } from 'element-plus';

const patientList = ref([
    { id: 1, name: "张三", age: 40, gender: "男", description: "右手骨折", doctor: "刘菊", date: "2023-10-01", state: "住院", contact: "13525164584", details: "房间号：5601" },
    { id: 1, name: "张三", age: 40, gender: "男", description: "右手骨折", doctor: "刘菊", date: "2023-10-01", state: "住院", contact: "13525164584", details: "房间号：5601" },
    { id: 1, name: "张三", age: 40, gender: "男", description: "右手骨折", doctor: "刘菊", date: "2023-10-01", state: "住院", contact: "13525164584", details: "房间号：5601" },
    { id: 1, name: "张三", age: 40, gender: "男", description: "右手骨折", doctor: "刘菊", date: "2023-10-01", state: "住院", contact: "13525164584", details: "房间号：5601" },
    { id: 1, name: "张三", age: 40, gender: "男", description: "右手骨折", doctor: "刘菊", date: "2023-10-01", state: "住院", contact: "13525164584", details: "房间号：5601" },
    { id: 1, name: "张三", age: 40, gender: "男", description: "右手骨折", doctor: "刘菊", date: "2023-10-01", state: "住院", contact: "13525164584", details: "房间号：5601" },
]);
const keyword = ref('')
const dialogVisible = ref(false);
const formRef = ref()
const form = reactive({
    name: "",
    age: "",
    gender: "",
    description: "",
    doctor: "",
    date: "",
    state: "",
    contact: "",
    details: ""
});
const search = () => {

}
const pageSize = 10; // 每页显示的记录数
const total = ref(0); // 总记录数
const currentPage = ref(1); // 当前页码
const pageNo = ref()
const limit = ref(10)
let currentSchedule = ref();
const rules = {
    age: [
        { required: true, message: '请输入排班时间', trigger: 'blur' },
    ],
    gender: [
        { required: true, message: '请输入班次', trigger: 'blur' },
    ],
    description: [
        { required: true, message: '请输入医生', trigger: 'blur' },
    ],
    date: [
        { required: true, message: '请输入科室', trigger: 'blur' },
    ],
    state: [
        { required: true, message: '请输入科室', trigger: 'blur' },
    ],
    contact: [
        { required: true, message: '请输入科室', trigger: 'blur' },
    ],
    details: [
        { required: true, message: '请输入科室', trigger: 'blur' },
    ],
    doctor: [
        { required: true, message: '请输入科室', trigger: 'blur' },
    ],
}
const dialogTitle = ref('')

function editSchedule(schedule: any) {
    dialogVisible.value = true;
    currentSchedule = schedule;
    Object.assign(form, schedule)
    nextTick(() => {
        formRef.value.clearValidate('name');
        formRef.value.clearValidate('age');
        formRef.value.clearValidate('gender');
        formRef.value.clearValidate('description');
        formRef.value.clearValidate('doctor');
        formRef.value.clearValidate('date');
        formRef.value.clearValidate('state');
        formRef.value.clearValidate('contact');
        formRef.value.clearValidate('details');
    });
}

const saveSchedule = async () => {
    await formRef.value.validate()
    // if (currentSchedule) {
    //     // 编辑排班
    //     currentSchedule.date = form.date;
    //     currentSchedule.shift = form.shift;
    //     currentSchedule.doctor = form.doctor;
    //     currentSchedule.department = form.department;
    // } else {
    //     // 新增排班
    //     const newSchedule = {
    //         date: form.date,
    //         shift: form.shift,
    //         doctor: form.doctor,
    //         department: form.department
    //     };
    //     scheduleList.value.push(newSchedule);
    // }
    dialogVisible.value = false;
}
</script>

<style lang="scss" scoped>
.form {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.el-dialog {
    padding: 20px;
    width: 500px;

    .form {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>