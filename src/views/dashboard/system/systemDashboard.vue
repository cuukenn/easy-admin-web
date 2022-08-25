<template>
  <el-card>
    系统状态
    <hr />
    <el-row>
      <el-col :span="1"></el-col>
      <el-col :span="22">
        <el-card :body-style="{ padding: '0px' }">
          <system-biz-log></system-biz-log>
        </el-card>
      </el-col>
      <el-col :span="1"></el-col>
    </el-row>
  </el-card>
</template>
<script lang="ts" setup>
import SystemBizLog from './systemBizLog.vue'
</script>
<style scoped></style>
