<template>
    <div class="main">
        <div class="health-checkup">
            <h1>常规体检项目</h1>
            <el-row>
                <el-card class="project-card" v-for="project in projects" :key="project.id">
                    <div slot="header" class="project-header">
                        <h2>{{ project.name }}</h2>
                    </div>
                    <h3>检查目的：</h3>
                    <p>
                        {{ project.description }}
                    </p>
                    <div class="project-body">
                        <p style="margin-left: 10px;"><span>适用人群:</span> <span class="cred">
                                {{ project.applicableTo }}
                            </span></p>
                        <p class="project-price" style="margin-left: 10px;"><span>价格:</span><span class="cred"> {{
                            project.price }} 元</span></p>
                    </div>
                </el-card>
            </el-row>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const projects = ref([
    {
        id: 1,
        name: '视力检查',
        description: '进行视力测试，包括远视力和近视力测试，以确保具备良好的视力。',
        price: 100,
        applicableTo: '所有人群'
    },
    {
        id: 2,
        name: '听力检查',
        description: '进行听力测试，以确保具备正常的听力功能，包括是否有听力损失或者听力障碍',
        price: 200,
        applicableTo: '所有人群'
    },
    {
        id: 3,
        name: '心肺功能',
        description: '进行心肺功能测试，如静息心率、血压测量等，以评估心血管健康状况。',
        price: 150,
        applicableTo: '所有人'
    }
]);
</script>

<style lang="scss" scoped>
.main {
    width: 50%;
    margin: 10px auto;

    .health-checkup {
        max-width: 600px;
        margin: 0 auto;

        .el-card {
            width: 100%;
            height: 220px;
            margin-bottom: 10px;
        }

        h1,
        h2 {
            text-align: center;
            margin: 10px;
        }

        h3 {
            margin: 10px;
        }


        p {
            font-size: 16px;
            margin-left: 50px;

            span {
                display: inline-block;
                margin: 2px;
                width: 100px;
                color: cornflowerblue;
            }

            .cred {
                display: inline-block;
                text-align: center;
                margin-left: 50px;
                color: red;
            }
        }
    }
}
</style>