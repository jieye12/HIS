<template>
    <div class="all">
        <div class="main">
            <div class="demo-date-picker">
                <el-date-picker v-model="value" type="date" placeholder="Pick a day" format="YYYY/MM/DD"
                    value-format="YYYY-MM-DD">
                    <template #default="cell">
                        <div class="cell" :class="{ current: cell.isCurrent }">
                            <span class="text">{{ cell.text }}</span>
                            <span v-if="isHoliday(cell)" class="holiday" />
                        </div>
                    </template>
                </el-date-picker>
            </div>
            <div class="doctorsInformation">
                <div class="exit" v-if="exit === true">
                    <div class="doctors" v-for="(item, index) in  doctors ">
                        <div class="left">
                            <img src="../../../../assets/images/doctor.jpg" alt="">
                        </div>
                        <div class="right">
                            <div class="top">
                                <div class="name">
                                    {{ item.name }}
                                </div>
                                <div class="title">
                                    {{ item.title }}
                                </div>
                                <div class="clear"></div>
                            </div>
                            <div class="description">
                                {{ item.description }}
                            </div>
                            <div class="times">
                                <div class="time">
                                    {{ time + " " + item.time }}
                                </div>
                                <div class="btn">
                                    <el-button type="danger" v-if="item.state" @click="reserve(item)" :disabled="flag"> {{
                                        flag === false ? "预约" : "已预约" }}
                                    </el-button>
                                    <el-button disabled v-else> 约满 </el-button>
                                    <div class="clear"></div>
                                </div>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { reqGetAppoint } from '../../../../api/medicalservice/index';
const value = ref('2023-10-09')
const holidays = [
    '2021-10-01',
    '2021-10-02',
    '2021-10-03',
    '2021-10-04',
    '2021-10-05',
    '2021-10-06',
    '2021-10-07',
]

const isHoliday = ({ dayjs }) => {
    return holidays.includes(dayjs.format('YYYY-MM-DD'))
}
const exit = ref(true)
const doctors = ref([{
    name: "老王",
    title: "主治医师",
    description: "医生简介:坚哲，皮肤病与性病学博士、副主任医师、副教授、博士研究生导师，教育部青年长江学者，陕西省中青年科技创新领军人才、美国科罗拉多大学博士后，美国科罗拉多大学皮肤美容中心访问学者。现任中华医学会皮肤性病学分会激光学组委员、注射美容学组副组长，陕西省医师协会皮肤科医师分会委员。从事皮肤科诊疗工作16年，有着丰富的皮肤科临床经验，熟悉各种皮肤激光和注射美容手术，擅长白癫风、黄褐斑等色素性皮肤病和座疮、面部皮炎等皮肤美容的临床诊治。",
    imgUrl: "",
    state: true,
    time: "上午"
}, {
    name: "老王",
    title: "主治医师",
    description: "医生简介:坚哲，皮肤病与性病学博士、副主任医师、副教授、博士研究生导师，教育部青年长江学者，陕西省中青年科技创新领军人才、美国科罗拉多大学博士后，美国科罗拉多大学皮肤美容中心访问学者。现任中华医学会皮肤性病学分会激光学组委员、注射美容学组副组长，陕西省医师协会皮肤科医师分会委员。从事皮肤科诊疗工作16年，有着丰富的皮肤科临床经验，熟悉各种皮肤激光和注射美容手术，擅长白癫风、黄褐斑等色素性皮肤病和座疮、面部皮炎等皮肤美容的临床诊治。",
    imgUrl: "",
    state: true,
    time: "下午"
}])
let currentDate = new Date()
let month: any = currentDate.getMonth() + 1 + ""
month = month < 10 ? "0" + month : month
let day: any = currentDate.getDate() + ""
day = day < 10 ? "0" + day : day
let time = month + "-" + day
const flag = ref(false)
const reserve = async (item: any) => {
    const res = await reqGetAppoint({
        userId: localStorage.getItem("userId"),
        realName: localStorage.getItem("realName"),
        departmentId: 1,
        doctorId: 1,
        time: "2023-12-12",
        result: "等待中",
    })
    console.log(res);

    alert("预约成功")
    flag.value = true
}
</script>

<style lang="scss" scoped>
.main {
    width: 1000px;
    margin: 10px auto;
}

.demo-date-picker {
    margin: 20px 0;
}

.cell {
    height: 30px;
    padding: 3px 0;
    box-sizing: border-box;
}

.cell .text {
    width: 24px;
    height: 24px;
    display: block;
    margin: 0 auto;
    line-height: 24px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
}

.cell.current .text {
    background: #626aef;
    color: #fff;
}

.cell .holiday {
    position: absolute;
    width: 6px;
    height: 6px;
    background: var(--el-color-danger);
    border-radius: 50%;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
}

.doctorsInformation {
    margin: 20px auto;

    .doctors {
        margin-bottom: 10px;
    }

    .left {
        float: left;
        width: 200px;
        height: 200px;

        img {
            width: 200px;
            height: 200px;
        }
    }

    .right {
        float: left;
        margin-left: 20px;
        height: 200px;
        width: 500px;

        .top {
            height: 20px;
            margin: 10px 0;
            display: flex;
            align-items: flex-end;

            .name {
                float: left;
                font-size: 20px;
                font-weight: 700;
            }

            .title {
                float: left;
                font-size: 12px;
                margin-left: 10px;
                color: red;
            }

            .clear {
                clear: both;
            }
        }


        .description {
            font-size: 10px;
        }

        .times {
            height: 50px;
            line-height: 50px;

            .time {
                float: left;
            }

            .btn {
                float: right;
            }

            .clear {
                clear: both;
            }
        }
    }

    .clear {
        clear: both;
    }
}
</style>