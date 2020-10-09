import * as express from 'express'
//创建服务器程序
const app = express();

app.get('/test', (req, res) => {

})

//设定端口
const listenPort: number = 2080
//监听端口
app.listen(listenPort, function () {
    //服务器启动打印log
    console.log("启动2080端口")

})
