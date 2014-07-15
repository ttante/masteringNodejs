
// read a single directory
fs.readdir('.', function(err, files) {
console.log(files); // list of all files in current directory
});


// here's a program to move through all the directories in a repo


(function(dir) {
	fs.readdir(dir, function(err, list) {	
		list.forEach(function(file) {
			fs.stat(dir + "/" + file, function(err, stat) {
				if(stat.isDirectory()) {
					return console.log("Found directory : " + file);
		}
	  console.log("Found file : " + file);
    });
    });
   });
})(".");
