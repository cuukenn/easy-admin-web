<template>
  <el-container>
    <el-main>
      <el-scrollbar>
        <el-table :data="tableData">
          <el-table-column prop="name" label="name" width="140" />
          <el-table-column prop="index" label="index" width="140" />
          <el-table-column prop="status" label="status" width="140" />
          <el-table-column prop="createTime" label="createTime" width="240" />
        </el-table>
      </el-scrollbar>
    </el-main>
  </el-container>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
interface Menu {
  name: string
  index: number
  status: boolean
  createTime: string
}
const menu: Menu = {
  name: 'menu-1',
  index: 1,
  status: true,
  createTime: '2021/10/01 12:00:00',
}
const tableData = ref(Array.from({ length: 2 }).fill(menu))
</script>
<style scoped></style>
