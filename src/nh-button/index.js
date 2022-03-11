/**
 * @Description: vue config文件
 * @Author: inobelieve by WebStorm
 * @Date: 2022-03-10
 * @LastEditTime: 16:14:27
 */

import nhButton from './index.vue';

nhButton.install = Vue => Vue.component(nhButton.name, nhButton);

export default nhButton;
