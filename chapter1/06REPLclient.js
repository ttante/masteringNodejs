// Get net and make a socket at 8888
	var net = require('net');
	var socket8888 = net.connect(8888);

// take input from the console via process.stdin 	
	process.stdin.pipe(socket8888);

//  send anything received from socket8888 to the process's standard output, AKA the console	
	socket8888.pipe(process.stdout);