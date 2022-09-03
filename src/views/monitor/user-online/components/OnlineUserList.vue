<template>
  <el-table :data="tableData" :fit="true" :border="true">
    <el-table-column prop="sessionId" label="sessionId" />
    <el-table-column prop="username" label="username" />
    <el-table-column prop="deptname" label="deptname" />
    <el-table-column prop="host" label="host" />
    <el-table-column prop="loginTime" label="loginTime" />
    <el-table-column prop="loginLocation" label="loginLocation" />
    <el-table-column prop="loginMachineType" label="loginMachineType" />
    <el-table-column fixed="right" label="operations" width="120">
      <template #default>
        <el-button link type="primary" size="small" :icon="Delete">kickout</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts" setup>
import { onlineUserApi } from '@/views/monitor/api'
import { onMounted, ref } from 'vue'
import { Delete } from '@element-plus/icons-vue'
const tableData = ref([])
const getList = () => {
  onlineUserApi.list.request().then((res) => (tableData.value = Object.freeze(res.items)))
}
onMounted(() => {
  getList()
})
</script>
<style scoped></style>
