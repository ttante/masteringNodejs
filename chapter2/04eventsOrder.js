var fs = require('fs');
var EventEmitter = require('events').EventEmitter;
var pos = 0;
var messenger = new EventEmitter();

messenger.on("meesage", function(msg) {
	console.log(++pos, + " message: " + msg);
});

// A
console.log(++pos + " first");
// B
process.nextTick(function() {
	console.log(++pos, + "next");
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
messenger.emit("message", "messenger message (F)")
// G
fs.stat("./04eventsOrder", function() {
	console.log(++pos + "first stat");
})
// H
fs.stat("./04eventsOrder", function() {
	console.log(++pos + "last stat");
})
// I
console.log(++pos + " last");
// J
