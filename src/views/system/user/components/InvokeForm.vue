<template>
  <el-form ref="refFrom" :model="formData" :rules="rules" status-icon label-width="140px" v-loading="loading">
    <el-form-item label="用户名" prop="nickname">
      <el-input v-model="formData.username" placeholder="用户名/登录名" disabled />
    </el-form-item>
    <el-form-item label="授权" prop="nickname">
      <el-select v-model="formData.ids" placeholder="请输入用户性别" multiple>
        <el-option v-for="item in roleList" :key="item.id" :label="item.name" :value="item.id" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleSubmit(refFrom)">保存</el-button>
    </el-form-item>
  </el-form>
</template>
<script setup lang="ts">
import { api } from '@/api/system/role/api'
import { permission } from '@/api/permission/api'
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
const loading = ref(false)
const rules = ref({})
interface FormData {
  id?: any
  username?: string
  ids?: Array<any>
}
const formData = ref<FormData>({})
const refFrom = ref()
const roleList = ref()
const emit = defineEmits(['finish'])
const remoteMethod = () => {
  api.all.request().then((res) => {
    roleList.value = res
  })
}
const handleSubmit = (form: any) => {
  loading.value = true
  permission.invokeRoles
    .request({
      id: formData.value.id,
      ids: formData.value.ids,
    })
    .then((res) => {
      ElMessage.success({
        message: '修改成功',
      })
      emit('finish')
    })
    .catch((err) => {
      console.error(err)
      ElMessage.error({
        message: `修改失败,${err.message}`,
      })
    })
    .finally(() => {
      loading.value = false
    })
}
const init = (id: any, username: string) => {
  remoteMethod()
  permission.userRoles.request({ id: id }).then((res) => {
    formData.value.id = id
    formData.value.username = username
    formData.value.ids = res
  })
}
defineExpose({ init })
</script>
