/*  Author:  Liam Lage
    Date:    06/03/2022

    Documentation: https://nodejs.org/dist/latest-v16.x/docs/api/http.html

    Source: https://github.com/john-smilga/node-express-course
    Node.js & Express.js - Full Course: 1:34:29 - https://youtu.be/Oe421EPjeBE

    Description:
    12_http_intro
*/

const http = require('http');

const server = http.createServer((req, res) => {
	if(req.url === '/') {
		res.end('Welcome to our home page');
	} else if(req.url === '/about') {
		res.end('Here is our short history');
	} else {
		res.end(`
			<h1>404</h1>
			<p>Page not found.</p>
			<a href="/">Return to home page</a>
		`);
	}
});

// Listen on port 5000
server.listen(5000);
