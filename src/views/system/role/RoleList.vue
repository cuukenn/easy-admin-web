<template>
  <el-table :data="tableData" :fit="true" :border="true">
    <el-table-column prop="role" label="role" :min-width="140" />
  </el-table>
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
