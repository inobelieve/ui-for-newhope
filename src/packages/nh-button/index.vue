<template>
    <div class="nh-button">
      <el-button :type="type" @click="btnClick">
        <slot name="default">暂无名字</slot>
      </el-button>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {Button} from 'element-ui'
    Vue.use(Button)
    export default {
      name: 'nh-button',
      props: {
        type: {
          type: String,
          default: 'default',
          required: false
        }
      },
      methods: {
        btnClick(e) {
          this.$emit('click', e)
        }
      }
    }
</script>

<style scoped>
  .nh-button {
  }
</style>
