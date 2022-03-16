
const Webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const WebpackMerge = require('webpack-merge')
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const Components = require('../components.json');

module.exports = WebpackMerge.merge(
    {
      entry: Components,
      mode:'development',
      devtool:'eval-cheap-module-source-map',
      devServer:{
        port:3000,
        hot:true,
      },
      plugins:[
        new Webpack.HotModuleReplacementPlugin(),
        new ProgressBarPlugin(),
        new VueLoaderPlugin()
      ]

    },
    webpackConfig)
