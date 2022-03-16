/**
 * @Description: vue config文件
 * @Author: inobelieve by WebStorm
 * @Date: 2022-03-15
 * @LastEditTime: 16:51:59
 */
const path = require('path')
const webpackConfig = require('./webpack.config.js')
const WebpackMerge = require('webpack-merge')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// 分析报告
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = WebpackMerge.merge(webpackConfig,{
    mode:'production',
    devtool:'cheap-module-source-map',
    plugins:[
        new BundleAnalyzerPlugin({
            analyzerHost: '127.0.0.1',
            analyzerPort: 8081
        }),
    ],
    optimization:{
        minimizer:[
            new UglifyJsPlugin({//压缩js
                cache:true,
                parallel:true,
                sourceMap:true
            }),
            new OptimizeCssAssetsPlugin({})
        ],
        splitChunks:{
            chunks:'all',
            cacheGroups:{
                libs: {
                    name: "chunk-libs",
                    test: /[\\/]node_modules[\\/]/,
                    priority: 10,
                    chunks: "initial" // 只打包初始时依赖的第三方
                }
            }
        }
    }
})
