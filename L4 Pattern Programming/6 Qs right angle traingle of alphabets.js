
// print a right angle triangle using ASCII & alphabets pattern programming 

// use ascii for getting alphabets using numbers :) 
// A=65 & then goes for increment 

let num = 10 ;

for(i=1;i<=num;i++){
    let ascii = 65;
    for(j=1;j<=i;j++){
        process.stdout.write(String.fromCharCode(ascii));
        ascii++
    }
    console.log();
}