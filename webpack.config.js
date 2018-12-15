// 引入node的path核心模块，处理路径
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin')
let VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    // entry 属性指定入口文件的
    // entry: './src/index.js',
    entry: './main.js',
    // output属性指定输出文件
    output: {
        // filename指定输出文件的名字
        filename: 'bundle.js',
        // path 是一个绝对路径
        path: path.join(__dirname, 'dist'),
        // 表示webpack-dev-server托管的静态资源的目录
        publicPath: '/dist'
    },
    // module字段用于配置各种loader
    module: {
        rules: [{
                // test是一个正则，表示需要处理的文件类型
                test: /\.css$/,
                // use表示使用哪些加载器来处理文件模块。注意书写顺序，css-loader在后面，执行是从后往前执行。css-loader处理css文件，style-loader往页面中添加style标签
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            },
            {
                test: /\.(png|jpg|gif|eot|svg|ttf|woff)/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        // limit参数以字节为单位。如果图片大于这个值，就以url形式展示；如果如图片小于这个值，就以base64格式展示
                        limit: 33000
                    }
                }]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     presets: ['@babel/preset-env']
                    // }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ],
        
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 指定根据模板生成的文件名字
            filename: 'index.html',
            // 指定模板位置
            template: 'template.html'
        }),
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ],
    mode: 'development',
    watch: true
}