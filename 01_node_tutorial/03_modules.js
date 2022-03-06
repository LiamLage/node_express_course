/*  Author:  Liam Lage
    Date:    05/03/2022

    Description:
    03_modules
    Node.js & Express.js - Full Course: 29:34 - https://youtu.be/Oe421EPjeBE

    CommonJS, every file is a module (by default)
    Modules - Encapsulated Code (only share minimum)
*/

const names = require('./04_names_module');
const say_hi = require('./05_utils');
// eslint-disable-next-line no-unused-vars
const data = require('./06_alternative_export');
require('./07_mind_grenade');   /* The function sum() is invoked inside the 07_mind_grenade module
                                   it will run here even though it is not exported from that module */

say_hi('susan');
say_hi(names.john);
say_hi(names.peter);
    