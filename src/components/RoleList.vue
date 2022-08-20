<template>
  <el-container>
    <el-main>
      <el-scrollbar>
        <el-table :data="tableData">
          <el-table-column prop="role" label="role" width="140" />
        </el-table>
      </el-scrollbar>
    </el-main>
  </el-container>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
interface Role {
  role: string
}
const role: Role = {
  role: 'admin',
}
const tableData = ref(Array.from({ length: 2 }).fill(role))
</script>
<style scoped></style>
