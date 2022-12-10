<template>
  <el-form ref="refFrom" :model="formData" :rules="rules" status-icon label-width="140px" v-loading="loading">
    <el-row>
      <el-col :span="12">
        <el-form-item label="用户名称/登录名" prop="username">
          <el-input v-model="formData.username" placeholder="请输入用户名称" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="昵称" prop="nickname">
          <el-input v-model="formData.nickname" placeholder="请输入用户昵称" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="性别" prop="gender">
          <el-select v-model="formData.gender" placeholder="请输入用户性别">
            <el-option v-for="item in data.types" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="头像" prop="avatar">
          <el-input v-model="formData.avatar" placeholder="请输入用户头像" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="用户邮件" prop="email">
          <el-input v-model="formData.email" placeholder="用户邮件" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="用户地址" prop="location">
          <el-input v-model="formData.location" placeholder="用户地址" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item>
      <el-button type="primary" @click="handleSubmit(refFrom)">{{ submitTitle }}</el-button>
    </el-form-item>
  </el-form>
</template>
<script setup lang="ts">
import { UserCreateReqVo, UserUpdateReqVo } from '@/views/system/user/types'
import { ref, reactive, defineEmits, onMounted } from 'vue'
import { rules } from './formUIData'
import { api } from '@/api/system/user/api'
const data = reactive({
  treeSelectData: [],
  types: [] as any,
  types4Label: {},
  types4Value: {},
})
interface Props {
  title?: string
  submitTitle?: string
  loading?: boolean
  formData: UserCreateReqVo | UserUpdateReqVo
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
  api.genderTypes.request().then((res) => {
    const lMap = new Map()
    const vMap = new Map()
    for (const item of res) {
      lMap.set(item.label, item.value)
      vMap.set(item.value, item.label)
    }
    data.types = res
    data.types4Label = lMap
    data.types4Value = vMap
  })
})
</script>
<style scoped></style>
