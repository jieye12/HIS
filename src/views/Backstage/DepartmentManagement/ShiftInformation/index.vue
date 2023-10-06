<template>
    <div>
        <el-card style="margin-bottom:10px;">
            <el-date-picker v-model="selectedDate" type="date" placeholder="选择日期"
                :picker-options="pickerOptions"></el-date-picker>
            <el-button type="primary" @click="search">搜索</el-button>
        </el-card>
        <el-card style="padding: 0 0 10px 20px;">
            <h2 style="text-align: center;">医生排班管理</h2>
            <el-button type="primary" icon="el-icon-plus" @click="addSchedule"
                style="margin:0 0 20px 10px;">新增排班</el-button>
            <el-table :data="scheduleList" border>
                <el-table-column prop="id" label="id" align="center"></el-table-column>
                <el-table-column prop="date" label="日期" align="center"></el-table-column>
                <el-table-column prop="shift" label="班次" align="center"></el-table-column>
                <el-table-column prop="doctor" label="医生" align="center"></el-table-column>
                <el-table-column prop="department" label="科室" align="center"></el-table-column>
                <el-table-column label="操作" align="center">
                    <template #default="{ row }">
                        <el-button type="primary" size="small" @click="editSchedule(row)">编辑</el-button>
                        <el-button type="primary" size="small" @click="deleteSchedule(row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination @size-change="sizeChange" @current-change="getHasTrademark" :pager-count="9"
                v-model:current-page="pageNo" v-model:page-size="limit" :page-sizes="[3, 5, 7, 9]" :background="true"
                layout="prev, pager, next, jumper,->,sizes,total" :total="total" style="margin:10px 0;" />

            <el-dialog title="排班详情" v-model="dialogVisible">
                <el-form :model="form" label-width="80px" ref="formRef" :rules="rules">
                    <el-form-item label="日期" prop="date">
                        <el-date-picker v-model="form.date" type="date" placeholder="请选择日期"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="班次" prop="shift">
                        <el-input v-model="form.shift" placeholder="请输入班次"></el-input>
                    </el-form-item>
                    <el-form-item label="医生" prop="doctor">
                        <el-input v-model="form.doctor" placeholder="请输入医生姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="科室" prop="department">
                        <el-input v-model="form.department" placeholder="请输入科室名称"></el-input>
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

const scheduleList = ref([
    { id: 1, date: '2023-10-01', shift: '早班', doctor: '张三', department: '内科' },
    { id: 2, date: '2023-10-02', shift: '中班', doctor: '李四', department: '外科' },
    { id: 3, date: '2023-10-03', shift: '晚班', doctor: '王五', department: '儿科' }
]);

const dialogVisible = ref(false);
const formRef = ref()
const form = reactive({
    date: '',
    shift: '',
    doctor: '',
    department: ''
});
const pageSize = 10; // 每页显示的记录数
const total = ref(0); // 总记录数
const currentPage = ref(1); // 当前页码
const limit = ref(10)
let currentSchedule = ref();
const rules = {
    date: [
        { required: true, message: '请输入排班时间', trigger: 'blur' },
    ],
    shift: [
        { required: true, message: '请输入班次', trigger: 'blur' },
    ],
    doctor: [
        { required: true, message: '请输入医生', trigger: 'blur' },
    ],
    department: [
        { required: true, message: '请输入科室', trigger: 'blur' },
    ],
}
const dialogTitle = ref('')
const addSchedule = () => {
    dialogVisible.value = true;
    currentSchedule = null;
    dialogTitle.value = '新增排班';
    Object.assign(form, {
        date: '',
        shift: '',
        doctor: '',
        department: '',
    })
    nextTick(() => {
        formRef.value.clearValidate('date');
        formRef.value.clearValidate('shift');
        formRef.value.clearValidate('doctor');
        formRef.value.clearValidate('department');
    });
}

function editSchedule(schedule: any) {
    dialogVisible.value = true;
    currentSchedule = schedule;
    dialogTitle.value = '修改排班';
    Object.assign(form, schedule)
    nextTick(() => {
        formRef.value.clearValidate('date');
        formRef.value.clearValidate('shift');
        formRef.value.clearValidate('doctor');
        formRef.value.clearValidate('department');
    });
}

const saveSchedule = async () => {
    await formRef.value.validate()
    if (currentSchedule) {
        // 编辑排班
        currentSchedule.date = form.date;
        currentSchedule.shift = form.shift;
        currentSchedule.doctor = form.doctor;
        currentSchedule.department = form.department;
    } else {
        // 新增排班
        const newSchedule = {
            date: form.date,
            shift: form.shift,
            doctor: form.doctor,
            department: form.department
        };
        scheduleList.value.push(newSchedule);
    }
    dialogVisible.value = false;
}

const deleteSchedule = (schedule: any) => {
    ElMessageBox.confirm('确定删除该排班？', '提示', { type: 'warning' })
        .then(() => {
            const index = scheduleList.value.indexOf(schedule);
            scheduleList.value.splice(index, 1);
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
</style>