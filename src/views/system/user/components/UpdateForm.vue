<template>
  <CustomerFrom
    title="更新"
    submit-title="更新"
    :show="show"
    :form-data="formData"
    @finish="handleFinish"
    :loading="loading"
  />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import CustomerFrom from './From.vue'
import { api } from '@/api/system/user/api'
import { UserUpdateReqVo } from '@/views/system/user/types'
const props = defineProps({
  id: {
    default: '-1',
  },
})
let formData = ref<UserUpdateReqVo>({})
const loading = ref(false)
const show = ref(false)
const emit = defineEmits(['finish'])
const handleFinish = () => {
  loading.value = true
  api.update
    .request(formData.value)
    .then((res) => {
      ElMessage.success({
        message: '更新成功',
      })
      emit('finish')
    })
    .catch((err) => {
      console.error(err)
      ElMessage.error({
        message: `更新失败,${err.message}`,
      })
    })
    .finally(() => {
      loading.value = false
    })
}
const init = () => {
  api.get.request({ id: props.id }).then((res) => {
    formData.value = res
  })
}
defineExpose({ init })
</script>
