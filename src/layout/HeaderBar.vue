<template>
  <div class="header">
    <div class="header-left">
      <!-- 收缩按钮 -->
      <el-button link @click="store.toggleAsideCollapse">
        <el-icon :size="22" v-if="store.asideCollapse">
          <expand />
        </el-icon>
        <el-icon :size="22" v-else>
          <Fold />
        </el-icon>
      </el-button>
      <!-- 面包屑 -->
      <BreadCrumb></BreadCrumb>
    </div>
    <div class="header-right">
      <!-- 全屏组件 -->
      <FullScreen></FullScreen>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from '../store/app'
import BreadCrumb from './components/BreadCrumb.vue'
import FullScreen from './components/FullScreen.vue'
const store = useAppStore()
</script>

<style scoped lang="scss">
.header {
  display: flex;
  width: 100%;
  height: 60px;
  background-color: rgb(192, 160, 223);

  align-items: center;
  .header-left {
    margin: 20px;
    display: flex;
    align-items: center;
    .el-breadcrumb {
      margin-left: 10px;
    }
  }
}
</style>
