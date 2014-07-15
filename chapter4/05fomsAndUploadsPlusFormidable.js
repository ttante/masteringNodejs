/* Unfortunately, Node leaves implementation of file upload handling to the
developer, a challenging bit of work many developers may be unable to
successfully or safely complete.

Fortunately, Felix Geisendorfer created the Formidable module, one of the
most important early contributions to the Node project. A widely implemented,
enterprise-grade module with extensive test coverage, it not only makes handling
file uploads a snap, but can be used as a complete tool for handling form
submissions. We will use this library to add file upload capability to our file server.
For more information about how HTTP file uploads are
designed, and the tricky implementation problems developers
must overcome, consult the multipart/form-data specification

(http://www.w3.org/TR/html401/interact/forms.
html#h-17.13.4.2) and Geisendorfer's breakdown of
how Formidable was conceived of and evolved (http://
debuggable.com/posts/parsing-file-uploads-at-
500-mb-s-with-node-js:4c03862e-351c-4faa-bb67-
4365cbdd56cb).

First, install formidable via npm:
npm install formidable
You can now require it:
var formidable = require('formidable');
We will assume that file uploads will be posted to our server along a path of
/uploads/, and that the upload arrives via a HTML form that looks like this:
*/
<form action="/uploads" enctype="multipart/form-data" method="post">
Title: <input type="text" name="title"><br />
<input type="file" name="upload" multiple="multiple"><br />
<input type="submit" value="Upload">
</form>

/*

This form will allow a client to write some sort of title for the upload, and to select
one (or multiple) files for uploading. At this point our only responsibility on our
server is to properly detect when a POST request has been made and pass the relevant
request object to Formidable.

We won't be covering every part of the comprehensive formidable API design,
but focusing on the key POST events the library exposes. As formidable extends
EventEmitter, we use the on(eventName, callback) format to catch file data, field
data, and termination events, sending a response to the client describing what the
server has successfully processed:

*/
 http.createServer(function(request, response) {
	var rm = request.method.toLowerCase();
	  if(request.url === '/uploads' && rm === 'post') {
	var form = new formidable.IncomingForm();
	   form.uploadDir = process.cwd();
	var resp = "";
	   form
		 .on("file", function(field, File) {
			resp += "File : " + File.name + "<br />";
		})
		 .on("field", function(field, value) {
			resp += field + " : " + value + "<br />";
		})
		.on("end", function() {
			response.writeHead(200, {'content-type': 'text/html'});
			response.end(resp);
		})
		.parse(request);
		return;
	}
}).listen(8000);

 /*
We see here how a formidable instance receives an http.Incoming object through
its parse method, and how the write path for incoming files is set using the
uploadDir attribute of that instance. The example sets this directory to the local
directory. A real implementation would likely target a dedicated upload folder, or
even direct the received file to a storage service, receiving in return the final storage
location (perhaps receiving it via HTTP and a Location header...).
Note as well how the file event callback receives a formidable File object as a second
argument, which contains important file information including:
•	 size: The size of the uploaded file, in bytes
•	 path: The current location of the uploaded file on the local filesystem, such
as /tmp/bdf746a445577332e38be7cde3a98fb3
[ 119 ]
Using Node to Access the Filesystem
•	 name: The original name of the file as it existed on the client filesystem, such
as lolcats.jpg
•	 type: The file mime type, such as image/png
In a few lines of code we've implemented a significant amount of POST data
management. Formidable also provides tools for handling progress indicators,
dealing with network errors, and more, which the reader can learn about by visiting
https://github.com/felixge/node-formidable.
*/