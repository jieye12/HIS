<style lang="scss" scoped></style>
<template>
    <div>
        <el-card style="height: 80px;margin-bottom:20px;">
            <el-form :inline="true" class="form">
                <el-form-item label="职位名:">
                    <el-input placeholder="请你输入搜索职位" v-model="keyword"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" size="default" :disabled="keyword ? false : true"
                        @click="search">搜索</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card>
            <h2 style="text-align: center;">权限管理</h2>
            <el-button type="primary" size="default" @click="addJob" style="margin:10px;">添加职位</el-button>
            <el-table :data="jobList" border>
                <el-table-column prop="id" label="id" align="center"></el-table-column>
                <el-table-column prop="job" label="职位" align="center"></el-table-column>
                <el-table-column prop="startTime" label="创建时间" align="center"></el-table-column>
                <el-table-column prop="endTime" label="更新时间" align="center"></el-table-column>
                <el-table-column prop="authority" label="权限" align="center">
                    <template #default="{ row }">
                        <div>用户权限： <el-switch v-model="row.authority[0]" /></div>
                        <div>医生权限： <el-switch v-model="row.authority[1]" /></div>
                        <!-- <div> 管理员权限：<el-switch v-model="row.authority[2]" /></div> -->
                        <!-- <div> 超级管理员权限<el-switch v-model="row.authority[3]" /></div> -->
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template #default="{ row }">
                        <el-button type="primary" size="small" @click="editJob(row)">编辑</el-button>
                        <el-button type="primary" @click="deleteJob(row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination :pager-count="9" v-model:current-page="pageNo" v-model:page-size="limit"
                :page-sizes="[3, 5, 7, 9]" :background="true" layout="prev, pager, next, jumper,->,sizes,total"
                :total="total" style="margin:10px 0;" />

            <el-dialog title="职位详情" v-model="dialogVisible">
                <el-form :model="form" label-width="80px" ref="formRef" :rules="rules">
                    <el-form-item label="姓名" prop="job">
                        <el-input v-model="form.job"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="saveJob">保存</el-button>
                </div>
            </el-dialog>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, nextTick } from 'vue';
import { ElMessageBox } from 'element-plus';

const jobList = ref([
    { id: 1, job: "超级管理员", startTime: "2023-10-01", endTime: "2023-10-02", authority: [true, true, true, true] },
    { id: 2, job: "管理员", startTime: "2023-10-01", endTime: "2023-10-02", authority: [true, true, true, false] },
    // { id: 3, job: "医生", startTime: "2023-10-01", endTime: "2023-10-02", authority: [true, true, false, false] },

]);
const keyword = ref('')
const dialogVisible = ref(false);
const formRef = ref()
const form = reactive({
    job: "",
});
const search = () => {

}
const pageSize = 10; // 每页显示的记录数
const total = ref(0); // 总记录数
const currentPage = ref(1); // 当前页码
const pageNo = ref(1)
const limit = ref(10)
let currentJob = ref();
const rules = {
    job: [
        { required: true, message: '请输入职位名称', trigger: 'blur' },
    ],
}
const dialogTitle = ref('')
const addJob = () => {
    dialogVisible.value = true;
    dialogTitle.value = '新增职位';
    Object.assign(form, {
        job: '',
    })
    nextTick(() => {
        formRef.value.clearValidate('job');
    });
}

function editJob(job: any) {
    dialogVisible.value = true;
    Object.assign(form, job)
    nextTick(() => {
        formRef.value.clearValidate('job');
    });
}

const saveJob = async () => {
    await formRef.value.validate()
    // if (currentJob) {
    //     // 编辑排班
    //     currentJob.job = form.job;
    // } else {
    //     // 新增排班
    //     const newJob = {
    //         date: form.job,
    //     };
    //     jobList.value.push(newJob);
    // }
    dialogVisible.value = false;
}
const deleteJob = (job: any) => {
    ElMessageBox.confirm('确定删除该职位的信息？', '提示', { type: 'warning' })
        .then(() => {
            const index = jobList.value.indexOf(job);
            jobList.value.splice(index, 1);
            total.value = jobList.value.length;
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