<template>
    <div class="article">
        <div class="top">
            <div class="title">{{ article.title }}</div>
            <div class="source">{{ article.source }}</div>
            <div class="time">{{ article.time }}</div>
            <div class="clear"></div>
        </div>
        <div class="main">
            <div class="title">
                <h1>{{ article.title }}</h1>
            </div>
            <h2>
                一、西安市职工、居民医保
            </h2>
            <p>
                西安市医保(职工、居民)
                患者办理住院手续时住院预交款窗口即同时为您办理了入院医保登记手续如遇急诊或特殊情况未及时登记的，请于住院24小时内至门诊一楼西侧140号、141号窗口办理医保审核登记手续，逾期未办理者，其费用由个人自付。办理住院医保登记手续请携带:
                社保卡/医保电子凭证或身份证 2 住院证。
            </p>
            <h2>
                二、陕西省内及跨省异地职工、居民医保
            </h2>
            <p>
                我院已开通省内和跨省异地医保住院联网直通车报销。跨省异地医保患者需要您住院前办理异地就医网终备案或转诊手续，省内异地医保患者可直接在医院办理医保挂账手续，无需专门备案。在您办理住院手续时住院预交款窗口即同时为您办理了入院医保登记，如遇急诊或特殊情况未及时登记的，请于住院后二个工作日内至门诊一楼西侧140号、141号窗口办理医保审核登记手续，逾期未办理者，不能享受在医院直接报销结算。办理住院医保登记手续请携带:0
                社保卡/医保电子凭证 2 住院证。
            </p>
            <h2>
                三、住院预交款缴退费须知
            </h2>
            <p>
                1.缴费须知:首次预交款仅支持线下交费
                (现金、银行卡、微信、支付宝均可)，住院期间续交住院费用时，您可携带信誉卡在就近出院结帐室进行续费，或网上进入西京医院公众号，依次点击[个人中心]-[我的住院]-[选取核对绑定的患者信息]-[预交金缴纳)进行线上续费。
            </p>
            <p>
                2.退费须知:住院预交款通过刷银行卡交费的患者出院结算时请携带原刷卡银行卡及刷卡小票，结账余额将退回原卡:通过微信、支付宝交费的患者，结帐余额通过原充值账户退回，为避免引起财产损失，请不要让他人代交:住院预交款现金交费的患者，退现金大于一万元以上的患者，需出示患者及代办人的身份证原件(退现金大于五万元以上的，需提前一天告知出院结账
                室)
            </p>
            <h2>
                四、医保住院患者特殊须知
            </h2>
            <p>
                1.医保患者入院后，请及时告知病房医护人员您的医保身份，以便科室按医保政策要求进行管理
            </p>
            <p>
                2.医保患者住院期间不允许在门诊及药店出现医保金打省将导致任院资用不能进行医保结算。
            </p>
            <p>
                3.医保患者住院期间不得在门诊(院外) 购买药品、材料或到院外做检查。住院期间院外购买药品、材料、检查等发生的费用，无法在医院报销。因此导致医保不能报销的问题，责任须患者自行承担。
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const article = ref({
    title: "医保患者住院须知",
    source: "医保办",
    time: "2023-06-09"
})
</script>

<style lang="scss" scoped>
.article {
    width: 50%;
    margin: 10px auto;

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
        .title {
            text-align: center;
            font-weight: 900;
            font-size: 20px;
        }

        h2 {
            line-height: 2;
        }

        p {
            text-indent: 2em;
            font-size: 15px;
            line-height: 2;
        }
    }
}
</style>