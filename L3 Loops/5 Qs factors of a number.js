// calculating factors of a given number :

let n = prompt("Enter number.");
console.log("The number is : " + n + " Type of n is : " + typeof n);

if (isNaN(n) || n === null || n.trim() == "") {
  console.log("invalid");
} else {
  let factors = [];
  // let take ex; of 32 its half is 16 & after 16 no number is factor of 32 so why to calculate even
  for (i = 1; i <= n / 2; i++) {
    if (n % i == 0) {
      factors.push(i);
    } else {
    }
  }
  factors.push(Number(n));
  console.log(factors);
}
