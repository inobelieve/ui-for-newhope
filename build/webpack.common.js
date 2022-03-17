/**
 * @Description: vue config文件
 * @Author: inobelieve by WebStorm
 * @Date: 2022-03-15
 * @LastEditTime: 16:51:47
 */
const webpackConfig = require('./webpack.config.js')
const WebpackMerge = require('webpack-merge')
module.exports = WebpackMerge.merge(
    {
        entry:{
            app: ['./src/packages/index.js']
        },
        mode:'production'
    },
    webpackConfig)
