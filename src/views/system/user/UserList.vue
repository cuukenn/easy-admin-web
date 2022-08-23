<template>
  <el-table :data="tableData" :fit="true" :border="true">
    <el-table-column prop="username" label="username" align="center" :min-width="160" />
    <el-table-column prop="nickname" label="nickname" align="center" :min-width="160" />
    <el-table-column prop="enabled" label="enabled" align="center" :min-width="100" />
    <el-table-column prop="locked" label="locked" align="center" :min-width="80" />
  </el-table>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { userApi } from '@/views/system/api'
import { PageQuery } from '@/common/dto'
const pageParam = ref(new PageQuery())
const tableData = ref([])
const getList = () => {
  userApi.list.request(pageParam.value).then((res) => (tableData.value = Object.freeze(res.items)))
}
onMounted(() => {
  getList()
})
</script>
<style scoped></style>
