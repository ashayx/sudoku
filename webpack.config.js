
module.exports = {
    devtool: 'inline-source-map',
    entry: __dirname + "/src/js/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/www",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.ts$/,
                use: [
                    'babel-loader',
                    'ts-loader',
                ]
            }
        ]
    },
    devServer: {
        contentBase: "./www",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    
}   
