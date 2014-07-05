/*   A file object has attributes, some of which are exposed to tell other files
how to use it. For example, you need to know what type a file is and how big it is. 


*/

// Use fs.stat read a file's attributes

fs.stat("file.txt", function(err, stats) {
 console.log(stats);
});

/* You might get something like this

	 dev: 2051, // id of device containing this file
	 mode: 33188, // bitmask, status of the file
	 nlink: 1, // number of hard links
	 uid: 0, // user id of file owner
	 gid: 0, // group id of file owner
	 rdev: 0, // device id (if device file)
	 blksize: 4096, // I/O block size
	 ino: 27396003, // a unique file inode number
	 size: 2000736, // size in bytes
	 blocks: 3920, // number of blocks allocated
	 atime: Fri May 3 2013 15:39:57 GMT-0500 (CDT), // last access
	 mtime: Fri May 3 2013 17:22:46 GMT-0500 (CDT), // last modified
	 ctime: Fri May 3 2013 17:22:46 GMT-0500 (CDT) // last status change

The fs.stat object comes with methods for us too, Sandro explains:

	• Use stats.isFile to check for standard files
	• Use stats.isDirectory to check for directories
	• Use stats.isBlockDevice to check for block type device files
	• Use stats.isCharacterDevice to check for character type device files
	• Use stats.isSymbolicLink after an fs.lstat to find symbolic links
	• Use stats.isFIFO to identify named pipes
	• Use stats.isSocket to check for sockets

There are two further stat methods available:

	• fs.fstat(fd, callback): Like fs.stat, except that a file descriptor fd 
	is passed rather than a file path
	• fs.lstat(path, callback): An fs.stat on a symbolic link will return an 
	fs.Stats object for the target file, while fs.lstat will return an fs.Stats 
	object for the link file itself


The following two methods simplify the file timestamp manipulation:

	• fs.utimes(path, atime, mtime, callback): Change the access and modify 
	timestamps on a file at path. The access and modify times of a file are stored 
	as instances of the JavaScript Date object. Date.getTime will, for example, 
	return the number of milliseconds elapsed since midnight (UTC) on January 
	1, 1970.
	
	• fs.futimes(fd, atime, mtime, callback): Changes the access and modify 
	timestamps on a file descriptor fd. Similar to fs.utimes.
	More information about manipulating dates and times with JavaScript 
	can be found here: https://developer.mozilla.org/en-US/
	docs/JavaScript/Reference/Global_Objects/Date.

*/ 

