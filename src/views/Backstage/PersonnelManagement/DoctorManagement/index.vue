<style lang="scss" scoped></style>
<template>
    <div>
        <el-card style="height: 80px;margin-bottom:20px;">
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
        <el-card style="padding: 0 0 10px 20px;box-sizing: border-box;">
            <h2 style="text-align: center; margin:20px;">医生管理</h2>
            <el-button type="primary" size="default" @click="addDoctor" style="margin:10px;">添加医生</el-button>
            <el-table :data="doctorList" border>
                <el-table-column prop="id" label="id" align="center"></el-table-column>
                <el-table-column prop="name" label="姓名" align="center"></el-table-column>
                <el-table-column prop="age" label="年龄" align="center"></el-table-column>
                <el-table-column prop="gender" label="性别" align="center"></el-table-column>
                <el-table-column prop="department" label="科室" align="center"></el-table-column>
                <el-table-column prop="job" label="职称" align="center"></el-table-column>
                <el-table-column prop="contact" label="联系方式" align="center"></el-table-column>
                <el-table-column prop="details" label="详情" align="center"></el-table-column>

                <el-table-column label="操作" align="center">
                    <template #default="{ row }">
                        <el-button type="primary" size="small" @click="editDoctor(row)">编辑</el-button>
                        <el-button type="primary" @click="deleteDoctor(row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination :pager-count="9" v-model:current-page="pageNo" v-model:page-size="limit"
                :page-sizes="[3, 5, 7, 9]" :background="true" layout="prev, pager, next, jumper,->,sizes,total"
                :total="total" style="margin:10px 0;" />

            <el-dialog title="医生详情" v-model="dialogVisible">
                <el-form :model="form" label-width="80px" ref="formRef" :rules="rules">
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="年龄" prop="age">
                        <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
                    </el-form-item>
                    <el-form-item label="性别" prop="gender">
                        <el-input v-model="form.gender" placeholder="请输入性别"></el-input>
                    </el-form-item>
                    <el-form-item label="科室" prop="department">
                        <el-input v-model="form.department" placeholder="请输入科室"></el-input>
                    </el-form-item>
                    <el-form-item label="职称" prop="job">
                        <el-input v-model="form.job" placeholder="请输入职称"></el-input>
                    </el-form-item>
                    <el-form-item label="联系方式" prop="contact">
                        <el-input v-model="form.contact" placeholder="请输入联系方式"></el-input>
                    </el-form-item>
                    <el-form-item label="详情" prop="details">
                        <el-input v-model="form.details" placeholder="请输入其它信息"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="saveDoctor">保存</el-button>
                </div>
            </el-dialog>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, nextTick } from 'vue';
import { ElMessageBox } from 'element-plus';

const doctorList = ref([
    { id: 1, name: "张三", age: 40, gender: "男", department: "儿科", contact: "13525164584", details: "暂无", job: "主任" },
    { id: 1, name: "张三", age: 40, gender: "男", department: "儿科", contact: "13525164584", details: "暂无", job: "主任" },
    { id: 1, name: "张三", age: 40, gender: "男", department: "儿科", contact: "13525164584", details: "暂无", job: "主任" },
    { id: 1, name: "张三", age: 40, gender: "男", department: "儿科", contact: "13525164584", details: "暂无", job: "主任" },
    { id: 1, name: "张三", age: 40, gender: "男", department: "儿科", contact: "13525164584", details: "暂无", job: "主任" },
    { id: 1, name: "张三", age: 40, gender: "男", department: "儿科", contact: "13525164584", details: "暂无", job: "主任" },
]);
const keyword = ref('')
const dialogVisible = ref(false);
const formRef = ref()
const form = reactive({
    name: "",
    age: "",
    gender: "",
    department: "",
    job: "",
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
    name: [
        { required: true, message: '请输入排班时间', trigger: 'blur' },
    ],
    age: [
        { required: true, message: '请输入排班时间', trigger: 'blur' },
    ],
    gender: [
        { required: true, message: '请输入班次', trigger: 'blur' },
    ],
    department: [
        { required: true, message: '请输入医生', trigger: 'blur' },
    ],
    job: [
        { required: true, message: '请输入科室', trigger: 'blur' },
    ],
    contact: [
        { required: true, message: '请输入科室', trigger: 'blur' },
    ],
    details: [
        { required: true, message: '请输入科室', trigger: 'blur' },
    ],
}
const dialogTitle = ref('')
const addDoctor = () => {
    dialogVisible.value = true;
    dialogTitle.value = '新增医生';
    Object.assign(form, {
        name: '',
        age: "",
        gender: "",
        department: "",
        job: "",
        contact: '',
        details: ""
    })
    nextTick(() => {
        formRef.value.clearValidate('name');
        formRef.value.clearValidate('age');
        formRef.value.clearValidate('gender');
        formRef.value.clearValidate('department');
        formRef.value.clearValidate('job');
        formRef.value.clearValidate('contact');
        formRef.value.clearValidate('details');
    });
}

const editDoctor = (doctor: any) => {
    dialogVisible.value = true;
    Object.assign(form, doctor)
    nextTick(() => {
        formRef.value.clearValidate('name');
        formRef.value.clearValidate('age');
        formRef.value.clearValidate('gender');
        formRef.value.clearValidate('department');
        formRef.value.clearValidate('job');
        formRef.value.clearValidate('contact');
        formRef.value.clearValidate('details');
    });
}

const saveDoctor = async () => {
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
const deleteDoctor = (doctor: any) => {
    ElMessageBox.confirm('确定删除该医生的信息？', '提示', { type: 'warning' })
        .then(() => {
            const index = doctorList.value.indexOf(doctor);
            doctorList.value.splice(index, 1);
            total.value = doctorList.value.length;
        })
        .catch(() => { });
}
</script>

<style lang="scss" scoped>
h2 {
    margin-top: 20px;
}

.dialog-footer {
    text-align: right;
}

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