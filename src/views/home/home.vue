<template>
  <div>home</div>
  <homeSon @successY="successDend" :msgYY1="msgg" ref="homeSonRef" ></homeSon>
  <button @click="handleClick">提交啊啊啊</button>
</template>

<script setup>
import { ref } from 'vue'
import homeSon from './homeSon.vue'
// import { useAppStore } from '../../store/app'
// const store = useAppStore()
// const data = store.topNav
// console.log(data[0].closable)

const msgg = '父亲给儿子传数据'

const successDend = (e) => {
  console.log('success', e)
}


const homeSonRef = ref(null)
const handleClick = () => {
  const msg = homeSonRef.value.state.msg
  console.log(msg)
  homeSonRef.value.submit()
}

</script>

<style scoped lang="scss"></style>
