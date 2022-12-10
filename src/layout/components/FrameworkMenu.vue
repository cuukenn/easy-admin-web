<template>
  <el-scrollbar>
    <div style="text-align: center; height: 40px; line-height: 40px; cursor: pointer" @click="() => router.push('/')">
      <el-icon>
        <Service />
      </el-icon>
      EASY-ADMIN
    </div>
    <el-menu :router="true">
      <el-menu-item index="/">
        <el-icon><icon-menu></icon-menu></el-icon>
        <template #title>首页</template>
      </el-menu-item>
      <framework-menu-item :menus="menus" />
    </el-menu>
  </el-scrollbar>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { Menu as IconMenu } from '@element-plus/icons-vue'
import router from '@/router'
import store from '@/store'
import FrameworkMenuItem from './FrameworkMenuItem.vue'
const menus = computed(() => store.getters.menus)
</script>
<style scoped></style>
