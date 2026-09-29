
let givenArray = [1,2,3,4,5] // write a code to convert this array in [5,1,2,3,4]

// Method 1
// let f = givenArray.pop()
// givenArray.unshift(f)

// Method 2 : using pointers & loops
for(i=givenArray.length-1;i>0;i--){
    [givenArray[i],givenArray[i-1]] = [givenArray[i-1],givenArray[i]]
}

console.log(givenArray);
