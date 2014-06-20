


var http = require('http');
var server = new http.Server();
server.on("connection", function(socket) {
 console.log("Client arrived: " + new Date());
 socket.on("end", function() {
 console.log("Client left: " + new Date());
 });
})
server.listen(8888);

/*

This is a good point to add client validation, tracking code, setting/reading cookies
or broadcasting the a client's arrival to other clients (i.e. User567 is not logged on!)

Adding a listener like 'request.on("readable...' brings us to the common request/response
pattern. When clients post data, we can get it like this
*/



server.on("request", function(request, response) {
 request.setEncoding("utf8");
 request.on("readable", function() {
 console.log(request.read())
 });
});


/*
Now send it some data with 
$ curl http://localhost:8888 -d "Here is some data"


Also, we can put times on server connections. Here's how to terminate
a client connection that fails to send data in about a 2 second window.

server.setTimeout(2000, function(socket) {
 socket.write("Too Slow!", "utf8");
 socket.end();
});



" If one simply wants to set the number of milliseconds of 
inactivity before a socket is presumed to have timed out, simply 
use server.timeout = (Integer)num_milliseconds. 
To disable socket timeouts, pass a value of 0(zero). "


*/