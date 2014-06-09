var stream = require('stream');
var readable = new stream.Writable({
 highWaterMark : 16000,
 decodeStrings: true
});

// decodeStrings:   Convert strings into buffers before writing. Default is true.