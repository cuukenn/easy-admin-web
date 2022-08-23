<template>
  <el-container>
    <el-aside width="200px">
      <x-menu></x-menu>
    </el-aside>
    <el-container>
      <el-header>
        <x-header></x-header>
        <hr />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import XMenu from './XMenu.vue'
import XHeader from './XHeader.vue'
</script>
<style scoped></style>
