let path = require('path');

module.exports = {
    /* 先找到每个入口（entry），然后从各个入口分别出发找到依赖的模块（module），
       生成一个Chunk（代码块），最后会把Chunk写到文件系统（Assets）中
    */
    // entry: './main.js',  // 单入口可以直接写一个字符串
    // entry: ['./main.js', './main1.js'],  多文件入口写法
    entry: { //一个或多个入口写法
        main: './main.js'
    },
    output: {
        // 在任何模块文件内部，可以使用__dirname变量获取当前模块文件所在目录的完整绝对路径。
        path: path.join(__dirname, 'dist'), // 输出的文件夹，只能是绝对路径
        filename: "build.js",  // 打包后的文件名
        // name是entry的名字，默认是main，hash根据打包后的文件内容计算出来的一个hash值，冒号后面跟位数
        // filename: '[name].[hash:8].js'   // 多入口文件的写法
        publicPath: 'http://localhost:9991/'
    },
    mode: 'development',
    // 声明模块
    module: {
        rules: [
            {
                test: /\.css$/,  // 转换文件的匹配正则
                // css-loader用来把css文件变成一个模块，并解析处理css文件中的URL路径
                // style-loader可以把css文件变成style标签插入到head中
                // 多个loader是有顺序要求的，因为转换的时候是从右往左转
                loader: 'style-loader!css-loader'  // 这两个必须写
            }
        ]
    },
    plugins: [],
    // 配置此静态文件服务器，可以用来预览打包后的项目
    devServer: {
        contentBase: './dist',
        host: 'localhost',
        port: 8080,
        compress:true, // 服务器返回给浏览器的时候是否启动gzip压缩
    },
    watch: true, //文件监视改动，自动重新编译build.js
};
