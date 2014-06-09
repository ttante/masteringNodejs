var stream = require("stream");
var net = require("net");

net
.createServer(function(socket) {
		 socket.write("Go ahead and type something!");
		 socket.on("readable", function() {
			 process.stdout.write(this.read())
	 });
})
.listen(8888);