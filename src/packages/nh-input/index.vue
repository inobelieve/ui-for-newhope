<template>
    <div class="nh-button">
      <el-input :value="inputData" @input="handleInput" @change="handleChange" placeholder="请输入内容"></el-input>
    </div>
</template>

<script>
    export default {
      name: 'nh-input',
      model: {
        event: 'input',
        prop: 'inputData'
      },
      props: {
        inputData: {
          type: [String, Number],
          default: ''
        }
      },
      data() {
        return {
        }
      },
      methods: {
        handleInput(val) {
          this.$emit('input', val)
        },
        handleChange(val) {
          this.$emit('change', val)
        }
      }
    }
</script>

<style scoped>
  .nh-button {
  }
</style>
