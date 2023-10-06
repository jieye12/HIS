<template>
    <div class="all">
        <el-card>
            <div class="main">
                <h2>我的账单</h2>
                <el-table :data="billList" style="width: 100%" border>
                    <el-table-column prop="startDate" label="账单产生日期" align="center"></el-table-column>
                    <el-table-column prop="description" label="描述" align="center"></el-table-column>
                    <el-table-column prop="amount" label="金额" align="center"></el-table-column>
                    <el-table-column prop="date" label="缴费日期" align="center"></el-table-column>
                    <el-table-column prop="state" label="账单状态" align="center">
                        <template #default="{ row }">
                            <div class="a" v-if="row.state === false">
                                <span><el-button type="primary" style="width:45%;margin-right: 3px;">确定</el-button></span>
                                <span><el-button type="danger"
                                        style="width:45%;text-align: center;">存在疑问？</el-button></span>
                            </div>
                            <div class="b" v-else><el-button>已确认</el-button></div>
                        </template>
                    </el-table-column>

                </el-table>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const billList = ref([
    { startDate: "2023-01-01", date: '2023-01-01', description: '检查费用', amount: 100, state: true },
    { startDate: "2023-01-01", date: '2023-01-05', description: '药品费用', amount: 50, state: true },
    { startDate: "2023-01-01", date: '2023-01-10', description: '手术费用', amount: 500, state: true },
    { startDate: "2023-01-20", date: '2023-01-20', description: '手术费用', amount: 800, state: false },
]);
</script>

<style lang="scss" scoped>
.el-card {
    width: 60%;
    margin: 20px auto;
}

.main {
    h2 {
        text-align: center;
        margin-bottom: 50px;
    }

    .el-table {
        .el-table-column {
            border: 1px solid #000000;

            span {
                .el-button {
                    display: inline-block;
                    text-align: center;
                }
            }
        }
    }
}
</style>