var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var chat = require('./chat')(io);

app.use(express.static('./public'));

app.get('/', function(req, res){

	res.sendFile(__dirname + '/public/index.html');

});

var PORTA = 3001;
http.listen(PORTA, function(){
	
	console.log('listening on ' + PORTA);

});

