

let bin = [];
let things = ['t1','t2','t3','t4','t5']
let initialThingsLength = things.length

// console.log(bin);
// console.log(things);

for(i=0;i<initialThingsLength;i++){
    let k = things.shift(i)
    bin[i]=k
}

console.log(bin);
console.log(things);
