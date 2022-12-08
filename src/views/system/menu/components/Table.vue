<template>
  <el-row>
    <el-button type="primary" @click="handleAddOption">新增</el-button>
    <el-button type="success" @click="refresh">刷新</el-button>
  </el-row>
  <el-row>
    <el-table :data="table.data" row-key="id" fit :border="true">
      <el-table-column prop="name" label="菜单名称" align="center" :min-width="80" />
      <el-table-column prop="icon" label="菜单图标" align="center" :min-width="80">
        <template #default="scope">
          <el-icon><component v-if="scope.row.icon" :is="scope.row.icon"></component></el-icon>
        </template>
      </el-table-column>
      <el-table-column prop="number" label="菜单顺序" align="center" :min-width="80" />
      <el-table-column prop="routerPath" label="菜单路由" align="center" :min-width="80" />
      <el-table-column prop="componentPath" label="菜单组件路径" align="center" :min-width="80" />
      <el-table-column prop="permission" label="菜单权限" align="center" :min-width="80" />
      <el-table-column prop="status" label="菜单状态" align="center" :min-width="80">
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
  </el-row>
  <el-dialog v-model="table.add.open" title="添加" width="50%" draggable>
    <customer-add-form @finish="refresh" />
  </el-dialog>
  <el-dialog v-model="table.update.open" title="更新" width="50%" draggable @open="handleUpdateOpen">
    <customer-update-form ref="refUpdateRole" @finish="refresh" :id="table.update.id" />
  </el-dialog>
</template>
<script lang="ts" setup>
import { Edit, Delete } from '@element-plus/icons-vue'
import { api } from '@/api/system/menu/api'
import { ElMessage } from 'element-plus'
import { onMounted, reactive, ref } from 'vue'
import CustomerAddForm from './AddForm.vue'
import CustomerUpdateForm from './UpdateForm.vue'
const table = reactive({
  data: [],
  query: {
    parentId: -1,
  },
  add: {
    open: false,
  },
  update: {
    open: false,
    id: '-1',
  },
})
const refUpdateRole = ref()
const refresh = () => {
  table.add.open = false
  table.update.open = false
  table.update.id = '-1'
  getList()
}
const getList = () => {
  api.list.request(table.query).then((res) => {
    table.data = res
  })
}
const handleUpdateOpen = () => {
  refUpdateRole.value.init()
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
    .request({ menuId: id })
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
