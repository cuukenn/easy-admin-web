<template>
  <template v-for="(item, index) in menus" :key="index">
    <template v-if="item.subMenus && item.subMenus.length > 0">
      <el-sub-menu :index="item.index">
        <template #title>
          <el-icon><component v-if="item.icon" :is="item.icon"></component></el-icon>{{ item.title }}
        </template>
        <template></template>
        <framework-menu-item :menus="item.subMenus" />
      </el-sub-menu>
    </template>
    <template v-else>
      <el-menu-item :index="item.index">
        <template #title>
          <el-icon><component v-if="item.icon" :is="item.icon"></component></el-icon>{{ item.title }}
        </template>
      </el-menu-item>
    </template>
  </template>
</template>
<script setup lang="ts">
interface Menu {
  index?: string
  title?: string
  icon?: string
  subMenus?: Array<Menu>
}
interface Props {
  menus?: Array<Menu>
}
const props = defineProps<Props>()
</script>
