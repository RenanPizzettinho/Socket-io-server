var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){

	res.sendFile(__dirname + '/index.html');

});

io.on('connection', function(socket) {

	console.log('a user connected');
	socket.broadcast.emit('hi');
	
	socket.on('disconnect',function() {

		console.log('user disconnected');

	});

	socket.on('chat message', function(msg) {
		
		io.emit('chat message', msg);
		console.log('user: ' + msg.user + ' - message: ' + msg.message);

	});

});
var PORTA = 3001;
http.listen(PORTA, function(){
	
	console.log('listening on ' + PORTA);

});
