/*
HTTP is stateless- one request has no info about the previous or next requests. 
Cookies shoare state bewteen clients (usually browsers) and servers via small
text files stored in browsers. They are insecure as cookie info goes between a 
server and client in plain text with any number of tampering points in between.
You can get to them easily through the browser for example, which is actually a
good thing since you don't want stuff on your browser that you don't want. 

Anyways cookies are used a lot to maintain state info, or as pointers to state info,
especially with user sessions or other authentication needs. 


Here is an example of a server that echose back a sent cookie's value. If none exists
we'll create that cookie and tell the client to ask for it again.

*/

// Create a server that checks request headers for cookies
	var http = require('http');
	var url = require('url');
	var server = http.createServer(function(request, response) {
	 var cookies = request.headers.cookie;

 // Cookies are stored as the cookie attribute of request.headers. If none exist
 // for the domain, we will create one, naming it sessions and giving it a value of 123456

	 if(!cookies) {
		 var cookieName = "session";
		 var cookieValue = "123456";
		 var expiryDate = new Date();
		 expiryDate.setDate(expiryDate.getDate() + 1);
		 var cookieText = cookieName + '=' + cookieValue + ';expires=' 
	+ expiryDate.toUTCString() + ';';
		 response.setHeader('Set-Cookie', cookieText);
		 response.writeHead(302, {
		 'Location': '/'
		 });
		 
		 return response.end();
		 }

// If we'er setting the cookie, we tell the client to make another request to the server. 
// Now that there's a cookie, the next request will contain our cookie, which we handle next



	cookies.split(';').forEach(function(cookie) {
	 var m = cookie.match(/(.*?)=(.*)$/);
	 cookies[m[1].trim()] = (m[2] || '').trim();
 	});
  response.end("Cookie set: " + cookies.toString());

 }).listen(8080);

