/*  Favicon's are the little image in web browser tabs. GET requests often
have them built in. All HTML servers have to deal with them. 

To do this the server checks the request type and handles accordingly. 
Here's an example:
*/


var http = require('http');
http.createServer(function(request, response) { 
	 if(request.url === '/favicon.ico') {
	   response.writeHead(200, {
	     'Content-Type': 'image/x-icon'
	 });
        return response.end();
  	}
   response.writeHead(200, {
 	  'Content-Type': 'text/plain'
 });
   response.write('Some requested resource');
   response.end();
 
}).listen(8888);

/* This sends an empty image for the favicon, if there's one to send 
one would push it through the response stream.
*/

