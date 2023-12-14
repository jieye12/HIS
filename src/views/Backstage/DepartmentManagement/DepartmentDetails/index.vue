<template>
    <div>
        <el-card style="height: 10px;margin-bottom:20px;">
        </el-card>
        <el-card>
            <h2 style="text-align:center;">科室信息列表</h2>
            <!-- <el-button type="primary" size="default" @click="addDepartment" style="margin:10px;">添加科室</el-button> -->
            <el-table :data="departmentList" v-if="departmentList.length" border>
                <el-table-column prop="name" label="科室名称" align="center"></el-table-column>
                <el-table-column prop="id" label="科室编号" align="center"></el-table-column>
                <el-table-column prop="desc" label="科室描述" align="center"></el-table-column>
                <el-table-column prop="departmentPrincipal" label="科室负责人" align="center"></el-table-column>
                <el-table-column prop="contact" label="联系方式" align="center"></el-table-column>
            </el-table>
            <div v-else>暂无科室信息</div>
            <el-pagination :pager-count="9" v-model:current-page="pageNo" v-model:page-size="limit"
                :page-sizes="[3, 5, 7, 9]" :background="true" layout="prev, pager, next, jumper,->,sizes,total"
                :total="total" style="margin:10px 0;" />

        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, nextTick, onMounted, computed } from 'vue';
import { reqgetDepartmentService } from '../../../../api/backstage/index'
onMounted(async () => {
    const res = await reqgetDepartmentService()
    console.log(res);
    departmentList.value = res.data
})
const keyword = ref("")
const searchForm = ref({
    departmentId: ''
});
const formRef = ref()
const form = reactive({
    name: '',
    id: '',
    desc: '',
    departmentPrincipal: '',
    contact: ''
});
const pageSize: any = 10; // 每页显示的记录数
const total: any = ref(0); // 总记录数
const currentPage: any = ref(1); // 当前页码
const limit: any = ref(10)
const departmentList: any = ref([]); // 科室信息列表
const pageNo: any = ref(1)

const departments = ref([
    // { id: 1, name: '科室 A' },
    // { id: 2, name: '科室 B' },
    // { id: 3, name: '科室 C' }
]);
const search = computed(() => {
    if (!keyword.value) {
        return departments.value;
    }
    return departments.value.filter((department) =>
        department.name.toLowerCase().includes(keyword.value)
    );
});

const fetchDepartmentList = () => {
    departmentList.value = [
    ];

    total.value = departmentList.value.length; // 模拟获取总记录数

    // 根据分页信息计算当前页的科室列表
    const startIndex = (currentPage.value - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    departmentList.value = departmentList.value.slice(startIndex, endIndex);
}
fetchDepartmentList(); // 初始化
</script>

<style lang="scss" scoped>
.form {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.el-dialog {
    padding: 20px;
    width: 500px;

    .form {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>