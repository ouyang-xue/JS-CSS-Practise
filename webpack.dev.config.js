module.exports = {
    entry: { //可以有一个或多个入口
        main: './main.js'
    },
    output: {
        filename: "build.js"
    },
    mode: 'development',
    // 声明模块
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    watch: true, //文件监视改动，自动重新编译build.js
};
