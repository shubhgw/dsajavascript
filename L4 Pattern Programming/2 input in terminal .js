
// we need to download a package called : prompt sync using npm 
// then import the package as a function

let prompt = require('prompt-sync')() ;


let inp = prompt("Enter a number : ");
// console.log(inp5)
process.stdout.write(inp)