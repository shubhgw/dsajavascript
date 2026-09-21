
// letz calculate the factorial guyz !

let n = prompt("Enter number.")
console.log("The number is : " + n + " Type of n is : " + typeof n)

if (isNaN(n) || n === null || n.trim()=='' || n<0) {
  console.log("invalid");
}
else{
  console.log("Valid number for factorial.")
  let fact = 1 ;
  for(i=1;i<=n;i++){
    fact = fact*i
  }
  console.log(fact);
  
}