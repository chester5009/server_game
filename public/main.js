/**
 * Created by chester on 08.09.16.
 */
$(document).ready(function () {
    console.log("Я ДЖАВА СКРИПТ!");
});


var socket = io.connect('http://192.168.1.3:3000');
socket.on('news', function (data) {
    console.log(data)

    $("#server-time").html(data.hello+' '+data.h+":"+data.m+":"+data.s);
});

setInterval(function () {
    socket.emit('my other event', { my: 'data' });
},100);

