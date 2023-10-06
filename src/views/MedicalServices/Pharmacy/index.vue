<template>
    <div class="all">
        <el-card>
            <div class="middle">
                <div class="top">
                    <input class="text" type="text" placeholder="请输入要搜索的药品名" name="search" v-model="drugName">
                    <input class="button" type="button" value="搜索" @click="getDrug()">
                    <div class="clear"></div>
                </div>
                <div class="main">
                    <div class="column" v-for="(item, index) in drugs">
                        <h1>{{ item.title }}</h1>
                        <div class="shows" v-for="(drug, index) in item.drugs" @click="turnToDetails(drug)">
                            <img src="../../../assets/images/drug1.webp" alt="">
                            <div class="name">{{ drug.name }}</div>
                            <div class="price">￥{{ drug.price }}</div>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const $router = useRouter()
const drugName = ref("")
const getDrug = () => {
    console.log(name);
}
const drugs = ref([{
    title: "皮肤科用药",
    drugs: [{
        id: 1,
        name: "达霏欣",
        price: "148",
        imgUrl: ""
    }, {
        id: 1,
        name: "达霏欣",
        price: "148",
        imgUrl: ""
    }, {
        id: 1,
        name: "达霏欣",
        price: "148",
        imgUrl: ""
    }, {
        id: 1,
        name: "达霏欣",
        price: "148",
        imgUrl: ""
    }, {
        id: 1,
        name: "达霏欣",
        price: "148",
        imgUrl: ""
    }, {
        id: 1,
        name: "达霏欣",
        price: "148",
        imgUrl: ""
    }, {
        id: 1,
        name: "达霏欣",
        price: "148",
        imgUrl: ""
    }]
}, {
    title: "感冒药",
    drugs: [{
        id: 1,
        name: "999",
        price: 14,
        imgUrl: ""
    }, {
        id: 1,
        name: "999",
        price: 14,
        imgUrl: ""
    }]
}, {
    title: "保健品",
    drugs: [{
        id: 1,
        name: "六位帝皇丸",
        price: 123,
        imgUrl: ""
    }, {
        id: 1,
        name: "六位帝皇丸",
        price: 123,
        imgUrl: ""
    }]
}])
const turnToDetails = () => {
    $router.push("/drug_details")
}
</script>

<style lang="scss" scoped>
.all {
    width: 100%;
    background-color: #e8f3f3;
    padding: 10px;
    box-sizing: border-box;

    .el-card {
        width: 70%;
        margin: 0 auto;

        .middle {
            .top {
                width: 300px;
                margin: 20px auto;

                .text {
                    height: 22px;
                    font-size: 14px;
                    border: 1px solid #ccc;
                    padding: 3px 16px;
                    border-bottom-left-radius: 20px;
                    border-top-left-radius: 20px;
                }

                .text:focus {
                    outline: none;
                    border-color: rgba(82, 168, 236, 0.8);
                    box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
                }

                .button {
                    width: 60px;
                    height: 30px;
                    font-size: 14px;
                    margin-right: 35px;
                    border: 1px solid #608bd2;
                    background-color: #608bd2;
                    border-top-right-radius: 20px;
                    border-bottom-right-radius: 20px;
                }
            }

            .main {
                .column {
                    h1 {
                        margin: 5px;
                    }

                    .shows {
                        float: left;
                        width: 200px;
                        margin: 5px;
                        text-align: center;

                        img {
                            // display: block;
                            width: 200px;
                            height: 200px;
                        }

                        .name {
                            font-size: 15px;
                            line-height: 1.5;
                        }

                        .price {
                            font-size: 16px;
                            color: red;
                        }
                    }
                }
            }
        }
    }
}
</style>