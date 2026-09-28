
let givenArray = [1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0];
let givenArrayLength = givenArray.length
// console.log(givenArray.sort()); // Mat kar lala mat kr

// Method 1
// let zerosArray = [];
// let onesArray = [];
// for (i = 0; i < givenArrayLength; i++) {
//     if (givenArray[i] == 0) {
//         zerosArray.push(givenArray[i])
//     }
//     else {
//         onesArray.push(givenArray[i])
//     }
// }

// let sortedArray = zerosArray.concat(onesArray);
// console.log(sortedArray);

// Method 2 : in-place

// 2 pointers i & j from 0 ; if i = 0 just swap them & do i++,j++ , if i=1;i++ only ( samzo bhai thodasa :( )

let j = 0;
for (i = 0; i < givenArrayLength; i++) {
    if(givenArray[i]==0){
        [givenArray[i],givenArray[j]]=[givenArray[j],givenArray[i]] // just swapping them
        j++
    }
}

console.log(givenArray);
