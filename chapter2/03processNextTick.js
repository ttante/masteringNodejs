var events = require('events');

function getEmitter() {
	var emitter = new events.EventEmitter();
	process.nextTick(function () {
		emitter.emit('start');
	})
	return emitter;
}

var myEmitter = getEmitter();
myEmitter.on('start', function () {
	console.log('started!');
})


