var stream = require('stream');
var readable = new stream.Readable({
 encoding : "utf8",
 highWaterMark : 16000,
 objectMode: true
});

var Feed = function(channel) {

	 var readable = new stream.Readable({
	 	encoding : "utf8"
	 });

	 var news = [
		 "Big Win!",
		 "Stocks Down!",
		 "Actor Sad!"
	 ];

	 readable._read = function() {
		 if(news.length) {
	 		return readable.push(news.shift() + "\n");
			 }
	 	 readable.push(null);
		};

	 return readable;
	}


	var feed = new Feed();
	feed.on("readable", function() {
	 	var data = feed.read();
		data && process.stdout.write(data);
	});
	feed.on("end", function() {
	 console.log("No more news");
	});

	
/*  highWaterMark:   Number of bytes to keep in the internal buffer before 
ceasing to read from the data source. The default is 16 KB.

    objectMode:   Tell the stream to behave as a stream of objects instead of 
a stream of bytes, such as a stream of JSON objects instead of the bytes 
in a file. Default false.      */