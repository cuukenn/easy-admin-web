<template>
  <el-container>
    <el-aside width="200px">
      <framework-menu />
    </el-aside>
    <el-container>
      <el-header>
        <framework-header />
        <hr />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import FrameworkMenu from './components/FrameworkMenu.vue'
import FrameworkHeader from './components/FrameworkHeader.vue'
</script>
<style scoped></style>
