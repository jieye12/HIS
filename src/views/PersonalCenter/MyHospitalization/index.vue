<template>
    <div class="all">
        <div class="main">
            <el-card>
                <h2>我的住院</h2>
                <el-table :data="stayList" style="width: 100%" border>
                    <el-table-column prop="admissionDate" label="入院日期" align="center"></el-table-column>
                    <el-table-column prop="dischargeDate" label="出院日期" align="center"></el-table-column>
                    <el-table-column prop="department" label="科室" align="center"></el-table-column>
                    <el-table-column prop="ward" label="病房号" align="center"></el-table-column>
                    <el-table-column prop="time" label="住院时长" align="center"></el-table-column>
                    <el-table-column prop="doctor" label="主治医生" align="center"></el-table-column>
                    <el-table-column prop="description" label="详情" align="center"></el-table-column>
                </el-table>
            </el-card>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const stayList = ref([
    { admissionDate: '2023-01-01', dischargeDate: '2023-01-05', department: '内科', doctor: '张医生', ward: "3405", time: "4天", description: "身体不舒服" },
    { admissionDate: '2023-02-10', dischargeDate: '2023-02-15', department: '外科', doctor: '李医生', ward: "1203", time: "5天", description: "身体不舒服" },
    { admissionDate: '2023-03-20', dischargeDate: '2023-03-25', department: '儿科', doctor: '王医生', ward: "4412", time: "5天", description: "身体不舒服" },
]);
</script>

<style lang="scss" scoped>
.main {
    width: 50%;
    margin: 10px auto;

    h2 {
        text-align: center;
        margin-bottom: 20px;
    }

    .el-table {
        text-align: center;
    }
}
</style>