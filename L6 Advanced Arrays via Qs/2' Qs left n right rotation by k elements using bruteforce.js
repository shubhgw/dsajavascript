
// is it hard for u shubh ;(
// rotation from left by k elements is nothing but the k times left rotation of 1 element

let prompt = require('prompt-sync')();
let givenArray = [1, 2, 3, 4, 5];
let k = prompt("Give the value of k : ")
k = k % givenArray.length;

for (i = 1; i <= k; i++) {
    for (j = 0; j < givenArray.length - 1; j++) {
        [givenArray[j], givenArray[j + 1]] = [givenArray[j + 1], givenArray[j]]
    }
}

console.log(`rotation by ${k}`);
console.log(givenArray); // output should be : [3,4,5,1,2]
