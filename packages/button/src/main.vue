<template>
  <div>
    <el-button size="small" type="primary" @click="handleClickAdd">新增</el-button>
    <el-button size="small" type="primary" @click="handleClickBtn">{{ text }}</el-button>
  </div>
</template>

<script>
export default {
  name: 'GuButton',
  props: {
    text: String
  },
  methods: {
    handleClickAdd() {
      console.log('handleClickAdd')
    },
    handleClickBtn() {
      console.log('handleClickBtn')
      this.$store.dispatch(('user/getInfo'))
    }
  }
}
</script>

<style lang="scss"></style>
