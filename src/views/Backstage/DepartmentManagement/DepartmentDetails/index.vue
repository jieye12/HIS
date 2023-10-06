<template>
    <div>
        <el-card style="height: 80px;margin-bottom:20px;">
            <el-form :inline="true" class="form">
                <el-form-item label="用户名:">
                    <el-input placeholder="请你输入搜索用户名" v-model="keyword"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" size="default" :disabled="keyword ? false : true"
                        @click="search">搜索</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card>
            <h2 style="text-align:center;">科室信息列表</h2>
            <el-button type="primary" size="default" @click="addDepartment" style="margin:10px;">添加科室</el-button>
            <el-table :data="departmentList" v-if="departmentList.length" border>
                <el-table-column prop="name" label="科室名称" align="center"></el-table-column>
                <el-table-column prop="number" label="科室编号" align="center"></el-table-column>
                <el-table-column prop="description" label="科室描述" align="center"></el-table-column>
                <el-table-column prop="manager" label="科室负责人" align="center"></el-table-column>
                <el-table-column prop="contact" label="联系方式" align="center"></el-table-column>
                <el-table-column label="操作" align="center">
                    <template #default="{ row }">
                        <el-button type="primary" @click="editDepartment(row)">编辑</el-button>
                        <el-button type="primary" @click="deleteDepartment(row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div v-else>暂无科室信息</div>
            <el-pagination @size-change="sizeChange" @current-change="getHasTrademark" :pager-count="9"
                v-model:current-page="pageNo" v-model:page-size="limit" :page-sizes="[3, 5, 7, 9]" :background="true"
                layout="prev, pager, next, jumper,->,sizes,total" :total="total" style="margin:10px 0;" />

            <el-dialog :title="dialogTitle" v-model="dialogVisible">
                <el-form :model="form" label-width="120px" :rules="rules" ref="formRef">
                    <el-form-item label="科室名称" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="科室编号" prop="number">
                        <el-input v-model="form.number"></el-input>
                    </el-form-item>
                    <el-form-item label="科室描述" prop="description">
                        <el-input v-model="form.description"></el-input>
                    </el-form-item>
                    <el-form-item label="科室负责人" prop="manager">
                        <el-input v-model="form.manager"></el-input>
                    </el-form-item>
                    <el-form-item label="联系方式" prop="contact">
                        <el-input v-model="form.contact"></el-input>
                    </el-form-item>
                </el-form>
                <template #footer>
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="saveDepartment">保存</el-button>
                </template>
            </el-dialog>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, nextTick } from 'vue';
import { ElMessageBox } from 'element-plus'
const keyword = ref("")
const searchForm = ref({
    departmentId: ''
});
const formRef = ref()
const form = reactive({
    name: '',
    number: '',
    description: '',
    manager: '',
    contact: ''
});
const pageSize = 10; // 每页显示的记录数
const total = ref(0); // 总记录数
const currentPage = ref(1); // 当前页码
const limit = ref(10)
const departmentList = ref([]); // 科室信息列表

const departments = ref([
    { id: 1, name: '科室 A' },
    { id: 2, name: '科室 B' },
    { id: 3, name: '科室 C' }
]);
const search = () => {
    //搜索请求
    currentPage.value = 1; // 搜索时重置当前页码
    fetchDepartmentList();
    keyword.value = ""
}

const fetchDepartmentList = () => {
    // 模拟根据搜索条件获取科室信息列表的请求
    // 这里可以替换成实际的接口请求
    departmentList.value = [
        { name: '科室 A', number: '001', description: '这是科室 A 的描述', manager: '负责人 A', contact: '1234567890' },
        { name: '科室 B', number: '002', description: '这是科室 B 的描述', manager: '负责人 B', contact: '0987654321' },
        { name: '科室 C', number: '003', description: '这是科室 C 的描述', manager: '负责人 C', contact: '9876543210' }
    ];

    total.value = departmentList.value.length; // 模拟获取总记录数

    // 根据分页信息计算当前页的科室列表
    const startIndex = (currentPage.value - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    departmentList.value = departmentList.value.slice(startIndex, endIndex);
}


let dialogVisible = ref(false);
let dialogTitle = ref('');
let currentDepartment = null;
const rules = {
    name: [
        { required: true, message: '请输入科室名称', trigger: 'blur' },
    ],
    number: [
        { required: true, message: '请输入科室编号', trigger: 'blur' },
    ],
    description: [
        { required: true, message: '请输入科室描述', trigger: 'blur' },
    ],
    manager: [
        { required: true, message: '请输入科室负责人', trigger: 'blur' },
    ],
    contact: [
        { required: true, message: '请输入联系方式', trigger: 'blur' },
    ],
}
const addDepartment = () => {
    dialogVisible.value = true;
    dialogTitle.value = '新增科室';
    Object.assign(form, {
        name: '',
        number: '',
        description: '',
        manager: '',
        contact: ''
    })
    nextTick(() => {
        formRef.value.clearValidate('name');
        formRef.value.clearValidate('number');
        formRef.value.clearValidate('description');
        formRef.value.clearValidate('manager');
        formRef.value.clearValidate('contact');
    });
}

const editDepartment = (row) => {
    dialogVisible.value = true;
    dialogTitle.value = '编辑科室';
    Object.assign(form, row);
    nextTick(() => {
        formRef.value.clearValidate('name');
        formRef.value.clearValidate('number');
        formRef.value.clearValidate('description');
        formRef.value.clearValidate('manager');
        formRef.value.clearValidate('contact');
    });
}

const saveDepartment = async () => {
    await formRef.value.validate()
    if (currentDepartment) {
        // 编辑科室
        currentDepartment.name = form.name;
        currentDepartment.number = form.number;
        currentDepartment.description = form.description;
        currentDepartment.manager = form.manager;
        currentDepartment.contact = form.contact;
    } else {
        // 新增科室
        const newDepartment = {
            name: form.name,
            number: form.number,
            description: form.description,
            manager: form.manager,
            contact: form.contact
        };
        departmentList.value.push(newDepartment);
        total.value = departmentList.value.length;
    }
    dialogVisible.value = false;
    resetForm();
}

const deleteDepartment = (department) => {
    ElMessageBox.confirm('确定删除该科室？', '提示', { type: 'warning' })
        .then(() => {
            const index = departmentList.value.indexOf(department);
            departmentList.value.splice(index, 1);
            total.value = departmentList.value.length;
        })
        .catch(() => { });
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