/*

Each HTTP request has useful header info, and each response should normally 
return simlar info. The header is a key/value pair and the keys are always 
lowecased. You man use any case with response keys.

You can read header info with the request.header object. All you have to 
do is read request.headers.accept

Node provides the response.getHeader method to make it easier, it accepts
the header key as its first argument. 

Here's how you make a response with node

response.writeHead(200, {
 'Content-Length': 4096,
 'Content-Type': 'text/plain' 
});


You can set multiple headers with the same name by passing an array to 
response.setHeader like this:

response.setHeader("Set-Cookie", ["session:12345", 
"language=en"]);


Sometimes you'll have to remove a response header after its been queued, this
can be done with response.removeHeader, with the header name you're removing
as an argument.

You must write headers before you write a response, writing a header after a response
has been sent will cause an error. 

*/