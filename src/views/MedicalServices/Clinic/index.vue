<template>
    <div class="all">
        <div class="cards">
            <el-card v-for="(item, index) in date">
                <div class="top">
                    <div class="id">
                        <span class="attribute">诊断单id:</span>
                        <span class="value">{{ item.id }}</span>
                    </div>
                    <div class="btn" @click="turn(item)">
                        <el-button type="danger">详情</el-button>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="diagnostic">
                    <div class="diagnosticType">
                        <span class="attribute">挂号类型：</span>
                        <span class="value">{{ item.type }}</span>
                    </div>
                    <div class="diagnosticResult">
                        <span class="attribute">诊断结果：</span>
                        <span class="value">{{ item.diagnosticResult }}</span>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="time">
                    <span class="attribute">时间：</span>
                    <span class="value">{{ item.time }}</span>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const $router = useRouter()
const date = ref([{
    id: 1,
    type: "皮肤科",
    time: "2023-10-01",
    diagnosticResult: "身体正常"
}, {
    id: 2,
    type: "皮肤科",
    time: "2023-10-02",
    diagnosticResult: "湿疹",
}, {
    id: 3,
    type: "骨科",
    time: "2023-10-03",
    diagnosticResult: "骨折",
}])
const turn = (item: any) => {
    $router.push("/clinic_details")
}
</script>

<style lang="scss" scoped>
.cards {
    width: 600px;
    margin: 10px auto;
}

.el-card {
    position: relative;
    width: 600px;
    height: 120px;
    margin: 10px 0;
    font-size: 12px;

    .attribute {
        font-weight: bold;
    }

    .value {
        color: green;
    }

    .top {
        .id {
            float: left;
        }

        .btn {
            float: right;

            .el-buttton {
                font-size: 12px;
            }
        }

        .clear {
            clear: both;
        }
    }

    .diagnostic {
        .diagnosticType {
            float: left;
        }

        .diagnosticResult {
            float: left;
            margin-left: 200px;
        }

        .clear {
            clear: both;
        }
    }

    .time {
        position: absolute;
        right: 0;
        margin: 20px;
    }
}
</style>