/**
 * Created by chester on 08.09.16.
 */
var express=require('express');
var app=express();
var http=require('http').Server(app);

var io=require('socket.io')(http);

var numberusers=0;
var users=[];

app.use(express.static('public'));

http.listen(8080,'localhost',function () {
    console.log("сервак работает..");
});

app.get('/',function (req, res) {
    res.sendFile(__dirname+'/public/index.html');
});

var start;
var hours;
var minites;
var seconds;

io.on('connection', function (socket) {
    socket.name="CHESTER";
    numberusers++;
    adduser(socket.id);
    start = new Date();
    hours=start.getHours();
    minites=start.getMinutes();
    seconds=start.getSeconds();
    socket.emit('news', { hello: socket.name,h:hours,m:minites,s:seconds});
    socket.on('my other event', function (data) {
        start = new Date();
        hours=start.getHours();
        minites=start.getMinutes();
        seconds=start.getSeconds();
        socket.emit('news', { h:hours,m:minites,s:seconds,number:numberusers,users:users});
        console.log(data);
    });
    socket.on('disconnect',function () {
       numberusers--;
        deleteuser(socket.id);
    });
});


function adduser(id) {
    var newUser=new User(id);
    users.push(id);
}

function deleteuser(id){
    for(var i=0;i<users.length;i++){
        if(users[i]==id) users.splice(i, 1);
    }
}

function User(id){
    this.id=id;
}

