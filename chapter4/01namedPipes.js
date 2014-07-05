/*

A file is chunk of data that's persisted on a hard drive or some other hard medium. 
Normally they are a series of bytes whose encoding maps to some pattern, like a sequence
of stuff to do. A file has a fixed length, and to be used their character enccoding 
has to be deciphered by some type or reader program, like a text editor or video player.

Files can be sent just like normal data.

Like we said before, Node's design principles include using evented streams. Byte streams
can be read from and written to, and piped to other streams, emitting events as they do. 

Files are like streams, but they are also like objects: they have properties that describe
how to access their contents. 

The UNIX OS treats files as first-class citizens. Using files as references to named pipes 
and sockets can give develpers tons of power when shaping data flow.

Node gives you tons of input output (I/O) options. Lets dive in.






Files can be undestood as objects, and objects have certain types of attrributes. 

There are six file types: Ordinary, directories, sockets, named pipes, device files, and links.

Most filesystems usually just use the first 2 in node, and sometimes sockets. There is full node
compatability for all though. 

Learning about named pipes can help you understand how node was designed to work with streams
and pipes. Try this

$ mkfifo mynamedpipe
$ ls -l 

You should see something like

prw-r--r--    1 maxpena  staff        0 Jul  5 12:23 mynamedpipe

The first column stands for file mode, notice the 'p' in ours. We've made a named pipe!
Now push some bytes into it, with this

$ echo "I'm a string about to be piped!" > mynamedpipe

It's gonna look like the process is hung. It hasn't, pipes are like water pipes, and they 
gotta be open on both ends to complete thier job. So open another terminal in the same directory
and enter:

$ cat mynamedpipe

*/
