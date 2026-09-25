
// print a right angle triangle using * pattern programming 

let num = 10 ;

// Method 1
for(i=1;i<num;i++){
    console.log('*'.repeat(i))
}

// Method 2
for(i=1;i<=num;i++){
    for(j=1;j<=i;j++){
        process.stdout.write('*');
    }
    console.log()
}