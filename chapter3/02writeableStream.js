var stream = require('stream');
var readable = new stream.Writable({
 highWaterMark : 16000,
 decodeStrings: true
});

// decodeStrings:   Convert strings into buffers before writing. Default is true.
// write 100 bytes to stdout

	writable._write = function(chunk, encoding, callback) {
	 console.log(chunk);
	 callback();
	}

	var w = writable.write(new Buffer(100));
	writable.end();
	console.log(w); // Will be `true`