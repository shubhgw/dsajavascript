
let givenArray = [1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0];
let givenArrayLength = givenArray.length
// console.log(givenArray.sort()); // Mat kar lala mat kr

// Method 1
// let zerosArray = [];
// let onesArray = [];
// for(i=0;i<givenArrayLength;i++){
//     if(givenArray[i]==0){
//         zerosArray.push(givenArray[i])
//     }
//     else{
//         onesArray.push(givenArray[i])
//     }
// }

// let sortedArray = zerosArray.concat(onesArray);
// console.log(sortedArray);

// Method 2

let j = 0;
for(i=0;i<givenArrayLength;i++){
    if(givenArray[i]==0){
        continue
    }
    else{
        j = givenArray[i]
        givenArray[i]=0;
        j++
    }
}

console.log(givenArray);
