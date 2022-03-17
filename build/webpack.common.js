/**
 * @Description: vue config文件
 * @Author: inobelieve by WebStorm
 * @Date: 2022-03-15
 * @LastEditTime: 16:51:47
 */
const path = require('path')
const webpackConfig = require('./webpack.config.js')
const WebpackMerge = require('webpack-merge')
module.exports = WebpackMerge.merge(
    {
        entry:{
            app: ['./src/packages/index.js']
        },
        mode:'production',
        output: {
            path: path.resolve(process.cwd(), './dist'),
            publicPath: '/dist/',
            filename: 'app.js',
            chunkFilename: '[id].js',
            libraryExport: 'default',
            library: 'NEWHOPEUI',
            libraryTarget: 'commonjs2'
        },
    },
    webpackConfig)
