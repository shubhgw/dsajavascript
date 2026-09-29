// leetcode qs 75

let nums = [2, 0, 2, 1, 1, 0];

// console.log(nums.sort()) : isse nhi krna lala

let j = 0;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
        j++
    }
}

let k = j;
for (let i = j; i < nums.length; i++) {
    if (nums[i] == 1) {
        [nums[i], nums[k]] = [nums[k], nums[i]]
        k++
    }
}

// what about sirs method :)

console.log(nums);
