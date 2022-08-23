<template>
  <div class="toolbar">
    <div class="action-group">
      <el-icon style="margin-right: 10px; margin-top: 1px">
        <search />
      </el-icon>
      <el-icon style="margin-right: 10px; margin-top: 1px">
        <message />
      </el-icon>
      <div style="display: inline-block; margin-right: 9px">
        <el-dropdown>
          <el-icon style="margin-right: 10px; margin-top: 1px"><setting /></el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>action1</el-dropdown-item>
              <el-dropdown-item>action2</el-dropdown-item>
              <el-dropdown-item>action3</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span>settings</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped>
.toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
.toolbar > .action-group {
  position: absolute;
  right: 20px;
}
</style>
