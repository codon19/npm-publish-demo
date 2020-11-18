<template>
  <el-button size="small" type="primary" @click="handleClickBtn">{{ text }}</el-button>
</template>

<script>
  export default {
    name: 'MyButton',
    props: {
      text: String
    },
    methods() {
      handleClickBtn() {
        this.$store.dispatch(('user/getInfo'))
      }
    }
  }
</script>

<style lang="scss"></style>
