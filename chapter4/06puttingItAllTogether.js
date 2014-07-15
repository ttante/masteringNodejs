/* Recalling our discussion of favicon handling from the previous chapter, and adding
what we've learned about file caching and file uploading, we can now construct
a simple file server handling GET and POST requests: */

http.createServer(function(request, response) {
  var rm = request.method.toLowerCase();
    if(rm === "post") {
	  var form = new formidable.IncomingForm();
      form.uploadDir = process.cwd();
		form
		.on("file", function(field, file) {
		// process files
		})
		.on("field", function(field, value) {
		// process POSTED field data
		})
		.on("end", function() {
		response.end("Received");
		})
		.parse(request);
	  return;
	}
	// We can only handle GET requests at this point
	if(rm !== "get") {
		return response.end("Unsupported Method");
		}
	 var filename = __dirname + request.url;
	  fs.stat(filename, function(err, stat) {
		if(err) {
		response.statusCode = err.errno === 34 ? 404 : 500;
		return response.end()
	}


		var etag = crypto.createHash('md5').update(stat.size + stat.mtime).digest('hex');
		response.setHeader('Last-Modified', stat.mtime);
		if(request.headers['if-none-match'] === etag) {
		response.statusCode = 304;
		return response.end();
		}
	response.setHeader('Content-Length', stat.size);
	response.setHeader('ETag', etag);
	response.statusCode = 200;
	fs.createReadStream(filename).pipe(response);
 });
}).listen(8000);
