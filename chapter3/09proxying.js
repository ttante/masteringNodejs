/* Sometimes you need a server to function as a proxy server, or broker, 
for other servers. This allows one server to distrute the load to other servers
or to provide access to a secure server for users who can't access the secure
server directly. You can also have a server that handles for more than one URL,
and a proxy server can forwart the requests to the right recipients. 


This will set up a HTTP @ port 8888 and it will repsond
to any request by getting the fron page of google and piping it to that client
*/



var http = require('http');
var server = new http.Server();
	server.on("request", function(request, socket) {
	 http.request({ 
	 host: 'www.google.com', 
	 method: 'GET',
	 path: "/",
	 port: 80
	}, function(response) {
	   response.pipe(socket);
    }).end();
});
server.listen(8080);
