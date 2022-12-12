<template>
  <el-row>
    <el-button type="primary" @click="handleAddOption">新增</el-button>
    <el-button type="success" @click="refresh">刷新</el-button>
  </el-row>
  <el-row>
    <el-table :data="table.data" :fit="true" :border="true">
      <el-table-column prop="name" label="角色名" align="center" :min-width="80" />
      <el-table-column prop="permission" label="角色权限标识" align="center" :min-width="80" />
      <el-table-column prop="description" label="角色描述" align="center" :min-width="80" />
      <el-table-column prop="status" label="角色状态" align="center" :min-width="80">
        <template #default="scope">
          <el-switch v-model="scope.row.status" @change="handleStatusChange(scope.row)" />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="160">
        <template #default="scope">
          <el-button
            title="授权"
            type="primary"
            :icon="EditPen"
            circle
            @click="handleInvokeOption(scope.row.id, scope.row.name)"
          />
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
  <el-dialog v-model="table.add.open" title="更新" width="30%" draggable>
    <customer-add-form @finish="refresh" />
  </el-dialog>
  <el-dialog v-model="table.update.open" title="更新" width="30%" draggable @open="hanleUpdateOpen">
    <customer-update-form ref="refUpdateRole" @finish="refresh" :id="table.update.id" />
  </el-dialog>
  <el-dialog v-model="table.invoke.open" title="授权" width="40%" draggable @open="handleInvokeOpen">
    <customer-invoke-form ref="refInvoke" @finish="refresh" />
  </el-dialog>
</template>
<script lang="ts" setup>
import { Edit, Delete, EditPen } from '@element-plus/icons-vue'
import { api } from '@/api/system/role/api'
import { ElMessage } from 'element-plus'
import { onMounted, reactive, ref } from 'vue'
import CustomerAddForm from './AddForm.vue'
import CustomerUpdateForm from './UpdateForm.vue'
import CustomerInvokeForm from './InvokeForm.vue'
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
  invoke: {
    open: false,
    id: '-1',
    name: '',
  },
})
const refUpdateRole = ref()
const refInvoke = ref()
const refresh = () => {
  table.add.open = false
  table.update.open = false
  table.update.id = '-1'
  table.invoke.open = false
  getList()
}
const getList = () => {
  api.list.request(table.query).then((res) => {
    table.total = Number(res.pageTotal)
    table.data = res.items
  })
}
const hanleUpdateOpen = () => {
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
const handleInvokeOption = (id: any, name: string) => {
  table.invoke.open = true
  table.invoke.id = id
  table.invoke.name = name
}
const handleInvokeOpen = () => {
  refInvoke.value.init(table.invoke.id, table.invoke.name)
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
