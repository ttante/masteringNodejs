// Redis is a key/value database. Its easy to use
/// and open soure. We need it and some bindings, 
// for which we use node_redis, and tnen we can set 
// db things like this 

var redis = require("redis");
var client = redis.createClient();
client.set("userId", "jack", function(err) {
	client.get("userId", function(err, data) {
		console.log(data); // "jack"
});
});
