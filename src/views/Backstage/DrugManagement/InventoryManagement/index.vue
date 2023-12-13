<template>
    <div>
        <el-card style="margin-bottom:10px;">
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
            <el-button type="primary" @click="addDrugStock" style="margin:10px;">添加药品库存</el-button>
            <el-table :data="drugStocks" border>
                <el-table-column prop="id" label="id" align="center"></el-table-column>
                <el-table-column prop="name" label="药品名称" align="center"></el-table-column>
                <el-table-column prop="type" label="药品分类" align="center"></el-table-column>
                <el-table-column prop="specification" label="规格" align="center"></el-table-column>
                <el-table-column prop="count" label="库存数量" align="center"></el-table-column>
                <el-table-column label="操作" align="center">
                    <template #default="{ row }">
                        <el-button @click="editDrugStock(row)" type="primary" size="small">编辑</el-button>
                        <el-button @click="deleteDrugStock(row)" type="danger" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination :pager-count="9" v-model:current-page="pageNo" v-model:page-size="limit"
                :page-sizes="[3, 5, 7, 9]" :background="true" layout="prev, pager, next, jumper,->,sizes,total"
                :total="total" style="margin:10px 0;" />

            <!-- 编辑/添加药品库存对话框 -->
            <el-dialog v-model="dialogVisible" :title="dialogTitle">
                <el-form :model="currentDrugStock" :rules="drugStockFormRules" ref="formRef" label-width="100px">
                    <el-form-item label="药品名称" prop="name">
                        <el-input v-model="currentDrugStock.name" placeholder="请输入药品名称"></el-input>
                    </el-form-item>
                    <el-form-item label="药品分类" prop="type">
                        <el-input v-model="currentDrugStock.type" placeholder="请输入药品分类"></el-input>
                    </el-form-item>
                    <el-form-item label="规格" prop="specification">
                        <el-input v-model="currentDrugStock.specification" placeholder="请输入药品规格"></el-input>
                    </el-form-item>
                    <el-form-item label="库存数量" prop="count">
                        <el-input-number v-model="currentDrugStock.count" :min="0" :precision="0"></el-input-number>
                    </el-form-item>
                </el-form>
                <template #footer class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="saveDrugStock">保存</el-button>
                </template>
            </el-dialog>

        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, nextTick } from 'vue';
import { ElTable, ElTableColumn, ElButton, ElDialog, ElForm, ElFormItem, ElInput, ElInputNumber } from 'element-plus';
import { reqMedical } from '../../../../api/backstage/index'
onMounted(async () => {
    const res = await reqMedical()
    console.log(res);
    drugStocks.value = res.data
})
// 数据模拟
const drugStocks = ref([
    { id: 1, productName: '阿司匹林', category: '非处方药', specification: '100mg*100片', quantity: 500 },
    { id: 2, productName: '头孢菌素', category: '处方药', specification: '250mg*24片', quantity: 200 },
]);
const keyword = ref('')
const search = () => {

}
const pageSize = 10; // 每页显示的记录数
const total = ref(0); // 总记录数
const currentPage = ref(1); // 当前页码
const limit = ref(10)
// 当前编辑的药品库存
const currentDrugStock = reactive({
    name: '',
    type: '',
    specification: '',
    count: 0,
});
const formRef = ref()
// 表单验证规则
const drugStockFormRules = {
    productName: [{ required: true, message: '请输入药品名称', trigger: 'blur' }],
    category: [{ required: true, message: '请输入药品分类', trigger: 'blur' }],
    specification: [{ required: true, message: '请输入药品规格', trigger: 'blur' }],
    quantity: [{ required: true, message: '请输入库存数量', trigger: 'blur' }],
};

// 对话框可见状态
const dialogVisible = ref(false);
const dialogTitle = ref()
// 添加药品库存
const addDrugStock = () => {
    dialogVisible.value = true;
    dialogTitle.value = '新增药品库存';
    Object.assign(currentDrugStock, {
        name: '',
        type: '',
        specification: 0,
        count: ""
    })
    nextTick(() => {
        formRef.value.clearValidate('name');
        formRef.value.clearValidate('type');
        formRef.value.clearValidate('count');
        formRef.value.clearValidate('specification');
    });
}
// 编辑药品库存
const editDrugStock = (row) => {
    dialogVisible.value = true;
    dialogTitle.value = '编辑库存记录';
    Object.assign(currentDrugStock, row)
    nextTick(() => {
        formRef.value.clearValidate('name');
        formRef.value.clearValidate('type');
        formRef.value.clearValidate('count');
        formRef.value.clearValidate('specification');
    });
}
// 删除药品库存
const deleteDrugStock = (row) => {
    const index = drugStocks.value.indexOf(row);
    drugStocks.value.splice(index, 1);
}
// 保存药品库存
const saveDrugStock = async () => {
    await formRef.value.validate()
}
</script>

<style lang="scss" scoped></style>