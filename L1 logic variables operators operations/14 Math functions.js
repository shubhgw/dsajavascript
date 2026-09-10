
console.log(Math.round(10.3))
console.log(Math.round("10.3"))

console.log(Math.floor(10.3)); // floor/base
console.log(Math.ceil(10.3));  // ceil/chhat
console.log(Math.trunc(10.3)); // trucet the decimal part without any change on previous
console.log(Math.pow(2,5)); // 2**5 POWer
console.log(Math.sqrt(4)); // takes square root of 4 
console.log(Math.cbrt(27)); // takes cube root of 27
console.log(Math.abs(-23)); // gives absolute value regardless of its sign
console.log(Math.max(1,2,34,52,23)); // gives maximum value from given elements
console.log(Math.min(1,2,34,52,23)); // gives minimum value from given elements

console.log(Math.random()); // gives a random value between 0 to 1 : [0,1]
// how to generate random numebers in a specific range
console.log(Math.random()*9000)
// create a four digits otp generator
console.log(Math.trunc(Math.random()*9000+999));

console.log(20.233334.toFixed(3)); // gives digits till 3 decimal places only
