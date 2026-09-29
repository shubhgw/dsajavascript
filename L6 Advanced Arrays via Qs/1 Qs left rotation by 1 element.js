
// First understand what is meant by rotation & how to rotate :)

let givenArray = [1,2,3,4,5] // write a code to convert this array in [2,3,4,5,1]

// Method 1
let f = givenArray.shift()
givenArray.push(f)

// Method 2 : using pointers & loops
for(i=0;i<givenArray.length-1;i++){
    [givenArray[i],givenArray[i+1]] = [givenArray[i+1],givenArray[i]]
}

console.log(givenArray);
