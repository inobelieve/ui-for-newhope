/**
 * @Description: vue config文件
 * @Author: inobelieve by WebStorm
 * @Date: 2022-03-15
 * @LastEditTime: 16:51:47
 */
const Webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const WebpackMerge = require('webpack-merge')
module.exports = WebpackMerge.merge(
    {
        entry:{
            main: path.resolve(__dirname,'../src/main.js')
        },
        mode:'development',
        devtool:'eval-cheap-module-source-map',
        devServer:{
            port:3000,
            hot:true,
        },
        plugins:[
            new Webpack.HotModuleReplacementPlugin()
        ]
    },
    webpackConfig)
