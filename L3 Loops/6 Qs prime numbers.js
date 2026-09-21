// lets talk about prime numbers :)

// Prime number: divisible by 1 & itself

let n = prompt(
  "⭐Enter number to check : \n✅Prime number is Natural number greater than 1 \n✅One is neither Prime nor Composite \n✅bcoz prime number must have two distinct divisors",
);
console.log("The number is : " + n + " Type of n is : " + typeof n);

if (isNaN(n) || n === null || n.trim() == "" || n <= 1) {
  console.log("invalid");
} else {
    // Method 1
  let isPrime = true;
  for (i = 2; i <= n / 2; i++) {
    if (n % i == 0) {
      console.log("Not a prime number");
      isPrime = false;
      break;
    }
  }
  console.log(`Is ${n} prime : ` + isPrime);
}

// if a number is not divisible from 2 to its sqr root then it is not divisible even after its sqr root :) ........ hence its a prime number 


// Method 2

function isPrimeNum(num){
    if(num<=1) return false
    if(num==2) return true
    if(num%2 == 0) return false
    
    for(i=3;i<Math.floor(Math.sqrt(num));i+=2){
        if (num%i==0) {
            return false
            break;
        }
    }
    return true
}

console.log(isPrimeNum(n));
