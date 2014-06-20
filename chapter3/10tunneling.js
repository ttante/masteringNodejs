/* We can creat a tunneling service with Node's native CONNECT support. 
Tunneling uses a proxy server as an intermediary to communicat with a 
remote server on a client's behalf. Once the proxy server connects to the 
remote one, it can pass messages between that server and the client. This is
helpful when a direct connection btwn a client/server is not possible or not desired.


Set up a proxy responding to HTTP CONNECT requests, the make a CONNECT request
to that server. The proxy gets our client's Request object, the client socket,
and the head (first part) of the tunneling stream. Then we opent the requested
remote network socket. Finally we create the tunnel, which is done by piping remote 
data to the client, and client data to the remote connection. 

*/


	var http = require('http');
	var net = require('net');
	var url = require('url');
	var proxy = new http.Server();
	proxy.on('connect', function(request, clientSocket, head) {
		 var reqData = url.parse('http://' + request.url);
		 var remoteSocket = net.connect(reqData.port, reqData.hostname, 
	function() {
		 clientSocket.write('HTTP/1.1 200 \r\n\r\n');
		 remoteSocket.write(head);
		 remoteSocket.pipe(clientSocket);
		 clientSocket.pipe(remoteSocket);
		});
	}).listen(8080);


	var request = http.request({
		 port: 8080,
		 hostname: 'localhost',
		 method: 'CONNECT',
		 path: 'www.google.com:80'
	});
	request.end();
	request.on('connect', function(res, socket, head) {
		 socket.setEncoding("utf8");
		 socket.write('GET / HTTP/1.1\r\nHost: www.google.com:80\r\
		nConnection: close\r\n\r\n');
		 socket.on('readable', function() {
		 console.log(socket.read());
	 });
		 socket.on('end', function() {
		 proxy.close();
	 });
	});