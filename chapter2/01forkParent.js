var childProcess = require('child_process');
var child = childProcess.fork('./01forkChild.js');

child.on('message', function (msg) {
	console.log('child said: ', msg);
});

child.send("who's ur daddy");