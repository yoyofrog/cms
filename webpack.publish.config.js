const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
let  { CleanWebpackPlugin }= require("clean-webpack-plugin")
const webpack = require('webpack')

const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html'
})


module.exports = {
    mode: 'development',
    plugins: [
        htmlPlugin,
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
    ],
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'js/bundle.js'
    },
    module: {
        rules:[
            {test: /\.css$/, use:['style-loader', 'css-loader', 'postcss-loader']},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.scss$/, use:['style-loader','css-loader', 'sass-loader']},
            {test:/\.jpg|png|gif|bmp$/,use:'url-loader?limit=1208&name=images/[hash:4]-[name].[ext]'},
            {test: /\.js$/, use:'babel-loader', exclude:/node_modules/},
            {test: /\.vue$/, loader: 'vue-loader'},
            {test:/\.ttf|woff|woff2|eot|svg$/, use:'url-loader'}//处理样式中字体文件路径的问题

        ]
    },
    // 提取公共模块，包括第三方库和自定义工具库等
    optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'lib'
        },
        default: {
          minSize: 0,
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
          name: 'utils'
        }
      }
    }
  }
}