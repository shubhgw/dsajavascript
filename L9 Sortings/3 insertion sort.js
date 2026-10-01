
// Here we will be putting the taken element into its correct place & thats the main difference between selction sort & insertion sort

let arr = [10, 5, 12, 1, 3];
let n = arr.length;
for (let i = 1; i < n; i++) {
    let key = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j]
        j--
    }
    arr[j + 1] = key
}
console.log(arr);

// I didn't understood this much :( 