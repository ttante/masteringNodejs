/*
To use SSL you need a signed certificate. These are getting chaper
and you can even find free personal ones. 

To use, you will usually download a private .key file, a signed
domanain certificate .crt file, and a bundle with certificate chains subscriptions

var options = {
 key : fs.readFileSync("mysite.key"),
 cert : fs.readFileSync("mysite.com.crt"),
 ca : [ fs.readFileSync("gd_bundle.crt") ]
};

Note that the ca parameter must be sent as an array, if if the bundle of certificates has 
concatenated it into one file.

*/