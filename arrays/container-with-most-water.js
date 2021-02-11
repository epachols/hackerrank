// https://leetcode.com/problems/container-with-most-water/

// brute force
var maxArea = function (height) {
  let currentMax = 0;
  let left = 0;

  while (left < height.length - 1) {
    let right = height.length - 1;

    while (right > left) {
      let maxHeight = Math.min(height[left], height[right]);
      let width = right - left;
      let currentArea = width * maxHeight;
      if (currentArea > currentMax) {
        currentMax = currentArea;
      }
      right--;
    }

    left++;
    right = height.length - 1;
  }
  return currentMax;
};

// two pointers
const maxArea2 = (height) => {
  let max = 0;
  let l = 0;
  let r = height.length - 1;
  while (l < r) {
    max = Math.max(max, Math.min(height[l], height[r]) * (r - l));
    if (height[l] < height[r]) l++;
    else r--;
  }
  return max;
};

// maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
maxArea([1, 1]);
