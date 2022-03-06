/*  Author:  Liam Lage
    Date:    05/03/2022

    Source: https://github.com/john-smilga/node-express-course
    Node.js & Express.js - Full Course: 20:27 - https://youtu.be/Oe421EPjeBE

    Description:
    02_globals
    A few examples of global
*/

// GLOBALS
// __dirname  - path to cwd
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname);
console.log(__filename);
console.log(require);
console.log(module);
console.log(process);


// setInterval(() => {
//     console.log('hello world');
// }, 1000)

// setTimeout(() => {
//     console.log('hello world');
// }, 5000)
