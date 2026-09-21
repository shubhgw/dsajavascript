

// u r given a Natural number & u have to calculate sum of all the digits of number using while loop !

let number = 1237584;
let sumOfDigits = 0;

// Method 1
// number = String(number) ;
// let i = 0;
// while(i<number.length){
//     sumOfDigits+=Number(number[i]);
//     i++
// }

/*
Method 2 : division | floor | remainder - use case

1234%10 -> gives 4 which is last digit add this in sum
math.floor(1234/10) -> gives 123

123%10 -> gives 3 which is last digit add this in sum
math.floor(123/10) -> gives 12

12%10 -> gives 2 which is last digit add this in sum
math.floor(12/10) -> gives 1

1%10 -> gives 1 which is last digit add this in sum
math.floor(1/10) -> gives 0

r u getting my point :]
*/

while(number>0){
    sumOfDigits += (number%10);
    number = Math.floor(number/10);
}

console.log(`Sum of digits is : ${sumOfDigits}`);