/**
 * @Description: vue config文件
 * @Author: inobelieve by WebStorm
 * @Date: 2022-03-16
 * @LastEditTime: 17:10:06
 */
import nhButton from './nh-button'
import nhInput from './nh-input'

const components = [nhButton ,nhInput]
const nhUI = {
    install (Vue) {
        components.forEach(item => {
            Vue => Vue.component(item.name, item);
        })
    }
}

export default {
    nhUI,
    nhBotton,
    nhInput
}
