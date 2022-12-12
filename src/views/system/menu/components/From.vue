<template>
  <el-form ref="refFrom" :model="formData" :rules="computedRules" status-icon label-width="120px" v-loading="loading">
    <el-form-item label="父级菜单" prop="parentId">
      <el-tree-select
        v-model="formData.parentId"
        check-strictly
        :data="data.treeSelectData"
        :props="selectTreeProps"
        placeholder="父级菜单"
      />
    </el-form-item>
    <el-form-item label="菜单类型" prop="type">
      <el-radio v-model="formData.type" :label="item.value" v-for="(item, index) in data.types">{{
        item.label
      }}</el-radio>
    </el-form-item>
    <el-row>
      <el-col :span="12">
        <el-form-item label="菜单名称" prop="name">
          <el-input v-model="formData.name" placeholder="菜单名称" /> </el-form-item
      ></el-col>
      <el-col :span="12">
        <el-form-item label="菜单顺序" prop="number">
          <el-input v-model="formData.number" placeholder="菜单顺序" type="number" />
        </el-form-item>
      </el-col>
    </el-row>
    <directory-from v-show="formData.type === MenuTypeEnum.DIRECTORY" :form-data="formData" />
    <menu-from v-show="formData.type === MenuTypeEnum.MENU" :form-data="formData" />
    <button-from v-show="formData.type === MenuTypeEnum.BUTTON" :form-data="formData" />
    <el-form-item>
      <el-button type="primary" @click="handleSubmit(refFrom)">{{ submitTitle }}</el-button>
    </el-form-item>
  </el-form>
</template>
<script setup lang="ts">
import { ref, defineEmits, computed, onMounted, reactive } from 'vue'
import { rules } from './formUIData'
import DirectoryFrom from './type/DirectoryFrom.vue'
import MenuFrom from './type/MenuForm.vue'
import ButtonFrom from './type/ButtonForm.vue'
import { api } from '@/api/system/menu/api'
import { MenuCreateReqVo, MenuTypeEnum, MenuUpdateReqVo } from '@/views/system/menu/types'
const data = reactive({
  treeSelectData: [],
  types: [] as any,
  types4Label: {},
  types4Value: {},
})
const selectTreeProps = {
  label: 'label',
  value: 'value',
  children: 'children',
}
const refFrom = ref({})
interface Props {
  title?: string
  submitTitle?: string
  loading?: boolean
  formData: MenuCreateReqVo | MenuUpdateReqVo
}
const props = defineProps<Props>()
const computedRules = computed(() => {
  if (props.formData.type === MenuTypeEnum.DIRECTORY) {
    return rules.directory
  }
  if (props.formData.type === MenuTypeEnum.MENU) {
    return rules.menu
  }
  if (props.formData.type === MenuTypeEnum.BUTTON) {
    return rules.button
  }
  return {}
})
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
  api.types.request().then((res) => {
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
  api.treeSelect
    .request()
    .then((res) => {
      data.treeSelectData = res
    })
    .catch((err) => {
      console.error(err)
    })
})
</script>
<style scoped></style>
