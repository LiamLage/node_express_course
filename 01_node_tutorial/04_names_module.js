/*  Author:  Liam Lage
    Date:    05/03/2022

    Source: https://github.com/john-smilga/node-express-course
    Node.js & Express.js - Full Course - https://youtu.be/Oe421EPjeBE

    Description:
    04_names_modules
    Holds name values for 03_modules
*/

// local
// eslint-disable-next-line no-unused-vars
const secret = 'SUPER SECRET';
// share
const john = 'John';
const peter = 'Peter';

// console.log(module);

module.exports = {john, peter};     // We export the names as an object
