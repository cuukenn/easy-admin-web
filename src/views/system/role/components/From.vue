<template>
  <el-form ref="refFrom" :model="formData" :rules="rules" status-icon label-width="80px" v-loading="loading">
    <el-form-item label="角色名称" prop="name">
      <el-input v-model="formData.name" placeholder="角色名称" />
    </el-form-item>
    <el-form-item label="角色标识" prop="permission">
      <el-input v-model="formData.permission" placeholder="角色标识" />
    </el-form-item>
    <el-form-item label="角色描述" prop="description">
      <el-input v-model="formData.description" placeholder="角色描述" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleSubmit(refFrom)">{{ submitTitle }}</el-button>
    </el-form-item>
  </el-form>
</template>
<script setup lang="ts">
import { RoleCreateReqVo, RoleUpdateReqVo } from '@/views/system/role/types'
import { ref, defineEmits, onMounted } from 'vue'
import { rules } from './formUIData'
interface Props {
  title?: string
  submitTitle?: string
  loading?: boolean
  formData: RoleCreateReqVo | RoleUpdateReqVo
}
const refFrom = ref({})
const props = defineProps<Props>()
const emit = defineEmits(['finish', 'cancer'])
const handleSubmit = async (form: any) => {
  try {
    await form.validate()
    emit('finish')
  } catch (e) {
    console.error(e)
  }
}
onMounted(() => {
  console.log(props)
})
</script>
<style scoped></style>
