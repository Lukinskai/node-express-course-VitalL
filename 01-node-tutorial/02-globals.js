// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed


const myVar = process.env.MY_VAR;


console.log('__dirname:',__dirname);
console.log('__filename:',__filename);
console.log('MY_VAR:', myVar);