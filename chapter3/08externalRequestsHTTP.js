// A network often has to make external HTTP calls.
// HTTP servers often have to perform HTTP servies for client requests. 
// This will fetch the front page of google


	var http = require('http');
		http.request({ 
		 host: 'www.google.com', 
		 method: 'GET',
		 path: "/"
	}, function(response) {
		 response.setEncoding("utf8");
		 response.on("readable", function() {
		 	console.log(response.read())
	 });
	}).end();


// A really popular module for this is https://github.com/mikeal/request



// Node has a shortcut for HTTP requests



http.get("http://www.google.com/", function(response) {
 	console.log("Status: " + response.statusCode);
  }).on('error', function(err) {
 	console.log("Error: " + err.message);
});