// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)


const names = require('./04-names.js');
const sayHi = require('./05-utils.js');
const data = require('./06-alternative-flavor.js');
require('./07-mind-grenade.js');


console.log();
console.log(names);
console.log(data);
console.log();


sayHi('sarah');
sayHi(names.john);
sayHi(names.peter);
console.log();

data.lukasFamNames.forEach(name =>sayHi(name));
console.log();

sayHi(data.person.name);

