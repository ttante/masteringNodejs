var fs = require('fs');
var tweetFile = "./06tweets.txt";
var Twit = require('twit');

var twit = new Twit ({
	consumer_key: 'tahviGgc6tRULPCKjhR4gg',
	consumer_secret: 'iOGwLzbOwrqdNo5IegGT846LiBUHbPnbttUyWRwKc',
	access_token: '39069167-FF28MzTGTnURFZd49SMw5XX5ln71Orooe3DvE0wms',
	access_token_secret: 'Dw0QUSsuJeqcf4enqrZaXvccFcoXKzdZTjpNsVYOXSM'


})

var writeStream = fs.createWriteStream(tweetFile, { 
		flags : "a"
		});

var cleanBuffer = function(len) {
	var buf = new Buffer(len);
	buf.fill('\0');
	return buf;
} 

var check = function() {

	twit.get('search/tweets', {
			q: '#nodejs since: 2014-04-01'
		}, function(err, reply) {
			var buffer = cleanBuffer(reply.statuses.length * 140);
			reply.statuses.forEach(function(obj, idx) {
				buffer.write(obj.text, idx*140, 140);
			});
			writeStream.write(buffer);
		})
		setTimeout(check, 10000);
	};
	check();
