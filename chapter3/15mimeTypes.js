/*  MIME stands for Multi Purpuse Internet Mail Extension 
Every header says what it is, and usually that request will expect the same mime type, or
a specific type at least.

Mime types are strange because a filesystem has no problem giving the incorrect 
file extentsion to something. 

For instance, often a GET request will include in the header that it expects
the MIME type of HTML in return. Your server needs to respond to this. However,
your server has be able to check that the file is the right type, and there
is nothing stopping your computer from renaming an file and giving 
it an extension it doensn't really have - like giving an image file a .html
extension.


A GET/POST request will usually include in the header something like

Accept: text/html

Which tells you it expects an HTML document in return. The response you give that
request will contain the header

Content-Type: text/html; charset=utf-8

The 'file' program by the UNI can find a file's MIME type like this:

file --brief --mime resource

This might return something like:    text/plain; charset=us-ascii.

More info on the file program :        http://unixhelp.ed.ac.uk/CGI/man-cgi?file




To do this, we use Node's child process command exec to run a child process
and use the UNIX 'file' program we just learned to make sure we have the right MIME.

*/

var exec = require('child_process').exec;
exec("file --brief --mime resource", function(err, mime) {
 console.log(mime);
});


/*

You should also use this to validate an incoming file: NEVER TRUST THE CLIENT; check 
that the Content-type in the header matches the MIME type of the incoming file.

*/
