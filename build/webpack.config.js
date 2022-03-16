const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const vueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const devMode = process.argv.indexOf('--mode=production') === -1;
const HappyPack = require("happypack")
const os = require("os")
const happyThreadPool = HappyPack.ThreadPool({
    size: os.cpus().length
})
const ParallelUglifyPlugin = require("webpack-parallel-uglify-plugin")


module.exports = {
    entry:{
        main:path.resolve(__dirname,'../src/main.js')
    },
    output:{
        path: path.join (__dirname, "..", "dist"),
        filename:'js/[name].js',
        chunkFilename:'js/[name].[hash:8].js'
    },
    module:{
        rules:[
            {
                test: /\.ext$/,
                use: ['cache-loader', 'babel-loader'],
                include: path.resolve(__dirname, 'src')
            },
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                },
                exclude:/node_modules/
            },
            {
                test:/\.vue$/,
                use:[{
                    loader:'vue-loader',
                    options:{
                        compilerOptions:{
                            preserveWhitespace:false
                        }
                    }
                }]
            },
            {
                test:/\.css$/,
                use:[{
                    loader: devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                    options:{
                        publicPath:"../dist/css/",
                        hmr:devMode
                    }
                },'css-loader',{
                    loader:'postcss-loader'
                }]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader?indentedSyntax'
                ],
            },
            {
                test:/\.less$/,
                use:[{
                    loader:devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                    options:{
                        publicPath:"../dist/css/",
                        hmr:devMode
                    }
                },'css-loader','less-loader',{
                    loader:'postcss-loader',
                    options:{
                        plugins:[require('autoprefixer')]
                    }
                }]
            },
            {
                test:/\.(jep?g|png|gif)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:10240,
                        fallback:{
                            loader:'file-loader',
                            options:{
                                name:'img/[name].[hash:8].[ext]'
                            }
                        }
                    }
                }
            },
            {
                test:/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:10240,
                        fallback:{
                            loader:'file-loader',
                            options:{
                                name:'media/[name].[hash:8].[ext]'
                            }
                        }
                    }
                }
            },
            {
                test:/\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:10240,
                        fallback:{
                            loader:'file-loader',
                            options:{
                                name:'media/[name].[hash:8].[ext]'
                            }
                        }
                    }
                }
            }
        ]
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.runtime.esm.js',
            ' @':path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, 'src/assets'),
            'components': path.resolve(__dirname, 'src/components')
        },
        extensions:['*','.js','.json','.vue']
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../public/index.html')
        }),
        new vueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
        }),
        // 多进程Loader转换
        new HappyPack({
            id: 'happyBabel',
            loaders: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env']
                        ],
                        cacheDirectory: true
                    }
                }
            ],
            threadPool: happyThreadPool
        }),
    ],
    optimization: {
        minimizer:  [
            // 增强代码压缩
            new ParallelUglifyPlugin({
                cacheDir: '.cache/',
                uglifyJS: {
                    output: {
                        comments: false,
                        beautify: false
                    },
                    compress: {
                        drop_console: true,
                        collapse_vars: true,
                        reduce_vars: true
                    }
                }
            })
        ]
    }
}
