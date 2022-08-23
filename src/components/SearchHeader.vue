<template>
  <div>
    <el-row>
      <el-col :span="8">
        <el-input type="text">
          <template #prepend> <strong>用户名</strong></template>
        </el-input>
      </el-col>
      <el-col :span="8">
        <el-input type="tel">
          <template #prepend> <strong>手机号</strong></template>
        </el-input>
      </el-col>
      <el-col :span="8">
        <el-select placeholder="账户状态">
          <template #prefix>001</template>
          <el-option v-for="item in accountStatus" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-button type="primary" :icon="Search">搜索</el-button>
        <el-button type="warning">重置</el-button>
      </el-col>
      <el-col :span="8"> </el-col>
      <el-col :span="8"> </el-col>
    </el-row>
  </div>
</template>
<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
const accountStatus = ref([
  {
    label: '正常',
    value: 'true',
  },
  {
    label: '停用',
    value: 'false',
  },
])
</script>
<style scoped></style>
