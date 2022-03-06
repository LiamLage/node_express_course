/*  Author:  Liam Lage
    Date:    06/03/2022

    Documentation: https://nodejs.org/dist/latest-v16.x/docs/api/path.html

    Source: https://github.com/john-smilga/node-express-course
    Node.js & Express.js - Full Course: 1:04:13 - https://youtu.be/Oe421EPjeBE

    Description:
    09_path
*/

const path = require('path');

console.log(path.sep);  // The platform specific path separator

// Join arguments together into a normalized file path
const file_path = path.join('/content', 'subfolder', 'test.txt');
console.log(file_path);

/* The last portion of the path, often used to extract the file name from
	a fully qualified path */
const base = path.basename(file_path);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
