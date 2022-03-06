/*  Author:  Liam Lage
    Date:    05/03/2022

    Source: https://github.com/john-smilga/node-express-course
    Node.js & Express.js - Full Course: 49:50 - https://youtu.be/Oe421EPjeBE

    Description:
    07_mind_grenade
    If this module is required by another module and a function is invoked locally,
    the function will be executed without exporting it from here.
*/

const num_1 = 5;
const num_2 = 10;

function sum() {
	console.log(`The sum is ${num_1 + num_2}`);
}

sum();
