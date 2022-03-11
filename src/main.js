import Vue from 'vue'
import App from './App.vue'
import {Button, Input } from 'element-ui';

Vue.use(Button)
Vue.use(Input)

new Vue({
  el: '#app',
  render: h => h(App)
})
