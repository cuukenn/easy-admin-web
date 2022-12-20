<template>
  <el-form ref="refFrom" :model="formData" :rules="rules" status-icon label-width="140px" v-loading="loading">
    <el-form-item label="角色名" prop="name">
      <el-input v-model="formData.name" placeholder="角色名" disabled />
    </el-form-item>
    <el-form-item label="授权" prop="ids">
      <el-tree-select
        v-model="formData.ids"
        check-strictly
        multiple
        :data="treeSelectData"
        :props="selectTreeProps"
        placeholder="父级菜单"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleSubmit(refFrom)">保存</el-button>
    </el-form-item>
  </el-form>
</template>
<script setup lang="ts">
import { api } from '@/api/system/menu/api'
import { permission } from '@/api/permission/api'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
const loading = ref(false)
const rules = ref({})
interface FormData {
  id?: any
  name?: string
  ids?: Array<any>
}
const formData = ref<FormData>({})
const refFrom = ref()
const treeSelectData = ref()
const selectTreeProps = {
  label: 'label',
  value: 'value',
  children: 'children',
}
const emit = defineEmits(['finish'])
const remoteMethod = () => {
  api.treeSelect.request().then((res) => {
    treeSelectData.value = res
  })
}
const handleSubmit = (form: any) => {
  loading.value = true
  permission.invokeMenus
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
  permission.roleMenus.request({ id: id }).then((res) => {
    formData.value.id = id
    formData.value.name = username
    formData.value.ids = res
  })
}
defineExpose({ init })
</script>
