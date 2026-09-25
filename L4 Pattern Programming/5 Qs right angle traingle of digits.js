
// print a right angle triangle using digits pattern programming 

let num = 10 ;

for(i=1;i<=num;i++){
    for(j=1;j<=i;j++){
        process.stdout.write(`${j}`); // why write(j) is not working directly ??
        // process.stdout.write(j+'')
    }
    console.log();
}