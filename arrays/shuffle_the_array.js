// shuffle the first and second half of an array together

var shuffle = function (nums, n) {
  let start = 0;
  let second = n;
  let ansArr = [];
  while (second < nums.length) {
      ansArr.push(nums[start]);
      start++;
      ansArr.push(nums[second]);
      second++;
  }
  return ansArr;
};

let theseNums = [2, 5, 1, 3, 4, 7]; // n = 3
