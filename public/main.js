/**
 * Created by chester on 08.09.16.
 */
$(document).ready(function () {
    console.log("Я ДЖАВА СКРИПТ!");
});


var socket = io.connect('http://192.168.1.3:3000');
socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
    $("#server-time").html(data.hello);
});