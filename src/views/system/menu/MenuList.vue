<template>
  <el-table :data="tableData" :fit="true" :border="true">
    <el-table-column prop="name" label="name" :min-width="140" />
    <el-table-column prop="index" label="index" :min-width="140" />
    <el-table-column prop="status" label="status" :min-width="140" />
    <el-table-column prop="createTime" label="createTime" :min-width="240" />
  </el-table>
</template>
<script lang="ts" setup>
import { menuApi } from '@/views/system/api'
import { onMounted, ref } from 'vue'
const tableData = ref([])
const getList = () => {
  menuApi.list.request().then((res) => (tableData.value = Object.freeze(res.items)))
}
onMounted(() => {
  getList()
})
</script>
<style scoped></style>
