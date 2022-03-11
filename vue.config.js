const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
  outputDir: path.resolve(__dirname, './ui-for-newhope'),
  chainWebpack(config) {
    const scssRule = config.module.rule('scss').oneOfs.store;
    scssRule.forEach(item => {
      item
          .use('sass-resources-loader')
          .loader('sass-resources-loader')
          .options({
            resources: './src/assets/sass/index.scss',
          })
          .end();
    });
  },
  configureWebpack: {
    entry: process.env.NODE_ENV === 'development' ? './src/main.js' : './src/index.js',
    output: {
      library: 'ui-for-newhope',
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
  },
  transpileDependencies: true
})
