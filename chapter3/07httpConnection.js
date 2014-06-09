var http = require('http');
var server = new http.Server();
server.on("connection", function(socket) {
 console.log("Client arrived: " + new Date());
 socket.on("end", function() {
 console.log("Client left: " + new Date());
 });
})
server.listen(8080);