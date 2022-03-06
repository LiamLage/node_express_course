/* eslint-disable linebreak-style */
/*  Author:  Liam Lage
	Date:    05/03/2022

	Source: https://github.com/john-smilga/node-express-course
	Node.js & Express.js - Full Course - https://youtu.be/Oe421EPjeBE

	Description:
	05_utils
	Exports the function say_hi() to be used in 03_modules
*/

const say_hi = (name) => {
	console.log(`Hello there ${name}.`);
};

module.exports = say_hi;
