/**
 * @Description: vue config文件
 * @Author: inobelieve by WebStorm
 * @Date: 2022-03-15
 * @LastEditTime: 10:58:38
 */
import Vue from "vue"
import App from './App.vue'
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI)

new Vue({
    el: '#app',
    render: h => h(App)
})
