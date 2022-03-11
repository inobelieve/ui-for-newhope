<template>
  <div id="app">
    <nh-button type="primary" size="small" @click="handleClick">
      <h1>点击{{clickTime}}次</h1>
    </nh-button>
    {{inputVal}}
    <nh-input v-model="inputVal"></nh-input>
  </div>
</template>

<script>
  import nhButton from './nh-button'
  import nhInput from './nh-input'
  export default {
    name: 'app',
    components: {nhButton, nhInput},
    data () {
      return {
        clickTime: 0,
        inputVal: '123'
      }
    },
    methods: {
      handleClick(e) {
        console.log(e)
        this.clickTime++
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
