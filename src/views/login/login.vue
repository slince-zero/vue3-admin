<template>
  <div class="container">
    <el-form ref="formRef" :model="formList" :rules="rules">
      <div class="title">vue3-admin</div>
      <el-form-item prop="name">
        <el-input
          v-model="formList.name"
          :prefix-icon="Avatar"
          clearable
          placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="formList.password"
          :prefix-icon="Lock"
          clearable
          show-password
          type="password"
          placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-button color="#626aef" class="btn" @click="handleClickLogin(formRef)"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script setup>
import { Avatar, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { login } from '../../api/user'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()
// 定义表单实例，用于验证
const formRef = ref(null)

// 定义要绑定的表单数据
const formList = reactive({
  name: 'admin',
  password: '123456',
})

// 定义验证规则
const rules = {
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' },
  ],
}

const handleClickLogin = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      // 成功
      login(formList).then(() => {
        ElMessage('登录成功', 'success')
        router.push('/home')
      })
    } else {
      // 失败
      return false
    }
  })
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
  background-color: #2d3a4b;
  .title {
    font-size: 40px;
    color: #ffff;
    margin-bottom: 10px;
  }
  .el-form {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .el-input {
      width: 400px;
      height: 45px;
      background-color: #283443 !important;
    }
  }
  .btn {
    width: 400px;
    height: 40px;
    margin-top: 20px;
  }
}
</style>
