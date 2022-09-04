<template>
  <el-table :data="tableData" :fit="true" :border="true">
    <el-table-column prop="username" label="username" align="center" :min-width="160" />
    <el-table-column prop="nickname" label="nickname" align="center" :min-width="160" />
    <el-table-column prop="tel" label="tel" align="center" :min-width="100" />
    <el-table-column prop="enabled" label="enabled" align="center" :min-width="100">
      <template #default="scope">
        <div v-html="userStaus2Desc(scope.row.enabled)"></div>
      </template>
    </el-table-column>
    <el-table-column prop="locked" label="locked" align="center" :min-width="80" />
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
import { ref, onMounted } from 'vue'
import { userApi } from '@/views/system/api'
import { PageQuery } from '@/common/dto'
const pageParam = ref(new PageQuery())
const tableData = ref([])
const getList = () => {
  userApi.list.request(pageParam.value).then((res) => (tableData.value = Object.freeze(res.items)))
}
const userStaus2Desc = (flag: boolean): string => {
  const str = flag ? '正常' : '停用'
  const strClass = flag ? 'user-status-enabled' : 'user-status-locked'
  return `<span class="${strClass}">${str}</span>`
}
onMounted(() => {
  getList()
})
</script>
<style scoped></style>
<style>
.user-status-enabled {
  color: green;
}
.user-status-locked {
  color: red;
}
</style>
