
// print a right angle triangle using * pattern programming 

let num = 5 ;

// Method 1
// for(i=1;i<=num;i++){
//     process.stdout.write(' '.repeat(num-i))
//     process.stdout.write('*'.repeat(i))
//     console.log();
// }

// Method 2
for(i=1;i<=num;i++){
    for(j=num;j>i;j--){
        process.stdout.write(' ');
    }
    for(k=1;k<=i;k++){
        process.stdout.write('*'); // what happens if we put ' *' ??
    }
    console.log()
}