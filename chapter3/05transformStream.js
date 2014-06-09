var fs = require('fs');
var stream = new require('stream').PassThrough();
spy.on('end', function() {
 console.log("All data has been sent");
});
fs.createReadStream("./passthrough.js").pipe(spy).pipe(process.std 
 out);