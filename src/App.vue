<template>
  <div id="app">
    <nh-button @click="clickTime++">
      <h1>点击{{clickTime}}次</h1>
    </nh-button>
  </div>
</template>

<script>
  import nhButton from './nh-button'
  export default {
    name: 'app',
    components: {nhButton},
    data () {
      return {
        clickTime: 0
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
