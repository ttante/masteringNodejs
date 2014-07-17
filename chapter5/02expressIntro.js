/*
Express lets you route things in an easier way.
Go to the docs to learn because this book's explanation
is deprecated in the jump from 3 to Express 4

*/
// Here we see middleware! This is simply other code that happens 
// when a GET/POST request is issued.

var authenticate = function(request, response, next) {
if(validUser) { next(); }
else { response.end("INVALID USER!"); }
}
app.get('/listCities/:country/:state', authenticate,
function(request, response) { ... });

