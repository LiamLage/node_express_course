/*  Author:  Liam Lage
    Date:    05/03/2022

    Source: https://github.com/john-smilga/node-express-course
    Node.js & Express.js - Full Course: 45:32 - https://youtu.be/Oe421EPjeBE
    
    Description:
    06_alternative_export
    Shows alternative methods of exporting various data types & objects
*/

module.exports.itemsitems = ['item_1', 'item_2'];

const person = {
	name: 'Bob',
};

module.exports.single_person = person;
