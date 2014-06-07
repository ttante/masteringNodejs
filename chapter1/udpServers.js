	// Create a udp server and client that can talk to each other!


	var dgram = require('dgram');
	var client = dgram.createSocket("udp4");
	var server = dgram.createSocket("udp4");

	var message = process.argv[2] || "message";

	message = new Buffer(message);

	server
		.on("message", function (msg){
			process.stdout.write("recieved message:" + msg + "\n");
			process.exit();
		})
		.bind(44444);

		client.send(message, 0, message.length, 44444, "localhost");