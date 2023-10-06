<template>
    <div class="all">
        <el-card>
            <div class="article">
                <div class="top">
                    <div class="title">{{ article.title }}</div>
                    <div class="source">{{ article.source }}</div>
                    <div class="time">{{ article.time }}</div>
                    <div class="clear"></div>
                </div>
                <div class="main">
                    <div class="title">
                        <h2>春江医院就诊须知</h2>
                    </div>
                    <div class="first">
                        <p>
                            1、出诊时间: 8:00至12:00&nbsp;&nbsp;&nbsp;&nbsp;13:30至16:30
                        </p>
                    </div>
                    <div class="second">
                        <p>2、诊查费：</p>
                        <p class="ml100">普通门诊诊查费:8元/次</p>
                        <p>专家门诊诊查费</p>
                        <p class="ml100">主任医师诊查费:15元/次</p>
                        <p class="ml100">副住任因师诊查费:12元/次</p>
                        <p class="mb20">说明:门诊妇科、耳喉科诊查费在原务级别诊查费其础上加收2元。</p>
                        <p>中医辩论政治</p>
                        <p class="ml100">普通门诊中医辨证论治:11元/次</p>
                        <p class="ml100">主任因师门诊中医辨证论治:18 元/次</p>
                        <p class="ml100 mb20">副主任因币门诊中医辨证论治:15元/次</p>
                    </div>
                    <div class="thrid">
                        <p>3、我完实行<span>预约挂号</span>和<span>实名制就医</span>，就诊患者请提前7天进行预约挂号，每日
                            16:00 更新一周后号源。请您按预约时间，提前30分到院取号候诊。</p>
                    </div>
                    <div class="fourth">
                        <p>
                            4、持有士兵退役证、转业证、军人证、老年证的患者，携带本人身份证及以上证件前往人工服务窗口，现场挂普通号。
                        </p>
                    </div>
                    <div class="fifth">
                        <p>
                            5、<span>军人</span>就诊请到<span>住院二部二楼</span>军人诊疗中心;<span>军属</span>诊请到<span>门诊一楼东侧</span>军属诊疗中心。
                        </p>
                    </div>
                    <div class="sixth">
                        <p>
                            6、我院始终重承军人第一，军属优先的保障原则。
                        </p>
                    </div>
                    <div class="seventh">
                        <p>
                            7、挂号<span>当次有效</span> ，隔日就诊和复诊的患者需要重新挂号。
                        </p>
                    </div>
                    <div class="eighth">
                        <p>
                            8、为了降低交又感染风险，所有就诊患者及陪护人员请<span>全程佩戴口置</span>。就诊时请遵守“一人一诊一室”。
                        </p>
                    </div>
                    <div class="nineth">
                        <p>9、缴费方式：</p>
                        <p>
                            现金、银联卡、医保激费:请前往一楼西侧115号至131号窗口办理
                        </p>
                        <p>
                            <span>手机缴费</span>
                        </p>
                        <p class="ml100">
                            方式一。:公众号或生活号电子就>卡选择“我的账单”直接支付费用
                        </p>
                        <p class="ml100">
                            方式二:公众号或生活号电子卡充值相应的费用，前往检查室直接扣费;
                        </p>
                        <p class="ml100">
                            方式三:直接前往检查室、治疗室使用微信或支付宝主男付能缴费。
                        </p>
                        <p>
                            <span>
                                军属缴费
                            </span>
                        </p>
                        <p class="ml100">
                            门诊一楼东侧军属诊疗疗中心1至6号窗口，或门诊楼大厅西侧115至131号窗口。
                        </p>
                    </div>
                    <div class="tenth">
                        <p>
                            10、在您就诊过程中，时刻警惕“医托”以各种手段费遍你到院外就医、购药，谨防上当受骗。
                        </p>
                    </div>
                    <div class="eleventh">
                        <p>
                            11、我院门诊严禁进行药品促活动及其它扰乱医疗序的行为，望各位患者配合监督。“
                        </p>
                    </div>
                    <h2>308医院预约挂号</h2>
                    <div class="a">
                        <p>
                            西京医院已开通微信、支付宝预约挂号及在线支付，欢迎使用

                        </p>
                        <p>
                            方式如下:
                        </p>
                        <p>
                            (1)微信预约性号: 微信扫码关注西京医院公众号或得信携索公
                            众号“西京医院
                        </p>
                        <p>
                            (2)支付宝预约挂号: 支付主主巴关注西京医院生活号或支付宝
                            搜索生活号“西京医院”
                        </p>
                        <p>
                            警示:我院未委托其他机构预约挂号，请勿将个人信息诱离给他
                            ，以免上当受骗!
                        </p>
                    </div>
                    <div style="line-height: 0;">
                        <img src="../../../assets/images/process1.png" alt="">
                    </div>
                    <h2>308医院住院流程</h2>
                    <img src="../../../assets/images/process2.png" alt="">
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const article = ref({
    title: "就医指南",
    source: "308医院",
    time: "2023-06-09"
})
</script>

<style lang="scss" scoped>
.el-card {
    width: 50%;
    margin: 10px auto;
}

.article {

    .top {
        font-size: 12px;

        .title {
            font-size: 20px;
            font-weight: 700;
            margin: 10px 0;
        }

        .source {
            padding-left: 10px;
            float: left;
        }

        .time {
            float: left;
            margin-left: 50px;
        }
    }

    .main {
        text-indent: 2em;
        font-weight: 700;

        h2 {
            text-align: center;
        }

        .ml100 {
            margin-left: 100px;
        }

        .mb20 {
            margin-bottom: 20px;
        }

        p {
            span {
                color: red;
            }
        }
    }

}

h2 {
    text-align: center;
}

img {
    display: block;
    margin: auto;
    // vertical-align: bottom;
}
</style>