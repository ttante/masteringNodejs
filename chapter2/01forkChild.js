process.on('message', function (msg) {
	console.log('parent said: ', msg);
	process.send('technically youre my mommy and daddy');
})