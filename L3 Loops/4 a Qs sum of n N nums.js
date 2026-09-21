// sum of first n natural numbers :

let n = prompt("Enter number.")
console.log("The number is : " + n + " Type of n is : " + typeof n)

if (isNaN(n) || n === null || n.trim()=='' || n<0) {
  console.log("invalid");
}
else{
  console.log("Valid number for sum.")
  let sum = 0 ;
  for(i=1;i<=n;i++){
    sum += i
  }
  console.log(sum);
  
}