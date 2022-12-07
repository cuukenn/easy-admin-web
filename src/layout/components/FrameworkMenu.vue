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
      <el-sub-menu v-for="(item, index) in menus" :key="index" :index="item.index">
        <template #title>
          <el-icon><component v-if="item.icon" :is="item.icon"></component></el-icon>{{ item.title }}
        </template>
        <el-menu-item v-for="(subItem, index) in item.subMenus" :key="index" :index="subItem.index">
          <template #title>
            <el-icon><component v-if="subItem.icon" :is="subItem.icon"></component></el-icon>{{ subItem.title }}
          </template>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-scrollbar>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { Menu as IconMenu } from '@element-plus/icons-vue'
import router from '@/router'
import store from '@/store'
const menus = computed(() => store.getters.menus)
</script>
<style scoped></style>
