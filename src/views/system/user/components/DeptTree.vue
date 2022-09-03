<template>
  <el-tree :data="data" :props="defaultProps" />
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { deptApi } from '@/views/system/api'
const data = ref([])
const defaultProps = {
  children: 'children',
  label: 'label',
}
const getList = () => {
  deptApi.tree.request().then((res) => {
    data.value = Object.freeze(res.data)
  })
}
onMounted(() => {
  getList()
})
</script>
