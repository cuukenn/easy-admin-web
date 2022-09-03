<template>
  <el-card>
    用户状态
    <hr />
    <el-row>
      <el-col :span="1"></el-col>
      <el-col :span="10">
        <el-card :body-style="{ padding: '0px' }">
          <online-user-pie></online-user-pie>
        </el-card>
      </el-col>
      <el-col :span="2"></el-col>
      <el-col :span="10">
        <el-card :body-style="{ padding: '0px' }">
          <online-user-location-pie></online-user-location-pie>
        </el-card>
      </el-col>
      <el-col :span="1"></el-col>
    </el-row>
  </el-card>
</template>
<script lang="ts" setup>
import OnlineUserPie from './components/onlineUserPie.vue'
import OnlineUserLocationPie from './components/onlineUserLocationPie.vue'
</script>
<style scoped></style>
