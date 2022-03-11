/**
 * @Description: vue config文件
 * @Author: inobelieve by WebStorm
 * @Date: 2022-03-11
 * @LastEditTime: 14:08:06
 */

import nhButton from './nh-button/index.vue';
import nhInput from './nh-input/index.vue';

const components = {
  nhButton,
  nhInput
}
function install(component) {
  component.install = Vue => Vue.component(component.name, component);
  return component
}
const installedComponents = ((components) => {
  let installed = {}
  for (const name in components) {
    let component = components[name]
    component.install = (Vue) => {
      Vue.component(component.name, component);
    }
    installed[name] = component
  }
  return installed
})(components)

const nhUI = {
  ...installedComponents,
  install(Vue) {
    for (const name in components) {
      const component = components[name]
      Vue.component(component.name, component);
    }
  }
}
export default nhUI
