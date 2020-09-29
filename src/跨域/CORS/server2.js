let express = require('express');
let app = express();
let whiteList = ['http://localhost:3000'];
app.use(function (req, res, next) {
    let origin = req.headers.origin;
    if (whiteList.includes(origin)) {
        // 设置哪个源可以访问
        res.setHeader('Access-Control-Allow-Origin', origin);
        // 允许携带哪个头访问
        res.setHeader('Access-Control-Allow-Headers', 'name');
        // 允许哪个方法访问
        res.setHeader('Access-Control-Allow-Methods', 'PUT');
        // 允许携带cookie
        res.setHeader('Access-Control-Allow-Credentials', true);
        // 允许前端获取哪个头
        res.setHeader('Access-Control-Expose-Headers', 'responseToClient');
        // 预检的存活时间
        res.setHeader('Access-Control-Max-Age', 6000);
        if (req.method === 'OPTIONS') {
            res.end(); // OPTIONS请求不做任何处理
        }
    }
    next();
});
app.put('/getData', function (req, res) {
    console.log(req.headers);
    res.setHeader('responseToClient', 'response to client');
    res.end('put method test');
});
app.get('/getData', function (req, res) {
    console.log(req.headers);
    res.end('i love u too');
});
app.use(express.static(__dirname));
app.listen(4000);
