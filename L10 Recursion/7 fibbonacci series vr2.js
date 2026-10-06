
// Definition : the Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, typically starting with 0 and 1 ( 0,1,1,2,3,5,8,13,21,34,…).  Mathematically, it is defined by the recurrence relation Fn​ = Fn−1​ + Fn−2 ​ , with base cases F0 = 0 and F1 ​= 1.

// n is the index of number in fibonacci serires 

let n = 10;

let f1 = 0;
let f2 = 1;

let sum = f1+f2

for (let i = 0; i < n - 2; i++) {
    let f3 = f1 + f2
    f1 = f2
    f2 = f3
    sum = sum+f3
}

console.log(sum)