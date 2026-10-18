

// hope you know the sieve eritos therom on how to eliminate numbers :

let n = 30;
let arr = new Array(n + 1).fill(true)

for (i = 2; i <= Math.sqrt(n); i++) {
    if (arr[i] == true) {
        for (j = i * i; j < n; j += i) {
            arr[j] = false
        }
    }
}

for (i = 2; i < n; i++) {
    if (arr[i] == true) console.log([i] + ' prime')
    else console.log([i] + ' not prime')
}