var app = http.createServer(function(request, response) {
  var url = request.url;
  var method = request.method;
  if(method === "GET") {
	if(url === "/listCities/usa/ohio") {
		database.call("usa","ohio",function(err, data) {
		response.writeHead(200, {'Content-Type':
		'application/json' });
		// Return list of cities in Ohio, USA
		response.end(JSON.stringify(data));
		 });
	}
	if(url === "/listCities/usa/arizona") { ... }
	if(url === "/listCities/canada/ontario") { ... }
}
