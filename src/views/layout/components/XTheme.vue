<template>
  <el-drawer v-model="show" :with-header="false">
    <h4>主题风格设置</h4>
    <div class="option">
      <span>暗黑模式</span>
      <el-switch v-model="isDark" @change.stop="toggleDark()" />
    </div>
    <div class="option">
      <span>显示logo</span>
      <el-switch />
    </div>
    <hr />
    <h4>系统布局设置</h4>
  </el-drawer>
</template>
<script lang="ts" setup>
import { ref, defineExpose } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
const open = () => {
  show.value = true
}
const close = () => {
  show.value = false
}
const show = ref(false)
const isDark = useDark()
const toggleDark = useToggle(isDark)
defineExpose({ open, close, show })
</script>
<style scoped>
.option {
  display: flex;
  align-items: center;
  margin: 5px 0px;
  width: 100%;
}
.option > *:first-child {
  width: 100%;
  margin-left: 20px;
}
.option > *:last-child {
  min-width: 50px;
  max-width: 260px;
  margin-right: 20px;
}
</style>
