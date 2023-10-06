<template>
    <div class="all">
        <div class="main">
            <h2>科室搜索</h2>
            <el-input v-model="searchKeyword" placeholder="请输入科室名称" clearable @clear="clearSearch"></el-input>

            <h2>科室介绍</h2>
            <el-row>
                <el-col v-for="department in filteredDepartments" :key="department.id" :span="8">
                    <router-link to="/scheduling">
                        <div class="department-card" style="margin-right:10px">
                            <h3>{{ department.name }}</h3>
                            <p>{{ department.description }}</p>
                        </div>
                    </router-link>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// 科室数据
const departments = ref([
    { id: 1, name: '消化内科', description: '介绍' },
    { id: 2, name: '消化外科', description: '介绍' },
    { id: 3, name: '肾脏内科', description: '介绍' },
    { id: 4, name: "神经外科", description: "介绍" },
    { id: 5, name: "血液内科", description: "介绍" },
    { id: 6, name: "内分泌代谢科", description: "介绍" },
    { id: 7, name: "呼吸内科", description: "介绍" },
    { id: 8, name: "临床免疫科", description: "介绍" },
    { id: 9, name: "老年病科", description: "介绍" },
    { id: 10, name: "中医科", description: "介绍" },
]);

// 搜索关键词
const searchKeyword = ref('');

// 根据搜索关键词过滤科室
const filteredDepartments = computed(() => {
    if (!searchKeyword.value) {
        return departments.value;
    }

    const keyword = searchKeyword.value.toLowerCase();
    return departments.value.filter((department) =>
        department.name.toLowerCase().includes(keyword)
    );
});

// 清空搜索关键词
const clearSearch = () => {
    searchKeyword.value = '';
};
</script>

<style lang="scss" scoped>
.main {
    width: 50%;
    margin: 10px auto;
    text-align: center;

    h2,
    h3 {
        text-align: center;
        margin: 20px auto;
    }
}

.department-card {
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 4px;
    margin-bottom: 20px;
}
</style>