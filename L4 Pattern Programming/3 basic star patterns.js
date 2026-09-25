// process.stdout.write("*\n")
// process.stdout.write("*")
// process.stdout.write("*")
// process.stdout.write("*")

let prompt = require("prompt-sync")();

let a = prompt("Enter number of times * to be printed : ");
for (i = 1; i <= a; i++) {
  for (j = 1; j <= a; j++) {
    process.stdout.write("*");
  }
  console.log();
  
}
