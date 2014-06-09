var fs = require('fs');
var http = require('http');
var theUser = null;
var userPos = 0;
var tweetFile = "./06tweets.txt";
var Twit = require('twit');


http.createServer(function(request, response){
	response.writeHead(200, {
		'Content-Type': 'text/event-stream',
		'Cache-Control': 'no-cache',
		'Access-Control-Allow-Origin': '*'
	});

	theUser = response;

	response.write(':' + Array(2049).join(' ') + '\n');

	response.write('retry: 2000\n');

	response.socket.on('close', function() {
		theUser = null;
	});

}).listen(8888);

var sendNextTweet = function(fd) {
	var buffer = new Buffer(140);
	fs.read(fd, buffer, 0, 140, user * 140, function(err, num) {
		if(!err && num > 0  && theUser) {
			++userPos;
			theUser.write('DATA: ' + buffer.toString('utf-8', 0, num) + '\n\n');
			return process.nextTick(function() { 
				sendNextTweet(fd);
			});
		}
	})
}

function start() {
	fs.open(tweetFile, 'r', function() { 
		if(err) {
			return setTimeout(start, 1000);
		}
		fs.watch(tweetFile, function(event, filename) {
			if(event === "change") {
				sendNextTweet(fd);
			}
		})
	})
}




