<template>
  <div>
    <el-form-item label="菜单图标" prop="icon">
      <el-input v-model="formData.icon" placeholder="菜单图标">
        <template #prepend>
          <el-icon><component v-if="formData.icon" :is="formData.icon"></component></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item label="菜单路由路径" prop="routerPath">
      <el-input v-model="formData.routerPath" placeholder="菜单路由路径" />
    </el-form-item>
  </div>
</template>
<script setup lang="ts">
import { MenuCreateReqVo, MenuUpdateReqVo } from '@/views/system/menu/types'
interface Props {
  formData: MenuCreateReqVo | MenuUpdateReqVo
}
const props = defineProps<Props>()
</script>
