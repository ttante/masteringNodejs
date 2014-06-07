// get the events.EventEmitter object
	var EventEmiiter = require('events').EventEmitter;
	
// set an EventEmitter object
	var Counter = function(init) { 
		this.increment = function() {
			init++;
			this.emit('incremented', init);
		}
	}

	Counter.prototype = new EventEmitter();
	var counter = new Counter(10);
	var callback = function(count) {
		console.log(count);
	}

	counter.addListener('incremented', callback);

	counter.increment();
	counter.increment(); 

// " to remove event listeners bound to counter, use counter.removeListener('incremented', callback);
// ... For consistency with browser-based JavaScript, counter.on and counter.addListener are interchangable"



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






  
