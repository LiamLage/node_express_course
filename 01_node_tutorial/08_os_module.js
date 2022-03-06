/*  Author:  Liam Lage
    Date:    05/03/2022

    Source: https://github.com/john-smilga/node-express-course
    Node.js & Express.js - Full Course: 56:31 - https://youtu.be/Oe421EPjeBE
    
    Documentation: https://nodejs.org/dist/latest-v16.x/docs/api/os.html

    Description:
    08_os
*/

const os = require('os');

// Info about current user
const user = os.userInfo();
console.log(user);


// Method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()}s`);


const current_os = {
	name:os.type(),
	release:os.release(),
	total_mem:os.totalmem(),
	free_mem:os.freemem(),
};

console.log(current_os);
