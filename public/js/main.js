/**
 * Created by chester on 08.09.16.
 */
$(document).ready(function () {
    console.log("Я ДЖАВА СКРИПТ!");
});


var socket = io.connect('http://localhost:8080');
socket.on('news', function (data) {
    //console.log(data)
    var usrs=data.users;
    var a=[12,21,32,43];
    console.log(typeof (usrs)+" "+typeof (a));
    $("#server-time").html(data.h+":"+data.m+":"+data.s+" Пользователей: "+data.number+" Имена: "+usrs);
});

setInterval(function () {
    socket.emit('my other event', { my: 'data' });
},2000);

