<template>
    <div class="all">
        <el-card>
            <div class="main" v-for="(item, index) in  date ">
                <div class="letter">
                    {{ item.letter }}
                </div>
                <div class="departments">
                    <ul>
                        <li v-for="(department, index) in item.departments"> <router-link to="/gastroenterology">{{
                            department
                        }}</router-link></li>
                    </ul>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const date = ref([
    {
        letter: "E",
        departments: ["耳鼻咽喉头颈外科", "儿科"]
    }, {
        letter: "F",
        departments: ["妇产科", "妇产科生殖中心"]
    },
    {
        letter: "G",
        departments: ["肝胆外科", "骨科"]
    }, {
        letter: "H",
        departments: ["呼吸内科"]
    }, {
        letter: "J",
        departments: ["甲状腺乳腺血管外科"]
    },
    {
        letter: "L",
        departments: ["临床免疫科", "老年病科"]
    }, {
        letter: "M",
        departments: ["泌尿外科", "麻醉科"]
    },
    {
        letter: "N",
        departments: ["内分泌代谢科"]
    }, {
        letter: "X",
        departments: ["消化内科", "消化外科", "心血管内科", "血液内科", "心血管外科"]
    }, {
        letter: "Y",
        departments: ["眼科"]
    },
    {
        letter: "S",
        departments: ["肾脏内科", "烧伤外科", "神经外科", "神经内科"]
    }, {
        letter: "Z",
        departments: ["整形外科", "中医科"]
    }])
</script>

<style lang="scss" scoped>
.el-card {
    width: 60%;
    margin: auto;

    .main {
        margin: 10px auto;
        box-sizing: border-box;

        .letter {
            padding: 0 10px;
            font-weight: 700;
            font-style: italic;
        }

        li {
            padding: 2px 0 2px 5px;
            box-sizing: border-box;
            margin: 5px 30px;
            border-bottom: 1px solid #333333;
        }

        ul li:last-child {
            border-bottom: none;
        }

        a {
            color: black;
            font-style: italic;
        }
    }
}
</style>