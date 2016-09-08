/**
 * Created by chester on 08.09.16.
 */
var express=require('express');
var app=express();
var http=require('http').Server(app);

var io=require('socket.io')(http);


app.use(express.static('public'));

http.listen(3000,'192.168.1.3',function () {
    console.log("сервак работает..");
});

app.get('/',function (req, res) {
    res.sendFile(__dirname+'/public/index.html');
});

io.on('connection', function (socket) {
    socket.name="CHESTER";
    socket.emit('news', { hello: socket.name});
    socket.on('my other event', function (data) {
        console.log(data);
    });
});

