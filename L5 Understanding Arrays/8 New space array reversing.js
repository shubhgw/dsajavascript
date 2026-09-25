
let givenArray = [1, 2, 3, 4, 5, 6];
let initialGivenArrayLength = givenArray.length
let spaceArray = new Array(givenArray.length);


// Method 1 : using 
for(i=0;i<initialGivenArrayLength;i++){
    // spaceArray.push(givenArray.shift())
    spaceArray[i]=givenArray.pop()
}

// Method 2 : swapping using i & j in same array
let i = 0;
let j = givenArray.length-1;
for(k=0;k<initialGivenArrayLength/2;k++){
    [givenArray[i],givenArray[j]]=[givenArray[j],givenArray[i]]
    i++;
    j--;
}

console.log(givenArray);
console.log(spaceArray);
