

let a = 11, b = 22;
let c = a+b + a++ + b++ + ++a + ++b;

console.log( "a = " + a ); // 12
console.log( "b = " + b ); // 23
console.log( "c = " + c ); // 103
