const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'production',
    entry: {
        app: ['./src/packages/index.js']
    },
    output: {
        // path: path.resolve(process.cwd(), './lib'),
        // publicPath: '/dist/',
        // filename: 'nh-element-ui.common.js',
        // chunkFilename: '[id].js',
        // libraryExport: 'default',
        // library: 'NHELEMENT',
        // libraryTarget: 'commonjs2'
        path: path.resolve(process.cwd(), './dist'),
        filename: 'nh-ui.js',
        chunkFilename: '[id].js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            main: path.resolve(__dirname, '../src'),
            packages: path.resolve(__dirname, '../packages'),
            examples: path.resolve(__dirname, '../examples')
        },
        modules: ['node_modules']
    },
    performance: {
        hints: false
    },
    stats: {
        children: false
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.(jsx?|babel|es6)$/,
                include: process.cwd(),
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        preserveWhitespace: false
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                    // name: path.posix.join('static', '[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new ProgressBarPlugin(),
        new VueLoaderPlugin()
    ]
};
