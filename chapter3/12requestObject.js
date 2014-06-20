/*	HTTP request & response messages are similar, both have:

- A status line Request ex: GET/index.html HTTP/1.1    Response ex: HTTP/1.1 200 OK

- 0 or more headers, Request ex: Accept-Charset: UTF-8 or From: user@server.com
 Response ex: Content-Type: text/html and Content-Length: 1024

- Message body: request could be data from a post request, response could be an HTML page or more



 Each HTTP request contains url properties, identifying the targeted resource. 
Each of these HTTP requests is accessible with request.url 
Node's URL module decomposes a URL string into different parts for you. 

Pass true as the second argument of the parse method to get the 'query' field
in a much more useful Key/Value pair format. 

One final argument for url.parse deals with the difference between thses URL styles

http://www.example.org

//www.example.org

the first is a protocol-relative URL 
the second is an absolute URL

url.parse will instinctively treat the two slashes of the second like a route path, 
as opposed to the seeing it as the host like it should. We fix this by
passing true as the third argument. 


To make requests via http.requests or do other things, you have to structure a URL
request as well. To do this you use url.format and pass back an object that looks 
like what you get from url.parse, like this:
*/

url.format({
 protocol: 'http:',ß
 host: 'www.example.org'
})

// There is also url.resolve for generating URL string when you need to concatenate
// a base url and a path

url.resolve("http://example.org/a/b", "c/d") // 
'http://example.org/a/c/d'
url.resolve("http://example.org/a/b", "/c/d") // 
'http://example.org/c/d'
url.resolve("http://example.org", "http://google.com") // 
'http://google.com/'


/* The querystring module does pretty much the same thing with querystrings


"For example, querystring.parse("foo=bar&bingo=bango") will return:
{ foo: 'bar', 
 bingo: 'bango' }"

  This module offers customization in case the url doesnt use the normal & and = 
  separaters. The 2nd argument can be a cutom seperator string, and third a custom
  assignment string. 

 You can compose your own query string with qs.stringify like this 
 
 console.log(qs.stringify({ foo: 'bar', bingo: 'bango' }))
// foo=bar&bingo=bango

This also accepts custom separater/assignment strings


*/



