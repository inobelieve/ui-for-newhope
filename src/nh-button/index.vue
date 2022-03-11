<template>
    <div class="nh-button">
      <el-button :type="type" @click="btnClick">
        <slot name="default">暂无名字</slot>
      </el-button>
    </div>
</template>

<script>
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

<style lang="scss" scoped>
  .nh-button {
  }
</style>
