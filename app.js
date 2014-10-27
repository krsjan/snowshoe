var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var createid = require('./module/id-generator.js');

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendfile('public/index.html');
});

io.on('connection', function(socket){

  socket.emit('game:connection', { id: createid() });

  socket.on('game:start', function (data, ack){
    if (data) {
      ack(true);
      startGame();
    }
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

