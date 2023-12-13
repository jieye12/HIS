<template>
    <div>
        <el-card style="margin-bottom:10px;">
            <el-form :inline="true">
                <el-form-item label="科室">
                    <el-select :disabled="scene === 0 ? false : true" v-model="selectedDepartment">
                        <el-option v-for="(c1, index) in c1Arr" :value="c1"></el-option>
                    </el-select>
                    <el-date-picker v-model="selectedDate" type="date" placeholder="选择日期"
                        :picker-options="pickerOptions"></el-date-picker>
                    <el-button type="primary" @click="search" :disabled="sd ? true : false">搜索</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card>
            <h2 style="text-align: center;">预约管理</h2>
            <el-button type="primary" @click="addAppointment" style="margin:0 0 20px 10px;">新增预约</el-button>
            <el-table :data="appointmentList" border>
                <el-table-column prop="id" label="id" align="center"></el-table-column>
                <el-table-column prop="realName" label="患者姓名" align="center"></el-table-column>
                <el-table-column prop="doctorId" label="医生姓名" align="center"></el-table-column>
                <el-table-column prop="departmentId" label="科室" align="center"></el-table-column>
                <!-- <el-table-column prop="date" label="预约日期" align="center"></el-table-column> -->
                <el-table-column prop="time" label="预约时间" align="center"></el-table-column>
            </el-table>
            <el-pagination @size-change="sizeChange" @current-change="getHasTrademark" :pager-count="9"
                v-model:current-page="pageNo" v-model:page-size="limit" :page-sizes="[3, 5, 7, 9]" :background="true"
                layout="prev, pager, next, jumper,->,sizes,total" :total="total" style="margin:10px 0;" />

            <el-dialog title="预约详情" v-model="dialogVisible">
                <el-form :model="form" label-width="80px" ref="formRef" :rules="rules">
                    <el-form-item label="患者姓名" prop="realName">
                        <el-input v-model="form.realName" placeholder="请输入患者姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="医生姓名" prop="doctorId">
                        <el-input v-model="form.doctorId" placeholder="请输入医生姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="科室" prop="departmentId">
                        <el-input v-model="form.departmentId" placeholder="请输入科室名称"></el-input>
                    </el-form-item>
                    <el-form-item label="预约时间" prop="time">
                        <el-time-picker v-model="form.time" placeholder="请选择预约时间"></el-time-picker>
                    </el-form-item>
                </el-form>
                <template #footer class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="saveAppointment">保存</el-button>
                </template>
            </el-dialog>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, nextTick, watch, onMounted } from 'vue';
import { reqGetAppointment } from '../../../../api/backstage/index'
onMounted(async () => {
    const res = await reqGetAppointment()
    console.log(res);
    appointmentList.value = res.data
})
const c1Arr = ["内科", "外科", "儿科"]
const c2 = []
const c3 = []
const appointmentList = ref([
    { id: 1, patientName: '张三', doctorName: '李医生', department: '内科', date: '2023-10-01', time: '09:00' },
    { id: 2, patientName: '李四', doctorName: '王医生', department: '外科', date: '2023-10-02', time: '14:30' },
    { id: 3, patientName: '王五', doctorName: '赵医生', department: '儿科', date: '2023-10-03', time: '10:45' }
]);
const selectedDepartment = ref('')
const selectedDate = ref('')
const sd = ref(true)
const scene = ref(0);
const dialogVisible = ref(false);
const formRef = ref()
const form = reactive({
    realName: '',
    doctorId: '',
    departmentId: '',
    time: null
});
const rules = {
    patientName: [
        { required: true, message: '请输入患者姓名', trigger: 'blur' },
    ],
    doctorName: [
        { required: true, message: '请输入医生姓名', trigger: 'blur' },
    ],
    department: [
        { required: true, message: '请输入科室', trigger: 'blur' },
    ],
    date: [
        { required: true, message: '请输入预约日期', trigger: 'blur' },
    ],
    time: [
        { required: true, message: '请输入预约时间', trigger: 'blur' },
    ]
}
let currentAppointment = null;
const pageSize = 10; // 每页显示的记录数
const total = ref(0); // 总记录数
const currentPage = ref(1); // 当前页码
const limit = ref(10)
const addAppointment = () => {
    dialogVisible.value = true;
    currentAppointment = null;
    Object.assign(form, {
        realName: '',
        doctorId: '',
        departmentId: '',
        time: ''
    })
    nextTick(() => {
        formRef.value.clearValidate('realName');
        formRef.value.clearValidate('doctorId');
        formRef.value.clearValidate('departmentId');
        formRef.value.clearValidate('time');
    });
}


const saveAppointment = async () => {
    await formRef.value.validate()
    if (currentAppointment) {
        // 编辑预约
        currentAppointment.patientName = form.realName;
        currentAppointment.doctorName = form.doctorId;
        currentAppointment.department = form.departmentId;
        currentAppointment.time = form.time;
    } else {
        // 新增预约
        const newAppointment = {
            patientName: form.realName,
            doctorName: form.doctorId,
            department: form.departmentId,
            time: form.time
        };
        appointmentList.value.push(newAppointment);
    }
    dialogVisible.value = false;
}


watch([selectedDepartment, selectedDate], ([department, date]) => {
    sd.value = !(department != '' && date != '')
})
</script>

<style lang="scss" scoped></style>