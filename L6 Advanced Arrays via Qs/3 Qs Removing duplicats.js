
// Go on leetcode qs 26

let nums = [1, 1, 2];

let j = 1;
for (i = 0; i < nums.length - 1; i++) {
    if (nums[i] != nums[i + 1]) {
        nums[j] = nums[i + 1]
        j++
    }
}

console.log(j, nums)