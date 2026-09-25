
// print a right angle triangle using * pattern programming 

let num = 10 ;

// Method 1
// for(i=0;i<num;i++){
//     console.log('*'.repeat(num-i))
// }

// Method 2
for(i=1;i<=num;i++){
    for(j=num;j>=i;j--){
        process.stdout.write('*');
    }
    console.log()
}