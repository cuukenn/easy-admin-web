<template>
  <el-container>
    <el-aside width="200px" class="aside">
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
import UserList from './components/UserList.vue'
import SearchHeader from '@/components/SearchHeader.vue'
import ListOption from '@/components/ListOption.vue'
import DeptTree from './components/DeptTree.vue'
</script>
<style scoped>
.aside {
  border-right: 1px dotted black;
}
</style>
