<template>
  son

  <button @click="handleClick">点一下</button>

  <div style="border: 1px solid saddlebrown">{{ msgYY1 }}</div>
</template>

<script setup>
import { reactive } from 'vue'
const emits = defineEmits(['successY'])

const handleClick = (s) => {
  emits('successY', '子组件向父组件传数据')
}
defineProps(['msgYY1'])


const state = reactive({
  msg: 'hello',
})
const submit = () => {
  state.msg = 'hello world,你调用了子组件方法'
  console.log(state.msg)
}

defineExpose({
  state,
  submit,
})



</script>
