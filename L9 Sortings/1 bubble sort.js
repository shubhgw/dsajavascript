

// if the bubble element is greater than element next to it then just swap these two numbers otherwise pass the  bubble to the next element

// this process is done in different phases , (n-1) phases

// learn the thought process bruh !

let arr = [10, 5, 1, 12, 3, 12]
let n = arr.length

for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) { [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] }
        else b = arr[j]
        console.log(arr)
    }
}

console.log(arr)