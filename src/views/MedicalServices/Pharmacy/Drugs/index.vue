<template>
    <div class="main">
        <el-card>
            <div class="top">
                <div class="left">
                    <img src="../../../../assets/images/drug1.webp" alt="">
                </div>
                <div class="right">
                    <div class="description">
                        {{ drug.description }}
                    </div>
                    <div class="ingredients">
                        <h3>药品成分</h3>
                        <ol>
                            <li v-for="(ingredient, index) in drug.ingredients">
                                {{ ingredient }}
                            </li>
                        </ol>
                    </div>
                    <div class="use">
                        <h3>药品用途</h3>
                        <ol>
                            <li v-for="(use, index) in drug.use">
                                {{ use }}
                            </li>
                        </ol>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
            <div class="middle">
                <h2>注意事项</h2>
                <ol>
                    <li v-for="(item, index) in drug.precautions">
                        {{ index + 1 + '.' + item }}</li>
                </ol>
            </div>
            <div class="bottom">
                <h2>支付购买</h2>
                <el-input-number v-model="number" min="1"></el-input-number>
                <el-button type="danger">前往支付</el-button>
            </div>
            <footer>
                <img src="../../../../assets/images/footer.jpg" alt="">
            </footer>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const drug = ref(<any>{
    description: "达霏欣 米诺地尔酊搽剂5%浓度60ml/瓶生发液生发凝胶喷雾治疗脱发斑秃育发生发",
    price: 147,
    ingredients: ["茯苓", "泽泻", "白术", "茵陈蒿"],
    use: ["利尿消肿: 达霏欣中的成分具有利尿和消肿的作用，可用于治疗水肿、尿路感染等相关症状", "安神镇静：达霏欣中的部分成分具有镇静和安神的作用，可用于缓解焦虑、失眠等神经系统相关症状。", "清热解毒：达霏欣中的成分具有清热解毒的功效，可用于治疗湿热引起的症状，如湿热病、痰湿阻滞等", "健脾胃、止泻：达霏欣中的部分成分有助于调理脾胃功能，可用于治疗脾胃虚弱、腹泻等相关症状。"],
    precautions: ["用药前咨询医生：在开始使用达霏欣之前，务必咨询医生或药师。他们可以评估你的特定情况，并确定该药是否适合你使用。", "遵循剂量指导：按照医生或药师的建议，正确使用达霏欣，并遵循建议的剂量。不要自行调整剂量或停止使用药物，除非经过医生指导。",
        "注意过敏反应：如果你对达霏欣或其中任何成分过敏，请立即停止使用，并告知医生或药师。过敏反应可能包括皮疹、瘙痒、呼吸困难等。在使用新药之前，了解自己的过敏史是非常重要的。",
        "个体差异：每个人对药物的反应可能有所不同。注意观察使用达霏欣后的身体反应和任何不良反应。如果出现严重不适或不良反应，请立即咨询医生。",
        "孕妇和哺乳期妇女：如果你是孕妇、计划怀孕或正在哺乳，请在使用达霏欣之前告知医生。某些药物成分可能对胎儿或婴儿产生不良影响。",
        "药物相互作用：告知医生或药师你目前正在使用的其他药物、补充剂或草药，以避免潜在的药物相互作用。",
        "儿童用药：达霏欣在儿童使用方面的安全性和适应症可能有限。在给儿童使用达霏欣之前，务必咨询儿科医生。"]
})
const date = ref({
    number: 1,
    prices: 12,
    totalPrices: function () {
    }
    // totalPrices: number.value * prices.value,

})
const number = ref(1)
</script>

<style lang="scss" scoped>
.main {
    width: 100%;
    background-color: #e8f3f3;
    padding: 10px;
    box-sizing: border-box;

    .el-card {
        width: 60%;
        margin: auto;
        padding: 10px;
        min-width: 1200px;

        .top {
            .left {
                float: left;
                width: 300px;

                img {
                    width: 300px;
                    height: 300px;
                }
            }

            .right {
                float: left;
                min-width: 650px;
                margin-left: 40px;
                font-size: 12px;

                h3 {
                    color: red;
                }

                .description {
                    font-weight: 700;
                    font-size: 20px;
                    margin: 0 20px 20px 0;
                }

                .ingredients {
                    margin-bottom: 20px;
                }

                li {
                    box-sizing: border-box;
                    margin-left: 50px;
                    list-style: disc;
                }
            }

        }
    }
}

.middle li {
    text-indent: 2em;
    margin: 5px 0;
    font-size: 15px;
}

h2 {
    margin: 10px;
}

.bottom {
    padding-bottom: 40px;

    .el-input-number {
        margin: 10px 50px;
    }

    .el-button {
        margin-left: 500px;
    }
}

footer {
    img {
        display: block;
        width: 100%;
        margin: auto;
    }
}
</style>