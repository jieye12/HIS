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
            <h2 style="text-align: center; margin:20px;">进货管理界面</h2>
            <el-button type="primary" @click="addPurchaseRecord" style="margin:10px;">添加进货记录</el-button>
            <el-table :data="purchaseRecords" border>
                <el-table-column prop="id" label="id" align="center"></el-table-column>
                <el-table-column prop="name" label="药品名称" align="center"></el-table-column>
                <el-table-column prop="supplier" label="供应商" align="center"></el-table-column>
                <el-table-column prop="purchaseQuantity" label="进货数量" align="center"></el-table-column>
                <el-table-column prop="purchasePrice" label="进货价格" align="center"></el-table-column>
                <el-table-column prop="time" label="进货日期" align="center"></el-table-column>
                <el-table-column label="操作" align="center">
                    <template #default="{ row }">
                        <el-button @click="editPurchaseRecord(row)" type="primary" size="small">编辑</el-button>
                        <el-button @click="deletePurchaseRecord(row)" type="danger" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination :pager-count="9" v-model:current-page="pageNo" v-model:page-size="limit"
                :page-sizes="[3, 5, 7, 9]" :background="true" layout="prev, pager, next, jumper,->,sizes,total"
                :total="total" style="margin:10px 0;" />

            <!-- 编辑/添加进货记录对话框 -->
            <el-dialog v-model="dialogVisible" :title="dialogTitle">
                <el-form :model="currentPurchaseRecord" :rules="purchaseRecordFormRules" ref="formRef" label-width="100px">
                    <el-form-item label="药品名称" prop="name">
                        <el-input v-model="currentPurchaseRecord.name" placeholder="请输入药品名称"></el-input>
                    </el-form-item>
                    <el-form-item label="供应商" prop="supplier">
                        <el-input v-model="currentPurchaseRecord.supplier" placeholder="请输入供应商"></el-input>
                    </el-form-item>
                    <el-form-item label="进货数量" prop="purchaseQuantity">
                        <el-input-number v-model="currentPurchaseRecord.purchaseQuantity" :min="1"
                            :precision="0"></el-input-number>
                    </el-form-item>
                    <el-form-item label="进货价格" prop="purchasePrice">
                        <el-input-number v-model="currentPurchaseRecord.purchasePrice" :min="0"
                            :precision="2"></el-input-number>
                    </el-form-item>
                    <el-form-item label="进货日期" prop="time">
                        <el-date-picker v-model="currentPurchaseRecord.time" type="date"
                            placeholder="请选择进货日期"></el-date-picker>
                    </el-form-item>
                </el-form>
                <template #footer class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="savePurchaseRecord">保存</el-button>
                </template>
            </el-dialog>
        </el-card>

    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, nextTick } from 'vue';
import { ElTable, ElTableColumn, ElButton, ElDialog, ElForm, ElFormItem, ElInput, ElInputNumber, ElDatePicker } from 'element-plus';
import { reqMedical } from '../../../../api/backstage/index'
onMounted(async () => {
    const res = await reqMedical()
    console.log(res);
    purchaseRecords.value = res.data
})
// 数据模拟
const purchaseRecords = ref([
    { id: 1, productName: '阿司匹林', supplier: 'XX药厂', quantity: 100, price: 10.5, date: '2023-09-28' },
    { id: 2, productName: '头孢菌素', supplier: 'YY药厂', quantity: 50, price: 18.2, date: '2023-09-30' },
]);
const keyword = ref('')
const search = () => {

}
const pageSize = 10; // 每页显示的记录数
const total = ref(0); // 总记录数
const currentPage = ref(1); // 当前页码
const limit = ref(10)
const formRef = ref()
// 当前编辑的进货记录
const currentPurchaseRecord = reactive({
    name: '',
    supplier: '',
    purchaseQuantity: 0,
    purchasePrice: 0,
    time: null,
});
const dialogTitle = ref("")
// 表单验证规则
const purchaseRecordFormRules = {
    productName: [{ required: true, message: '请输入药品名称', trigger: 'blur' }],
    supplier: [{ required: true, message: '请输入供应商', trigger: 'blur' }],
    quantity: [{ required: true, message: '请输入进货数量', trigger: 'blur' }],
    price: [{ required: true, message: '请输入进货价格', trigger: 'blur' }],
    date: [{ required: true, message: '请选择进货日期', trigger: 'change' }],
};

// 对话框可见状态
const dialogVisible = ref(false);

//保存进货记录
const savePurchaseRecord = async () => {
    await formRef.value.validate()
}

// 添加进货记录
const addPurchaseRecord = () => {
    dialogVisible.value = true;
    dialogTitle.value = '新增进货记录';
    Object.assign(currentPurchaseRecord, {
        name: '',
        supplier: '',
        purchaseQuantity: 0,
        purchasePrice: 0,
        time: null,
    })
    nextTick(() => {
        formRef.value.clearValidate('name');
        formRef.value.clearValidate('supplier');
        formRef.value.clearValidate('purchaseQuantity');
        formRef.value.clearValidate('purchasePrice');
        formRef.value.clearValidate('time');
    });
}

// 编辑进货记录
const editPurchaseRecord = (row) => {
    dialogVisible.value = true;
    dialogTitle.value = '编辑进货记录';
    Object.assign(currentPurchaseRecord, row)
    nextTick(() => {
        formRef.value.clearValidate('name');
        formRef.value.clearValidate('supplier');
        formRef.value.clearValidate('purchaseQuantity');
        formRef.value.clearValidate('purchasePrice');
        formRef.value.clearValidate('time');
    });
}

// 删除进货记录
const deletePurchaseRecord = (row) => {
    const index = purchaseRecords.value.findIndex((record) => record === row);
    purchaseRecords.value.splice(index, 1);
}
</script>

<style lang="scss" scoped></style>