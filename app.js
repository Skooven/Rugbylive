var express = require('express');
var app = express();

var http = require('http').Server(app);


var fs = require('fs');
var io = require('socket.io')(http);



app.get('/',function(req,res){
    res.sendFile(_dirname + '/index.html');

});

server.listen(3000);