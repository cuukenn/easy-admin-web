<template>
  <el-container>
    <el-main>
      <el-scrollbar>
        <el-table :data="tableData">
          <el-table-column prop="username" label="username" width="140" />
          <el-table-column prop="nickname" label="nickname" width="120" />
          <el-table-column prop="enabled" label="enabled" width="100" />
          <el-table-column prop="locked" label="locked" width="80" />
        </el-table>
      </el-scrollbar>
    </el-main>
  </el-container>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
interface User {
  username: string
  nickname: string
  enabled: boolean
  locked: boolean
}
const user: User = {
  username: 'test001',
  nickname: 'nickname001',
  enabled: true,
  locked: false,
}
const tableData = ref(Array.from({ length: 2 }).fill(user))
</script>
<style scoped></style>
