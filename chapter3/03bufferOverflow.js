/*
Here we create a stream with a highWaterMark of 10
more than the limit, which will trigger a drain event which 
will trigger us to writ a 'Z'. 

With this we: manage the buffer overflow, give a warning
of this to original write method, drain the buffer, and 
let us know when it's safe to write again.
*/

	var stream = require('stream');
	var writable = new stream.Writable({
	 highWaterMark: 10
	});

	writable._write = function(chunk, encoding, callback) {
	 process.stdout.write(chunk);
	 callback();
	}

	writable.on("drain", function() {
	 writable.write("Z\n");
	});

	var buf = new Buffer(20, "utf8");
	buf.fill("A");
	
	console.log(writable.write(buf.toString())); // false