<template>
  <el-row>
    <el-button type="primary" @click="handleAddOption">新增</el-button>
    <el-button type="success" @click="refresh">刷新</el-button>
  </el-row>
  <el-row>
    <el-table :data="table.data" :fit="true" :border="true">
      <el-table-column prop="username" label="名称/登录名" align="center" :min-width="80" />
      <el-table-column prop="nickname" label="昵称" align="center" :min-width="80" />
      <el-table-column prop="email" label="邮件地址" align="center" :min-width="80" />
      <el-table-column prop="status" label="状态" align="center" :min-width="80">
        <template #default="scope">
          <el-switch v-model="scope.row.status" @change="handleStatusChange(scope.row)" />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template #default="scope">
          <el-button title="编辑" type="primary" :icon="Edit" circle @click="handleUpdateOption(scope.row.id)" />
          <el-popconfirm title="是否确认删除?" @confirm="handleDeleteOption(scope.row.id)">
            <template #reference>
              <el-button title="删除" type="danger" :icon="Delete" circle />
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      small
      background
      layout="prev, pager, next, jumper, ->,sizes, total"
      v-model:current-page="table.query.pageNum"
      v-model:page-size="table.query.pageSize"
      :total="table.total"
      :page-sizes="[5, 10, 20, 50]"
      @size-change="refresh"
      @current-change="refresh"
    />
  </el-row>
  <el-dialog v-model="table.add.open" title="更新" width="40%" draggable>
    <customer-add-form @finish="refresh" />
  </el-dialog>
  <el-dialog v-model="table.update.open" title="更新" width="40%" draggable @open="hanleUpdateOpen">
    <customer-update-form ref="refUpdate" @finish="refresh" :id="table.update.id" />
  </el-dialog>
</template>
<script lang="ts" setup>
import { Edit, Delete } from '@element-plus/icons-vue'
import { api } from '@/api/system/user/api'
import { ElMessage } from 'element-plus'
import { onMounted, reactive, ref } from 'vue'
import CustomerAddForm from './AddForm.vue'
import CustomerUpdateForm from './UpdateForm.vue'
const table = reactive({
  data: [],
  total: 0,
  query: {
    pageNum: 1,
    pageSize: 20,
    orderColumn: 'id',
    orderDesc: false,
  },
  add: {
    open: false,
  },
  update: {
    open: false,
    id: '-1',
  },
})
const refUpdate = ref()
const refresh = () => {
  table.add.open = false
  table.update.open = false
  table.update.id = '-1'
  getList()
}
const getList = () => {
  api.list.request(table.query).then((res) => {
    table.total = Number(res.pageTotal)
    table.data = res.items
  })
}
const hanleUpdateOpen = () => {
  refUpdate.value.init()
}
const handleAddOption = () => {
  table.add.open = true
}
const handleUpdateOption = (id: any) => {
  table.update.id = id
  table.update.open = true
}
const handleDeleteOption = (id: any) => {
  api.delete
    .request({ id: id })
    .then((res) => {
      ElMessage.success({
        message: '删除成功',
      })
    })
    .catch((err) => {
      console.error(err)
      ElMessage.error({
        message: '删除失败',
      })
    })
    .finally(refresh)
}
const handleStatusChange = (row: any) => {
  api.updateStatus
    .request({ id: row.id, status: row.status })
    .then((res) => {
      ElMessage.success({
        message: '修改成功',
      })
    })
    .catch((err) => {
      console.error(err)
      ElMessage.error({
        message: '修改失败',
      })
    })
}
onMounted(() => {
  refresh()
})
defineExpose({ refresh })
</script>
<style scoped></style>
