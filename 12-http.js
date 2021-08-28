const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("Welcome to my nodejs");
	} else if (req.url === "/about") {
		res.end("Here is my about nodejs");
	} else {
		res.end(`<h1>Oops! Sema kimeumana!</h1>`);
	}
	// res.write('<h1>Welcome to my nodejs journey!</h1>');
});

server.listen(3000);
