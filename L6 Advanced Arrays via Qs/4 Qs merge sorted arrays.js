
let array1 = [1, 2, 5, 9];
let array2 = [3, 7, 10, 23, 25, 90];
let temp = [];

// cant we concat & sort the final array ?

let i = 0;
let j = 0;
while (i < array1.length && j < array2.length) {
    if (array1[i] > array2[j]) {
        temp.push(array2[j])
        j++
    }
    else {
        temp.push(array1[i])
        i++
    }
}

while (i < array1.length) {
    temp.push(array1[i]);
    i++
}

while (j < array2.length) {
    temp.push(array2[j]);
    j++
}

console.log(temp);

// Now solve leetcode qs no 88 : merge sorted arrays