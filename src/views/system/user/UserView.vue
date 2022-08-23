<template>
  <el-container>
    <el-aside width="200px">
      <el-main>
        <dept-tree></dept-tree>
      </el-main>
    </el-aside>
    <el-main>
      <search-header></search-header>
      <br />
      <hr />
      <br />
      <list-option></list-option>
      <user-list></user-list>
    </el-main>
  </el-container>
</template>
<script lang="ts" setup>
import UserList from './UserList.vue'
import SearchHeader from '@/components/SearchHeader.vue'
import ListOption from '@/components/ListOption.vue'
import DeptTree from './DeptTree.vue'
</script>
<style scoped></style>
