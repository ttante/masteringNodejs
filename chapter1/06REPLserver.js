// load necessary stuff
	var repl = require('repl');
	var net = require('net');

// create server 
	net.createServer(function(socket){
	// create an REPL loop and start it
		repl
			.start({
			// the > makes it look like node's REPL on the console 
				prompt : '> ,'
			// all input from the socket - the in and outputs might be 
			// different, i.e: input comes from a news feed API and outputs to a file
				input : socket,
			// all output from the socket
				output : socket, 
			// treat the data as 'terminal' data, which has special encoding
				terminal : true
			})
		// write exit to exit REPL loop
			.on('exit', function () {
				socket.end()
			})	
	}).listen(8888);


