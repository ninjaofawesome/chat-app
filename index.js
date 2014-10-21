var express=require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var socket = io();

// option one, didn't work
// app.use("/styles",express.static(__dirname + "/styles"));

// app.use("/js",express.static(__dirname + "/js"));

// also did not work
app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.static(process.cwd() + '/public'));

app.get('/', function(req, res){
  res.sendFile('index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

