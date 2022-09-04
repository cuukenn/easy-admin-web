<template>
  <el-table :data="tableData" :fit="true" :border="true">
    <el-table-column prop="id" label="id" :min-width="140" />
    <el-table-column prop="name" label="name" :min-width="140" />
    <el-table-column prop="role" label="role" :min-width="140" />
    <el-table-column prop="createTime" label="createTime" :min-width="140" />
    <el-table-column prop="updateTime" label="updateTime" :min-width="140" />
  </el-table>
  <el-pagination
    small
    background
    layout="prev, pager, next, jumper, ->,sizes, total"
    :total="50"
    :page-sizes="[5, 10, 20, 50]"
  />
</template>
<script lang="ts" setup>
import { roleApi } from '@/views/system/api'
import { onMounted, ref } from 'vue'
const tableData = ref([])
const getList = () => {
  roleApi.list.request().then((res) => (tableData.value = Object.freeze(res.items)))
}
onMounted(() => {
  getList()
})
</script>
<style scoped></style>
