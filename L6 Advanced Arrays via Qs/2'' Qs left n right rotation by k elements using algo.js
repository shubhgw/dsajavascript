
// is it hard for u shubh ;(
// rotation from left by k elements is nothing but the k times left rotation of 1 element

let prompt = require('prompt-sync')();
let givenArray = [1, 2, 3, 4, 5];
let tempArray = new Array(givenArray.length);
let k = prompt("Give the value of k : ")
k = k % givenArray.length;

for (i = 0; i < givenArray.length; i++) {
    tempArray[i] = givenArray[(i+k)%givenArray.length] // Is this tuff ?
}

// now do that for right rotation by k elements

console.log(`rotation by ${k}`);
console.log(tempArray); // output should be : [3,4,5,1,2]
