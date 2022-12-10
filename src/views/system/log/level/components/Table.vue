<template>
  <el-row>
    <el-col :span="3"
      ><el-button type="primary" @click="reset">重置</el-button>
      <el-button type="success" @click="refresh">刷新</el-button>
    </el-col>
    <el-col :span="4">
      <el-input v-model="table.query.filter" placeholder="日志名称" @input="handleRestOption" />
    </el-col>
  </el-row>
  <el-row>
    <el-table :data="table.data" row-key="id" fit :border="true">
      <el-table-column prop="name" label="日志名称" align="center" :min-width="80" />
      <el-table-column prop="level" label="日志级别" align="center" :min-width="80">
        <template #default="scope">
          <el-radio-group v-model="scope.row.level" @change="updateLogLevel(scope.row)">
            <el-radio-button label="INFO" />
            <el-radio-button label="WARN" />
            <el-radio-button label="ERROR" />
            <el-radio-button label="DEBUG" />
            <el-radio-button label="TRACE" />
          </el-radio-group>
        </template>
      </el-table-column>
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
import { api } from '@/api/infra/level/api'
import { ElMessage } from 'element-plus'
import { debounce } from 'lodash'
import { onMounted, reactive, ref } from 'vue'
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
const reset = () => {
  api.reset
    .request()
    .then((res) => {
      ElMessage.success({
        message: '重置成功',
      })
    })
    .catch((err) => {
      console.error(err)
      ElMessage.error({
        message: '重置失败',
      })
    })
    .finally(refresh)
}
const handleRestOption = debounce(refresh, 500)
const updateLogLevel = (row: any) => {
  api.update
    .request(row)
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
    .finally(refresh)
}
onMounted(() => {
  refresh()
})
defineExpose({ refresh })
</script>
<style scoped></style>
