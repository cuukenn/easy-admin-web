<template>
  <el-scrollbar>
    <div style="text-align: center; height: 40px; line-height: 40px">
      <el-icon>
        <Service />
      </el-icon>
      X-ADMIN
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
import { Ref, ref } from 'vue'
import { MenuItem } from '@/views/system/dto'
import { Menu as IconMenu } from '@element-plus/icons-vue'
const menus: Ref<Array<MenuItem>> = ref([
  {
    index: '/system',
    title: '系统管理',
    icon: 'setting',
    subMenus: [
      { index: '/system/user', title: '用户管理', icon: 'user', subMenus: [] },
      { index: '/system/role', title: '角色管理', icon: 'avatar', subMenus: [] },
      { index: '/system/menu', title: '菜单管理', icon: 'menu', subMenus: [] },
    ],
  },
  {
    index: '/monitor',
    title: '系统监控',
    icon: 'monitor',
    subMenus: [{ index: '/monitor/user-online', title: '在线用户', icon: 'user', subMenus: [] }],
  },
])
</script>
<style scoped></style>
