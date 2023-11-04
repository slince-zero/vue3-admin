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
      <!-- 黑暗模式 -->
      <DarkMode></DarkMode>
      <!-- 头像下拉框 -->
      <el-dropdown trigger="click">
        <img class="avator" src="../assets/avator.png" alt="" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
  import { useAppStore } from '../store/app'
  import BreadCrumb from './components/BreadCrumb.vue'
  import FullScreen from './components/FullScreen.vue'
  import DarkMode from './components/darkmode.vue'
  const store = useAppStore()
</script>

<style scoped lang="scss">
  .header {
    display: flex;
    width: 100%;
    height: 60px;
    justify-content: space-between;

    background-color: rgb(192, 160, 223);

    align-items: center;
    .header-left {
      margin: 0 20px;
      display: flex;
      align-items: center;
      .el-breadcrumb {
        margin-left: 10px;
      }
    }
    .header-right {
      display: flex;
      margin: 0 20px;
      align-items: center;
      .avator {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
  }
</style>
