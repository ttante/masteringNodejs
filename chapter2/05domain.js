// This code will return an error! That's the goal: we're using domains so that we can find 
// where our errors occur!


var domain = require('domain');
var fs = require('fs');

var fsDomain = domain.create();
fsDomain.on("error", function (err) {
	console.error("FS Error!", err);
});

var appDomain = domain.create();
appDomain.on('error', function (err) {
	console.log("APP Error!", err);
});


appDomain.run(function () {
	a = b;
	process.nextTick(function () {
		fsDomain.run(function () {
			fs.open('nonExistentFile', 'r', function(err, fd) {
				if(err) {
						throw err;
				}
				appDomain.dispose();
			});
		});
	});
});


