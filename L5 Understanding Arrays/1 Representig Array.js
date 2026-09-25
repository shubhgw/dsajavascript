// Array is a linear data structure in continuous manner
// with perspective of DSA keep values of same type in array
// There is nothing like Fixed array in JS

let ary = []; // This is a dynamic array ....... we havent defined his length :)
ary.push(100);
ary.push("100");
ary.push(true);
ary.push({ 10: "ten" });
console.log(ary);

ary.pop();
console.log(ary);

ary[0] = "zero";
console.log(ary);

// Lets have an example for dynamicness of arrays

let arr = [];
arr[0]='zero';
arr[3]='three'

console.log(arr[2]);

console.log(arr); // <2 empty items> // empty is value itself : undefined 

let arry = new Array(3);

arry[0]='zero'
arry[1]='one'
arry[2]='two'

arry[4]='four'

console.log(arry);
