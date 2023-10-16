<template>
  <div class="theme-switch">
    <el-icon @click="toggleDark()" v-if="isDark">
      <Sunny />
    </el-icon>
    <el-icon @click="toggleDark()" v-else>
      <Moon />
    </el-icon>
  </div>
</template>
<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style scoped>
.theme-switch {
  cursor: pointer;
  margin: 0 10px;
}
</style>
