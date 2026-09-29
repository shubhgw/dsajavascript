
// leetcode qs no : 53

let nums = [-21];

// if (nums.length == 1) return nums[0]
// let maxSum = -Infinity;
// let sum = 0
// for (let i = 0; i < nums.length; i++) {
//     sum = sum + nums[i]
//     if (sum > maxSum) maxSum = sum
//     if (sum < 0) sum = 0
// }
// if (maxSum == -Infinity || sum < 0) return sum
// else return maxSum

// Write the code of kadanes algorithm : below 

var maxSubArray = function (nums) {
    let max = -Infinity;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        max = Math.max(max, sum)
        if (sum < 0) sum = 0;
    }
    return max;
};

console.log(maxSubArray(nums));
