/* POST is one of most common HTTP requests and according to the REST 
specification POST is not idempotent, unlike GET/PUT & DELETE. We mention
this to say that POST data usually alters an application's state and you 
should be extra careful when dealing with them. 


The most common way to submit POST info is via forms, so we will now
create a server which returns a form to clients and echoes back any data
submitted to the form. 

First we have to check the request URL & see if its a form request or submission. 
We return HTML for a form for the first one and we parse the data in the second. 




*/

		var http = require('http');
		var qs = require('querystring');
		http.createServer(function(request, response) {
		   var body = "";
	      	if(request.url === "/") {
		    	response.writeHead(200, {
		 			"Content-Type": "text/html"
		   });
		 return response.end(
				 '<form action="/submit" method="post">\
				 <input type="text" name="sometext">\
				 <input type="submit" value="Upload">\
				 </form>'
			 );
		 }


// The form we send as our response has a single field 'sometext', this form 
// should post data in the form  sometext=entered_text:

		if(request.url === "/submit") {
		   request.on('readable', function() {
		     body += request.read();
		 
		    });
		 request.on('end', function() {
		    var fields = qs.parse(body);
		    response.end("Thanks!");
		       console.log(fields)
		    });
		 }
		}).listen(8080);
		 

// When the POST steam ends & the client is notified that POST is received, we parse
// the posted data with Querystring.parse to give us a key/value map accessible via 
// fields["somedata"]











