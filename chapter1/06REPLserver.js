var repl = require('repl');
var net = require('net');
net.createServer(function(socket){
	repl
		.start({
			prompt : '> ,'
			input : socket,
			output : socket, 
			terminal : true
		})
		.on('exit', function () {
			socket.end()
		})
}).listen(8080);