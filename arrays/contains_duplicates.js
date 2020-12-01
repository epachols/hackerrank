// https://leetcode.com/problems/contains-duplicate/submissions/

var containsDuplicate = function(nums) {
    if (nums.length === 0) return false;
    let numset = new Set(nums);
    
    return numset.size === nums.length ? false : true;
};

// got this wrong twice because i was saying set.size