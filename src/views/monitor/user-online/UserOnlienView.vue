<template>
  <el-container>
    <el-main>
      <list-option></list-option>
      <online-user-list></online-user-list>
    </el-main>
  </el-container>
</template>
<script lang="ts" setup>
import ListOption from '@/components/ListOption.vue'
import OnlineUserList from './OnlineUserList.vue'
</script>
<style scoped></style>
