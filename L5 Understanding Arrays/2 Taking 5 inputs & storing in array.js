

let prompt = require('prompt-sync')();
let ary = [];
for(i=1;i<=5;i++){
    let value = prompt(`Enter the value at ${i} index : `)
    ary.push(value)
}

console.log(ary);
