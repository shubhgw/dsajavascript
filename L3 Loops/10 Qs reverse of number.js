


// why 0123450 is not allowed to declare ??

let number = 1234506;
let reverseNumber = '';

// Method 1
// while(number>0){
//     reverseNumber += String(number%10);
//     number = Math.floor(number/10);
// }

// Method 2
var rev = 0;
while(number>0){
    var rem = number%10 ;
    rev = rev*10 + rem
    number = Math.floor(number/10)
}

console.log(`Reverse of number is : ${rev}`);