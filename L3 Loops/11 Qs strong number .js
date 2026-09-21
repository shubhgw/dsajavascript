// wtf is strong number bruh ?>?

// ex; 145 is a strong number because 1! + 4! + 5! = 145

let num = prompt("Enter a +ve number : ");

function factorial(n) {
  let fact = 1;
  if (n == 0 || n == 1) {
    return fact;
  } else if (n > 1) {
    for (i = 1; i <= n; i++) {
      fact = fact * i;
    }
    return fact;
  } else {
    console.log("faaaaaaa");
  }
}

let factorialSum = 0;
let j = 0;
while (j < num.length) {
  factorialSum+=factorial(Number(num[j]))
  j++
}

console.log(num==factorialSum)