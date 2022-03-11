<template>
    <div @click="btnClick" class="nh-button">
      <slot name="default">暂无名字</slot>
    </div>
</template>

<script>
    export default {
      name: 'nh-button',
      methods: {
        btnClick() {
          this.$emit('click', 'nh-button')
        }
      }
    }
</script>

<style lang="scss" scoped>
  .nh-button {
    background: red;
  }
</style>
