<template>
    <div class="all">
        <div class="cards">
            <el-card shadow="always">
                <el-table :data="tableData" :table-layout="tableLayout" border>
                    <el-table-column class="fw" prop="option" label="Date" align="center" />
                    <el-table-column class="cl" prop="value" label="Value" align="center" />
                </el-table>
            </el-card>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tableLayout = ref('fixed')

const tableData = [
    {
        option: "姓名",
        value: "admin"
    },
    {
        option: "性别",
        value: "男"
    }, {
        option: "门诊日期",
        value: "2023-10-01"
    }, {
        option: "门诊类别",
        value: "皮肤科",
    },
    {
        option: "门诊医师",
        value: "老王",
    },
    {
        option: "诊断结果",
        value: "皮肤正常",
    },
    {
        option: "治疗方案",
        value: "无"
    }
]
</script>

<style lang="scss" scoped>
.cards {
    width: 50%;
    margin: 0 auto;

    .el-card {
        margin: 10px;

        .fw {
            font-weight: 700;
        }

        .cl {
            color: red;
        }
    }
}
</style>