<template>
    <div class="all">
        <div class="container">
            <el-card>
                <h1>体检结果查询</h1>
                <div class="form">
                    <el-form :model="searchForm" label-width="120px" ref="form" :rules="phoneRules">
                        <el-form-item label="手机号" prop="phone">
                            <el-input v-model="searchForm.phone" placeholder="请输入手机号"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="searchResults">查询</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-card>
            <el-card v-if="showResults" class="card2">
                <div class="results">
                    <h1>体检报告单</h1>
                    <h2>体检人信息</h2>
                    <div class="info">
                        <p><strong>姓名:</strong> {{ result.name }}</p>
                        <p><strong>年龄:</strong> {{ result.age }}</p>
                        <p><strong>性别:</strong> {{ result.gender }}</p>
                    </div>
                    <h2>体检项目结果</h2>
                    <ul>
                        <li v-for="item in result.items" :key="item.name">
                            <strong>{{ item.name }}:</strong> {{ item.result }}
                        </li>
                    </ul>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const form = ref(null)
const searchForm = ref({
    phone: ''
});

const phoneRules = {
    phone: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        { pattern: /^1\d{10}$/, message: '手机号格式不正确', trigger: 'blur' }
    ]
}

const showResults = ref(false);

const result = ref({
    name: '',
    age: '',
    gender: '',
    items: []
});
const searchResults = () => {
    const mockResult = {
        name: '张三',
        age: 30,
        gender: '男',
        items: [
            { name: '血压', result: '正常' },
            { name: '血糖', result: '偏高' },
            { name: '胆固醇', result: '正常' }
        ]
    };
    form.value.validate((valid) => {
        if (valid) {
            if (searchForm.value.phone === '13525164584') {
                result.value = mockResult;
                showResults.value = true;
            } else {
                result.value = {};
                showResults.value = false;
                // 显示错误信息
                // $message.error('未找到相关体检结果');
            }
        }
    });
}
</script>

<style lang="scss" scoped>
.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;

    h1 {
        text-align: center;
        margin: 20px;
    }
}

.card2 {
    margin: 30px;

    p,
    li {
        margin: 10px;
        font-weight: 700;
    }
}

// .form {
//     margin-bottom: 20px;
// }

// .results {
//     margin-top: 20px;
// }

// .info {
//     margin-bottom: 10px;
// }

// ul {
//     padding-left: 20px;
// }

// li {
//     margin-bottom: 5px;
// }
</style>