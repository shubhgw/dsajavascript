
// select ith element of the array then go through the array & select smallest element & just swap it with the ith selected element

let arr = [10, 5, 1, 12, 3]

for (i = 0; i < arr.length - 1; i++) {
    let tri = i;
    for (j = i + 1; j < arr.length; j++) {
        if (arr[tri] > arr[j]) {
            tri = j
        }
    }

    if (tri !== i) {
        [arr[i], arr[tri]] = [arr[tri], arr[i]]
    }
    console.log(arr)
}


console.log(arr)