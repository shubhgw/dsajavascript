

// leetcode qs no : 169

let nums = [2, 1, 2, 2, 2, 3, 2, 2, 3, 2, 4, 1, 0, 2, 2, 1, 5, 2] // n =18 & n(2)=10
let n = nums.length
let count = 0;

for ( i = 0; i < n; i++) {
    if (count == 0) {
        let element = nums[i]
        count++
    }
    else if (nums[i] == element) count++
    else { count-- }
}
console.log(element)


// Need to learn it in optimal way not bruteforce :) 
