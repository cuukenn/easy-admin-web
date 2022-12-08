<template>
  <CustomerFrom submit-title="新增" :form-data="formData" @finish="handleFinish" :loading="loading"></CustomerFrom>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import CustomerFrom from './From.vue'
import { api } from '@/api/system/menu/api'
import { MenuCreateReqVo } from '@/views/system/menu/types'
const formData: MenuCreateReqVo = reactive({})
const loading = ref(false)
const emit = defineEmits(['finish'])
const handleFinish = () => {
  loading.value = true
  api.create
    .request(formData)
    .then((res) => {
      ElMessage.success({
        message: '添加成功',
      })
      emit('finish')
    })
    .catch((err) => {
      console.error(err)
      ElMessage.error({
        message: `添加失败,${err.message}`,
      })
    })
    .finally(() => {
      loading.value = false
    })
}
</script>
