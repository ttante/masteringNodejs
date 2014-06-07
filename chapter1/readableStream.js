// Create a Readable stream and pipe any data pushed into this stream to process.stdout

 var Readable = require('stream').Readable;
 var readable = new Readable;
 var count = 0;

 readable._read = function() {
 	if(++Count > 10) {
 		return readable.push(null);
 	}
 	setTimeout(function() {
 		readable.push(count + "\n");
 	}, 500);
  };

  readable.pipe(process.stdout);


