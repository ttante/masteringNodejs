var fs = require('fs');
var EventEmitter = require('events').EventEmitter;
var pos = 0;
var messenger = new EventEmitter();

messenger.on("message", function(msg) {
	console.log(++pos + " message: " + msg);
});

// A
console.log(++pos + " first");
// B
process.nextTick(function() {
	console.log(++pos + "next");
})
// C
setTimeout(function () {
	console.log(++pos + "quick timer");
}, 0)
// D
setTimeout(function () {
	console.log(++pos + "slow timer");
}, 10)
// E
setImmediate(function() {
	console.log(++pos + "immediate");
})
// F
messenger.emit("message", "yo!");
// G
fs.stat("./04eventsOrder", function() {
	console.log(++pos + "first stat");
})
// H
fs.stat("./04eventsOrder", function() {
	console.log(++pos + "2nd stat");
})
// I
console.log(++pos + " last");


/*
Order that the events fire in
1 A console.log('first')
2 F messenger.emit message
3 I console.log('last')
4 B process.nextTick
5 C Quick Timer
6 G First stat
7 H 2nd stat
8 E setImmediate (fires immediately after I/O events)
9 D Slow timer

Raw code (without comments):



	var fs = require('fs');
	var EventEmitter = require('events').EventEmitter;
	var pos = 0;
	var messenger = new EventEmitter();

	messenger.on("message", function(msg) {
		console.log(++pos + " message: " + msg);
	});


		console.log(++pos + " first");

		process.nextTick(function() {
			console.log(++pos + "next");
		})

		console.log(++pos + " last");

		setTimeout(function () {
			console.log(++pos + "quick timer");
		}, 0)

		setTimeout(function () {
			console.log(++pos + "slow timer");
		}, 10)

		setImmediate(function() {
			console.log(++pos + "immediate");
		})

		messenger.emit("message", "messenger message (F)")

		fs.stat("./04eventsOrder", function() {
			console.log(++pos + "first stat");
		})

		fs.stat("./04eventsOrder", function() {
			console.log(++pos + "last stat");
		})

		console.log(++pos + " last");


*/