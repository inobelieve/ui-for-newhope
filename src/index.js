/**
 * @Description: vue config文件
 * @Author: inobelieve by WebStorm
 * @Date: 2022-03-11
 * @LastEditTime: 14:08:06
 */

import nhButton from './nh-button/index.vue';
import nhInput from './nh-input/index.vue';

function install(component) {
  component.install = Vue => Vue.component(component.name, component);
}

install(nhButton)
install(nhInput)

const components = [
  nhButton,
  nhInput
]

const all = {
  install(Vue) {
    components.forEach(component => {
      Vue.component(component.name, component);
    })
  }
}
let nhUI = {}
Object.assign(nhUI, all, installedComponents)
export {
  all,
  nhButton,
  nhInput
}
