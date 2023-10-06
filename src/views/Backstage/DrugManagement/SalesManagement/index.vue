<template>
    <div>
        <el-card style="height: 80px;margin-bottom:20px;">
            <el-form :inline="true" class="form">
                <el-form-item label="用户名:">
                    <el-input placeholder="请你输入药品名" v-model="keyword"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" size="default" :disabled="keyword ? false : true"
                        @click="search">搜索</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card>
            <h2 style="text-align: center; margin:20px;">销售管理界面</h2>
            <el-button type="primary" @click="addSalesRecord" style="margin:10px;">添加销售记录</el-button>
            <el-table :data="salesRecords" border>
                <el-table-column prop="id" label="id" align="center"></el-table-column>
                <el-table-column prop="productName" label="药品名称" align="center"></el-table-column>
                <el-table-column prop="category" label="药品分类" align="center"></el-table-column>
                <el-table-column prop="specification" label="规格" align="center"></el-table-column>
                <el-table-column prop="quantity" label="销售数量" align="center"></el-table-column>
                <el-table-column prop="price" label="销售价格" align="center"></el-table-column>
                <el-table-column label="销售时间" prop="timestamp" align="center">
                    <template #default="{ row }">
                        {{ formatDate(row.timestamp) }}
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template #default="{ row }">
                        <el-button @click="editSalesRecord(row)" type="primary" size="small">编辑</el-button>
                        <el-button @click="deleteSalesRecord(row)" type="danger" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination :pager-count="9" v-model:current-page="pageNo" v-model:page-size="limit"
                :page-sizes="[3, 5, 7, 9]" :background="true" layout="prev, pager, next, jumper,->,sizes,total"
                :total="total" style="margin:10px 0;" />
            <!-- 编辑/添加药品销售记录对话框 -->
            <el-dialog v-model="dialogVisible" :title="dialogTitle">
                <el-form :model="currentSalesRecord" :rules="salesRecordFormRules" ref="formRef" label-width="100px">
                    <el-form-item label="药品名称" prop="productName">
                        <el-input v-model="currentSalesRecord.productName" placeholder="请输入药品名称"></el-input>
                    </el-form-item>
                    <el-form-item label="药品分类" prop="category">
                        <el-input v-model="currentSalesRecord.category" placeholder="请输入药品分类"></el-input>
                    </el-form-item>
                    <el-form-item label="规格" prop="specification">
                        <el-input v-model="currentSalesRecord.specification" placeholder="请输入药品规格"></el-input>
                    </el-form-item>
                    <el-form-item label="销售数量" prop="quantity">
                        <el-input-number v-model="currentSalesRecord.quantity" :min="0" :precision="0"></el-input-number>
                    </el-form-item>
                    <el-form-item label="销售价格" prop="price">
                        <el-input-number v-model="currentSalesRecord.price" :min="0" :precision="2"></el-input-number>
                    </el-form-item>
                    <el-form-item label="销售时间" prop="timestamp">
                        <el-date-picker v-model="currentSalesRecord.timestamp" type="datetime"></el-date-picker>
                    </el-form-item>
                </el-form>
                <template #footer class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="saveSalesRecord">保存</el-button>
                </template>
            </el-dialog>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, nextTick } from 'vue';
import { ElTable, ElTableColumn, ElButton, ElDialog, ElForm, ElFormItem, ElInput, ElInputNumber, ElDatePicker } from 'element-plus';

// 数据模拟
const salesRecords = ref([
    { id: 1, productName: '阿司匹林', category: '非处方药', specification: '100mg*100片', quantity: 10, price: 20.5, timestamp: new Date() },
    { id: 1, productName: '头孢菌素', category: '处方药', specification: '250mg*24片', quantity: 5, price: 50.0, timestamp: new Date() },
]);

// 当前编辑的药品销售记录
const currentSalesRecord = reactive({
    productName: '',
    category: '',
    specification: '',
    quantity: 0,
    price: 0.0,
    timestamp: new Date(),
});
const formRef = ref()
const pageSize = 10; // 每页显示的记录数
const total = ref(0); // 总记录数
const currentPage = ref(1); // 当前页码
const limit = ref(10)
// 表单验证规则
const dialogTitle = ref("")
const salesRecordFormRules = {
    productName: [{ required: true, message: '请输入药品名称', trigger: 'blur' }],
    category: [{ required: true, message: '请输入药品分类', trigger: 'blur' }],
    specification: [{ required: true, message: '请输入药品规格', trigger: 'blur' }],
    quantity: [{ required: true, message: '请输入销售数量', trigger: 'blur' }],
    price: [{ required: true, message: '请输入销售价格', trigger: 'blur' }],
    timestamp: [{ required: true, message: '请选择销售时间', trigger: 'blur' }],
};

// 对话框可见状态
const dialogVisible = ref(false);

// 日期格式化
const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

// 保存药品销售记录
const saveSalesRecord = async () => {
    await formRef.value.validate()
}

// 添加药品销售记录
const addSalesRecord = () => {
    dialogVisible.value = true;
    dialogTitle.value = '新增销售记录';
    Object.assign(currentSalesRecord, {
        productName: '',
        category: "",
        specification: "",
        quantity: 0,
        price: 0,
        timestamp: new Date()
    })
    nextTick(() => {
        formRef.value.clearValidate('productName');
        formRef.value.clearValidate('category');
        formRef.value.clearValidate('specification');
        formRef.value.clearValidate('price');
        formRef.value.clearValidate('quantity');
        formRef.value.clearValidate('timestamp');
    });
}

// 编辑药品销售记录
const editSalesRecord = (row) => {
    dialogVisible.value = true;
    dialogTitle.value = '编辑销售记录';
    Object.assign(currentSalesRecord, row)
    nextTick(() => {
        formRef.value.clearValidate('productName');
        formRef.value.clearValidate('category');
        formRef.value.clearValidate('specification');
        formRef.value.clearValidate('price');
        formRef.value.clearValidate('quantity');
        formRef.value.clearValidate('timestamp');
    });
}

// 删除药品销售记录
const deleteSalesRecord = (row) => {
    const index = salesRecords.value.indexOf(row);
    salesRecords.value.splice(index, 1);
}

</script>

<style lang="scss" scoped></style>