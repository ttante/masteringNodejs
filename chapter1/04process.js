var size = process.argv[2];
var total = process.argv[3] || 100;
var buff = [];

for (var i=0; i < total; i++) {
	buff.push(new Buffer(size));
	process.stdout.write(process.memoryUsage().heapTotal + "\n");
}