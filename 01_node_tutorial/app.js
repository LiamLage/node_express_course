/*  Author:  Liam Lage
    Date:    06/03/2022

    Documentation: 

    Source: https://github.com/john-smilga/node-express-course
    Node.js & Express.js - Full Course: 1:45:57 - https://youtu.be/Oe421EPjeBE

    Description:
    
*/

// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <package>
// npm install <package>

// global dependency - use it in any project
// npm install -g <package>

// package.json - manifest file (stores important info about the project/package)
// manual approach (create package.json in the root dir, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (default everything)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const new_items = _.flattenDeep(items);
console.log(new_items);
