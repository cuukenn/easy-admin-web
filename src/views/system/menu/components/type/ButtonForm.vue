<template>
  <div>
    <el-form-item label="权限标识" prop="permission">
      <el-input v-model="formData.permission" placeholder="权限标识" />
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
