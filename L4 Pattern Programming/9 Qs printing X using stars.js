let num = 5;

for (i = 1; i <= num; i++) {
  for (j = 1; j <= num; j++) {
    if (i + j == num+1 || i == j) {
      process.stdout.write("*");
    } else {
      process.stdout.write(" ");
    }
  }
  console.log();
  
}
