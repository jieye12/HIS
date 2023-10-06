<template>
    <div class="all">
        <div class="main">
            <div class="description">
                <div class="top">
                    此处仅展示尚未缴费的账单
                </div>
                <div class="buttom">
                    如需查看所有账单，请前往
                    <router-link to="/my_bill">我的账单</router-link>
                </div>
            </div>
            <div class="cards">
                <el-card>
                    <!-- 缴费单信息 -->
                    <h2>缴费单信息</h2>
                    <div class="payment-details">
                        <p><span><strong>缴费单ID:</strong></span><span>{{ payment.id }}
                            </span></p>
                        <p>
                            <span>
                                <strong>缴费类型:</strong>
                            </span>
                            <span>
                                {{ payment.type }}
                            </span>
                        </p>
                        <p>
                            <span>
                                <strong>费用产生日期:</strong>
                            </span>
                            <span>
                                {{ payment.date }}
                            </span>
                        </p>
                        <p>
                            <span>
                                <strong>费用来源:</strong>
                            </span>
                            <span>
                                {{ payment.hospital }}
                            </span>

                        </p>
                    </div>

                    <!-- 缴费金额 -->
                    <h2>缴费金额</h2>
                    <div class="payment-amount">
                        <p>
                            <span>
                                <strong>缴费金额：</strong>
                            </span>
                            <span>
                                {{ payment.amount }}
                            </span>
                        </p>
                    </div>

                    <!-- 缴费方式 -->
                    <h2>缴费方式</h2>
                    <div class="payment-methods">
                        <el-radio-group v-model="paymentMethod">
                            <el-radio label="现金">现金</el-radio>
                            <el-radio label="银行卡">银行卡</el-radio>
                            <el-radio label="支付宝">支付宝</el-radio>
                            <el-radio label="微信支付">微信支付</el-radio>
                        </el-radio-group>
                    </div>

                    <!-- 提交缴费 -->
                    <el-button type="primary" @click="submitPayment">提交缴费</el-button>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 缴费单信息
const payment = ref({
    id: '123456',
    type: '门诊费用',
    date: '2023-10-06',
    hospital: '医药费+病房续费',
    amount: 100.00, // 缴费金额直接展示
});

// 缴费方式
const paymentMethod = ref('现金');

// 提交缴费
const submitPayment = () => {
    // 执行缴费逻辑，可以发送请求到后端进行缴费操作
    // 在这里只简单打印缴费信息
    console.log('缴费单ID:', payment.id);
    console.log('缴费金额:', payment.amount);
    console.log('缴费方式:', paymentMethod.value);
}
</script>

<style lang="scss" scoped>
.main {
    width: 50%;
    margin: 10px auto;

    .description {
        height: 80px;

        .top {
            text-align: center;
            font-size: 20px;
            font-weight: 700;
        }

        .buttom {
            text-align: right;
            font-size: 15px;
            // color: red;
        }
    }

    .cards {
        padding: 0 10px;

        .el-card {
            width: 80%;
            margin: 10px auto;
            box-sizing: border-box;
            padding: 0 20px;
            text-align: center;

            h2 {
                margin: 20px 0;
            }

            p {
                margin: 10px 0 10px -120px;

                span {
                    display: inline-block;
                    width: 200px;
                    text-align: right;
                    font-weight: 700;
                    color: cornflowerblue;
                }
            }

            .el-button {
                margin: 20px 0;
            }
        }
    }
}

a {
    color: red;
}
</style>