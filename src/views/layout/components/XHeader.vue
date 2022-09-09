<template>
  <div class="toolbar">
    <div>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="item in breadCrumbs" :key="item.path">{{ item.title }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>
      <div></div>
      <el-icon>
        <search />
      </el-icon>
      <el-icon>
        <Message />
      </el-icon>
      <el-dropdown :style="{ width: '160px', cursor: 'pointer' }">
        <template #default>
          <span class="el-dropdown-link">
            <el-icon class="el-icon--right">
              <setting />
            </el-icon>
            设置
          </span>
        </template>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click="openThemeOption">主题设置</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
  <XTheme ref="ThemeOptionRef"></XTheme>
</template>
<script lang="ts" setup>
import router from '@/router'
import { ArrowRight, Pointer } from '@element-plus/icons-vue'
import { Ref, ref, watch } from 'vue'
import XTheme from './XTheme.vue'
interface BreadCrumb {
  path?: string
  title?: string
}
const resolveBreadCrumb = (path: string): Array<BreadCrumb> => {
  const macthed = router.resolve(path).matched
  const rs: BreadCrumb[] = []
  for (let item of macthed) {
    if (item.path === '/' || item.path === '') {
      continue
    }
    rs.push({
      path: item.path,
      title: (item.meta.title || '未定义') as string,
    })
  }
  return rs
}
const openThemeOption = () => {
  ThemeOptionRef.value.open()
}
const ThemeOptionRef = ref()
const breadCrumbs: Ref<Array<BreadCrumb>> = ref(resolveBreadCrumb(router.currentRoute.value.path))
watch(
  () => router.currentRoute.value.path,
  (toPath) => {
    breadCrumbs.value = resolveBreadCrumb(toPath)
  },
  { immediate: true, deep: true },
)
</script>
<style scoped>
.toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.toolbar > *:first-child {
  width: 100%;
}
.toolbar > *:last-child {
  min-width: 240px;
  display: inline-flex;
  align-items: center;
}
.toolbar > *:last-child > *:first-child {
  width: 100%;
}
.toolbar > *:last-child > *:nth-child(n + 2) {
  margin-right: 10px;
}
</style>
