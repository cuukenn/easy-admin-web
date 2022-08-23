<template>
  <el-scrollbar>
    <div style="text-align: center; height: 40px; line-height: 40px">
      <el-icon>
        <Service />
      </el-icon>
      X-ADMIN
    </div>
    <el-menu :router="true">
      <el-sub-menu v-for="(item, index) in menus" :key="index" :index="item.index">
        <template #title> <el-icon></el-icon>{{ item.title }} </template>
        <el-menu-item v-for="(subItem, index) in item.subMenus" :key="index" :index="subItem.index">
          {{ subItem.title }}
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-scrollbar>
</template>
<script lang="ts" setup>
import { Ref, ref } from 'vue'
import { MenuItem } from '@/views/system/dto'
const menus: Ref<Array<MenuItem>> = ref([
  {
    index: '/system',
    title: '系统管理',
    subMenus: [
      { index: '/system/user', title: '用户管理', subMenus: [] },
      { index: '/system/role', title: '角色管理', subMenus: [] },
      { index: '/system/menu', title: '菜单管理', subMenus: [] },
    ],
  },
  {
    index: '/monitor',
    title: '系统监控',
    subMenus: [{ index: '/', title: 'TODO', subMenus: [] }],
  },
])
</script>
<style scoped></style>
