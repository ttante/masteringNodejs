var http = require('http');
var server = http.createServer(function(request, response) {
	 console.log("Got Request Headers:");
	 console.log(request.headers);
	 response.writeHead(200, { 
	 'Content-Type': 'text/plain'
 });
	 response.write("PONG");
	 response.end();
});
server.listen(8080);