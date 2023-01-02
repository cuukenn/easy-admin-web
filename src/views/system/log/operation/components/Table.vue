<template>
  <el-row>
    <el-button type="success" @click="refresh">刷新</el-button>
  </el-row>
  <el-row>
    <el-table :data="table.data" row-key="id" fit :border="true">
      <el-table-column prop="uriDescription" label="资源描述" align="center" :min-width="80" />
      <el-table-column prop="uri" label="资源路径" align="center" :min-width="80" />
      <el-table-column prop="method" label="资源方法" align="center" :min-width="80" />
      <el-table-column prop="duration" label="耗时" align="center" :min-width="80" />
      <el-table-column prop="userIp" label="用户IP" align="center" :min-width="80" />
      <el-table-column prop="userAgent" label="用户代理" align="center" :min-width="80" />
    </el-table>
  </el-row>
  <el-pagination
    small
    background
    layout="prev, pager, next, jumper, ->,sizes, total"
    v-model:current-page="table.query.pageNum"
    v-model:page-size="table.query.pageSize"
    :total="table.total"
    :page-sizes="[5, 10, 20]"
    @size-change="refresh"
    @current-change="refresh"
  />
</template>
<script lang="ts" setup>
import { api } from '@/api/infra/operationLog/api';
import { onMounted, reactive } from 'vue';
const table = reactive({
  total: 0,
  data: [],
  query: {
    pageNum: 1,
    pageSize: 10,
    filter: '',
  },
})
const refresh = () => {
  getList()
}
const getList = () => {
  api.page.request(table.query).then((res) => {
    table.total = Number(res.pageTotal)
    table.data = res.items
  })
}
onMounted(() => {
  refresh()
})
defineExpose({ refresh })
</script>
<style scoped></style>
