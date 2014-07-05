/*
The path module has everything you need to make a nicely formatted url string. 
Here are the common methods, direct from Sandro:   */



//Use path.normalize whenever working with a file path string whose source 
//is untrusted or unreliable, to ensure a predictable format:

var path = require('path');
path.normalize("../one////two/./three.html");
// -> ../one/two/three.html

// Use path.join whenever building a single path out of path segments:

path.join("../","one","two","three.html");
// -> ../one/two/three.htmlChapter 4
[ 93 ]

// Use path.dirname to snip the directory name out of a path:

path.dirname("../one/two/three.html");
// ../one/two

// Use path.basename to manipulate the final path segment:

path.basename("../one/two/three.html");
// -> three.html
// Remove file extension from the basename
path.basename("../one/two/three.html", ".html");
// -> three

// Use path.extname to slice from the last period(.) to the end of the path 
string:

var pstring = "../one/two/three.html";
path.extname(pstring);
// -> .html
//
// Which is identical to:
// pstring.slice(pstring.lastIndexOf("."));

// Use path.relative to find the relative path from one absolute path to another:
path.relative(
 '/one/two/three/four', 
 '/one/two/thumb/war'
);
// -> ../../thumb/war
// Use path.resolve to resolve a list of path instructions into an absolute path:

path.resolve('/one/two', '/three/four');
// -> /three/four
path.resolve('/one/two/three', '../', 'four', '../../five')
// -> /one/five

// Think of the arguments passed to path.resolve as being a sequence of cd calls:
cd /one/two/three
cd ../
cd four
cd ../../five
pwd
// -> /one/fiveUsing Node to Access the Filesystem


// If the list of arguments passed to path.resolve fails to deliver an absolute path, the 
// current directory name is used as well. For instance, if we are in /users/home/john/:

path.resolve('one','two/three','four');
// -> /users/home/john/one/two/three/four

//These arguments resolve to a relative path one/two/three/four that is therefore 
//prefixed with the current directory name.

