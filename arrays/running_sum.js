// this problem is from leetcode https://leetcode.com/problems/running-sum-of-1d-array/

var runningSum = function(nums) {
let sum = 0;
for (let i=0; i<nums.length; i++) {
    sum += nums[i];
    nums[i] = sum;
}
console.log(nums);
}

runningSum([1,2,3,4])