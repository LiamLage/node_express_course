/*  Author:  Liam Lage
    Date:    06/03/2022

    Documentation: https://nodejs.org/dist/latest-v16.x/docs/api/fs.html

    Source: https://github.com/john-smilga/node-express-course
    Node.js & Express.js - Full Course: 1:10:06 - https://youtu.be/Oe421EPjeBE

    Description:
    10_fs_synchronous
	A synchronous implementation of read & write file system operations
*/

// Below is an example of destructuring the required module
const {readFileSync, writeFileSync} = require('fs');

// Read files
console.log('reading files');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

// console.log(first, second);

/* Method to create a new file
   If the file doesn't exist, one will be created. If it does exist,
   the file will be overwritten. */
console.log('writing file');
writeFileSync(
	'./content/result_sync.txt', 
	`Here is the result:\n${first}\n${second}`,
	{flag: 'a'}	/* If we pass a flag object 'a', the content will be appended,
				   not overwritten */
);

console.log('tasks complete');
console.log('starting next task');
