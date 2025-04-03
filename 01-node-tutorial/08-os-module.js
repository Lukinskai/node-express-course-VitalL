


const os = require('os');

// info about current user
const user = os.userInfo();
console.log('info about current user:\n', user);


const machine = os.mashine();
console.log('machine type:', machine);



const freeMem = os.freemem();
console.log('free memory:', freeMem);
