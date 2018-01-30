let app = require('express')();
let server = require('http').Server(app);
let WebSocket = require('ws');
let wss = new WebSocket.Server({port : 8080});
wss.on('connection', function connection(ws){
    console.log('server : Server connection');
    ws.on('message',function coming(message){
        console.log('server: received %s',message)
    });
    ws.send('hello world')
});
app.get('/', function(req,res){
    res.sendfile(__dirname + './index.html')
});
app.listen(3000);
