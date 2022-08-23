<template>
  <div class="btn">
    <el-button type="primary" :icon="DocumentAdd">新增</el-button>
    <el-button type="warning" :icon="Edit">修改</el-button>
    <el-button type="danger" :icon="Delete">删除</el-button>
  </div>
</template>
<script lang="ts" setup>
import { Edit, Delete, DocumentAdd } from '@element-plus/icons-vue'
</script>
<style scoped>
.btn {
  margin-right: 16px;
}
</style>
