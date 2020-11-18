<template>
  <el-button size="small" type="primary">{{ text }}</el-button>
</template>

<script>
  export default {
    name: 'MyButton',
    props: {
      text: String
    }
  }
</script>

<style lang="scss"></style>
