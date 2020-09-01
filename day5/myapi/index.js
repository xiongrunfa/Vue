var express = require('express')
var bodyParser = require('body-parser')
var app = express()

// 使用body-parser中间件
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.all('*', function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header('Access-Control-Allow-Headers', 'Content-type');
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
    //可选，用来指定本次预检请求的有效期，单位为秒。在此期间，不用发出另一条预检请求。
    res.header('Access-Control-Max-Age', 1728000);//预请求缓存20天
    next();
});

app.get('/fetch', (req, res) => {
    res.send('hello fetch')
})
app.get('/books', (req, res) => {
    res.send('传统的url传递参数：' + req.query.id)
})
app.get('/books/:id', (req, res) => {
    res.send('restfui形式的url传递参数：' + req.params.id)
})
app.delete('/books/:id', (req, res) => {
    res.send('DELETE请求传递参数：' + req.params.id)
})
app.post('/books', (req, res) => {
    res.send('POST请求传递参数：' + req.body.uname + '-----' + req.body.psw)
})
app.put('/books/:id', (req, res) => {
    res.send('PUT请求传递参数：' + req.param.id + '---' + req.body.uname + '-----' + req.body.psw)
})


app.get('/data1', (req, res) => {
    setTimeout(function () {
        res.send('hello tom')
    }, 1000)
})
app.get('/data2', (req, res) => {
    setTimeout(function () {
        res.send('hello jerry')
    }, 2000)
})
app.get('/data3', (req, res) => {
    setTimeout(function () {
        res.send('hello spikey')
    }, 3000)
})

app.listen(3000, function () {
    console.log('running....');
})