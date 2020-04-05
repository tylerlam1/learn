// Dependencies to the application
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io'); 
var app = express(); // creates instance of express
var server = http.Server(app);
var io = socketIO(server); app.set('port',5000);
app.use('/static',express.static(__dirname + '/static'));

// router handler / gets called when the website home is called     
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
});

// make the http server listen on port 5000
server.listen(5000, function() {
    console.log('Starting server on port 5000');
})

// add websocket handlers
io.on('connection', function(socket) {
});

setInterval(function() {
    io.sockets.emit('message','hi');
}, 1000);
