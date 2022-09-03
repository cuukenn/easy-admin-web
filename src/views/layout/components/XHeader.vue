<template>
  <div class="toolbar">
    <div class="header">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="item in breadCrumbs" :key="item.path">{{ item.title }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="action-group">
      <el-icon style="margin-right: 10px; margin-top: 1px">
        <search />
      </el-icon>
      <el-icon style="margin-right: 10px; margin-top: 1px">
        <message />
      </el-icon>
      <div style="display: inline-block; margin-right: 9px">
        <el-dropdown>
          <el-icon style="margin-right: 10px; margin-top: 1px"><setting /></el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>action1</el-dropdown-item>
              <el-dropdown-item>action2</el-dropdown-item>
              <el-dropdown-item>action3</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span>settings</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import router from '@/router'
import { ArrowRight } from '@element-plus/icons-vue'
import { Ref, ref, watch } from 'vue'
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
  right: 20px;
}
.toolbar > .action-group {
  position: absolute;
  right: 20px;
}
</style>
