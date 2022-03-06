/*  Author:  Liam Lage
    Date:    06/03/2022

    Documentation: https://nodejs.org/dist/latest-v16.x/docs/api/fs.html

    Source: https://github.com/john-smilga/node-express-course
    Node.js & Express.js - Full Course: 1:18:28 - https://youtu.be/Oe421EPjeBE

    Description:
    11_fs_asynchronous
	An asynchronous implementation of read & write file system operations
	Callback hell

	Later in the course we will look at implementing this with async await & promises
*/

const {readFile, writeFile} = require('fs');

// Below is an asynchronous implementation of 10_fs_synchronous using callbacks
console.log('start');
readFile('./content/first.txt', 'utf-8', (err, result) => {
	if(err) {
		console.log(err);
		return;
	}
	const first = result;

	readFile('./content/second.txt', 'utf-8', (err, result) => {
		if(err) {
			console.log(err);
			return;
		}
		const second = result;

		writeFile(
			'./content/result_async.txt',
			`Here is the result (async):\n${first}\n${second}`,
			// eslint-disable-next-line no-unused-vars
			(err, result) => {
				if(err) {
					console.log(err);
					return;
				}
				console.log('tasks complete');
			}
		);
	});
});

console.log('starting next task');
