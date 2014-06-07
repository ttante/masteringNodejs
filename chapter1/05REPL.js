require('repl').start("> ").context.sayHello = function () {
	return "Hello!"
};