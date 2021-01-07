const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html'
})


module.exports = {
    mode: 'development',
    plugins: [htmlPlugin, new VueLoaderPlugin()],
    module: {
        rules:[
            {test: /\.css$/, use:['style-loader', 'css-loader', 'postcss-loader']},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.scss$/, use:['style-loader','css-loader', 'sass-loader']},
            {test:/\.jpg|png|gif|bmp$/,use:'url-loader?limit=290088&name=[hash:4]-[name].[ext]'},
            {test: /\.js$/, use:'babel-loader', exclude:/node_modules/},
            {test: /\.vue$/, loader: 'vue-loader'},
            {test:/\.ttf|woff|woff2|eot|svg$/, use:'url-loader'},//处理样式中字体文件路径的问题
        ]
    }
}